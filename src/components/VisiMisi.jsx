import { FaPaw, FaCamera, FaWandMagicSparkles, FaGraduationCap, FaLink } from "react-icons/fa6";
import { useLanguage } from "../i18n/LanguageContext";

const icons = [FaCamera, FaWandMagicSparkles, FaGraduationCap, FaLink];

export default function VisiMisi() {
  const { t } = useLanguage();

  return (
    <section id="visi-misi" className="bg-cream-200/60 py-20">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className="text-center">
          <h2 className="mt-3 font-display text-3xl font-semibold text-brown-900 sm:text-4xl">
            {t.visiMisi.title}
          </h2>
        </div>

        <div className="relative mx-auto mt-6 max-w-4xl overflow-hidden px-6 text-center sm:px-12">
          <FaPaw className="pointer-events-none absolute -right-6 -bottom-8 h-40 w-40 text-soga-600/15" />

          <p className="relative mt-5 font-display text-xl font-medium leading-snug text-soga-700 sm:text-2xl">
            {t.visiMisi.quote} Uwaw ini udah bener belum Visi Misi nya wok
          </p>
        </div>

        <div className="mt-10 grid grid-cols-1 gap-4 sm:grid-cols-2">
          {t.visiMisi.misi.map(({ title, desc }, idx) => {
            const Icon = icons[idx];
            return (
              <div
                key={title}
                className="flex items-start gap-4 rounded-2xl bg-white p-5 shadow-sm shadow-brown-900/5"
              >
                <span className="flex h-9 w-9 shrink-0 items-center justify-center rounded-full bg-soga-600/10 text-soga-600">
                  <Icon className="h-4 w-4" />
                </span>
                <div>
                  <h3 className="font-display text-base font-semibold text-brown-900">
                    {title}
                  </h3>
                  <p className="mt-1.5 text-sm leading-relaxed text-brown-600">
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
