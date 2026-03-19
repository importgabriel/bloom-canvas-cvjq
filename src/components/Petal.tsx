import React from "react";

/**
 * A single flower petal rendered as an SVG <g> element.
 *
 * The petal is drawn in local space with its base at (0, 0) pointing upward,
 * then placed at the flower centre via the parent <g transform="translate(cx, cy)">.
 * `angle` rotates it around that centre so petals fan out evenly.
 */

interface PetalProps {
  /** Rotation angle in degrees around the flower centre */
  angle: number;
  /** Fill colour of the petal */
  fill: string;
  /** Stroke / outline colour */
  stroke: string;
  /** CSS animation-delay string, e.g. "0.15s" */
  delay: string;
  /** Uniform scale factor relative to default size (default 1) */
  scale?: number;
}

export default function Petal({
  angle,
  fill,
  stroke,
  delay,
  scale = 1,
}: PetalProps) {
  const len = 88 * scale;   // petal length
  const w   = 20 * scale;   // half-width at widest point

  // Smooth teardrop path: base at (0,0), tip at (0, -len)
  const d = [
    `M 0 0`,
    `C -${w} -${(len * 0.35).toFixed(1)} -${w} -${(len * 0.75).toFixed(1)} 0 -${len.toFixed(1)}`,
    `C  ${w} -${(len * 0.75).toFixed(1)}  ${w} -${(len * 0.35).toFixed(1)} 0 0`,
  ].join(" ");

  return (
    <g transform={`rotate(${angle})`}>
      <path
        d={d}
        fill={fill}
        stroke={stroke}
        strokeWidth={1}
        strokeLinejoin="round"
        style={{
          transformBox: "fill-box",
          // 50% horizontal, 100% vertical → base of petal = pivot point
          transformOrigin: "50% 100%",
          animation: `bloom 0.7s cubic-bezier(0.34, 1.56, 0.64, 1) ${delay} both`,
        }}
      />
    </g>
  );
}
