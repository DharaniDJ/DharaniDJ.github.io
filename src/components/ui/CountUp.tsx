import { animate, useInView, useReducedMotion } from 'framer-motion';
import { useEffect, useRef, useState } from 'react';

interface CountUpProps {
  value: number;
  decimals?: number;
  prefix?: string;
  suffix?: string;
}

export default function CountUp({ value, decimals = 0, prefix = '', suffix = '' }: CountUpProps) {
  const ref = useRef<HTMLSpanElement>(null);
  const inView = useInView(ref, { once: true });
  const reduceMotion = useReducedMotion();
  const [current, setCurrent] = useState<number | null>(null);

  useEffect(() => {
    if (!inView || reduceMotion) return;
    const controls = animate(0, value, {
      duration: 0.9,
      ease: 'easeOut',
      onUpdate: setCurrent,
    });
    return () => controls.stop();
  }, [inView, reduceMotion, value]);

  const format = (n: number) => `${prefix}${n.toFixed(decimals)}${suffix}`;
  const shown = reduceMotion || current === null ? value : current;

  return (
    <span ref={ref}>
      <span aria-hidden="true">{format(shown)}</span>
      <span className="sr-only">{format(value)}</span>
    </span>
  );
}
