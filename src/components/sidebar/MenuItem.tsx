import * as React from 'react'
import { motion } from 'framer-motion'

const variants = {
  open: {
    y: 0,
    opacity: 1,
    transition: {
      y: { stiffness: 1000, velocity: -100 },
    },
  },
  closed: {
    y: 50,
    opacity: 0,
    transition: {
      y: { stiffness: 1000 },
    },
  },
}

const buttons = [
  'Home',
  'About Us',
  'What We Do',
  'Events',
  'Our Team',
  'Contact Us',
]
interface MenuItemProps {
  i: number // Explicitly type the 'i' parameter
}

export const MenuItem: React.FC<MenuItemProps> = ({ i }) => {
  return (
    <motion.li variants={variants} whileTap={{ scale: 0.95 }}>
      <div className="text-placeholder">{buttons[i]}</div>
    </motion.li>
  )
}
