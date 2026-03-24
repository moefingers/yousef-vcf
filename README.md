# yousef-vcf

Multilingual VCF contact card landing page for Youssef Elmrabit (Electroplanet), served via GitHub Pages.

## Links

- **Landing page:** https://moefingers.github.io/yousef-vcf/
- **Direct download:** https://moefingers.github.io/yousef-vcf/yousef.vcf

## Features

- Dark theme with glass card effect and diagonal red gradient
- Rotating 3D coin animation (Electroplanet logo + Youssef's photo)
- Auto language detection (EN/FR/AR) with RTL support
- Card flip to reveal QR code on back
- Copy-to-clipboard, WhatsApp link, Web Share API, Google Maps link
- Localized VCF downloads per language

## Testing Languages

Open browser DevTools console (`F12`) and run:

```js
applyLang('en')  // English
applyLang('fr')  // French
applyLang('ar')  // Arabic (RTL)
```

## Structure

```
public/
  index.html                  Landing page
  electroplanet-logo.svg      E circle logo (used in coin)
  yousef.vcf                  Universal fallback VCF (all 3 languages)
  yousef-en.vcf               English VCF
  yousef-fr.vcf               French VCF
  yousef-ar.vcf               Arabic VCF
  *.webp                      Converted images

assets/
  *.png, *.jpeg               Source images
  filled*.svg                 Electroplanet logo+wordmark SVG variants

scripts/
  convert-images.js           Sharp-based image converter (PNG/JPEG → WebP)
```

## Deployment

Deployed automatically via GitHub Actions on push to `main` or `shepherd`. Source is set to **GitHub Actions** in repo Settings > Pages.
