export default function PlaceholderPhoto({ icon: Icon, label, className = "", src }) {
  if (src) {
    return (
      <div className={`relative overflow-hidden rounded-2xl ${className}`}>
        <img src={src} alt={label} className="h-full w-full object-cover" loading="lazy" />
      </div>
    );
  }

  return (
    <div
      role="img"
      aria-label={label}
      className={`relative overflow-hidden rounded-2xl bg-gradient-to-br from-teal-700 via-teal-800 to-teal-950 ${className}`}
    >
      <div
        className="absolute inset-0 opacity-20"
        style={{
          backgroundImage:
            "radial-gradient(circle at 20% 20%, #ffffff 0, transparent 45%), radial-gradient(circle at 85% 75%, #ffffff 0, transparent 40%)",
        }}
      />
      <div className="relative flex h-full w-full flex-col items-center justify-center gap-2 p-6 text-center text-cream/80">
        {Icon ? <Icon className="h-8 w-8 opacity-80" strokeWidth={1.5} /> : null}
        <span className="text-xs font-medium uppercase tracking-wide opacity-70">{label}</span>
      </div>
    </div>
  );
}
