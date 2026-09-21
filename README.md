# Sweet Bites - Premium E-Commerce Website

A modern, premium, and highly visual React e-commerce website for a colorful D2C/FMCG food brand. Built with Vite, React, Tailwind CSS, and modern best practices.

## 🎨 Design System

### Color Palette
- **Primary**: Orange (#FF6B35)
- **Primary Dark**: Dark Orange (#E64A19)
- **Primary Light**: Light Orange (#FFA726)
- **Background**: White (#FFFFFF)
- **Text**: Dark neutrals with orange accents

### Typography
- **Font Family**: Poppins (Google Fonts)
- **Headings**: Bold, large, orange
- **Body**: Clean and highly readable

## ✨ Features

### Pages
- **Homepage**: Hero section, categories, best sellers, promotional banners, new arrivals, brand story
- **Collection Page**: Product listings with filters (category, price) and sorting options
- **Product Detail Page**: Image gallery, variant selection, quantity selector, tabs for details, related products
- **Cart Drawer**: Slide-out cart with quantity controls, free shipping progress bar

### Components
- Reusable UI components (Button, Badge, Toast)
- Product Card with wishlist, ratings, and add to cart
- Header with announcement bar, navigation, search, and cart
- Footer with newsletter signup and social links
- Cart functionality with localStorage persistence

### Functionality
- **Shopping Cart**: Add/remove items, update quantities, persistent storage
- **Filtering & Sorting**: Filter by category and price, sort by various criteria
- **Responsive Design**: Optimized for mobile, tablet, and desktop
- **Product Variants**: Size/variant selection with dynamic pricing
- **Image Gallery**: Multiple product images with thumbnail navigation

## 🚀 Getting Started

### Prerequisites
- Node.js 16+ and npm

### Installation

1. Navigate to the project directory:
```bash
cd sweet-bites
```

2. Install dependencies:
```bash
npm install
```

3. Start the development server:
```bash
npm run dev
```

4. Open your browser and visit:
```
http://localhost:5173
```

## 📁 Project Structure

```
sweet-bites/
├── src/
│   ├── components/
│   │   ├── layout/          # Header, Footer
│   │   ├── home/            # Homepage components
│   │   ├── product/         # ProductCard, etc.
│   │   ├── collection/      # Collection page components
│   │   ├── cart/            # CartDrawer
│   │   └── ui/              # Reusable UI components
│   ├── pages/               # Page components
│   │   ├── HomePage.jsx
│   │   ├── CollectionPage.jsx
│   │   └── ProductDetailPage.jsx
│   ├── data/                # Mock data
│   │   └── products.js
│   ├── context/             # React Context
│   │   └── CartContext.jsx
│   ├── App.jsx              # Main app component
│   ├── main.jsx             # Entry point
│   └── index.css            # Global styles
├── tailwind.config.js
└── package.json
```

## 🛍️ Mock Data

The application uses mock product data with 12 realistic food/candy products across categories:
- Jellies
- Gummies
- Chocolates
- Candy
- Gift Boxes
- New Arrivals

Each product includes:
- Multiple images
- Variants (different sizes/quantities)
- Pricing and discounts
- Ratings and reviews
- Ingredients and nutrition info
- Category classification

## 🎯 Key Routes

- `/` - Homepage
- `/collections/all` - All products
- `/collections/:handle` - Category-specific collections
- `/collections/best-sellers` - Best selling products
- `/collections/new-arrivals` - New arrivals
- `/products/:slug` - Product detail page
- `/about` - About page (placeholder)
- `/contact` - Contact page (placeholder)
- `/faq` - FAQ page (placeholder)

## 🎨 UI/UX Highlights

### Visual Identity
- Bright, playful, and premium design
- Strong orange and white color scheme
- Modern, clean typography
- High-quality product imagery

### Interactions
- Smooth hover effects on cards and buttons
- Add to cart with cart drawer animation
- Image zoom on product detail
- Responsive mobile menu
- Wishlist heart animation
- Free shipping progress indicator

### Mobile Optimization
- 2-column product grid on mobile
- Horizontal category scrolling
- Sticky add to cart button on product pages
- Mobile drawer navigation
- Touch-friendly UI elements

## 🔧 Tech Stack

- **React 18** - UI library
- **Vite** - Build tool and dev server
- **React Router DOM** - Client-side routing
- **Tailwind CSS** - Utility-first CSS framework
- **Lucide React** - Icon library
- **Context API** - State management for cart

## 📦 Future Enhancements

This project is structured to easily integrate with:
- **Shopify Storefront API** - Replace mock data with real Shopify products
- **Payment Processing** - Stripe/PayPal integration
- **User Authentication** - Customer accounts and order history
- **Product Reviews** - Customer review system
- **Wishlist Persistence** - Save wishlists to database
- **Search Functionality** - Full-text product search

## 🎭 Design Philosophy

The website embodies:
- **Bright + Playful**: Vibrant colors and fun product imagery
- **Premium**: High-quality design and attention to detail
- **Fresh**: Clean layouts with ample white space
- **Appetizing**: Food photography and color psychology
- **Modern**: Contemporary design patterns and interactions

## 📱 Responsive Breakpoints

- Mobile: 320px - 767px
- Tablet: 768px - 1023px
- Desktop: 1024px - 1439px
- Large Desktop: 1440px+

## 🤝 Contributing

This is a demo project showcasing modern e-commerce UI/UX patterns. Feel free to use it as a reference or starting point for your own projects.

## 📄 License

MIT License - feel free to use this project for learning or as a base for your own work.

---

Built with ❤️ and lots of orange! 🍊
