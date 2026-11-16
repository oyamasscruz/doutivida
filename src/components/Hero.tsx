import ImgHero from "../assets/hero.webp";
import ImgHeroMobile from "../assets/hero-800.webp";

const WHATSAPP_LINK =
  "https://wa.me/5562992548400?text=" +
  encodeURIComponent("Quero agendar uma consulta");

const destaques = ["Médicos com CRM", "Receita digital", "Atestado"];

export default function Hero() {
  return (
    <section className="relative isolate flex min-h-[540px] items-center overflow-hidden md:min-h-0">
      <img
        className="absolute inset-0 -z-20 h-full w-full animate-zoom-out object-cover object-[65%_center] md:static md:z-0 md:h-auto"
        src={ImgHero}
        srcSet={`${ImgHeroMobile} 800w, ${ImgHero} 1376w`}
        sizes="100vw"
        width={1376}
        height={768}
        fetchPriority="high"
        alt="Médico atendendo uma paciente por videochamada"
      />
      <div className="absolute inset-0 -z-10 bg-white/45 md:hidden" />

      <div className="w-full p-5 md:absolute md:left-10 md:top-1/2 md:w-auto md:max-w-2xl md:-translate-y-1/2 md:rounded-2xl md:border md:border-white/50 md:bg-white/75 md:p-10 md:shadow-lg">
        <h1 className="animate-fade-up text-center text-3xl font-bold leading-tight text-doutivida-blue-primary md:text-left md:text-5xl">
          Sua consulta na palma da sua mão
        </h1>

        <p className="mt-4 animate-fade-up text-center text-lg text-slate-700 [animation-delay:120ms] md:text-left md:text-xl">
          Sem filas, sem sair de casa e por apenas{" "}
          <span className="whitespace-nowrap rounded-md bg-white/70 px-1.5 text-2xl font-bold text-doutivida-blue-primary md:text-4xl">
            R$ 39,90
          </span>
        </p>

        <p className="mt-4 hidden animate-fade-up text-base leading-relaxed text-slate-600 [animation-delay:200ms] md:block">
          Atendimento rápido e humanizado para você e sua família. Receba
          receita digital e atestado médico direto no seu WhatsApp.
        </p>

        <ul className="mt-5 flex animate-fade-up flex-wrap justify-center gap-2 [animation-delay:240ms] md:justify-start">
          {destaques.map((item) => (
            <li
              key={item}
              className="flex items-center gap-1.5 rounded-full bg-white/80 px-3 py-1 text-xs font-medium text-doutivida-blue-primary md:text-sm"
            >
              <svg
                viewBox="0 0 24 24"
                className="h-3.5 w-3.5 text-emerald-600"
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

        <a
          href={WHATSAPP_LINK}
          target="_blank"
          rel="noopener noreferrer"
          className="mt-6 inline-flex w-full animate-fade-up items-center justify-center gap-2 rounded-lg bg-doutivida-blue-support px-6 py-4 font-bold text-porcelain shadow-md transition duration-300 [animation-delay:320ms] hover:brightness-95 active:scale-[0.98] focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-doutivida-blue-primary md:mt-8 md:w-auto"
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
      </div>
    </section>
  );
}
