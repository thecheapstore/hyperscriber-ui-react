import React, { useEffect, useRef, useState } from 'react';
import { useInView, animate } from 'framer-motion';

interface CountUpProps {
  value: number;
  prefix?: string;
  suffix?: string;
  duration?: number;
}

const formatNumber = (n: number) => {
  const rounded = Number.isInteger(n) ? n : Math.round(n * 10) / 10;
  return rounded.toLocaleString('en-US');
};

const CountUp = ({ value, prefix = '', suffix = '', duration = 1.6 }: CountUpProps) => {
  const ref = useRef<HTMLSpanElement>(null);
  const inView = useInView(ref, { once: true, amount: 0.6 });
  const [display, setDisplay] = useState('0');

  useEffect(() => {
    if (!inView) return;
    const controls = animate(0, value, {
      duration,
      ease: [0.22, 1, 0.36, 1],
      onUpdate: (latest) => setDisplay(formatNumber(latest)),
    });
    return () => controls.stop();
  }, [inView, value, duration]);

  return (
    <span ref={ref}>
      {prefix}
      {display}
      {suffix}
    </span>
  );
};

export default CountUp;
