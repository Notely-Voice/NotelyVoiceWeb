# SEO Quick Reference Card 🚀

## 🔗 Important URLs
- **Sitemap**: https://notelyvoice.com/sitemap.xml
- **Robots**: https://notelyvoice.com/robots.txt
- **Google Search Console**: https://search.google.com/search-console
- **Bing Webmaster**: https://www.bing.com/webmasters
- **PageSpeed Insights**: https://pagespeed.web.dev/

## ✅ Week 1 Checklist (MUST DO)
- [ ] Submit site to Google Search Console
- [ ] Submit site to Bing Webmaster Tools
- [ ] Submit sitemap to both
- [ ] Get verification codes
- [ ] Add verification codes to layout.tsx

## 🎨 OG Image Specs
- **Size**: 1200 x 630 pixels
- **Format**: PNG or JPG
- **Include**: Logo + Screenshot + Tagline
- **Replace**: /notely_voice_logo_white.png

## 📊 Target Keywords (Primary)
1. voice to text
2. speech to text transcription
3. on-device transcription
4. private voice notes app
5. offline transcription

## 🔍 Where to Check SEO

### Free Tools:
- **Search Console**: Check indexing, keywords, errors
- **Lighthouse**: (Chrome DevTools) Overall site health
- **PageSpeed**: Site speed & Core Web Vitals
- **Mobile-Friendly Test**: Mobile optimization

### Metrics to Watch:
- **Impressions**: How many see you in search
- **Clicks**: How many click through
- **CTR**: Click-through rate (aim for 2-5%)
- **Position**: Average ranking (aim for top 10)

## 📝 Quick Updates Guide

### To Update Homepage SEO:
```tsx
// File: app/page.tsx
export const metadata = {
  title: "Your New Title",
  description: "Your new description",
  keywords: ["keyword1", "keyword2"],
}
```

### To Update Any Page SEO:
1. Open the page file (e.g., `app/about/page.tsx`)
2. Find the `generatePageMetadata()` call
3. Update `title`, `description`, or `keywords`
4. Save and rebuild

## 🚨 Monthly SEO Tasks
- [ ] Check Search Console for errors
- [ ] Review top performing keywords
- [ ] Check site speed (PageSpeed Insights)
- [ ] Update content if needed
- [ ] Check for broken links
- [ ] Review competitor sites

## 💯 Target Scores
After site is live, aim for:
- **Performance**: 90+
- **Accessibility**: 95+
- **Best Practices**: 95+
- **SEO**: 100

## 🎯 3-Month Goals
- 500+ monthly visitors
- 20+ keywords ranking
- 5+ top 10 rankings

## 📞 When to Get Help
Consider hiring SEO expert if:
- Not ranking after 6 months
- Need link building strategy
- Want to scale content
- Entering competitive market

## 🛠️ Files You Might Edit

**Common Changes:**
- `app/page.tsx` - Home metadata
- `app/layout.tsx` - Global SEO settings
- `lib/seo.ts` - SEO functions

**Don't Touch:**
- `app/sitemap.ts` - Auto-generates
- `app/robots.ts` - Already configured
- `components/seo/StructuredData.tsx` - Structured data

## 🔥 Pro Tips
1. Content is king - write helpful, unique content
2. Mobile-first - 60%+ traffic is mobile
3. Be patient - SEO takes 3-6 months
4. Quality > Quantity - for content & links
5. Update regularly - shows Google site is active

## 📱 Social Sharing Check
When you share on social media, check:
- [ ] Title shows correctly
- [ ] Description shows correctly
- [ ] Image displays (OG image)
- [ ] URL is clean

Tool: https://www.opengraph.xyz/

## ⚡ Speed Optimization
If site is slow:
1. Check PageSpeed Insights
2. Optimize images (use WebP)
3. Remove unused code
4. Enable caching
5. Use CDN for assets

## 📈 Success Indicators
- **Week 1**: Site indexed by Google
- **Month 1**: First keywords appear
- **Month 2**: Traffic starts coming
- **Month 3**: Rankings improve
- **Month 6**: Consistent traffic

## 🎓 Learn More
- **Google SEO Guide**: https://developers.google.com/search/docs
- **Next.js SEO**: https://nextjs.org/learn/seo/introduction-to-seo
- **Schema.org**: https://schema.org/docs/schemas.html

---

**Save this file! Reference it monthly for SEO maintenance.**

Last Updated: February 2026
