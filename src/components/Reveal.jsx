import { useRef } from 'react'
import { motion, useInView } from 'framer-motion'

export default function Reveal({ children, delay = 0, y = 24 }) {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: '-10% 0px -10% 0px' })

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y }}
      animate={isInView ? { opacity: 1, y: 0 } : {}}
      transition={{ duration: 0.7, ease: [0.18, 0.75, 0.25, 0.95], delay }}
    >
      {children}
    </motion.div>
  )
}
