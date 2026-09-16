import { FaPalette, FaHandHoldingHeart, FaShieldHeart } from "react-icons/fa6";
import { useLanguage } from "../i18n/LanguageContext";

const icons = [FaPalette, FaHandHoldingHeart, FaShieldHeart];

export default function About() {
  const { t } = useLanguage();

  return (
    <section id="tentang" className="mx-auto max-w-7xl px-6 py-20 lg:px-8">
      <div className="grid grid-cols-1 gap-12 lg:grid-cols-2 lg:items-center lg:gap-16">
        <div>
          <span className="text-xs font-bold uppercase tracking-widest text-soga-600">
            {t.about.eyebrow}
          </span>
          <h2 className="mt-3 font-display text-3xl font-semibold text-brown-900 sm:text-4xl">
            {t.about.title}
          </h2>
          <p className="mt-5 text-base leading-relaxed text-brown-700">
            {t.about.desc}
          </p>
        </div>

        <div className="flex flex-col gap-4">
          {t.about.points.map(({ title, desc }, idx) => {
            const Icon = icons[idx];
            return (
              <div
                key={title}
                className="flex items-start gap-4 rounded-2xl border border-brown-900/5 bg-white p-5 shadow-sm shadow-brown-900/5"
              >
                <span className="flex h-11 w-11 shrink-0 items-center justify-center rounded-xl bg-soga-600 text-cream-50">
                  <Icon className="h-5 w-5" />
                </span>
                <div>
                  <h3 className="font-display text-base font-semibold text-brown-900">
                    {title}
                  </h3>
                  <p className="mt-1 text-sm leading-relaxed text-brown-600">
                    {desc}
                  </p>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
