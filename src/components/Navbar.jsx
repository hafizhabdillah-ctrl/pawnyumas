import { useState } from "react";
import { FaBars, FaXmark } from "react-icons/fa6";
import { useLanguage } from "../i18n/LanguageContext";
import LanguageSlider from "./LanguageSlider";

export default function Navbar() {
  const [open, setOpen] = useState(false);
  const { t } = useLanguage();

  const navLinks = [
    { label: t.navbar.links.tentang, href: "#tentang" },
    { label: t.navbar.links.visiMisi, href: "#visi-misi" },
    { label: t.navbar.links.peta, href: "#peta" },
    { label: t.navbar.links.saluran, href: "#saluran" },
  ];

  return (
    <header className="sticky top-0 z-50 border-b border-brown-900/5 bg-cream-100/90 backdrop-blur">
      <nav className="mx-auto flex max-w-7xl items-center justify-between px-6 py-4 lg:px-8">
        <a href="#top" className="flex items-center gap-2.5">
          <span className="flex h-9 w-9 items-center justify-center p-1">
            <img src="/logo.png" alt="Logo Pawnyumas Raya" className="h-full w-full object-contain" />
          </span>
          <span className="leading-tight">
            <span className="block font-jawa text-lg tracking-wide text-brown-900">
              Pawnyumas Raya
            </span>
          </span>
        </a>

        <div className="hidden items-center gap-8 md:flex">
          {navLinks.map((link) => (
            <a
              key={link.label}
              href={link.href}
              className="text-sm font-medium text-brown-700 transition-colors hover:text-soga-600"
            >
              {link.label}
            </a>
          ))}
        </div>

        <div className="hidden md:block">
          <LanguageSlider />
        </div>

        <button
          type="button"
          onClick={() => setOpen((v) => !v)}
          className="flex h-10 w-10 items-center justify-center rounded-full text-brown-800 md:hidden"
          aria-label="Buka menu"
        >
          {open ? <FaXmark className="h-5 w-5" /> : <FaBars className="h-5 w-5" />}
        </button>
      </nav>

      {open && (
        <div className="border-t border-brown-900/5 bg-cream-100 px-6 pb-6 md:hidden">
          <div className="flex flex-col gap-4 pt-4">
            {navLinks.map((link) => (
              <a
                key={link.label}
                href={link.href}
                onClick={() => setOpen(false)}
                className="text-sm font-medium text-brown-700"
              >
                {link.label}
              </a>
            ))}
            <LanguageSlider />
          </div>
        </div>
      )}
    </header>
  );
}
