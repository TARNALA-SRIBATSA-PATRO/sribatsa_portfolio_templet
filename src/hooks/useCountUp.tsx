
import { useState, useEffect } from 'react';

interface UseCountUpProps {
  end: number;
  duration?: number;
  start?: number;
  delay?: number;
}

export const useCountUp = ({ end, duration = 2000, start = 0, delay = 0 }: UseCountUpProps) => {
  const [count, setCount] = useState(start);
  const [hasStarted, setHasStarted] = useState(false);

  const startAnimation = () => {
    if (hasStarted) return;
    setHasStarted(true);
    
    setTimeout(() => {
      const increment = end / (duration / 16);
      let current = start;
      
      const timer = setInterval(() => {
        current += increment;
        if (current >= end) {
          setCount(end);
          clearInterval(timer);
        } else {
          setCount(Math.floor(current));
        }
      }, 16);
    }, delay);
  };

  return { count, startAnimation, hasStarted };
};
