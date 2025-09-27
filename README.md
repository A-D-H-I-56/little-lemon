# Little Lemon Restaurant

A modern, responsive web application for Little Lemon Mediterranean restaurant built with React and Vite. This application provides a complete dining experience with online ordering, table reservations, and user authentication.

## 🚀 Features

### 🏠 **Homepage**
- Hero section with restaurant introduction
- Featured menu items showcase
- Customer testimonials
- Responsive design for all devices

### 🍽️ **Menu & Ordering**
- Complete menu with categories (Appetizers, Main Courses, Desserts)
- Interactive shopping cart with real-time updates
- Add/remove items with quantity controls
- Global cart accessible from header

### 📅 **Reservations**
- Table selection with animated visualizations
- Multiple table options (2, 4, 6, 8 people)
- Date and time selection
- Form validation and confirmation

### 🔐 **Authentication**
- User registration and login system
- Protected routes for reservations and ordering
- Persistent login sessions
- Profile management with dropdown

### 📱 **Responsive Design**
- Mobile-first approach
- Tablet and desktop optimizations
- Touch-friendly interface
- Consistent styling across devices

## 🛠️ Tech Stack

- **Frontend**: React 19.1.1
- **Routing**: React Router DOM 7.9.1
- **Build Tool**: Vite 7.1.6
- **Styling**: CSS3 with custom properties
- **State Management**: React Context API
- **Development**: ESLint for code quality

## 📦 Installation

### Prerequisites
- Node.js (version 16 or higher)
- npm or yarn package manager

### Setup Instructions

1. **Clone the repository**
   ```bash
   git clone https://github.com/A-D-H-I-56/little-lemon.git
   cd little-lemon
   ```

2. **Install dependencies**
   ```bash
   npm install
   ```

3. **Start the development server**
   ```bash
   npm run dev
   ```

4. **Open your browser**
   Navigate to `http://localhost:5173` (or the port shown in terminal)

## 🏗️ Project Structure

```
little-lemon/
├── public/
│   └── vite.svg
├── src/
│   ├── assets/           # Images and static assets
│   ├── components/       # React components
│   │   ├── Header.jsx
│   │   ├── Footer.jsx
│   │   ├── HeroSection.jsx
│   │   ├── FeaturedSection.jsx
│   │   ├── TestimonialsSection.jsx
│   │   ├── AboutSection.jsx
│   │   ├── MenuPage.jsx
│   │   ├── ReservationsPage.jsx
│   │   ├── OrderOnlinePage.jsx
│   │   ├── LoginPage.jsx
│   │   ├── Cart.jsx
│   │   └── ProtectedRoute.jsx
│   ├── contexts/         # React Context providers
│   │   ├── AuthContext.jsx
│   │   └── CartContext.jsx
│   ├── App.jsx           # Main application component
│   ├── App.css           # Global styles
│   ├── index.css         # Base styles
│   └── main.jsx          # Application entry point
├── package.json
├── vite.config.js
└── README.md
```

## 🎯 Available Scripts

- `npm run dev` - Start development server
- `npm run build` - Build for production
- `npm run preview` - Preview production build
- `npm run lint` - Run ESLint for code quality

## 🔧 Key Components

### Authentication System
- **AuthContext**: Manages user authentication state
- **ProtectedRoute**: Guards routes requiring authentication
- **Login/Register**: Secure user registration and login

### Shopping Cart
- **CartContext**: Global cart state management
- **Cart Component**: Modal-based cart interface
- **Add to Cart**: Seamless item addition from menu

### Table Reservations
- **Animated Table Selection**: Visual table options
- **Form Validation**: Comprehensive form checking
- **Date/Time Picker**: User-friendly scheduling

## 🎨 Design System

### Color Palette
- **Primary Green**: `#495E57` (Dark green for headers, text)
- **Accent Yellow**: `#F4CE14` (Buttons, highlights)
- **Light Gray**: `#EDEFEE` (Backgrounds, cards)
- **Neutral Gray**: `#F2F2F2` (Footer background)

### Typography
- **Font Family**: Karla (Google Fonts)
- **Consistent sizing** across all components
- **Responsive text** scaling

### Components
- **Card-based design** for content sections
- **Rounded corners** (20px border-radius)
- **Consistent spacing** and padding
- **Hover effects** and transitions

## 📱 Responsive Breakpoints

- **Mobile**: < 768px
- **Tablet**: 768px - 1024px
- **Desktop**: > 1024px

## 🔒 Security Features

- **Protected Routes**: Authentication required for sensitive pages
- **Form Validation**: Client-side validation for all forms
- **Secure Storage**: localStorage for user sessions
- **Input Sanitization**: Proper handling of user inputs

## 🚀 Deployment

### Build for Production
```bash
npm run build
```

### Deploy to Vercel
1. Connect your GitHub repository to Vercel
2. Configure build settings:
   - Build Command: `npm run build`
   - Output Directory: `dist`
3. Deploy automatically on push to main branch

### Deploy to Netlify
1. Connect your GitHub repository to Netlify
2. Configure build settings:
   - Build Command: `npm run build`
   - Publish Directory: `dist`
3. Deploy automatically on push to main branch

## 🤝 Contributing

1. Fork the repository
2. Create a feature branch (`git checkout -b feature/amazing-feature`)
3. Commit your changes (`git commit -m 'Add some amazing feature'`)
4. Push to the branch (`git push origin feature/amazing-feature`)
5. Open a Pull Request

### Code Style
- Follow ESLint configuration
- Use meaningful variable names
- Add comments for complex logic
- Maintain consistent formatting

## 📝 License

This project is licensed under the MIT License 

## 👥 Authors

- ADNAN ALAM - https://github.com/A-D-H-I-56



## 📞 Support

If you have any questions or need help, please:
- Open an issue on GitHub
- Contact us at adnan973556@gmail.com
- Check our documentation wiki

---

**Made with ❤️ for Little Lemon Restaurant**