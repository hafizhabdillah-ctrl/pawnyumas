import { useLanguage } from "../i18n/LanguageContext";

export default function Hero() {
  const { t } = useLanguage();

  return (
    <section id="top" className="relative overflow-hidden">
      <div className="pointer-events-none absolute inset-0" aria-hidden="true">
        <div className="absolute inset-0 bg-gradient-to-b from-soga-100/60 from-0% via-soga-100/15 via-40% to-transparent to-75%" />
      </div>

      <div className="relative mx-auto max-w-7xl px-6 pt-14 pb-16 lg:px-8 lg:pt-20">
        <div className="flex flex-col items-center text-center">
          <h1 className="mt-6 max-w-3xl font-jawa text-4xl leading-tight tracking-wide text-brown-900 sm:text-5xl lg:text-[3.4rem]">
            {t.hero.title}
          </h1>

          <p className="mt-5 max-w-2xl text-base leading-relaxed text-brown-700 sm:text-lg">
            {t.hero.desc}
          </p>
        </div>
      </div>
    </section>
  );
}
