export function HeroCurve({ className = "" }) {
  return (
    <svg
      viewBox="0 0 520 620"
      fill="none"
      className={className}
      aria-hidden="true"
      preserveAspectRatio="xMidYMid meet"
    >
      <path
        d="M120 40C230 10 400 40 440 150C480 260 380 340 280 320C190 302 170 220 230 190C280 165 330 200 310 245"
        stroke="#0d4f4c"
        strokeOpacity="0.16"
        strokeWidth="34"
        strokeLinecap="round"
      />
      <path
        d="M96 70C206 34 372 66 412 172C448 270 358 342 268 320"
        stroke="#0d4f4c"
        strokeOpacity="0.32"
        strokeWidth="22"
        strokeLinecap="round"
      />
    </svg>
  );
}

export function CornerCurve({ className = "" }) {
  return (
    <svg
      viewBox="0 0 400 400"
      fill="none"
      className={className}
      aria-hidden="true"
      preserveAspectRatio="xMidYMid meet"
    >
      <path
        d="M-20 40C90 10 220 60 250 160C280 258 190 320 110 290"
        stroke="#F2F0EA"
        strokeOpacity="0.14"
        strokeWidth="30"
        strokeLinecap="round"
      />
    </svg>
  );
}
