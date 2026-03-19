import React from "react";
import Petal from "./Petal";

/**
 * Animated SVG flower.
 *
 * Structure (bottom → top paint order):
 *  1. Stem  (stroke-dash animation)
 *  2. Leaves (scale-in animation)
 *  3. Outer petal layer – 8 petals, deep pink
 *  4. Inner petal layer – 8 petals, offset 22.5°, lighter pink, slightly smaller
 *  5. Centre disc + detail dots (pop animation)
 */

const CX = 200; // flower centre x
const CY = 185; // flower centre y

/** Eight evenly-spaced angles for one petal ring */
const ring = (offset = 0) =>
  Array.from({ length: 8 }, (_, i) => offset + i * 45);

export default function Flower() {
  return (
    <svg
      viewBox="0 0 400 520"
      xmlns="http://www.w3.org/2000/svg"
      aria-label="Animated flower"
      role="img"
      className="w-full h-full"
    >
      {/* ── Stem ─────────────────────────────────────────────────────── */}
      <path
        d={`M ${CX} ${CY + 20} Q ${CX - 12} 340 ${CX} 500`}
        fill="none"
        stroke="#4a7c59"
        strokeWidth={9}
        strokeLinecap="round"
        style={{
          strokeDasharray: 350,
          strokeDashoffset: 350,
          animation: "stem-grow 1s ease-out 0s both",
        }}
      />

      {/* ── Left leaf ────────────────────────────────────────────────── */}
      <g transform="translate(185, 330)">
        <path
          d="M 0 0 Q -55 -25 -65 -62 Q -25 -42 0 0"
          fill="#5aaa72"
          style={{
            transformBox: "fill-box",
            transformOrigin: "100% 100%",
            animation: "leaf-sprout 0.55s cubic-bezier(0.34,1.56,0.64,1) 0.85s both",
          }}
        />
      </g>

      {/* ── Right leaf ───────────────────────────────────────────────── */}
      <g transform="translate(215, 390)">
        <path
          d="M 0 0 Q 55 -25 65 -62 Q 25 -42 0 0"
          fill="#5aaa72"
          style={{
            transformBox: "fill-box",
            transformOrigin: "0% 100%",
            animation: "leaf-sprout 0.55s cubic-bezier(0.34,1.56,0.64,1) 1.05s both",
          }}
        />
      </g>

      {/* ── Petal layers (centred on CX, CY) ─────────────────────────── */}
      <g transform={`translate(${CX}, ${CY})`}>
        {/* Outer ring – deep rose-pink */}
        {ring(0).map((angle, i) => (
          <Petal
            key={`outer-${i}`}
            angle={angle}
            fill="#ff8fab"
            stroke="#e05577"
            delay={`${(0.1 + i * 0.06).toFixed(2)}s`}
            scale={1}
          />
        ))}

        {/* Inner ring – soft blush, slightly smaller, rotated 22.5° */}
        {ring(22.5).map((angle, i) => (
          <Petal
            key={`inner-${i}`}
            angle={angle}
            fill="#ffc2d4"
            stroke="#ff85a1"
            delay={`${(0.28 + i * 0.06).toFixed(2)}s`}
            scale={0.78}
          />
        ))}
      </g>

      {/* ── Centre disc ──────────────────────────────────────────────── */}
      <circle
        cx={CX}
        cy={CY}
        r={30}
        fill="#ffd166"
        stroke="#f4a261"
        strokeWidth={2}
        style={{
          transformBox: "fill-box",
          transformOrigin: "center",
          animation: "center-pop 0.5s ease-out 0.72s both",
        }}
      />

      {/* Centre texture dots */}
      {Array.from({ length: 7 }, (_, i) => {
        const rad = ((i * 360) / 7) * (Math.PI / 180);
        const r   = 11;
        return (
          <circle
            key={`dot-${i}`}
            cx={CX + Math.cos(rad) * r}
            cy={CY + Math.sin(rad) * r}
            r={4}
            fill="#f4a261"
            style={{
              animation: `center-pop 0.4s ease-out ${(0.82 + i * 0.04).toFixed(2)}s both`,
            }}
          />
        );
      })}

      {/* Centre highlight dot */}
      <circle
        cx={CX - 8}
        cy={CY - 8}
        r={5}
        fill="#ffe599"
        opacity={0.7}
        style={{ animation: "center-pop 0.4s ease-out 1.1s both" }}
      />
    </svg>
  );
}
