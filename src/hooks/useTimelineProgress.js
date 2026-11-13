import { useEffect, useState } from "react";

export function useTimelineProgress() {
  const [progress, setProgress] = useState(0);
  useEffect(() => {
    let frame;
    function update() {
      const timeline = document.getElementById("timeline-vertical");
      if (!timeline) return;
      const { top, height } = timeline.getBoundingClientRect();
      setProgress(
        Math.max(
          0,
          Math.min(100, ((window.innerHeight * 0.75 - top) / height) * 100),
        ),
      );
    }
    function schedule() {
      cancelAnimationFrame(frame);
      frame = requestAnimationFrame(update);
    }
    update();
    window.addEventListener("scroll", schedule, { passive: true });
    window.addEventListener("resize", schedule);
    return () => {
      cancelAnimationFrame(frame);
      window.removeEventListener("scroll", schedule);
      window.removeEventListener("resize", schedule);
    };
  }, []);
  return progress;
}
