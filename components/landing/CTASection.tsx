"use client";

import { Button } from "@/components/ui/button";
import Link from "next/link";
import { Rocket } from "lucide-react";
import { motion } from "framer-motion";

export function CTASection() {
  return (
    <section className="w-full py-20 md:py-32">
      <div className="container mx-auto flex flex-col items-center text-center">
        <motion.div
          initial={{ y: 20, opacity: 0 }}
          whileInView={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.8, ease: "easeInOut" }}
          viewport={{ once: true }}
        >
          <div className="inline-flex items-center gap-2 bg-gray-100 dark:bg-gray-800 px-4 py-2 rounded-full mb-6">
            <Rocket className="h-5 w-5 text-blue-500" />
            <span className="text-sm font-semibold text-blue-500">
              Ready to Start?
            </span>
          </div>

          <h2 className="text-3xl md:text-5xl lg:text-6xl font-bold tracking-tight bg-gradient-to-r from-gray-900 via-gray-800 to-gray-900 dark:from-white dark:via-gray-100 dark:to-white bg-clip-text text-transparent">
            Ready to Transform Your Deliveries?
          </h2>
          <p className="mt-6 text-lg md:text-xl text-gray-600 dark:text-gray-400 max-w-3xl mx-auto">
            Join thousands of businesses already using Lifterico to streamline their delivery operations.
          </p>

          <div className="mt-12 flex flex-col sm:flex-row gap-6 justify-center">
            <Link href="/auth/sign-up">
              <Button size="lg" className="bg-blue-500 hover:bg-blue-600 text-white px-8 py-6 text-lg font-semibold rounded-xl">
                Get Started Free
              </Button>
            </Link>
            <Link href="/contact-sales">
              <Button size="lg" variant="outline" className="px-8 py-6 text-lg font-semibold rounded-xl">
                Contact Sales
              </Button>
            </Link>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
