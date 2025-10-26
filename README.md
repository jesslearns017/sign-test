# SignBridge Landing Page

A modern, responsive landing page for SignBridge - an enterprise-grade communication platform for Deaf and Hard-of-Hearing patients in healthcare.

## Features

- **Hero Section**: Compelling headline with animated transcription demo
- **Problem/Solution**: Three-column grid showcasing the critical healthcare communication problems
- **Features**: Four detailed feature sections with visual mockups
- **Final CTA**: Strong call-to-action with trust elements
- **Responsive Design**: Mobile-first approach, works on all devices
- **Brand Compliance**: Uses official SignBridge brand colors and typography

## Brand Colors Used

Based on the **Deaf Flag** - honoring the Deaf and Hard-of-Hearing community:

- **Deaf Blue**: `#0055CC` - Trust, Stability, Deaf Community
- **Turquoise**: `#00BCD4` - Clarity, Communication, Accessibility  
- **Deaf Yellow**: `#FFD700` - Light, Life, Enlightenment (used for accents)
- **Dark Navy**: `#001F3F` - Professional, Authority
- **White**: `#FFFFFF` - Purity, Clarity

These colors represent Deafhood, sign language, and the global Deaf unity movement.

## Typography

- **Primary Font**: Inter (body text, UI elements)
- **Secondary Font**: DM Serif Display (headlines, emphasis)

## File Structure

```
landing-page/
├── index.html      # Main HTML structure
├── styles.css      # Complete styling with brand colors
├── script.js       # Interactive features and animations
└── README.md       # This file
```

## Getting Started

1. **Open the page**: Simply open `index.html` in a modern web browser
2. **No build process required**: This is a static HTML/CSS/JS page
3. **Customize**: Edit the content in `index.html` to match your specific needs

## Customization Points

### Update CTA Buttons
All "Request Demo" and "Schedule Demo" buttons are ready to connect to your scheduling system. Update the click handlers in `script.js`:

```javascript
// Line 45 in script.js
button.addEventListener('click', function(e) {
    // Add your form/modal logic here
});
```

### Add Analytics
Replace the console.log statements with your analytics provider (Google Analytics, Mixpanel, etc.):

```javascript
// Line 90 in script.js
console.log('SignBridge Landing Page Loaded');
// Replace with: gtag('event', 'page_view');
```

### Update Trust Badges
Add real hospital logos in the hero section by replacing the placeholder image paths in `index.html`.

## Responsive Breakpoints

- **Mobile**: 0-640px
- **Tablet**: 641-1024px
- **Desktop**: 1025px+

## Browser Support

- Chrome (last 2 versions)
- Firefox (last 2 versions)
- Safari (last 2 versions)
- Edge (last 2 versions)

## Performance

- No external dependencies (except Google Fonts)
- Optimized CSS with minimal animations
- Lazy-loaded scroll animations
- Fast initial page load

## Accessibility

- WCAG 2.1 AA compliant color contrast
- Semantic HTML structure
- Keyboard navigation support
- Screen reader friendly

## Next Steps

1. **Add Real Content**: Replace placeholder text with actual hospital testimonials
2. **Connect Forms**: Integrate with your CRM/scheduling system
3. **Add Analytics**: Set up event tracking for CTAs
4. **Optimize Images**: Add real product screenshots and compress them
5. **SEO**: Add meta tags, structured data, and Open Graph tags
6. **Deploy**: Host on your preferred platform (Netlify, Vercel, AWS S3, etc.)

## Based On

This landing page is built according to the specifications in:
- `docs/2_brand.md` - Brand identity and design system
- `docs/3_B2B_LP_Specs.md` - Landing page requirements
- `docs/0_research.md` - Customer research and market data

## License

© 2025 SignBridge. All rights reserved.
