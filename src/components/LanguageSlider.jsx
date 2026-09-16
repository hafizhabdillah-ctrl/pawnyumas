import { useLanguage } from "../i18n/LanguageContext";

export default function LanguageSlider() {
  const { lang, setLang } = useLanguage();
  const isEn = lang === "en";

  return (
    <button
      type="button"
      onClick={() => setLang(isEn ? "id" : "en")}
      aria-label="Ganti bahasa / Switch language"
      className="relative flex h-9 w-[84px] items-center rounded-full bg-soga-600/10 p-1 text-xs font-bold"
    >
      <span
        className={`absolute top-1 h-7 w-[38px] rounded-full bg-soga-600 shadow-sm transition-transform duration-200 ease-out ${
          isEn ? "translate-x-[38px]" : "translate-x-0"
        }`}
      />
      <span
        className={`relative z-10 flex-1 text-center transition-colors ${
          isEn ? "text-soga-600" : "text-cream-50"
        }`}
      >
        ID
      </span>
      <span
        className={`relative z-10 flex-1 text-center transition-colors ${
          isEn ? "text-cream-50" : "text-soga-600"
        }`}
      >
        ENG
      </span>
    </button>
  );
}
