# 🔧 Configuration Guide

This guide will help you set up all the necessary configurations for your portfolio template.

## 📧 EmailJS Setup

### 1. Create EmailJS Account
1. Go to [EmailJS](https://www.emailjs.com/) and create an account
2. Verify your email address

### 2. Create Email Service
1. In EmailJS dashboard, go to "Email Services"
2. Click "Add New Service"
3. Choose your email provider (Gmail, Outlook, etc.)
4. Follow the authentication steps
5. Note down your **Service ID**

### 3. Create Email Template
1. Go to "Email Templates"
2. Click "Create New Template"
3. Design your email template with these variables:
   - `{{name}}` - Sender's name
   - `{{email}}` - Sender's email
   - `{{subject}}` - Email subject
   - `{{message}}` - Email message
4. Save the template and note down your **Template ID**

### 4. Get Public Key
1. Go to "Account" → "API Keys"
2. Copy your **Public Key**

### 5. Update Configuration
In `src/components/Contact.tsx`, replace:
```tsx
emailjs.send(
  "YOUR_SERVICE_ID",     // Replace with your Service ID
  "YOUR_TEMPLATE_ID",    // Replace with your Template ID
  formData,
  "YOUR_PUBLIC_KEY"      // Replace with your Public Key
)
```

## 🗺️ Google Maps Setup

### 1. Create Google Cloud Project
1. Go to [Google Cloud Console](https://console.cloud.google.com/)
2. Create a new project or select existing one
3. Enable billing (required for API usage)

### 2. Enable Maps JavaScript API
1. Go to "APIs & Services" → "Library"
2. Search for "Maps JavaScript API"
3. Click on it and press "Enable"

### 3. Create API Key
1. Go to "APIs & Services" → "Credentials"
2. Click "Create Credentials" → "API Key"
3. Copy your API key

### 4. Restrict API Key (Recommended)
1. Click on your API key
2. Under "Application restrictions", select "HTTP referrers"
3. Add your domain(s): `https://your-portfolio.vercel.app/*`
4. Under "API restrictions", select "Restrict key"
5. Select "Maps JavaScript API"
6. Save

### 5. Update Maps URL
In `src/components/Contact.tsx`, replace:
```tsx
src="https://www.google.com/maps/embed/v1/place?key=YOUR_GOOGLE_MAPS_API_KEY&q=Your+Location"
```

## 📊 Google Analytics (Optional)

### 1. Create Google Analytics Account
1. Go to [Google Analytics](https://analytics.google.com/)
2. Create a new account and property
3. Get your **Measurement ID** (format: G-XXXXXXXXXX)

### 2. Add Analytics Script
In `index.html`, add before closing `</head>`:
```html
<!-- Google Analytics -->
<script async src="https://www.googletagmanager.com/gtag/js?id=G-XXXXXXXXXX"></script>
<script>
  window.dataLayer = window.dataLayer || [];
  function gtag(){dataLayer.push(arguments);}
  gtag('js', new Date());
  gtag('config', 'G-XXXXXXXXXX');
</script>
```

## 🔐 Environment Variables

Create a `.env` file in your project root:
```env
# EmailJS Configuration
VITE_EMAILJS_SERVICE_ID=your_service_id_here
VITE_EMAILJS_TEMPLATE_ID=your_template_id_here
VITE_EMAILJS_PUBLIC_KEY=your_public_key_here

# Google Maps API Key
VITE_GOOGLE_MAPS_API_KEY=your_google_maps_api_key_here

# Google Analytics (Optional)
VITE_GA_TRACKING_ID=your_ga_tracking_id_here

# Site Configuration
VITE_SITE_URL=https://your-portfolio.vercel.app
VITE_SITE_NAME=Your Name - Portfolio
VITE_SITE_DESCRIPTION=Your portfolio description here
```

## 🎨 Customization

### Colors
Update colors in `tailwind.config.ts`:
```ts
theme: {
  extend: {
    colors: {
      primary: {
        500: '#f97316', // Orange color
        // Add more shades as needed
      }
    }
  }
}
```

### Fonts
Add custom fonts in `src/index.css`:
```css
@import url('https://fonts.googleapis.com/css2?family=Your+Font:wght@400;500;600;700&display=swap');

:root {
  --font-primary: 'Your Font', sans-serif;
}
```

### Animations
Customize animations in `src/index.css`:
```css
@keyframes fadeIn {
  from { opacity: 0; transform: translateY(20px); }
  to { opacity: 1; transform: translateY(0); }
}

.animate-fade-in {
  animation: fadeIn 0.6s ease-out;
}
```

## 🚀 Deployment Configuration

### Vercel
1. Connect your GitHub repository to Vercel
2. Add environment variables in Vercel dashboard
3. Deploy automatically

### Netlify
1. Connect your GitHub repository to Netlify
2. Set build command: `npm run build`
3. Set publish directory: `dist`
4. Add environment variables in Netlify dashboard

### GitHub Pages
1. Update `vite.config.ts`:
```ts
export default defineConfig({
  base: '/your-repo-name/',
  // ... other config
})
```

## 🔍 SEO Configuration

### Meta Tags
Update meta tags in `index.html`:
```html
<meta name="description" content="Your portfolio description">
<meta name="keywords" content="your, keywords, here">
<meta name="author" content="Your Name">
```

### Open Graph Tags
Add Open Graph tags for social sharing:
```html
<meta property="og:title" content="Your Name - Portfolio">
<meta property="og:description" content="Your portfolio description">
<meta property="og:image" content="https://your-portfolio.vercel.app/og-image.jpg">
<meta property="og:url" content="https://your-portfolio.vercel.app">
```

### Twitter Cards
Add Twitter Card tags:
```html
<meta name="twitter:card" content="summary_large_image">
<meta name="twitter:title" content="Your Name - Portfolio">
<meta name="twitter:description" content="Your portfolio description">
<meta name="twitter:image" content="https://your-portfolio.vercel.app/twitter-image.jpg">
```

## 🛠️ Troubleshooting

### EmailJS Issues
- Verify all IDs are correct
- Check EmailJS service is active
- Ensure template variables match form data

### Google Maps Issues
- Verify API key is correct
- Check API is enabled
- Ensure billing is set up
- Check domain restrictions

### Build Issues
- Clear node_modules and reinstall: `rm -rf node_modules && npm install`
- Clear cache: `npm run build -- --force`
- Check for TypeScript errors: `npm run lint`

## 📞 Support

If you encounter issues:
1. Check the [main README](../README.md)
2. Search existing [GitHub Issues](https://github.com/your-username/sribatsa_portfolio_templet/issues)
3. Create a new issue with detailed description
4. Contact support at your.email@example.com 