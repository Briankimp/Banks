"use client"

import { motion } from "framer-motion"
import Image from "next/image"

export default function MobileAppPreview() {
  return (
    <motion.div
      className="relative"
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.8, delay: 0.2 }}
    >
      <motion.div
        className="relative z-10"
        animate={{ y: [0, -10, 0] }}
        transition={{ repeat: Number.POSITIVE_INFINITY, duration: 4, ease: "easeInOut" }}
      >
        <Image
          src="https://images.unsplash.com/photo-1601784551446-20c9e07cdbdb?q=80&w=1926&auto=format&fit=crop"
          alt="Mobile app preview"
          width={300}
          height={600}
          className="rounded-3xl shadow-xl"
        />
      </motion.div>
      <motion.div
        className="absolute -bottom-6 left-1/2 -translate-x-1/2 w-[250px] h-[40px] bg-black/20 rounded-full blur-xl z-0"
        animate={{
          width: ["250px", "230px", "250px"],
          opacity: [0.2, 0.3, 0.2],
        }}
        transition={{ repeat: Number.POSITIVE_INFINITY, duration: 4, ease: "easeInOut" }}
      />
    </motion.div>
  )
}

