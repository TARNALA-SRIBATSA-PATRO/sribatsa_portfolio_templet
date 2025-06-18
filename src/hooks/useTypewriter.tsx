
import { useState, useEffect } from 'react';

interface UseTypewriterProps {
  text: string;
  speed?: number;
  delay?: number;
}

export const useTypewriter = ({ text, speed = 100, delay = 0 }: UseTypewriterProps) => {
  const [displayText, setDisplayText] = useState('');
  const [isComplete, setIsComplete] = useState(false);
  const [hasStarted, setHasStarted] = useState(false);

  useEffect(() => {
    if (hasStarted) return;
    
    const timeout = setTimeout(() => {
      setHasStarted(true);
      let i = 0;
      const timer = setInterval(() => {
        if (i < text.length) {
          setDisplayText(text.slice(0, i + 1));
          i++;
        } else {
          setIsComplete(true);
          clearInterval(timer);
        }
      }, speed);

      return () => clearInterval(timer);
    }, delay);

    return () => clearTimeout(timeout);
  }, [text, speed, delay, hasStarted]);

  const startAnimation = () => {
    if (!hasStarted) {
      setHasStarted(true);
    }
  };

  return { displayText, startAnimation, isComplete };
};
