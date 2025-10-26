# SignBridge Landing Page - Deployment Guide

## 🚀 Deploy to Netlify via GitHub

### Prerequisites
- GitHub account
- Netlify account (free tier works perfectly)
- Git installed on your machine

---

## Step 1: Push to GitHub Repository

```bash
# Navigate to the landing page folder
cd c:\SignBridge\landing-page

# Initialize git (if not already done)
git init

# Add the remote repository
git remote add origin https://github.com/jesslearns017/sign-test.git

# Add all files
git add .

# Commit
git commit -m "Initial commit: SignBridge landing page with Deaf Flag colors and Spanish support"

# Push to GitHub
git push -u origin main
```

**Note**: If your default branch is `master` instead of `main`, use:
```bash
git push -u origin master
```

---

## Step 2: Connect GitHub to Netlify

### Option A: Via Netlify Dashboard (Recommended)

1. **Go to Netlify**: https://app.netlify.com
2. **Click "Add new site"** → "Import an existing project"
3. **Choose GitHub** as your Git provider
4. **Authorize Netlify** to access your GitHub account
5. **Select repository**: `jesslearns017/sign-test`
6. **Configure build settings**:
   - **Branch to deploy**: `main` (or `master`)
   - **Build command**: Leave empty (static site)
   - **Publish directory**: `.` (current directory)
7. **Click "Deploy site"**

### Option B: Via Netlify CLI

```bash
# Install Netlify CLI globally
npm install -g netlify-cli

# Login to Netlify
netlify login

# Initialize Netlify in your project
netlify init

# Follow the prompts:
# - Create & configure a new site
# - Connect to GitHub repo: jesslearns017/sign-test
# - Build command: (leave empty)
# - Publish directory: .

# Deploy
netlify deploy --prod
```

---

## Step 3: Configure Custom Domain (Optional)

1. Go to **Site settings** → **Domain management**
2. Click **Add custom domain**
3. Enter your domain (e.g., `signbridge.com`)
4. Follow DNS configuration instructions
5. Enable **HTTPS** (automatic with Netlify)

---

## Step 4: Test Your Deployment

Your site will be live at:
- **Netlify subdomain**: `https://[your-site-name].netlify.app`
- **Custom domain** (if configured): `https://signbridge.com`

### Test checklist:
- ✅ English version loads (`/index.html`)
- ✅ Spanish version loads (`/index-es.html`)
- ✅ Language toggle works (EN ↔ ES)
- ✅ All buttons and interactions work
- ✅ Responsive design on mobile
- ✅ Deaf Flag colors display correctly

---

## Continuous Deployment

Once connected, Netlify automatically deploys when you push to GitHub:

```bash
# Make changes to your files
# (edit index.html, styles.css, etc.)

# Commit and push
git add .
git commit -m "Update hero section copy"
git push origin main

# Netlify automatically rebuilds and deploys!
```

---

## File Structure

```
landing-page/
├── index.html           # English landing page
├── index-es.html        # Spanish landing page
├── styles.css           # Shared styles (Deaf Flag colors)
├── script.js            # Interactive features
├── netlify.toml         # Netlify configuration
├── .gitignore           # Git ignore rules
├── README.md            # Project documentation
└── DEPLOYMENT.md        # This file
```

---

## Troubleshooting

### Issue: "Build failed"
**Solution**: Since this is a static site with no build process, make sure:
- Build command is empty
- Publish directory is `.` (dot)

### Issue: "404 on page refresh"
**Solution**: The `netlify.toml` file includes redirect rules to handle this. Make sure it's committed to your repo.

### Issue: "Fonts not loading"
**Solution**: Google Fonts are loaded via CDN in the HTML. Check your internet connection and ensure the `<link>` tags are present in both `index.html` and `index-es.html`.

### Issue: "Spanish page not found"
**Solution**: Ensure `index-es.html` is in the root directory and committed to GitHub.

---

## Performance Optimization

Netlify automatically provides:
- ✅ Global CDN
- ✅ Automatic HTTPS
- ✅ Asset optimization
- ✅ Instant cache invalidation
- ✅ Continuous deployment

Your landing page should achieve:
- **Lighthouse Score**: 90+ (Performance, Accessibility, Best Practices, SEO)
- **Load Time**: <2 seconds
- **First Contentful Paint**: <1 second

---

## Next Steps

1. **Analytics**: Add Google Analytics or Netlify Analytics
2. **Forms**: Connect CTA buttons to Netlify Forms or your CRM
3. **A/B Testing**: Use Netlify Split Testing for headline variations
4. **SEO**: Add meta tags, Open Graph tags, and sitemap.xml

---

## Support

- **Netlify Docs**: https://docs.netlify.com
- **Netlify Community**: https://answers.netlify.com
- **GitHub Repo**: https://github.com/jesslearns017/sign-test

---

**Your SignBridge landing page is ready to deploy!** 🎉
