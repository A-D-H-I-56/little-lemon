import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import { AuthProvider } from "./contexts/AuthContext";
import { CartProvider } from "./contexts/CartContext";
import Header from "./components/Header";
import Footer from "./components/Footer";
import HeroSection from "./components/HeroSection";
import FeaturedSection from "./components/FeaturedSection";
import TestimonialsSection from "./components/TestimonialsSection";
import AboutSection from "./components/AboutSection";
import MenuPage from "./components/MenuPage";
import ReservationsPage from "./components/ReservationsPage";
import OrderOnlinePage from "./components/OrderOnlinePage";
import LoginPage from "./components/LoginPage";
import ProtectedRoute from "./components/ProtectedRoute";
import "./App.css";

const App = () => {
  return (
    <AuthProvider>
      <CartProvider>
        <Router>
          <Header />

          <Routes>
            {/* Homepage */}
            <Route
              path="/"
              element={
                <>
                  <HeroSection />
                  <FeaturedSection />
                  <TestimonialsSection />
                </>
              }
            />

            {/* About Page */}
            <Route path="/about" element={<AboutSection />} />
            
            {/* Menu Page */}
            <Route path="/menu" element={<MenuPage />} />
            
            {/* Protected Reservations Page */}
            <Route 
              path="/reservations" 
              element={
                <ProtectedRoute>
                  <ReservationsPage />
                </ProtectedRoute>
              } 
            />
            
            {/* Protected Order Online Page */}
            <Route 
              path="/order" 
              element={
                <ProtectedRoute>
                  <OrderOnlinePage />
                </ProtectedRoute>
              } 
            />
            
            {/* Login Page */}
            <Route path="/login" element={<LoginPage />} />
          </Routes>

          <Footer />
        </Router>
      </CartProvider>
    </AuthProvider>
  );
};

export default App;
