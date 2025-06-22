# PixiePilot - AI-Powered 3D Modeling Platform

[![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)](https://opensource.org/licenses/MIT)
[![React](https://img.shields.io/badge/React-18.3.1-blue.svg)](https://reactjs.org/)
[![TypeScript](https://img.shields.io/badge/TypeScript-5.5.3-blue.svg)](https://www.typescriptlang.org/)
[![Vite](https://img.shields.io/badge/Vite-5.4.1-purple.svg)](https://vitejs.dev/)

> Transform your creative vision into stunning 3D models with PixiePilot's intelligent AI assistant. Built for game developers and film studios who demand excellence.

## 🚀 About PixiePilot

PixiePilot is a cutting-edge AI-powered 3D modeling platform designed specifically for professional game developers and film studios. Our intelligent assistant, Pixie, understands your creative intent and produces professional-quality 3D models while keeping you in full control of the creative process.

### Key Features

- **🎮 Game Development Focused**: Optimized workflows for Unity/Unreal with LOD chains, topology optimization, and PBR-compliant materials
- **🎬 Film & Animation Ready**: High-resolution models with subdivision-ready topology and cinematic quality edge flow
- **🔧 Seamless Integration**: Native plugins for Maya and Blender, with plans to expand to 3ds Max and Cinema 4D
- **🎯 Industry-Specific**: Tailored workflows that integrate seamlessly into existing production pipelines

## 🛠️ Technology Stack

This project is built with modern web technologies:

- **Frontend Framework**: React 18 with TypeScript
- **Build Tool**: Vite for fast development and optimized builds
- **Styling**: Tailwind CSS with shadcn/ui components
- **Routing**: React Router DOM for client-side navigation
- **State Management**: TanStack Query for server state management
- **UI Components**: Radix UI primitives with custom styling
- **Form Handling**: React Hook Form with Zod validation
- **Email Integration**: EmailJS for contact form functionality

## 📦 Installation & Setup

### Prerequisites

- Node.js (v18 or higher) - [Install with nvm](https://github.com/nvm-sh/nvm#installing-and-updating)
- npm or bun package manager

### Quick Start

1. **Clone the repository**
   ```bash
   git clone <YOUR_GIT_URL>
   cd pixiepilot-ai-landing
   ```

2. **Install dependencies**
   ```bash
   npm install
   # or
   bun install
   ```

3. **Start the development server**
   ```bash
   npm run dev
   # or
   bun dev
   ```

4. **Open your browser**
   Navigate to `http://localhost:5173` to view the application

## 🏗️ Project Structure

```
src/
├── components/          # Reusable UI components
│   ├── ui/             # shadcn/ui components
│   └── WaitlistButton.tsx
├── pages/              # Page components
│   ├── Index.tsx       # Landing page
│   ├── Features.tsx    # Features page
│   ├── Pricing.tsx     # Pricing page
│   ├── About.tsx       # About page
│   ├── Contact.tsx     # Contact page
│   ├── Careers.tsx     # Careers page
│   ├── Documentation.tsx # Documentation page
│   └── NotFound.tsx    # 404 page
├── hooks/              # Custom React hooks
├── lib/                # Utility functions and configurations
├── App.tsx             # Main application component
└── main.tsx            # Application entry point
```

## 🚀 Available Scripts

- `npm run dev` - Start development server with hot reload
- `npm run build` - Build for production
- `npm run build:dev` - Build for development
- `npm run preview` - Preview production build locally
- `npm run lint` - Run ESLint for code quality

## 🎨 Design System

The project uses a comprehensive design system built on:

- **Tailwind CSS** for utility-first styling
- **shadcn/ui** for consistent component design
- **Radix UI** for accessible component primitives
- **Custom color palette** with purple/cyan gradients for brand identity

## 📱 Responsive Design

The application is fully responsive and optimized for:
- Desktop (1024px+)
- Tablet (768px - 1023px)
- Mobile (320px - 767px)

## 🔧 Development Guidelines

### Code Style
- Follow TypeScript best practices
- Use functional components with hooks
- Implement proper error boundaries
- Write meaningful component and function names

### Component Structure
- Keep components small and focused
- Use proper TypeScript interfaces
- Implement proper prop validation
- Follow the single responsibility principle

### Styling
- Use Tailwind CSS classes for styling
- Follow the established design system
- Ensure accessibility compliance
- Test across different screen sizes

## 🌐 Deployment

### Production Build
```bash
npm run build
```

The built files will be in the `dist/` directory, ready for deployment to any static hosting service.

### Recommended Hosting
- **Vercel** - Optimized for React applications
- **Netlify** - Great for static sites with form handling
- **GitHub Pages** - Free hosting for open source projects
- **AWS S3 + CloudFront** - Enterprise-grade hosting

## 🤝 Contributing

We welcome contributions! Please follow these steps:

1. Fork the repository
2. Create a feature branch (`git checkout -b feature/amazing-feature`)
3. Commit your changes (`git commit -m 'Add amazing feature'`)
4. Push to the branch (`git push origin feature/amazing-feature`)
5. Open a Pull Request

### Development Workflow
1. Ensure all tests pass
2. Follow the established code style
3. Update documentation as needed
4. Test across different browsers and devices

## 📄 License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.

## 📞 Support & Contact

- **Website**: [PixiePilot Landing Page](https://your-domain.com)
- **Email**: [Contact Us](mailto:contact@pixiepilot.ai)
- **Documentation**: [View Documentation](/documentation)

## 🙏 Acknowledgments

- Built with [React](https://reactjs.org/) and [Vite](https://vitejs.dev/)
- UI components from [shadcn/ui](https://ui.shadcn.com/)
- Icons from [Lucide React](https://lucide.dev/)
- Styling with [Tailwind CSS](https://tailwindcss.com/)

---

**PixiePilot** - Revolutionizing 3D creation with AI-powered modeling for the future of game development and film production.
