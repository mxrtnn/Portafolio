import { useEffect, useState } from "react";
import { typewriterWords } from "../data/content";

export function useTypewriter(language) {
  const [text, setText] = useState("");
  useEffect(() => {
    let wordIndex = 0;
    let position = 0;
    let deleting = false;
    let timeout;
    setText("");
    function tick() {
      const word = typewriterWords[language][wordIndex];
      position += deleting ? -1 : 1;
      setText(word.slice(0, position));
      let delay = deleting ? 50 : 100;
      if (position === word.length) {
        deleting = true;
        delay = 2000;
      } else if (position === 0) {
        deleting = false;
        wordIndex = (wordIndex + 1) % typewriterWords[language].length;
      }
      timeout = setTimeout(tick, delay);
    }
    tick();
    return () => clearTimeout(timeout);
  }, [language]);
  return text;
}
