import { FaDiscord } from "react-icons/fa6";
import { useLanguage } from "../i18n/LanguageContext";

export default function Footer() {
  const { t } = useLanguage();

  return (
    <footer className="bg-brown-900 text-cream-200">
      <div className="mx-auto max-w-7xl px-6 py-14 lg:px-8">
        <div className="grid grid-cols-1 gap-10 sm:grid-cols-2 lg:grid-cols-4">
          <div>
            <a href="#top" className="flex items-center gap-2.5">
              <span className="flex h-9 w-9 items-center justify-center rounded-full bg-cream-50 p-1.5 ring-1 ring-soga-600/20">
                <img src="/logo.png" alt="Logo Pawnyumas Raya" className="h-full w-full object-contain" />
              </span>
              <span className="font-jawa text-lg tracking-wide text-cream-50">
                Pawnyumas Raya
              </span>
            </a>
            <p className="mt-4 text-sm leading-relaxed text-cream-200/70">
              {t.footer.desc}
            </p>
            <div className="mt-5 flex items-center gap-2 text-xs text-cream-200/60">
              <span className="h-1.5 w-1.5 rounded-full bg-soga-200" />
              {t.footer.location}
            </div>
          </div>

          <FooterColumn title={t.footer.exploreTitle} links={t.footer.explore} />
          <FooterColumn title={t.footer.hubTitle} links={t.footer.hub} />

          <div>
            <h3 className="text-sm font-semibold text-cream-50">
              {t.footer.socialTitle}
            </h3>
            <p className="mt-4 text-sm leading-relaxed text-cream-200/70">
              {t.footer.socialDesc}
            </p>
            <div className="mt-4 flex items-center gap-2.5">
              <a
                href="#"
                className="flex h-9 w-9 items-center justify-center rounded-full bg-cream-50/10 text-cream-100 transition-colors hover:bg-soga-600"
                aria-label="Discord"
              >
                <FaDiscord className="h-4 w-4" />
              </a>
            </div>
          </div>
        </div>

        <div className="mt-12 flex flex-col items-center justify-between gap-4 border-t border-cream-50/10 pt-6 text-xs text-cream-200/60 sm:flex-row">
          <p>{t.footer.copyright}</p>
        </div>
      </div>
    </footer>
  );
}

function FooterColumn({ title, links }) {
  return (
    <div>
      <h3 className="text-sm font-semibold text-cream-50">{title}</h3>
      <ul className="mt-4 space-y-3">
        {links.map((link) => (
          <li key={link.label}>
            <a
              href={link.href}
              className="text-sm text-cream-200/70 transition-colors hover:text-cream-100"
            >
              {link.label}
            </a>
          </li>
        ))}
      </ul>
    </div>
  );
}
