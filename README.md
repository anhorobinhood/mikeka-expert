# Mikeka Expert - Football Prediction Website

A modern football prediction website built with React, Vite, and Tailwind CSS.

## 🚀 Tech Stack

- **React** - Frontend framework
- **Vite** - Build tool and development server
- **Tailwind CSS** - Utility-first CSS framework
- **JavaScript** - No TypeScript, pure JS/JSX

## 🎨 Design Features

- **Background**: Light yellow (`bg-yellow-200`)
- **Cards**: White with rounded corners and shadow
- **Headings**: Yellow theme (`text-yellow-700`)
- **Buttons**: Yellow gradient with hover effects
- **Responsive**: Mobile-first design

## 📦 Components

### Hero.jsx
- Welcome section with "Mikeka Expert" branding
- Tagline about logic-driven betting
- Call-to-action button ("Explore Tips")

### Tips.jsx
- List of static betting tips
- Each tip in a stylized card with:
  - Match information
  - Odds and confidence levels
  - Reasoning for the prediction

### VIP.jsx
- Premium section for exclusive tips
- Locked/blurred cards with subscription prompts
- Subscription pricing options

## 🛠️ Getting Started

1. **Install dependencies**:
   ```bash
   npm install
   ```

2. **Start development server**:
   ```bash
   npm run dev
   ```

3. **Build for production**:
   ```bash
   npm run build
   ```

## 📁 Project Structure

```
src/
├── components/
│   ├── Hero.jsx      # Landing section
│   ├── Tips.jsx      # Free betting tips
│   └── VIP.jsx       # Premium content
├── App.jsx           # Main app component
├── index.css         # Tailwind CSS imports
└── main.jsx          # App entry point
```

## 🎯 Features

- **Responsive Design**: Works on all device sizes
- **Modern UI**: Clean, professional appearance
- **Interactive Elements**: Hover effects and transitions
- **Modular Structure**: Easy to extend and maintain
- **No Logic**: Pure UI components ready for data integration

## 🔧 Customization

The design uses a consistent yellow theme throughout. To modify colors, update the Tailwind classes in each component:

- Background: `bg-yellow-200`
- Primary text: `text-yellow-700`
- Buttons: `bg-yellow-600 hover:bg-yellow-700`
- Cards: `bg-white` with `shadow-2xl`

## 📝 Next Steps

This is a scaffolded frontend ready for:
- Data integration
- API connections
- User authentication
- Payment processing
- Real-time updates