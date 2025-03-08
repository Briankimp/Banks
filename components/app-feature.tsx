"use client"

import { motion } from "framer-motion"
import { Button } from "@/components/ui/button"
import { type ReactNode, useState } from "react"

interface AppFeatureProps {
  icon: ReactNode
  title: string
  description: string
}

export default function AppFeature({ icon, title, description }: AppFeatureProps) {
  const [expanded, setExpanded] = useState(false)

  return (
    <motion.div
      className="bg-white p-6 rounded-lg shadow-sm hover:shadow-md transition-shadow"
      whileHover={{ y: -5 }}
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5 }}
    >
      <div className="mb-4">{icon}</div>
      <h3 className="text-xl font-bold mb-2">{title}</h3>
      <p className="text-muted-foreground mb-4">{description}</p>

      {expanded && (
        <motion.div
          initial={{ opacity: 0, height: 0 }}
          animate={{ opacity: 1, height: "auto" }}
          exit={{ opacity: 0, height: 0 }}
          className="mt-4 text-sm text-muted-foreground"
        >
          <p>
            We partner with local farmers and vendors to bring you the freshest products. Our technology ensures fast
            delivery while maintaining quality from store to door.
          </p>
        </motion.div>
      )}

      <Button
        variant="ghost"
        size="sm"
        onClick={() => setExpanded(!expanded)}
        className="text-green-500 hover:text-green-600 hover:bg-green-50 p-0 mt-2"
      >
        {expanded ? "Show Less" : "Learn More"}
      </Button>
    </motion.div>
  )
}

