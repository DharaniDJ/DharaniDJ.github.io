import { motion, useReducedMotion } from 'framer-motion';
import type { ReactNode } from 'react';

type RevealTag = 'div' | 'li' | 'article';

interface RevealProps {
  children: ReactNode;
  className?: string;
  delay?: number;
  as?: RevealTag;
}

const MOTION_TAGS = {
  div: motion.div,
  li: motion.li,
  article: motion.article,
} as const;

export default function Reveal({ children, className, delay = 0, as = 'div' }: RevealProps) {
  const reduceMotion = useReducedMotion();

  if (reduceMotion) {
    const Tag = as;
    return <Tag className={className}>{children}</Tag>;
  }

  const MotionTag = MOTION_TAGS[as];
  return (
    <MotionTag
      className={className}
      initial={{ opacity: 0, y: 16 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.1 }}
      transition={{ duration: 0.5, ease: 'easeOut', delay }}
    >
      {children}
    </MotionTag>
  );
}
