import { useEffect, useId, useRef, useState } from "react";
import { usePortfolio } from "../context/PortfolioContext";
import "../styles/hero-orbit.css";

const objects = [
  { label: "React", logo: "react", lane: 0, phase: -72, color: "#65d8ff" },
  { label: "∑", lane: 0, phase: 10, color: "#c1a0ff" },
  { label: "</>", lane: 0, phase: 118, color: "#67d9ff" },
  { label: "π", lane: 0, phase: 204, color: "#8cafff" },
  { label: "Python", logo: "python", lane: 1, phase: 18, color: "#87beff" },
  { label: "∫", lane: 1, phase: 178, color: "#bf9aff" },
  { label: "CPU", chip: true, lane: 2, phase: 258, color: "#78e7e0" },
  { label: "λ", lane: 2, phase: 95, color: "#a795ff" },
];
const lanes = [
  { rx: 225, ry: 225, tilt: 0, speed: 0.105 },
  { rx: 245, ry: 135, tilt: -30, speed: -0.13 },
  { rx: 235, ry: 154, tilt: 34, speed: 0.085 },
];

export default function HeroOrbit() {
  const { language } = usePortfolio();
  const en = language === "en";
  const uid = useId();
  const [paused, setPaused] = useState(false);
  const [reduced, setReduced] = useState(
    () => window.matchMedia("(prefers-reduced-motion: reduce)").matches,
  );
  const fieldRef = useRef(null);
  const stageRef = useRef(null);
  const nodeRefs = useRef([]);
  const secondsRef = useRef(0);
  const pointerRef = useRef({ x: 0, y: 0 });

  useEffect(() => {
    const media = window.matchMedia("(prefers-reduced-motion: reduce)");
    const update = () => setReduced(media.matches);
    media.addEventListener("change", update);
    return () => media.removeEventListener("change", update);
  }, []);

  useEffect(() => {
    let frame;
    let last = null;
    let visible = true;
    let tiltX = 0;
    let tiltY = 0;
    function paint() {
      objects.forEach((object, index) => {
        const lane = lanes[object.lane];
        const angle =
          (object.phase * Math.PI) / 180 + secondsRef.current * lane.speed;
        const rotation = (lane.tilt * Math.PI) / 180;
        const x = lane.rx * Math.cos(angle);
        const y = lane.ry * Math.sin(angle);
        const px = 270 + x * Math.cos(rotation) - y * Math.sin(rotation);
        const py = 270 + x * Math.sin(rotation) + y * Math.cos(rotation);
        const scale = object.lane === 0 ? 1 : 0.88 + 0.12 * Math.sin(angle);
        nodeRefs.current[index]?.setAttribute(
          "transform",
          `translate(${px.toFixed(2)} ${py.toFixed(2)}) scale(${scale.toFixed(3)})`,
        );
      });
      tiltX += ((reduced ? 0 : pointerRef.current.y * -5) - tiltX) * 0.07;
      tiltY += ((reduced ? 0 : pointerRef.current.x * 5) - tiltY) * 0.07;
      fieldRef.current?.style.setProperty(
        "--orbit-x",
        `${tiltX.toFixed(2)}deg`,
      );
      fieldRef.current?.style.setProperty(
        "--orbit-y",
        `${tiltY.toFixed(2)}deg`,
      );
    }
    function tick(now) {
      if (last !== null) secondsRef.current += Math.min(now - last, 64) / 1000;
      last = now;
      paint();
      frame = requestAnimationFrame(tick);
    }
    function sync() {
      cancelAnimationFrame(frame);
      last = null;
      if (!paused && !reduced && visible && !document.hidden)
        frame = requestAnimationFrame(tick);
      else paint();
    }
    const observer = new IntersectionObserver(
      ([entry]) => {
        visible = entry.isIntersecting;
        sync();
      },
      { rootMargin: "40px" },
    );
    observer.observe(stageRef.current);
    document.addEventListener("visibilitychange", sync);
    paint();
    sync();
    return () => {
      cancelAnimationFrame(frame);
      observer.disconnect();
      document.removeEventListener("visibilitychange", sync);
    };
  }, [paused, reduced]);

  function move(event) {
    if (event.pointerType === "touch" || paused || reduced) return;
    const rect = event.currentTarget.getBoundingClientRect();
    pointerRef.current = {
      x: ((event.clientX - rect.left) / rect.width) * 2 - 1,
      y: ((event.clientY - rect.top) / rect.height) * 2 - 1,
    };
  }

  return (
    <div
      className="hero-orbit"
      ref={stageRef}
      onPointerMove={move}
      onPointerLeave={() => {
        pointerRef.current = { x: 0, y: 0 };
      }}
    >
      <div className="hero-orbit-aura" aria-hidden="true" />
      <div className="hero-orbit-field" ref={fieldRef} aria-hidden="true">
        <svg viewBox="0 0 540 540" className="hero-orbit-svg" fill="none">
          <defs>
            <linearGradient
              id={`${uid}-cyan`}
              x1="50"
              y1="70"
              x2="490"
              y2="470"
              gradientUnits="userSpaceOnUse"
            >
              <stop stopColor="#56dfff" />
              <stop offset=".45" stopColor="#5089ff" />
              <stop offset="1" stopColor="#b284ff" />
            </linearGradient>
            <radialGradient id={`${uid}-node`}>
              <stop stopColor="#172b4d" />
              <stop offset="1" stopColor="#0a1329" />
            </radialGradient>
            <filter
              id={`${uid}-glow`}
              x="-80%"
              y="-80%"
              width="260%"
              height="260%"
            >
              <feGaussianBlur stdDeviation="2.5" />
            </filter>
          </defs>
          <g className="hero-orbit-crosshair" stroke="#73a4df" strokeWidth=".6">
            <path d="M270 12v28M270 500v28M12 270h28M500 270h28" />
            <path d="M102 102l12 12M426 426l12 12M102 438l12-12M426 114l12-12" />
          </g>
          <circle
            cx="270"
            cy="270"
            r="250"
            stroke="#7f9ad1"
            strokeWidth=".6"
            strokeDasharray="1 9"
            opacity=".3"
          />
          <circle
            cx="270"
            cy="270"
            r="211"
            stroke="#8a9fe4"
            strokeWidth=".6"
            strokeDasharray="4 12"
            opacity=".15"
          />
          {lanes.map((lane, index) => (
            <g key={index} transform={`rotate(${lane.tilt} 270 270)`}>
              <ellipse
                cx="270"
                cy="270"
                rx={lane.rx}
                ry={lane.ry}
                stroke={`url(#${uid}-cyan)`}
                strokeWidth={index === 0 ? "1.8" : "1.3"}
                opacity={index === 0 ? ".5" : ".35"}
              />
              <ellipse
                cx="270"
                cy="270"
                rx={lane.rx}
                ry={lane.ry}
                stroke={`url(#${uid}-cyan)`}
                strokeWidth="3"
                opacity=".16"
                filter={`url(#${uid}-glow)`}
              />
              <ellipse
                cx="270"
                cy="270"
                rx={lane.rx}
                ry={lane.ry}
                stroke={index === 1 ? "#b5a0ff" : "#6cdcff"}
                strokeWidth="2"
                strokeDasharray={index === 0 ? "75 1338" : "38 1180"}
                opacity=".8"
              />
            </g>
          ))}
          <g fill="#80b9ff" opacity=".55">
            {Array.from({ length: 12 }, (_, index) => {
              const a = (index * Math.PI) / 6;
              return (
                <circle
                  key={index}
                  cx={270 + 250 * Math.cos(a)}
                  cy={270 + 250 * Math.sin(a)}
                  r={index % 3 === 0 ? 2 : 1}
                />
              );
            })}
          </g>
          {objects.map((object, index) => (
            <g
              ref={(element) => {
                nodeRefs.current[index] = element;
              }}
              key={object.label}
              className="hero-orbit-node"
            >
              <circle
                r="23"
                fill={`url(#${uid}-node)`}
                stroke={object.color}
                strokeOpacity=".55"
                strokeWidth=".8"
              />
              <circle
                r="19"
                stroke={object.color}
                strokeOpacity=".13"
                strokeWidth=".5"
              />
              {object.logo ? (
                <image
                  href={`/assets/technologies/${object.logo}.svg`}
                  x="-11"
                  y="-11"
                  width="22"
                  height="22"
                />
              ) : object.chip ? (
                <g stroke={object.color} strokeWidth="1.5">
                  <rect x="-9" y="-9" width="18" height="18" rx="3" />
                  <rect x="-4" y="-4" width="8" height="8" rx="1" />
                  {[-5, 0, 5].map((n) => (
                    <path
                      key={n}
                      d={`M${n} -14v5M${n} 9v5M-14 ${n}h5M9 ${n}h5`}
                    />
                  ))}
                </g>
              ) : (
                <text
                  y="1"
                  fill={object.color}
                  textAnchor="middle"
                  dominantBaseline="central"
                  fontSize={object.label === "</>" ? "16" : "26"}
                  fontFamily={
                    object.label === "</>" ? "monospace" : "Georgia,serif"
                  }
                >
                  {object.label}
                </text>
              )}
            </g>
          ))}
        </svg>
      </div>
      <div className="hero-orbit-portrait">
        <img
          src="/assets/img/perfil.jpg"
          alt="Martín Jara"
          width="1365"
          height="1365"
          fetchPriority="high"
          decoding="async"
        />
      </div>
      <span className="hero-orbit-label orbit-label-top" aria-hidden="true">
        <span />
        FULL STACK / AI
      </span>
      <span className="hero-orbit-label orbit-label-bottom" aria-hidden="true">
        CODE · DATA · ∞
      </span>
      {!reduced && (
        <button
          className="hero-orbit-motion"
          onClick={() => setPaused((current) => !current)}
          aria-label={
            paused
              ? en
                ? "Resume orbit"
                : "Reanudar órbita"
              : en
                ? "Pause orbit"
                : "Pausar órbita"
          }
          aria-pressed={paused}
        >
          <i
            className={`fa-solid ${paused ? "fa-play" : "fa-pause"}`}
            aria-hidden="true"
          />
        </button>
      )}
    </div>
  );
}

