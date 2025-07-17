# 🎮 Idleon Guide - Modern Web Application

A comprehensive, modern web application for **Legends of Idleon** players, featuring AI-powered assistance, curated resources, tools, and character progression guides.

## 🚀 Features

### ✨ Modern Tech Stack
- **Astro** - Fast, modern web framework with SSR
- **SolidJS** - Reactive UI components with islands architecture
- **TypeScript** - Type-safe development
- **Park-UI** - Beautiful, accessible UI components
- **Panda CSS** - Performant styling solution

### 🎯 Core Sections

#### 🤖 IdelonGPT
- AI-powered game assistance
- Character route recommendations
- Intelligent insights and analysis
- Smart search through game data

#### 📚 Fuentes (Resources)
- Comprehensive spreadsheets and calculators
- Community guides and tools
- Curated external resources
- Data-driven optimization tools

#### 🛠️ Herramientas (Tools)
- Game calculators and trackers
- Progress monitoring utilities
- Build planners and optimizers
- Community-created tools

#### 🎯 Ruta de Personajes (Character Routes)
- Optimal character progression paths
- Detailed build recommendations
- Class distribution strategies
- Time-efficient gameplay tips

## 🏗️ Architecture

### SSR + Islands
- **Server-Side Rendering** for fast initial loads
- **SolidJS Islands** for interactive components
- **Optimal performance** with selective hydration

### Component Structure
```
src/
├── components/
│   ├── ui/           # Park-UI components
│   ├── Header.astro  # Navigation header
│   └── Navigation.tsx # Interactive navigation
├── layouts/
│   └── Layout.astro  # Main layout template
├── pages/
│   ├── index.astro           # Home page
│   ├── idleon-gpt.astro      # AI assistant
│   ├── sources.astro         # Resources
│   ├── tools.astro           # Tools
│   └── character-routes.astro # Character guide
└── styles/           # Global styles
```

## 🎨 Design System

### Visual Design
- **Glass morphism** UI with backdrop blur effects
- **Gradient backgrounds** for visual appeal
- **Responsive design** for all devices
- **Smooth animations** and transitions

### Color Scheme
- **Primary gradient**: Purple to blue (`#667eea` to `#764ba2`)
- **Accent colors**: Orange (`#ff6b6b`) and Yellow (`#ffd93d`)
- **Glass effects**: Semi-transparent whites with blur
- **Text hierarchy**: White to gray gradients

## 🚀 Getting Started

### Prerequisites
- Node.js 18+
- pnpm (recommended)

### Installation
```bash
# Clone the repository
git clone <repository-url>
cd idleon-resources

# Install dependencies
pnpm install

# Generate Panda CSS
pnpm prepare

# Start development server
pnpm dev
```

### Available Scripts
```bash
pnpm dev      # Start development server
pnpm build    # Build for production
pnpm preview  # Preview production build
pnpm prepare  # Generate Panda CSS
```

## 🔧 Development

### Adding New Components
1. Install Park-UI components:
   ```bash
   pnpx @park-ui/cli components add <component-name>
   pnpm panda codegen
   ```

2. Import and use in your components:
   ```tsx
   import { Button } from '../components/ui/button';
   ```

### Styling Guidelines
- Use **Panda CSS** for styling
- Follow **glass morphism** design patterns
- Maintain **responsive design** principles
- Use **consistent spacing** and typography

### Performance Optimization
- **SSR** for initial page loads
- **Islands architecture** for selective hydration
- **Optimized images** and assets
- **Minimal JavaScript** on initial load

## 📱 Responsive Design

### Breakpoints
- **Mobile**: < 768px
- **Tablet**: 768px - 1024px
- **Desktop**: > 1024px

### Mobile-First Approach
- Responsive grid layouts
- Touch-friendly interactions
- Optimized navigation
- Accessible design

## 🎯 Key Features

### Navigation
- **Sticky header** with glass effect
- **Smooth scrolling** navigation
- **Mobile-responsive** menu
- **Active state** indicators

### Interactive Elements
- **Hover effects** on cards and buttons
- **Smooth transitions** throughout
- **Loading states** for better UX
- **Accessible** keyboard navigation

### Content Organization
- **Card-based** layout system
- **Badge** system for categorization
- **Progressive disclosure** of information
- **Scannable** content hierarchy

## 🔮 Future Enhancements

### Planned Features
- **Mobile app** version
- **API integration** for real-time data
- **User accounts** and preferences
- **Community features** and discussions
- **Advanced search** functionality
- **Offline support** with PWA

### Technical Improvements
- **Database integration** for dynamic content
- **Search engine optimization**
- **Performance monitoring**
- **Automated testing**
- **CI/CD pipeline**

## 🤝 Contributing

1. Fork the repository
2. Create a feature branch
3. Make your changes
4. Test thoroughly
5. Submit a pull request

### Development Guidelines
- Follow **TypeScript** best practices
- Maintain **accessibility** standards
- Write **responsive** CSS
- Test on **multiple devices**
- Document **new features**

## 📄 License

This project is licensed under the MIT License - see the LICENSE file for details.

## 🙏 Acknowledgments

- **Legends of Idleon** community for resources and data
- **Park-UI** team for the excellent component library
- **Astro** and **SolidJS** teams for the amazing frameworks
- **Panda CSS** team for the styling solution

---

Built with ❤️ for the Idleon community
