export default function ToothIcon({ className = "w-6 h-6", strokeWidth = 1.6 }) {
  return (
    <svg
      viewBox="0 0 24 24"
      fill="none"
      className={className}
      aria-hidden="true"
    >
      <path
        d="M12 5.2c-1.6 0-2.5.85-3.6.85-1.4 0-2.4-1-2.4 1.5 0 2.9.8 4.9 1.4 7.3.4 1.5.6 2.7 1.5 2.7 1.1 0 1.1-3 1.6-4.6.2-.8.5-1.3 1.5-1.3s1.3.5 1.5 1.3c.5 1.6.5 4.6 1.6 4.6.9 0 1.1-1.2 1.5-2.7.6-2.4 1.4-4.4 1.4-7.3 0-2.5-1-1.5-2.4-1.5-1.1 0-2-.85-3.6-.85Z"
        stroke="currentColor"
        strokeWidth={strokeWidth}
        strokeLinejoin="round"
      />
    </svg>
  );
}
