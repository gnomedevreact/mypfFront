"use client";

import { AnimatePresence, motion } from "framer-motion";
import { twMerge as tw } from "tailwind-merge";

import styles from "./Section.module.scss";

interface ISection {
  children: React.ReactNode;
  className?: string;
}

export const Section = ({ children, className }: ISection) => {
  return (
    <section className={tw(styles.section, className)}>{children}</section>
  );
};

export const AnimatedSection = ({ children, className }: ISection) => {
  return (
    <AnimatePresence>
      <motion.section
        className={tw(styles.section, className)}
        initial={{ opacity: 0, y: 15 }}
        whileInView={{ opacity: 1, y: 0 }}
        exit={{ opacity: 0, y: 15 }}
        transition={{ duration: 0.6, ease: [0.17, 0.67, 0.83, 0.91] }}
        viewport={{ amount: 0.15, once: true }}
      >
        {children}
      </motion.section>
    </AnimatePresence>
  );
};
