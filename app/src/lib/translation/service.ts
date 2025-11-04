/**
 * Translation Service
 *
 * Integrates with LibreTranslate API for real-time English-Spanish translation
 * in video call captions.
 *
 * Features:
 * - 5-minute caching to reduce API calls
 * - Graceful degradation on failure
 * - Support for custom API keys
 */

interface TranslationResponse {
  translatedText: string
}

interface TranslationCacheEntry {
  text: string
  timestamp: number
}

interface TranslationCache {
  [key: string]: TranslationCacheEntry
}

export class TranslationService {
  private baseUrl: string
  private apiKey: string
  private cache: TranslationCache = {}
  private cacheTimeout = 5 * 60 * 1000 // 5 minutes

  constructor() {
    this.baseUrl = process.env.NEXT_PUBLIC_LIBRETRANSLATE_URL || 'http://localhost:5000'
    this.apiKey = process.env.NEXT_PUBLIC_LIBRETRANSLATE_API_KEY || ''
  }

  /**
   * Translate text from source language to target language
   * @param text Text to translate
   * @param source Source language code (e.g., 'en')
   * @param target Target language code (e.g., 'es')
   * @returns Translated text, or original text if translation fails
   */
  async translate(
    text: string,
    source: string,
    target: string
  ): Promise<string> {
    if (!text || !text.trim()) {
      return text
    }

    // Don't translate if source and target are the same
    if (source === target) {
      return text
    }

    // Check cache first
    const cacheKey = `${source}-${target}-${text}`
    const cached = this.cache[cacheKey]

    if (cached && Date.now() - cached.timestamp < this.cacheTimeout) {
      console.log('Translation cache hit:', cacheKey.substring(0, 50))
      return cached.text
    }

    try {
      const response = await fetch(`${this.baseUrl}/translate`, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          q: text,
          source,
          target,
          format: 'text',
          api_key: this.apiKey,
        }),
      })

      if (!response.ok) {
        const errorBody = await response.json().catch(() => ({
          error: response.statusText,
        }))
        console.error('Translation API error:', response.status, errorBody)
        throw new Error(
          `Translation API Error (${response.status}): ${errorBody.error || 'Unknown error'}`
        )
      }

      const data: TranslationResponse = await response.json()

      // Cache the result
      this.cache[cacheKey] = {
        text: data.translatedText,
        timestamp: Date.now(),
      }

      return data.translatedText
    } catch (error) {
      console.error('Translation failed:', error)
      // Graceful degradation - return original text
      return text
    }
  }

  /**
   * Translate English text to Spanish
   * @param text English text
   * @returns Spanish translation
   */
  async translateToSpanish(text: string): Promise<string> {
    return this.translate(text, 'en', 'es')
  }

  /**
   * Translate Spanish text to English
   * @param text Spanish text
   * @returns English translation
   */
  async translateToEnglish(text: string): Promise<string> {
    return this.translate(text, 'es', 'en')
  }

  /**
   * Clear the translation cache
   */
  clearCache(): void {
    this.cache = {}
  }

  /**
   * Get cache statistics
   */
  getCacheStats(): { size: number; entries: string[] } {
    const entries = Object.keys(this.cache)
    return {
      size: entries.length,
      entries: entries.map((key) => key.substring(0, 50)),
    }
  }
}

// Singleton instance
export const translationService = new TranslationService()
