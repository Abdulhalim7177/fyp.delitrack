"use client";

import {
  Card,
  CardContent,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import {
  MapPin, Target, Camera, CreditCard, BarChart3, MessageSquare
} from "lucide-react";
import { motion } from "framer-motion";

const features = [
  {
    title: "Real-time Tracking",
    icon: MapPin,
    description: "Track every delivery live on interactive maps with live location updates.",
    gradient: "from-blue-500 to-cyan-400",
  },
  {
    title: "Smart Assignment",
    icon: Target,
    description: "AI-powered auto-assignment of nearest available rider based on location and rating.",
    gradient: "from-purple-500 to-pink-400",
  },
  {
    title: "Proof of Delivery",
    icon: Camera,
    description: "Photo verification, OTP confirmation, or digital signature validation.",
    gradient: "from-green-500 to-emerald-400",
  },
  {
    title: "Secure Payments",
    icon: CreditCard,
    description: "Seamless Paystack integration with escrow protection for secure transactions.",
    gradient: "from-orange-500 to-amber-400",
  },
  {
    title: "Analytics Dashboard",
    icon: BarChart3,
    description: "Comprehensive insights and analytics to optimize and grow your delivery business.",
    gradient: "from-red-500 to-rose-400",
  },
  {
    title: "SMS Notifications",
    icon: MessageSquare,
    description: "Automated SMS alerts keep customers and riders informed at every delivery stage.",
    gradient: "from-indigo-500 to-violet-400",
  },
];

export function Features() {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
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
    hover: {
      scale: 1.05,
      transition: {
        duration: 0.3,
      },
    }
  };

  return (
    <section className="w-full py-20 md:py-32">
      <div className="container mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-5xl lg:text-6xl font-bold tracking-tight bg-gradient-to-r from-gray-900 via-gray-800 to-gray-900 dark:from-white dark:via-gray-100 dark:to-white bg-clip-text text-transparent">
            Everything You Need for Efficient Deliveries
          </h2>
          <p className="mt-6 text-lg md:text-xl text-gray-600 dark:text-gray-400 max-w-3xl mx-auto">
            A powerful, modern platform to manage your deliveries, riders, and customers with cutting-edge features.
          </p>
        </div>

        <motion.div
          className="grid gap-8 md:grid-cols-2 lg:grid-cols-3"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
        >
          {features.map((feature) => (
            <motion.div
              key={feature.title}
              variants={itemVariants}
              whileHover="hover"
            >
              <Card className="glass-card h-full cursor-pointer border border-white/20 backdrop-blur-lg relative overflow-hidden group">
                <CardHeader className="flex flex-row items-center gap-4 pb-4">
                  <div className={`relative p-3 rounded-xl bg-gradient-to-br ${feature.gradient} shadow-lg`}>
                    <feature.icon className="h-6 w-6 text-white" />
                  </div>
                  <CardTitle className="text-xl font-bold text-gray-900 dark:text-white">
                    {feature.title}
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-gray-600 dark:text-gray-300">
                    {feature.description}
                  </p>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
