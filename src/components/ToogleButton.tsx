'use client'
import * as React from 'react'
import { useTheme } from 'next-themes'
import { Sun, Moon } from 'lucide-react'

const Button = ({ children, onClick, className = '' }) => (
  <button
    className={`rounded-md p-2 transition-colors ${className}`}
    onClick={onClick}
  >
    {children}
  </button>
)

export function ThemeToggle() {
  const { setTheme, theme } = useTheme()
  return (
    <Button
      className="relative"
      onClick={() => setTheme(theme === 'light' ? 'dark' : 'light')}
    >
      <Sun className="h-[1.2rem] w-[1.2rem] rotate-0 scale-100 transition-all dark:-rotate-90 dark:scale-0" />
      <Moon className="absolute left-2 top-2 h-[1.2rem] w-[1.2rem] rotate-90 scale-0 transition-all dark:rotate-0 dark:scale-100" />
      <span className="sr-only">Toggle theme</span>
    </Button>
  )
}
