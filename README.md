# 🚀 Modern Portfolio Template

> **Live Demo:** [https://sribatsa.vercel.app/](https://sribatsa.vercel.app/)

A modern, responsive portfolio template built with React, TypeScript, and Tailwind CSS. Perfect for developers, designers, and creative professionals looking to showcase their work with a beautiful, animated interface.

![Portfolio Preview](https://img.shields.io/badge/React-18.3.1-blue?logo=react)
![TypeScript](https://img.shields.io/badge/TypeScript-5.5.3-blue?logo=typescript)
![Tailwind CSS](https://img.shields.io/badge/Tailwind-3.4.11-38B2AC?logo=tailwind-css)
![Vite](https://img.shields.io/badge/Vite-5.4.1-646CFF?logo=vite)

## ✨ Features

- 🎨 **Modern Design**: Clean, professional design with smooth animations
- 📱 **Fully Responsive**: Optimized for all devices and screen sizes
- 🌙 **Dark Theme**: Beautiful dark theme with orange accent colors
- ⚡ **Fast Performance**: Built with Vite for lightning-fast development and builds
- 🎭 **Smooth Animations**: Framer Motion animations and custom CSS transitions
- 📧 **Contact Form**: Integrated EmailJS contact form with animated postal van
- 🗺️ **Google Maps**: Embedded location map with customizable API key
- 🔍 **SEO Optimized**: Meta tags, sitemap, and robots.txt included
- 🎯 **Accessibility**: WCAG compliant with proper ARIA labels
- 📊 **Analytics Ready**: Easy integration with Google Analytics
- 🚀 **Deploy Ready**: Optimized for Vercel, Netlify, and other platforms

## 🛠️ Tech Stack

- **Frontend**: React 18, TypeScript, Tailwind CSS
- **Build Tool**: Vite
- **UI Components**: Radix UI, Shadcn/ui
- **Animations**: Framer Motion
- **Forms**: React Hook Form, EmailJS
- **Icons**: Lucide React
- **Styling**: Tailwind CSS with custom animations

## 📦 Installation & Setup

### Prerequisites

- Node.js (v16 or higher)
- npm, yarn, or bun package manager
- Git

### Quick Start

1. **Clone the repository**
   ```bash
   git clone https://github.com/your-username/sribatsa_portfolio_templet.git
   cd sribatsa_portfolio_templet
   ```

2. **Install dependencies**
   ```bash
   npm install
   # or
   yarn install
   # or
   bun install
   ```

3. **Start development server**
   ```bash
   npm run dev
   # or
   yarn dev
   # or
   bun dev
   ```

4. **Open your browser**
   Navigate to `http://localhost:5173`

## 🔧 Configuration

### 1. Personal Information

Update your personal information in the following files:

#### `src/components/About.tsx`
```tsx
// Replace placeholder text with your information
Hi! I'm <span className="text-orange-500 font-semibold">Your Name</span>
```

#### `src/components/Contact.tsx`
```tsx
// Update social media links
const socialLinks = [
  {
    name: "GitHub",
    url: "https://github.com/your-username",
  },
  // ... other social links
];

// Update email and location
email: "your.email@example.com"
location: "Your City, State, Country"
```

### 2. EmailJS Setup

1. **Create EmailJS Account**
   - Go to [EmailJS](https://www.emailjs.com/) and create an account
   - Create a new email service (Gmail, Outlook, etc.)
   - Create an email template

2. **Update Configuration**
   ```tsx
   // In src/components/Contact.tsx
   emailjs.send(
     "YOUR_SERVICE_ID",     // Replace with your service ID
     "YOUR_TEMPLATE_ID",    // Replace with your template ID
     formData,
     "YOUR_PUBLIC_KEY"      // Replace with your public key
   )
   ```

### 3. Google Maps Integration

1. **Get Google Maps API Key**
   - Go to [Google Cloud Console](https://console.cloud.google.com/)
   - Enable Maps JavaScript API
   - Create credentials (API key)

2. **Update Maps URL**
   ```tsx
   // In src/components/Contact.tsx
   src="https://www.google.com/maps/embed/v1/place?key=YOUR_GOOGLE_MAPS_API_KEY&q=Your+Location"
   ```

### 4. Projects Section

Update your projects in `src/components/Projects.tsx`:

```tsx
const projects = [
  {
    title: "Your Project Name",
    description: "Project description...",
    image: "your-project-image.jpg", // Add to public folder
    technologies: ["React", "TypeScript", "Tailwind"],
    github: "https://github.com/your-username/project",
    live: "https://your-project.vercel.app",
  },
  // ... more projects
];
```

### 5. Skills Section

Update your skills in `src/components/Skills.tsx`:

```tsx
const skills = [
  {
    category: "Frontend",
    technologies: ["React", "TypeScript", "Tailwind CSS"]
  },
  // ... more skill categories
];
```

### 6. Education & Experience

Update your education and experience in `src/components/Education.tsx`:

```tsx
const education = [
  {
    degree: "Your Degree",
    institution: "Your University",
    year: "2020-2024",
    description: "Description..."
  }
];
```

## 🎨 Customization

### Colors

The template uses a dark theme with orange accents. To customize colors:

1. **Primary Colors**: Update in `tailwind.config.ts`
2. **Component Colors**: Modify color classes in component files
3. **CSS Variables**: Update custom CSS variables in `src/index.css`

### Animations

- **Framer Motion**: Customize animations in component files
- **CSS Animations**: Modify `src/index.css` for custom animations
- **Scroll Animations**: Update `src/hooks/useInView.tsx`

### Layout

- **Sections**: Add/remove sections in `src/App.tsx`
- **Navigation**: Update navigation links in `src/components/Header.tsx`
- **Footer**: Customize footer content in `src/components/Footer.tsx`

## 📁 Project Structure

```
src/
├── components/          # React components
│   ├── ui/             # Shadcn/ui components
│   ├── About.tsx       # About section
│   ├── Contact.tsx     # Contact form
│   ├── Education.tsx   # Education & experience
│   ├── Header.tsx      # Navigation header
│   ├── Hero.tsx        # Hero section
│   ├── Projects.tsx    # Projects showcase
│   └── Skills.tsx      # Skills section
├── hooks/              # Custom React hooks
├── lib/                # Utility functions
├── pages/              # Page components
└── main.tsx           # App entry point
```

## 🚀 Deployment

### Vercel (Recommended)

1. **Connect Repository**
   - Push your code to GitHub
   - Connect repository to Vercel
   - Deploy automatically

2. **Environment Variables** (if needed)
   ```env
   VITE_EMAILJS_SERVICE_ID=your_service_id
   VITE_EMAILJS_TEMPLATE_ID=your_template_id
   VITE_EMAILJS_PUBLIC_KEY=your_public_key
   VITE_GOOGLE_MAPS_API_KEY=your_maps_api_key
   ```

### Netlify

1. **Build Command**: `npm run build`
2. **Publish Directory**: `dist`
3. **Environment Variables**: Same as Vercel

### GitHub Pages

1. **Update vite.config.ts**
   ```ts
   export default defineConfig({
     base: '/your-repo-name/',
     // ... other config
   })
   ```

2. **Deploy Script**
   ```bash
   npm run build
   # Upload dist folder to GitHub Pages
   ```

## 📱 SEO Optimization

The template includes:

- ✅ Meta tags for social sharing
- ✅ Open Graph tags
- ✅ Twitter Card tags
- ✅ Structured data (JSON-LD)
- ✅ Sitemap generation
- ✅ Robots.txt
- ✅ Favicon and app icons

## 🔍 Performance Optimization

- ✅ Code splitting with React.lazy()
- ✅ Image optimization
- ✅ CSS purging with Tailwind
- ✅ Bundle analysis
- ✅ Lighthouse optimization

## 🤝 Contributing

1. Fork the repository
2. Create a feature branch (`git checkout -b feature/amazing-feature`)
3. Commit your changes (`git commit -m 'Add amazing feature'`)
4. Push to the branch (`git push origin feature/amazing-feature`)
5. Open a Pull Request

## 📄 License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.

## 🙏 Acknowledgments

- [Shadcn/ui](https://ui.shadcn.com/) for beautiful UI components
- [Framer Motion](https://www.framer.com/motion/) for smooth animations
- [Tailwind CSS](https://tailwindcss.com/) for utility-first CSS
- [Lucide React](https://lucide.dev/) for beautiful icons
- [EmailJS](https://www.emailjs.com/) for contact form functionality

## 📞 Support

If you have any questions or need help:

- 📧 Email: your.email@example.com
- 💬 Issues: [GitHub Issues](https://github.com/your-username/sribatsa_portfolio_templet/issues)
- 📖 Documentation: [Wiki](https://github.com/your-username/sribatsa_portfolio_templet/wiki)

---

⭐ **Star this repository if you found it helpful!**

Made with ❤️ by [Your Name](https://github.com/your-username)
