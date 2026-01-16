"use client";

import Link from "next/link";
import { Button } from "@/components/ui/button";
import { Menu, X, Package } from "lucide-react";
import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ThemeSwitcher } from "../theme-switcher";

export function Navbar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 10);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const menuVariants = {
    hidden: { opacity: 0, y: -20 },
    visible: { opacity: 1, y: 0 },
  };

  return (
    <nav
      className={`w-full sticky top-0 z-50 transition-all duration-300 ${
        scrolled ? "glass-effect backdrop-blur-xl py-3 border-b border-white/10" : "py-4"
      }`}
    >
      <div className="container mx-auto flex justify-between items-center px-4 md:px-6">
        <Link href="/" className="flex items-center gap-3 group">
          <div className="relative p-3 rounded-2xl bg-gradient-to-br from-blue-600 to-indigo-600 shadow-lg group-hover:scale-110 transition-transform duration-300">
            <Package className="h-7 w-7 text-white" />
          </div>
          <span className="font-bold text-2xl text-gray-900 dark:text-white">
            Lifterico
          </span>
        </Link>

        <div className="hidden md:flex gap-6 items-center">
          <Link href="#features" className="text-gray-600 dark:text-gray-300 hover:text-blue-500">Features</Link>
          <Link href="#how-it-works" className="text-gray-600 dark:text-gray-300 hover:text-blue-500">How it Works</Link>
          <Link href="#pricing" className="text-gray-600 dark:text-gray-300 hover:text-blue-500">Pricing</Link>
          <Link href="#testimonials" className="text-gray-600 dark:text-gray-300 hover:text-blue-500">Testimonials</Link>
        </div>

        <div className="hidden md:flex gap-4 items-center">
          <Link href="/auth/login">
            <Button variant="ghost">Login</Button>
          </Link>
          <Link href="/auth/sign-up">
            <Button className="bg-blue-500 hover:bg-blue-600">Get Started</Button>
          </Link>
          <ThemeSwitcher />
        </div>

        <div className="md:hidden flex items-center">
          <ThemeSwitcher />
          <Button
            variant="ghost"
            className="p-2"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
          >
            {isMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
          </Button>
        </div>
      </div>

      <AnimatePresence>
        {isMenuOpen && (
          <motion.div
            className="md:hidden glass-effect backdrop-blur-xl mt-4 mx-4 rounded-2xl border border-white/20"
            variants={menuVariants}
            initial="hidden"
            animate="visible"
            exit="hidden"
          >
            <div className="flex flex-col p-6 space-y-4">
              <Link href="#features" className="text-gray-600 dark:text-gray-300" onClick={() => setIsMenuOpen(false)}>Features</Link>
              <Link href="#how-it-works" className="text-gray-600 dark:text-gray-300" onClick={() => setIsMenuOpen(false)}>How it Works</Link>
              <Link href="#pricing" className="text-gray-600 dark:text-gray-300" onClick={() => setIsMenuOpen(false)}>Pricing</Link>
              <Link href="#testimonials" className="text-gray-600 dark:text-gray-300" onClick={() => setIsMenuOpen(false)}>Testimonials</Link>
              <div className="border-t border-white/20 pt-4 mt-4">
                <div className="flex flex-col gap-3">
                  <Link href="/auth/login">
                    <Button variant="outline" className="w-full" onClick={() => setIsMenuOpen(false)}>Login</Button>
                  </Link>
                  <Link href="/auth/sign-up">
                    <Button className="w-full bg-blue-500">Get Started</Button>
                  </Link>
                </div>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
}
