import { useState } from "react";
import { FaLocationDot, FaMapLocationDot } from "react-icons/fa6";
import { useLanguage } from "../i18n/LanguageContext";

const regionQueries = [
  "Purwokerto, Kabupaten Banyumas, Jawa Tengah",
  "Banyumas, Kabupaten Banyumas, Jawa Tengah",
  "Purbalingga, Jawa Tengah",
  "Banjarnegara, Jawa Tengah",
  "Cilacap, Jawa Tengah",
  "Kebumen, Jawa Tengah",
];

export default function PetaBanyumas() {
  const { t } = useLanguage();
  const [selected, setSelected] = useState(0);

  const activeRegion = t.peta.regions[selected];
  const mapSrc = `https://www.google.com/maps?q=${encodeURIComponent(
    regionQueries[selected],
  )}&z=11&output=embed`;

  return (
    <section id="peta" className="relative overflow-hidden py-20">
      <div className="pointer-events-none absolute inset-0" aria-hidden="true">
        <div className="absolute inset-0 bg-gradient-to-b from-soga-50 via-cream-100 to-cream-100" />
        <FaMapLocationDot className="absolute -left-10 top-10 h-64 w-64 text-soga-600/5" />
      </div>

      <div className="relative mx-auto max-w-7xl px-6 lg:px-8">
        <div className="text-center">
          <span className="text-xs font-bold uppercase tracking-widest text-soga-600">
            {t.peta.eyebrow}
          </span>
          <h2 className="mt-3 font-display text-3xl font-semibold text-brown-900 sm:text-4xl">
            {t.peta.title}
          </h2>
          <p className="mx-auto mt-3 max-w-2xl text-sm text-brown-600 sm:text-base">
            {t.peta.desc}
          </p>
        </div>

        <div className="mt-10 grid grid-cols-1 gap-4 lg:grid-cols-[minmax(0,320px)_1fr] lg:gap-6">
          <div className="flex flex-col gap-3">
            {t.peta.regions.map((region, idx) => {
              const active = idx === selected;
              return (
                <button
                  key={region.name}
                  type="button"
                  onClick={() => setSelected(idx)}
                  className={`group flex items-center gap-3 rounded-2xl border p-4 text-left shadow-sm transition-all duration-200 ${
                    active
                      ? "border-soga-600 bg-soga-600 shadow-md shadow-soga-600/20"
                      : "border-brown-900/5 bg-white hover:border-soga-600/30 hover:bg-soga-50"
                  }`}
                >
                  <span
                    className={`flex h-9 w-9 shrink-0 items-center justify-center rounded-full transition-colors ${
                      active
                        ? "bg-cream-50 text-soga-600"
                        : "bg-soga-600/10 text-soga-600 group-hover:bg-soga-600/15"
                    }`}
                  >
                    <FaLocationDot className="h-4 w-4" />
                  </span>
                  <span
                    className={`block font-display text-base font-semibold ${
                      active ? "text-cream-50" : "text-brown-900"
                    }`}
                  >
                    {region.name}
                  </span>
                </button>
              );
            })}
          </div>

          <div className="relative overflow-hidden rounded-3xl border border-brown-900/5 bg-white shadow-xl shadow-brown-900/10">
            <div className="absolute left-4 top-4 z-10 flex items-center gap-2 rounded-full bg-brown-900/80 px-3 py-1.5 text-xs font-medium text-cream-100 backdrop-blur-sm">
              <FaLocationDot className="h-3 w-3 text-soga-400" />
              {activeRegion.name}
            </div>
            <iframe
              key={selected}
              title={`Peta lokasi ${activeRegion.name}`}
              src={mapSrc}
              className="aspect-[4/3] w-full sm:aspect-video lg:h-full lg:min-h-[420px]"
              style={{ border: 0 }}
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
              allowFullScreen
            />
          </div>
        </div>
      </div>
    </section>
  );
}
