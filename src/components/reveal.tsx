import { motion, useReducedMotion } from "framer-motion";
import type { ReactNode } from "react";

export function Reveal({
  children,
  delay = 0,
  y = 28,
  className,
}: {
  children: ReactNode;
  delay?: number;
  y?: number;
  className?: string;
}) {
  const reduce = useReducedMotion();
  if (reduce) return <div className={className}>{children}</div>;
  return (
    <motion.div
      className={className}
      initial={{ opacity: 0, y }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-60px" }}
      transition={{ duration: 0.65, delay, ease: [0.22, 1, 0.36, 1] }}
    >
      {children}
    </motion.div>
  );
}

export function Stagger({
  children,
  className,
  gap = 0.08,
}: {
  children: ReactNode;
  className?: string;
  gap?: number;
}) {
  return (
    <motion.div
      className={className}
      initial="hidden"
      whileInView="show"
      viewport={{ once: true, margin: "-60px" }}
      variants={{ hidden: {}, show: { transition: { staggerChildren: gap } } }}
    >
      {children}
    </motion.div>
  );
}

export function StaggerItem({
  children,
  className,
}: {
  children: ReactNode;
  className?: string;
}) {
  return (
    <motion.div
      className={className}
      variants={{
        hidden: { opacity: 0, y: 26, scale: 0.985 },
        show: {
          opacity: 1,
          y: 0,
          scale: 1,
          transition: { duration: 0.55, ease: [0.22, 1, 0.36, 1] },
        },
      }}
    >
      {children}
    </motion.div>
  );
}

export function SectionHeader({
  kicker,
  title,
  text,
  dark = false,
}: {
  kicker: string;
  title: string;
  text: string;
  dark?: boolean;
}) {
  return (
    <Reveal className="mx-auto max-w-3xl px-4 text-center sm:px-6">
      <p className="section-kicker">{kicker}</p>
      <h2
        className={`mt-4 font-display text-3xl font-bold leading-tight sm:text-5xl ${
          dark ? "text-primary-foreground" : "text-foreground"
        }`}
      >
        {title}
      </h2>
      <p
        className={`mx-auto mt-5 max-w-2xl text-sm leading-7 sm:text-base ${
          dark ? "text-primary-foreground/60" : "text-muted-foreground"
        }`}
      >
        {text}
      </p>
    </Reveal>
  );
}
