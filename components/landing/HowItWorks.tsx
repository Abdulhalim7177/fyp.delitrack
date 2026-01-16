"use client";

import { Card } from "@/components/ui/card";
import { Truck, User, PackageCheck } from "lucide-react";
import { motion } from "framer-motion";

export function HowItWorks() {
  const steps = [
    {
      step: 1,
      title: "Sign Up",
      description: "Create your account in minutes with our simple registration process.",
      icon: User,
    },
    {
      step: 2,
      title: "Create Order",
      description: "Enter pickup and delivery details with our intuitive dashboard.",
      icon: PackageCheck,
    },
    {
      step: 3,
      title: "Track & Deliver",
      description: "Monitor in real-time until delivery with live updates.",
      icon: Truck,
    },
  ];

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.3,
      },
    },
  };

  const itemVariants = {
    hidden: { y: 20, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: {
        duration: 0.8,
        ease: "easeInOut",
      },
    },
  };

  return (
    <section className="w-full py-20 md:py-32">
      <div className="container mx-auto text-center">
        <h2 className="text-3xl md:text-5xl lg:text-6xl font-bold tracking-tight bg-gradient-to-r from-gray-900 via-gray-800 to-gray-900 dark:from-white dark:via-gray-100 dark:to-white bg-clip-text text-transparent">
          Get Started in 3 Simple Steps
        </h2>
        <p className="mt-6 text-lg md:text-xl text-gray-600 dark:text-gray-400 max-w-3xl mx-auto">
          Our streamlined process makes delivery management effortless for everyone.
        </p>

        <motion.div
          className="mt-16 grid grid-cols-1 md:grid-cols-3 gap-8"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
        >
          {steps.map((item) => (
            <motion.div
              key={item.step}
              className="flex flex-col items-center"
              variants={itemVariants}
            >
              <Card className="glass-card flex flex-col items-center p-8 text-center border border-white/20 backdrop-blur-lg w-full">
                <div className="flex items-center justify-center w-16 h-16 rounded-full bg-gradient-to-br from-blue-600 to-purple-600 text-white font-bold text-2xl mx-auto mb-6">
                  {item.step}
                </div>
                <h3 className="text-xl md:text-2xl font-bold text-gray-900 dark:text-white mb-3">
                  {item.title}
                </h3>
                <p className="text-gray-600 dark:text-gray-300">
                  {item.description}
                </p>
              </Card>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
