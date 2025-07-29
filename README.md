# BROCODEDEVS Website

A modern, responsive website for BROCODEDEVS - a 100% Black Owned Digital Agency specializing in web development, mobile apps, and e-commerce solutions.

## 🚀 Live Demo

**Website**: [https://brocodedevs-website.netlify.app](https://brocodedevs-website.netlify.app)

## 🎯 Features

- **Modern Design**: Clean, minimal black-and-white design inspired by awwwards.com
- **Fully Responsive**: Perfect on desktop, tablet, and mobile devices
- **Fast Performance**: Optimized with lazy loading and modern build tools
- **SEO Optimized**: Meta tags, structured data, and performance optimizations
- **Accessibility**: WCAG compliant with proper ARIA labels and keyboard navigation

## 📱 Pages

1. **Home** - Hero section, services preview, portfolio highlights, business packages
2. **Services** - Detailed service offerings with pricing
3. **Portfolio** - Project showcase with filtering
4. **Packages** - Business package pricing and features
5. **FAQ** - Frequently asked questions with accordion
6. **Contact** - Contact form with file upload and business details
7. **About** - Company story, team, and 100% Black Owned emphasis

## 🛠 Tech Stack

- **Frontend**: React 18 + TypeScript
- **Styling**: Tailwind CSS + PostCSS
- **Build Tool**: Vite
- **Animations**: Framer Motion
- **Icons**: Lucide React
- **Routing**: React Router DOM
- **Deployment**: Netlify

## 🚀 Quick Start

### Prerequisites

- Node.js 18+ 
- npm or yarn

### Installation

```bash
# Clone the repository
git clone https://github.com/YOUR_USERNAME/brocodedevs-website.git
cd brocodedevs-website

# Install dependencies
npm install

# Start development server
npm run dev
```

### Available Scripts

- `npm run dev` - Start development server
- `npm run build` - Build for production
- `npm run preview` - Preview production build

## 🌐 Deployment

### Option 1: Netlify (Recommended)

1. **Push to GitHub**:
   ```bash
   git add .
   git commit -m "Initial commit"
   git push origin main
   ```

2. **Deploy to Netlify**:
   - Go to [netlify.com](https://netlify.com)
   - Sign up/Login with GitHub
   - Click "New site from Git"
   - Select your repository
   - Build settings: `npm run build`
   - Publish directory: `dist`
   - Click "Deploy site"

### Option 2: Vercel

1. **Install Vercel CLI**:
   ```bash
   npm i -g vercel
   ```

2. **Deploy**:
   ```bash
   vercel
   ```

### Option 3: GitHub Pages

1. **Add GitHub Pages action**:
   Create `.github/workflows/deploy.yml`:
   ```yaml
   name: Deploy to GitHub Pages
   on:
     push:
       branches: [ main ]
   jobs:
     build-and-deploy:
       runs-on: ubuntu-latest
       steps:
         - uses: actions/checkout@v2
         - uses: actions/setup-node@v2
           with:
             node-version: '18'
         - run: npm install
         - run: npm run build
         - uses: peaceiris/actions-gh-pages@v3
           with:
             github_token: ${{ secrets.GITHUB_TOKEN }}
             publish_dir: ./dist
   ```

## 📁 Project Structure

```
brocodedevs-website/
├── public/                 # Static assets
├── src/
│   ├── components/         # Reusable components
│   │   ├── Navbar.tsx     # Navigation component
│   │   ├── Footer.tsx     # Footer component
│   │   └── LazyImage.tsx  # Optimized image component
│   ├── pages/             # Page components
│   │   ├── Home.tsx       # Home page
│   │   ├── Services.tsx   # Services page
│   │   ├── Portfolio.tsx  # Portfolio page
│   │   ├── Packages.tsx   # Packages page
│   │   ├── FAQ.tsx        # FAQ page
│   │   ├── Contact.tsx    # Contact page
│   │   └── About.tsx      # About page
│   ├── App.tsx            # Main app component
│   ├── main.tsx           # Entry point
│   └── index.css          # Global styles
├── package.json           # Dependencies and scripts
├── tailwind.config.js     # Tailwind configuration
├── vite.config.ts         # Vite configuration
├── netlify.toml           # Netlify deployment config
└── README.md              # Project documentation
```

## 🎨 Design System

### Colors
- **Primary**: Black (#000000) and white (#ffffff)
- **Gray Scale**: Various shades of gray for text and backgrounds
- **Accent**: Minimal color usage for highlights

### Typography
- **Primary Font**: Inter (Google Fonts)
- **Monospace Font**: JetBrains Mono (for code elements)
- **Font Weights**: 300, 400, 500, 600, 700, 800, 900

### Components
- **Buttons**: Primary, secondary, and ghost variants
- **Cards**: Consistent card design with hover effects
- **Forms**: Styled form inputs and validation
- **Navigation**: Responsive navbar with mobile menu

## 📱 Responsive Breakpoints

- **Mobile**: < 768px
- **Tablet**: 768px - 1024px
- **Desktop**: > 1024px

## 🎯 Key Features

### Navigation
- Fixed navbar with smooth scroll effects
- Mobile-responsive hamburger menu
- Active page highlighting
- Smooth page transitions

### Animations
- Page entrance animations
- Hover effects on cards and buttons
- Smooth scrolling
- Loading states

### Forms
- Contact form with validation
- Form submission feedback
- File upload support (up to 10MB)
- Integration with formsubmit.co

### Performance
- Lazy loading images
- Code splitting
- Optimized bundle size
- Fast loading times

## 🔧 Customization

### Adding New Pages
1. Create new component in `src/pages/`
2. Add route in `src/App.tsx`
3. Add navigation link in `src/components/Navbar.tsx`

### Styling
- Use Tailwind CSS classes
- Follow the design system in `src/index.css`
- Maintain responsive design principles

### Content Updates
- Update content in respective page components
- Modify data arrays for services, projects, etc.
- Update contact information and business details

## 📞 Contact

- **Email**: info@brocodedevs.co.za
- **Phone**: +27 123 456 789
- **Location**: Johannesburg, South Africa
- **Business Hours**: Mon-Fri 9AM-6PM, Sat 9AM-2PM

## 🤝 Contributing

1. Fork the repository
2. Create a feature branch (`git checkout -b feature/amazing-feature`)
3. Commit your changes (`git commit -m 'Add amazing feature'`)
4. Push to the branch (`git push origin feature/amazing-feature`)
5. Open a Pull Request

## 📄 License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.

## 🙏 Acknowledgments

- **Design Inspiration**: awwwards.com
- **Icons**: Lucide React
- **Fonts**: Google Fonts (Inter, JetBrains Mono)
- **Deployment**: Netlify

---

**BROCODEDEVS** - 100% Black Owned Digital Agency 🚀 