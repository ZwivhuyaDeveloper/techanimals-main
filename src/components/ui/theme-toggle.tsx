"use client";

import { useTheme } from '@/contexts/ThemeContext';
import { Moon, Sun } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';

export function ThemeToggle({ className }: { className?: string }) {
  const { theme, toggleTheme, isDark } = useTheme();
  
  return (
    <button
      onClick={toggleTheme}
      className={cn(
        "relative h-9 w-9 rounded-full flex items-center justify-center",
        "bg-gray-100 hover:bg-gray-200 dark:bg-gray-800 dark:hover:bg-gray-700",
        "focus:outline-none focus:ring-2 focus:ring-offset-2",
        "focus:ring-primary/50 dark:focus:ring-primary/50",
        "focus:ring-offset-white dark:focus:ring-offset-gray-900",
        "transition-all duration-200",
        className
      )}
      aria-label={`Switch to ${isDark ? 'light' : 'dark'} mode`}
      title={`Switch to ${isDark ? 'light' : 'dark'} mode`}
    >
      <AnimatePresence mode="wait" initial={false}>
        <motion.div
          key={theme}
          initial={{ opacity: 0, scale: 0.5, rotate: 90 }}
          animate={{ opacity: 1, scale: 1, rotate: 0 }}
          exit={{ opacity: 0, scale: 0.5, rotate: -90 }}
          transition={{ duration: 0.2 }}
          className="flex items-center justify-center"
        >
          {isDark ? (
            <Sun className="h-4 w-4 text-yellow-300" />
          ) : (
            <Moon className="h-4 w-4 text-gray-600 dark:text-gray-300" />
          )}
        </motion.div>
      </AnimatePresence>
    </button>
  );
}

function cn(...classes: (string | undefined)[]) {
  return classes.filter(Boolean).join(' ');
}