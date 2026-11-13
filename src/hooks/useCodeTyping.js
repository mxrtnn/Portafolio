import { useEffect, useState } from "react";
import { codeSources } from "../data/content";

export function useCodeTyping(activeTab) {
  const [html, setHtml] = useState("");
  useEffect(() => {
    const source = codeSources[activeTab];
    // Treat tags and entities as complete tokens to preserve syntax highlighting.
    const tokens = source.match(/<[^>]+>|&[^;]+;|[\s\S]/g) || [];
    let position = 0;
    let output = "";
    let timeout;
    function tick() {
      while (position < tokens.length) {
        const token = tokens[position++];
        output += token;
        if (!token.startsWith("<")) break;
      }
      setHtml(output);
      if (position < tokens.length) timeout = setTimeout(tick, 25);
    }
    tick();
    return () => clearTimeout(timeout);
  }, [activeTab]);
  return html;
}
