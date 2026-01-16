'use client';

import { useState, useEffect } from 'react';
import Link from "next/link";
import { Facebook, Twitter, Instagram, Linkedin, Package } from "lucide-react";

const footerLinks = {
  product: [
    { name: "Features", href: "#features" },
    { name: "Pricing", href: "#pricing" },
    { name: "API", href: "/docs/api" },
  ],
  company: [
    { name: "About", href: "/about" },
    { name: "Careers", href: "/careers" },
    { name: "Contact", href: "/contact" },
  ],
  resources: [
    { name: "Blog", href: "/blog" },
    { name: "Help Center", href: "/help" },
    { name: "Documentation", href: "/docs" },
  ],
  legal: [
    { name: "Privacy Policy", href: "/privacy" },
    { name: "Terms of Service", href: "/terms" },
  ],
};

const socialLinks = [
  { name: "Facebook", href: "#", icon: Facebook },
  { name: "Twitter", href: "#", icon: Twitter },
  { name: "Instagram", href: "#", icon: Instagram },
  { name: "LinkedIn", href: "#", icon: Linkedin },
];

export function Footer() {
  const [currentYear, setCurrentYear] = useState(new Date().getFullYear());

  useEffect(() => {
    setCurrentYear(new Date().getFullYear());
  }, []);

  return (
    <footer className="w-full py-20 bg-gray-900 text-gray-400 dark">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-12">
          <div className="col-span-2">
            <div className="flex items-center gap-3 mb-6">
              <div className="relative p-3 rounded-2xl bg-gradient-to-br from-blue-600 to-indigo-600 shadow-lg">
                <Package className="h-7 w-7 text-white" />
              </div>
              <span className="font-bold text-2xl text-white">
                Lifterico
              </span>
            </div>
            <p className="text-gray-400 mb-6 max-w-sm">
              Smart Delivery Tracking for Nigerian Businesses.
            </p>
            <div className="flex gap-4">
              {socialLinks.map((link) => (
                <Link
                  href={link.href}
                  key={link.name}
                  className="p-3 rounded-full bg-gray-800 hover:bg-gray-700"
                >
                  <link.icon className="h-5 w-5 text-gray-400" />
                </Link>
              ))}
            </div>
          </div>

          <div>
            <h4 className="font-bold text-lg text-white mb-6">Product</h4>
            <ul className="space-y-3">
              {footerLinks.product.map((link) => (
                <li key={link.name}>
                  <Link href={link.href} className="text-gray-400 hover:text-blue-500">{link.name}</Link>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h4 className="font-bold text-lg text-white mb-6">Company</h4>
            <ul className="space-y-3">
              {footerLinks.company.map((link) => (
                <li key={link.name}>
                  <Link href={link.href} className="text-gray-400 hover:text-blue-500">{link.name}</Link>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h4 className="font-bold text-lg text-white mb-6">Resources</h4>
            <ul className="space-y-3">
              {footerLinks.resources.map((link) => (
                <li key={link.name}>
                  <Link href={link.href} className="text-gray-400 hover:text-blue-500">{link.name}</Link>
                </li>
              ))}
            </ul>
          </div>
        </div>

        <div className="mt-16 pt-8 border-t border-gray-800 flex flex-col md:flex-row justify-between items-center">
          <p className="text-gray-400 text-sm">
            &copy; {currentYear} Lifterico. All rights reserved.
          </p>
          <div className="flex gap-6 mt-4 md:mt-0">
            {footerLinks.legal.map((link) => (
              <Link key={link.name} href={link.href} className="text-gray-400 hover:text-blue-500 text-sm">{link.name}</Link>
            ))}
          </div>
        </div>
      </div>
    </footer>
  );
}
