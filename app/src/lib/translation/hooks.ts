/**
 * Translation Hooks
 *
 * React hooks for integrating real-time translation into components.
 *
 * Features:
 * - Debounced translation to reduce API calls
 * - Loading and error states
 * - Easy integration with caption components
 */

'use client'

import { useState, useEffect } from 'react'
import { translationService } from './service'

interface TranslationOptions {
  enabled: boolean
  sourceLanguage: string
  targetLanguage: string
  debounceMs?: number
}

interface TranslationResult {
  translatedText: string
  isTranslating: boolean
  error: string | null
}

/**
 * Hook for translating text with debouncing
 *
 * @param text Text to translate
 * @param options Translation options
 * @returns Translation result with loading and error states
 */
export function useTranslation(
  text: string,
  options: TranslationOptions
): TranslationResult {
  const [translatedText, setTranslatedText] = useState('')
  const [isTranslating, setIsTranslating] = useState(false)
  const [error, setError] = useState<string | null>(null)

  const {
    enabled,
    sourceLanguage,
    targetLanguage,
    debounceMs = 300,
  } = options

  useEffect(() => {
    // Reset if disabled or no text
    if (!enabled || !text || !text.trim()) {
      setTranslatedText('')
      setIsTranslating(false)
      setError(null)
      return
    }

    // Don't translate if source and target are the same
    if (sourceLanguage === targetLanguage) {
      setTranslatedText(text)
      setIsTranslating(false)
      setError(null)
      return
    }

    setIsTranslating(true)
    setError(null)

    // Debounce translation requests
    const timeoutId = setTimeout(async () => {
      try {
        const translated = await translationService.translate(
          text,
          sourceLanguage,
          targetLanguage
        )
        setTranslatedText(translated)
      } catch (err) {
        const errorMessage =
          err instanceof Error ? err.message : 'Translation failed'
        setError(errorMessage)
        setTranslatedText(text) // Fallback to original text
      } finally {
        setIsTranslating(false)
      }
    }, debounceMs)

    return () => {
      clearTimeout(timeoutId)
    }
  }, [text, enabled, sourceLanguage, targetLanguage, debounceMs])

  return {
    translatedText,
    isTranslating,
    error,
  }
}

/**
 * Hook for translating English text to Spanish
 *
 * @param englishText English text to translate
 * @param enabled Whether translation is enabled
 * @returns Spanish translation with loading state
 */
export function useSpanishTranslation(
  englishText: string,
  enabled: boolean = true
): TranslationResult {
  return useTranslation(englishText, {
    enabled,
    sourceLanguage: 'en',
    targetLanguage: 'es',
  })
}

/**
 * Hook for translating Spanish text to English
 *
 * @param spanishText Spanish text to translate
 * @param enabled Whether translation is enabled
 * @returns English translation with loading state
 */
export function useEnglishTranslation(
  spanishText: string,
  enabled: boolean = true
): TranslationResult {
  return useTranslation(spanishText, {
    enabled,
    sourceLanguage: 'es',
    targetLanguage: 'en',
  })
}
