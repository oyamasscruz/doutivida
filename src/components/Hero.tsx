import ImgHero from "../assets/hero.webp";
import ImgHeroMobile from "../assets/hero-800.webp";

const WHATSAPP_LINK =
  "https://wa.me/5562992548400?text=" +
  encodeURIComponent("Quero agendar uma consulta");

const destaques = ["Médicos com CRM", "Receita digital", "Atestado"];

export default function Hero() {
  return (
    <section className="relative isolate flex min-h-[660px] flex-col overflow-hidden md:block md:min-h-0">
      <img
        className="absolute inset-0 -z-30 h-full w-full animate-zoom-out object-cover object-[64%_top] md:static md:z-0 md:h-auto md:object-[65%_center]"
        src={ImgHero}
        srcSet={`${ImgHeroMobile} 800w, ${ImgHero} 1376w`}
        sizes="100vw"
        width={1376}
        height={768}
        fetchPriority="high"
        alt="Médico atendendo uma paciente por videochamada"
      />

      <div className="absolute inset-0 -z-20 bg-linear-to-br from-sky-50/95 via-sky-100/45 via-40% to-transparent to-70% md:hidden" />
      <div className="absolute inset-0 -z-10 bg-linear-to-t from-doutivida-blue-primary via-[#1769b8]/75 via-35% to-transparent to-62% md:hidden" />

      <div className="flex flex-1 flex-col px-5 pb-8 pt-16 md:absolute md:left-10 md:top-1/2 md:block md:max-w-xl md:-translate-y-1/2 md:rounded-3xl md:border md:border-white/60 md:bg-white/85 md:p-10 md:shadow-xl">
        <h1 className="max-w-[15rem] animate-fade-up text-[1.85rem] font-bold leading-[1.12] tracking-tight text-doutivida-navy sm:max-w-sm sm:text-4xl md:max-w-none md:text-5xl">
          Consulta médica online, simples e acessível.
        </h1>

        <svg
          viewBox="0 0 300 20"
          className="mt-3 h-4 w-52 md:w-72"
          fill="none"
          aria-hidden="true"
        >
          <path
            d="M3 17C80 3 200 -1 297 9"
            stroke="#4099d0"
            strokeWidth="4"
            strokeLinecap="round"
            pathLength={1}
            className="animate-draw [animation-delay:500ms]"
          />
        </svg>

        <p className="mt-6 hidden animate-fade-up text-base leading-relaxed text-slate-600 [animation-delay:300ms] md:block">
          Atendimento rápido e humanizado para você e sua família. Receba
          receita digital e atestado médico direto no seu WhatsApp.
        </p>

        <div className="mt-auto md:mt-8">
          <p className="flex animate-fade-up items-stretch overflow-hidden rounded-full border border-white/50 bg-linear-to-r from-doutivida-navy to-doutivida-blue-primary shadow-lg shadow-doutivida-navy/30 [animation-delay:600ms]">
            <span className="flex flex-1 items-center py-3 pl-5 pr-3 text-sm font-semibold leading-tight text-white sm:text-base">
              Sem sair de casa, por apenas
            </span>
            <span className="flex items-center whitespace-nowrap rounded-full bg-linear-to-r from-[#1f80e0] to-doutivida-blue-support px-5 text-[1.75rem] font-bold text-white sm:text-4xl">
              R$ 39,90
            </span>
          </p>

          <a
            href={WHATSAPP_LINK}
            target="_blank"
            rel="noopener noreferrer"
            className="mt-5 flex w-full animate-fade-up items-center justify-center gap-3 rounded-full border border-white/60 bg-linear-to-r from-doutivida-blue-support to-[#1f80e0] px-6 py-4 text-lg font-semibold text-white shadow-lg shadow-sky-500/30 transition duration-300 [animation-delay:800ms] hover:brightness-105 active:scale-[0.98] focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-white md:focus-visible:outline-doutivida-blue-primary"
          >
            Agende a sua consulta
            <svg
              viewBox="0 0 24 24"
              className="h-5 w-5"
              fill="none"
              stroke="currentColor"
              strokeWidth="2.2"
              strokeLinecap="round"
              aria-hidden="true"
            >
              <path d="M5 12h14M13 6l6 6-6 6" />
            </svg>
          </a>

          <ul className="mt-4 flex animate-fade-up flex-wrap justify-center gap-x-4 gap-y-1 text-xs font-medium text-white/90 [animation-delay:1000ms] md:justify-start md:text-sm md:text-doutivida-blue-primary">
            {destaques.map((item) => (
              <li key={item} className="flex items-center gap-1.5">
                <svg
                  viewBox="0 0 24 24"
                  className="h-3.5 w-3.5 text-sky-200 md:text-emerald-600"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="3"
                  aria-hidden="true"
                >
                  <path d="m5 12 5 5L20 7" />
                </svg>
                {item}
              </li>
            ))}
          </ul>
        </div>
      </div>
    </section>
  );
}
