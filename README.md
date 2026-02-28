# Bytexis - Software Development Agency Website

A modern, high-performance website for Bytexis, a software development company based in Rajkot, India.

## 🚀 Quick Start

### Prerequisites
- Node.js 18+ 
- npm or yarn

### Installation
```bash
cd client
npm install
```

### Development
```bash
npm run dev
```

### Build for Production
```bash
npm run build
```

The production build will be created in the `dist/` folder.

## 📁 Project Structure

```
Bytexis/
├── client/              # React application
│   ├── src/
│   │   ├── pages/      # Page components
│   │   ├── components/ # Reusable components
│   │   ├── hooks/      # Custom hooks
│   │   ├── data/       # Static data
│   │   └── lib/        # Utilities
│   ├── public/         # Static assets (served from root)
│   ├── attached_assets/# Project images and logos
│   └── index.html      # Entry point
├── dist/               # Production build (generated)
├── .github/            # GitHub configuration
│   └── workflows/
│       └── deploy.yml  # Auto-deployment to GitHub Pages
├── vite.config.ts      # Vite configuration
├── tsconfig.json       # TypeScript configuration
└── package.json        # Project dependencies
```

## 🌐 Deployment

### GitHub Pages

1. Push your code to the `main` branch
2. GitHub Actions will automatically build and deploy to GitHub Pages
3. Site will be available at `https://[username].github.io/Bytexis-Website/`

To change the deployment URL, update the `base` option in `vite.config.ts`:

```typescript
export default defineConfig({
  base: '/Bytexis-Website/', // or your desired path
  // ... rest of config
});
```

### Manual Deployment

```bash
# Build the site
npm run build

# The dist/ folder contains the static site ready for deployment
# Upload the contents of dist/ to your hosting service
```

## 🎨 Technologies

- **Frontend Framework**: React 18+
- **Build Tool**: Vite
- **Styling**: Tailwind CSS
- **Icons**: Lucide React
- **Routing**: Wouter
- **Animation**: Framer Motion
- **Forms**: React Hook Form
- **UI Components**: shadcn/ui

## 📝 Features

- ✨ Modern, responsive design
- 🎯 Performance-optimized
- 📱 Mobile-friendly
- 🌙 Dark/Light theme support
- 💬 Contact form
- 📊 Project showcase
- 🔍 SEO-friendly

## 📄 Pages

- **Home** (`/`) - Landing page with services and featured projects
- **Work** (`/work`) - Portfolio and case studies
- **Process** (`/process`) - Development methodology
- **About** (`/about`) - Company information
- **Contact** (`/contact`) - Contact form and details

## 🔗 Asset Management

- **Logo & Images**: Stored in `client/attached_assets/`
- **Public Assets**: Stored in `client/public/` (served from root)
- **Project Images**: Automatically optimized and included in build

## ⚙️ Environment

The site is built as a completely static site suitable for deployment on:
- GitHub Pages
- Netlify
- Vercel
- AWS S3
- Any static hosting service

## 📦 Optimization Notes

For production deployment:
- `node_modules/` - Not needed in deployment (install fresh from package.json)
- `dist/` - This is all you need to upload
- Source files are not required for hosting

## 🔄 Continuous Deployment

The GitHub Actions workflow automatically:
1. Runs on every push to `main`
2. Installs dependencies
3. Builds the production site
4. Deploys to GitHub Pages

View deployment status in the GitHub repository's Actions tab.

## 📞 Contact

For inquiries about this website or our development services, visit the contact page or email us directly.

---

**Built with ❤️ by Bytexis**
