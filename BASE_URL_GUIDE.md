# Base URL Configuration Guide

## Quick Start

The base URL is now centrally managed! You can easily switch between environments.

## How to Change the Base URL

### Option 1: Using `.env.local` (Recommended)

1. Open `.env.local` file
2. Change the `NEXT_PUBLIC_SITE_URL` value:

```bash
# For localhost
NEXT_PUBLIC_SITE_URL=http://localhost:3000

# For Netlify preview
NEXT_PUBLIC_SITE_URL=https://notelyvoicepreview.netlify.app

# For production
NEXT_PUBLIC_SITE_URL=https://notelyvoice.com
```

3. Restart your dev server: `npm run dev`

### Option 2: Auto-detection (No Configuration Needed)

If you don't set `NEXT_PUBLIC_SITE_URL`, the system automatically detects:

- **Development**: Uses `http://localhost:3000`
- **Netlify**: Automatically uses the preview URL
- **Production**: Falls back to `https://notelyvoice.com`

## What Uses the Base URL?

The base URL is used throughout your site for SEO:

- ✅ Sitemap (`/sitemap.xml`)
- ✅ Robots.txt (`/robots.txt`)
- ✅ Open Graph tags (social sharing)
- ✅ Canonical URLs (for each page)
- ✅ Structured data (JSON-LD schemas)
- ✅ All metadata

## Testing Different Environments

### Test on Localhost:
```bash
# .env.local
NEXT_PUBLIC_SITE_URL=http://localhost:3000

# Start dev server
npm run dev
```

### Test on Netlify Preview:
```bash
# .env.local
NEXT_PUBLIC_SITE_URL=https://notelyvoicepreview.netlify.app

# Build and test
npm run build
npm start
```

### Test for Production:
```bash
# .env.local
NEXT_PUBLIC_SITE_URL=https://notelyvoice.com

# Build and test
npm run build
npm start
```

## Netlify Deployment

For Netlify, you can set environment variables in the Netlify dashboard:

1. Go to: Site settings → Environment variables
2. Add: `NEXT_PUBLIC_SITE_URL` = `https://notelyvoice.com` (for production)
3. For preview deployments, Netlify auto-sets `URL` which is detected automatically

## Verifying the Current URL

To check which URL is being used:

```bash
# In development
npm run dev
# Check the terminal output or browser console
```

Or add this temporarily to any page:
```tsx
console.log('Current base URL:', siteConfig.url);
```

## File Locations

All base URL configuration is managed in:

- **Main Config**: `lib/config.ts`
- **Environment**: `.env.local` (gitignored)

## Important Notes

- `.env.local` is gitignored - it's only for your local machine
- Changes to `.env.local` require restarting the dev server
- Environment variables starting with `NEXT_PUBLIC_` are available in the browser
- Netlify and Vercel auto-detect deployment URLs

## Production Checklist

Before deploying to production domain:

- [ ] Update `.env.local` to production URL
- [ ] Build and test locally: `npm run build && npm start`
- [ ] Check sitemap: `http://localhost:3000/sitemap.xml`
- [ ] Check robots: `http://localhost:3000/robots.txt`
- [ ] Verify Open Graph tags with [OpenGraph.xyz](https://www.opengraph.xyz/)
- [ ] Test social sharing preview
- [ ] Update Netlify environment variables (if applicable)

## Troubleshooting

**Issue**: Changes to `.env.local` not taking effect
- **Solution**: Restart dev server (`Ctrl+C`, then `npm run dev`)

**Issue**: Wrong URL in production
- **Solution**: Check Netlify environment variables or remove `.env.local` to use auto-detection

**Issue**: Sitemap shows localhost in production
- **Solution**: Ensure `NEXT_PUBLIC_SITE_URL` is set correctly in deployment platform

---

**Current Setup**: Using `https://notelyvoicepreview.netlify.app`
**To switch**: Edit `.env.local` and restart server
