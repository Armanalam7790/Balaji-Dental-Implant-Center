import { useEffect, useState } from "react";
import { createPortal } from "react-dom";
import { Menu, X } from "lucide-react";
import ToothIcon from "./ToothIcon";

const NAV_LINKS = [
  { label: "Home", href: "#inicio" },
  { label: "About", href: "#inicio" },
  { label: "Treatments", href: "#tratamentos" },
  { label: "Appointment", href: "#contato" },
];

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 16);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    document.body.style.overflow = open ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [open]);

  const header = (
    <header
      className={`sticky top-0 z-50 transition-colors duration-300 ${
        scrolled ? "bg-cream/95 shadow-sm backdrop-blur" : "bg-transparent"
      }`}
    >
      <nav className="mx-auto flex h-[72px] max-w-[1200px] items-center justify-between px-6 md:h-20">
        <a href="#inicio" className="flex items-center gap-2 text-ink">
          <ToothIcon className="h-9 w-9" />
          <span className="font-display text-lg font-bold tracking-tight">Balaji Dental & Implant Center</span>
        </a>

        <ul className="hidden items-center gap-8 md:flex">
          {NAV_LINKS.map((link) => (
            <li key={link.label}>
              <a
                href={link.href}
                className="text-sm font-medium text-ink-soft transition-colors hover:text-ink"
              >
                {link.label}
              </a>
            </li>
          ))}
        </ul>

        <div className="hidden md:block">
          <a
            href="#contato"
            className="rounded-lg bg-teal-800 px-5 py-2.5 text-sm font-semibold text-cream shadow-sm transition-colors hover:bg-teal-900 focus:outline-none focus-visible:ring-2 focus-visible:ring-teal-700 focus-visible:ring-offset-2"
          >
            Schedule an Appointment
          </a>
        </div>

        <button
          type="button"
          onClick={() => setOpen((v) => !v)}
          aria-label={open ? "Close menu" : "Open menu"}
          aria-expanded={open}
          className="inline-flex items-center justify-center rounded-md p-2 text-ink md:hidden"
        >
          {open ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
        </button>
      </nav>

    </header>
  );

  const drawer = (
    <>
      <div
        className={`fixed inset-0 z-40 bg-ink/40 backdrop-blur-sm transition-opacity duration-300 md:hidden ${
          open ? "pointer-events-auto opacity-100" : "pointer-events-none opacity-0"
        }`}
        onClick={() => setOpen(false)}
        aria-hidden="true"
      />

      <div
        className={`fixed inset-y-0 right-0 z-50 flex h-full w-[78%] max-w-xs flex-col bg-cream px-6 pb-6 pt-5 shadow-xl transition-transform duration-300 ease-out md:hidden ${
          open ? "translate-x-0" : "translate-x-full"
        }`}
      >
        <div className="mb-4 flex items-center justify-between">
          <a href="#inicio" className="flex items-center gap-2 text-ink" onClick={() => setOpen(false)}>
            <ToothIcon className="h-9 w-9" />
            <span className="font-display text-lg font-bold tracking-tight">Balaji Dental & Implant Center</span>
          </a>
          <button
            type="button"
            onClick={() => setOpen(false)}
            aria-label="Close menu"
            className="inline-flex items-center justify-center rounded-md p-2 text-ink"
          >
            <X className="h-6 w-6" />
          </button>
        </div>

        <ul className="flex flex-col gap-1">
          {NAV_LINKS.map((link) => (
            <li key={link.label}>
              <a
                href={link.href}
                onClick={() => setOpen(false)}
                className="block rounded-md px-2 py-2.5 text-base font-medium text-ink-soft hover:bg-ink/5 hover:text-ink"
              >
                {link.label}
              </a>
            </li>
          ))}
        </ul>
        <a
          href="#contato"
          onClick={() => setOpen(false)}
          className="mt-3 block rounded-lg bg-teal-800 px-5 py-3 text-center text-sm font-semibold text-cream shadow-sm transition-colors hover:bg-teal-900"
        >
          Schedule an Appointment
        </a>
      </div>
    </>
  );

  return (
    <>
      {header}
      {typeof document !== "undefined" ? createPortal(drawer, document.body) : null}
    </>
  );
}
