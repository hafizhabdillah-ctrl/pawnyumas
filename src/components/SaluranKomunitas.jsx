import { FaDiscord, FaWhatsapp } from "react-icons/fa6";
import { useLanguage } from "../i18n/LanguageContext";

const icons = [FaDiscord, FaWhatsapp];

export default function SaluranKomunitas() {
  const { t } = useLanguage();

  return (
    <section id="saluran" className="mx-auto max-w-7xl px-6 py-20 lg:px-8">
      <div className="text-center">
        <span className="text-xs font-bold uppercase tracking-widest text-soga-600">
          {t.saluran.eyebrow}
        </span>
        <h2 className="mt-3 font-display text-3xl font-semibold text-brown-900 sm:text-4xl">
          {t.saluran.title}
        </h2>
      </div>

      <div className="mt-10 grid grid-cols-1 gap-4 sm:grid-cols-2">
        {t.saluran.channels.map(({ name, desc, cta }, idx) => {
          const Icon = icons[idx];
          return (
            <div
              key={name}
              className="flex flex-col rounded-2xl border border-brown-900/5 bg-white p-6 shadow-sm shadow-brown-900/5"
            >
              <span className="flex h-11 w-11 items-center justify-center rounded-xl bg-soga-600/10 text-soga-600">
                <Icon className="h-5 w-5" />
              </span>
              <h3 className="mt-4 font-display text-base font-semibold text-brown-900">
                {name}
              </h3>
              <p className="mt-1.5 flex-1 text-sm leading-relaxed text-brown-600">
                {desc}
              </p>
              <button
                type="button"
                className="mt-5 rounded-full bg-cream-200 px-4 py-2.5 text-sm font-semibold text-brown-800 transition-colors hover:bg-soga-600 hover:text-cream-100"
              >
                {cta}
              </button>
            </div>
          );
        })}
      </div>
    </section>
  );
}
