import { useEffect, useState } from "react";

/**
 * Cycles through `words`, typing and deleting each one, mirroring the
 */
export default function useTypewriter(
  words,
  { typeSpeed = 65, deleteSpeed = 35, pause = 1400 } = {},
) {
  const [text, setText] = useState("");

  useEffect(() => {
    let wordIndex = 0;
    let charIndex = 0;
    let deleting = false;
    let timeoutId;

    const tick = () => {
      const current = words[wordIndex];

      if (!deleting) {
        charIndex++;
        if (charIndex > current.length) {
          deleting = true;
          timeoutId = setTimeout(tick, pause);
          return;
        }
      } else {
        charIndex--;
        if (charIndex < 0) {
          deleting = false;
          wordIndex = (wordIndex + 1) % words.length;
          charIndex = 0;
        }
      }

      setText(current.slice(0, charIndex));
      timeoutId = setTimeout(tick, deleting ? deleteSpeed : typeSpeed);
    };

    timeoutId = setTimeout(tick, typeSpeed);
    return () => clearTimeout(timeoutId);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return text;
}
