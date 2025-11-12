# 🚀 Vercel Deployment Guide for Gradsea.io

## Quick Deploy (Recommended)

### Method 1: One-Click Deploy
Click the button below to deploy directly to Vercel:

[![Deploy with Vercel](https://vercel.com/button)](https://vercel.com/new/clone?repository-url=https://github.com/Smartty23/NFT-Marketplace-main)

---

## Method 2: Deploy via Vercel Dashboard

### Step 1: Sign Up/Login to Vercel
1. Go to [vercel.com](https://vercel.com)
2. Click "Sign Up" or "Login"
3. Choose "Continue with GitHub"
4. Authorize Vercel to access your GitHub account

### Step 2: Import Your Project
1. Click "Add New..." → "Project"
2. Find your repository: `NFT-Marketplace-main`
3. Click "Import"

### Step 3: Configure Project
Vercel will auto-detect Next.js settings:

**Framework Preset:** Next.js
**Root Directory:** `./`
**Build Command:** `npm run build`
**Output Directory:** `.next`
**Install Command:** `npm install`

### Step 4: Environment Variables (Optional)
If you have any environment variables, add them:
- Click "Environment Variables"
- Add your variables (e.g., API keys, chain IDs)

### Step 5: Deploy
1. Click "Deploy"
2. Wait 2-3 minutes for build to complete
3. Your site will be live at: `https://your-project-name.vercel.app`

---

## Method 3: Deploy via Vercel CLI

### Step 1: Install Vercel CLI
```bash
npm install -g vercel
```

### Step 2: Login to Vercel
```bash
vercel login
```

### Step 3: Deploy
```bash
# From your project directory
vercel

# For production deployment
vercel --prod
```

### Step 4: Follow Prompts
- Set up and deploy? **Y**
- Which scope? Select your account
- Link to existing project? **N** (first time)
- What's your project's name? **gradsea-nft-marketplace**
- In which directory is your code located? **.**
- Want to override settings? **N**

---

## Post-Deployment Steps

### 1. Custom Domain (Optional)
1. Go to your project dashboard on Vercel
2. Click "Settings" → "Domains"
3. Add your custom domain (e.g., gradsea.io)
4. Follow DNS configuration instructions

### 2. Update README
Add your live URL to README.md:
```markdown
## 🚀 Live Demo
[View Live Demo](https://your-project-name.vercel.app)
```

### 3. Update GitHub Repository
1. Go to your GitHub repository
2. Click "About" (gear icon)
3. Add website: `https://your-project-name.vercel.app`
4. Add description and topics

### 4. Enable Analytics (Optional)
1. In Vercel dashboard, go to "Analytics"
2. Enable Web Analytics
3. View real-time traffic and performance metrics

---

## Automatic Deployments

Vercel automatically deploys when you push to GitHub:

- **Push to `main` branch** → Production deployment
- **Push to other branches** → Preview deployment
- **Pull requests** → Preview deployment with unique URL

---

## Vercel Configuration

Your `vercel.json` is already configured with:
- ✅ Next.js framework detection
- ✅ Optimized build settings
- ✅ Auto-deployment from GitHub
- ✅ Regional deployment (US East)

---

## Troubleshooting

### Build Fails
1. Check build logs in Vercel dashboard
2. Ensure all dependencies are in `package.json`
3. Test build locally: `npm run build`

### Images Not Loading
- Ensure images are in `public/` directory
- Check `next.config.js` for image domains

### Environment Variables
- Add them in Vercel dashboard under Settings → Environment Variables
- Redeploy after adding variables

---

## Performance Optimization

Vercel automatically provides:
- ✅ Global CDN
- ✅ Automatic HTTPS
- ✅ Image optimization
- ✅ Edge caching
- ✅ Serverless functions

---

## Monitoring Your Deployment

### View Deployment Status
```bash
vercel ls
```

### View Logs
```bash
vercel logs
```

### View Project Info
```bash
vercel inspect
```

---

## Cost

- **Hobby Plan:** FREE
  - Unlimited deployments
  - 100GB bandwidth/month
  - Automatic HTTPS
  - Perfect for personal projects

- **Pro Plan:** $20/month
  - More bandwidth
  - Team collaboration
  - Advanced analytics

---

## Next Steps After Deployment

1. ✅ Test all features on live site
2. ✅ Share your live URL
3. ✅ Update README with live demo link
4. ✅ Add to your portfolio
5. ✅ Share on social media

---

## Support

- Vercel Docs: https://vercel.com/docs
- Next.js Docs: https://nextjs.org/docs
- Community: https://github.com/vercel/vercel/discussions

---

**Your Gradsea.io NFT Marketplace will be live in minutes! 🚀**
