# Mikeka Expert - Football Prediction Website

A comprehensive football prediction website tailored for Tanzanian users with a professional, trustworthy design that blends Swahili and English seamlessly.

## Features

### 🏆 Core Features
- **Dynamic Homepage** - Hero section with countdown timer and featured tips
- **Daily Predictions** - Free and premium tips with confidence levels
- **Premium Packages** - Subscription tiers in Tanzanian Shillings
- **Educational Content** - Responsible betting guides and tutorials
- **SEO-Optimized Articles** - Sports analysis and news content
- **Admin Dashboard** - Comprehensive content management system
- **WhatsApp Integration** - Instant engagement for Tanzanian users

### 🎨 Design Language
- **Colors**: Deep navy (#0f172a) with electric blue accents (#3b82f6)
- **Typography**: Clean, readable fonts optimized for mobile
- **Layout**: Card-based design with subtle animations
- **Mobile-First**: Optimized for low-data environments
- **Cultural**: Respectful blend of Swahili and English

## Technology Stack

- **Frontend**: React 18 with Vite
- **Styling**: Tailwind CSS v3
- **Routing**: React Router DOM
- **Icons**: Lucide React
- **Animations**: Framer Motion
- **Notifications**: React Hot Toast
- **Countdown**: React Countdown

## Getting Started

### Prerequisites
- Node.js 18+ 
- npm or yarn

### Installation

1. Clone the repository:
```bash
git clone <repository-url>
cd mikeka-expert
```

2. Install dependencies:
```bash
npm install
```

3. Start the development server:
```bash
npm run dev
```

4. Open your browser and navigate to `http://localhost:3000`

### Building for Production

```bash
npm run build
```

The built files will be in the `dist` directory.

## Project Structure

```
src/
├── components/
│   ├── Navbar.jsx          # Navigation component
│   ├── Hero.jsx            # Hero section with countdown
│   ├── Stats.jsx            # Statistics and features
│   ├── Tips.jsx             # Daily predictions display
│   ├── VIP.jsx              # Premium packages
│   ├── Predictions.jsx      # Full predictions page
│   ├── Packages.jsx         # Subscription packages
│   ├── Education.jsx        # Educational content
│   ├── Articles.jsx         # SEO-optimized articles
│   ├── AdminDashboard.jsx   # Admin management
│   ├── WhatsAppButton.jsx   # WhatsApp integration
│   └── Footer.jsx           # Footer component
├── App.jsx                  # Main application
├── main.jsx                 # Application entry point
└── index.css                # Global styles
```

## Key Components

### 🏠 Homepage Features
- **Hero Section**: Dynamic countdown timer and featured tips
- **Statistics**: Success rates and user testimonials
- **Tips Display**: Free and premium predictions
- **VIP Packages**: Subscription tiers with pricing

### 📱 Mobile Optimization
- Responsive design for all screen sizes
- Optimized for low-data environments
- Touch-friendly interface
- Fast loading times

### 🌍 Cultural Integration
- Swahili and English language support
- Tanzanian Shilling (TZS) pricing
- Local time zones and formats
- Cultural context in content

### 💬 WhatsApp Integration
- Floating WhatsApp button
- Quick message templates
- Contact options
- Working hours display

## Customization

### Colors
The color scheme can be customized in `tailwind.config.js`:
- Primary: Electric blue (#3b82f6)
- Navy: Deep navy (#0f172a)
- Accent colors for different confidence levels

### Content
- Update prediction data in component state
- Modify package pricing in Tanzanian Shillings
- Customize educational content
- Update contact information

## Deployment

### Vercel (Recommended)
1. Connect your GitHub repository to Vercel
2. Set build command: `npm run build`
3. Set output directory: `dist`
4. Deploy automatically on push to main branch

### Netlify
1. Connect your GitHub repository to Netlify
2. Set build command: `npm run build`
3. Set publish directory: `dist`
4. Deploy automatically

### Manual Deployment
1. Run `npm run build`
2. Upload the `dist` folder to your web server
3. Configure your server to serve the built files

## Contributing

1. Fork the repository
2. Create a feature branch: `git checkout -b feature-name`
3. Commit your changes: `git commit -m 'Add feature'`
4. Push to the branch: `git push origin feature-name`
5. Submit a pull request

## License

This project is licensed under the MIT License - see the LICENSE file for details.

## Support

For support and questions:
- Email: support@mikeka-expert.com
- WhatsApp: +255 123 456 789
- Website: https://mikeka-expert.com

## Acknowledgments

- React community for excellent documentation
- Tailwind CSS for the utility-first CSS framework
- Lucide for beautiful icons
- Tanzanian football community for inspiration
