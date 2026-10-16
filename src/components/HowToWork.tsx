import { useEffect, useRef, useState } from "react";

const etapas = [
  {
    numero: "01",
    titulo: "Fale com um especialista",
    descricao:
      "Clique no botão e seja direcionado a um atendente especialista.",
    icone: "message",
  },
  {
    numero: "02",
    titulo: "Preencha o formulário",
    descricao:
      "Informe os dados necessários para dar continuidade ao atendimento.",
    icone: "clipboard",
  },
  {
    numero: "03",
    titulo: "Realize o pagamento",
    descricao:
      "Conclua o pagamento de forma simples e prática, exclusivamente via Pix.",
    icone: "pix",
  },
  {
    numero: "04",
    titulo: "Consulte nossos médicos",
    descricao:
      "Receba atendimento médico on-line com praticidade e comodidade.",
    icone: "medical",
  },
  {
    numero: "05",
    titulo: "Receba seus documentos",
    descricao:
      "Receba sua receita e seu atestado digital, quando indicados pelo médico.",
    icone: "document",
  },
];

type IconeEtapaProps = {
  nome: string;
};

function IconeEtapa({ nome }: IconeEtapaProps) {
  const props = {
    width: 25,
    height: 25,
    viewBox: "0 0 24 24",
    fill: "none",
    stroke: "currentColor",
    strokeWidth: 1.7,
    strokeLinecap: "round" as const,
    strokeLinejoin: "round" as const,
    "aria-hidden": true as const,
  };

  switch (nome) {
    case "message":
      return (
        <svg {...props}>
          <path d="M21 11.5a8.4 8.4 0 0 1-.9 3.8 8.5 8.5 0 0 1-7.6 4.7 8.4 8.4 0 0 1-3.8-.9L3 21l1.9-5.7a8.4 8.4 0 0 1-.9-3.8A8.5 8.5 0 0 1 8.7 4a8.4 8.4 0 0 1 3.8-.9h.5a8.5 8.5 0 0 1 8 8z" />
        </svg>
      );

    case "clipboard":
      return (
        <svg {...props}>
          <rect x="5" y="4" width="14" height="17" rx="2" />
          <path d="M9 4.5V3h6v1.5M9 10h6M9 14h6M9 18h3" />
        </svg>
      );

    case "pix":
      return (
        <svg {...props}>
          <path d="m7 3 5 5 5-5M7 21l5-5 5 5M3 7l5 5-5 5M21 7l-5 5 5 5" />
        </svg>
      );

    case "medical":
      return (
        <svg {...props}>
          <path d="M8 3v5a4 4 0 0 0 8 0V3M6 3h4M14 3h4M12 12v3a5 5 0 0 0 10 0v-1" />
          <circle cx="22" cy="12" r="1" />
          <path d="M5 12H3a1 1 0 0 0-1 1v3a5 5 0 0 0 10 0v-1" />
        </svg>
      );

    default:
      return (
        <svg {...props}>
          <path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z" />
          <path d="M14 2v6h6M8 13h8M8 17h5" />
          <path d="m9 9 1.5 1.5L13 8" />
        </svg>
      );
  }
}

export default function HowToWork() {
  const secaoRef = useRef<HTMLElement>(null);
  const [visivel, setVisivel] = useState(false);

  useEffect(() => {
    const elemento = secaoRef.current;

    if (!elemento) return;

    const observador = new IntersectionObserver(
      ([entrada]) => {
        if (entrada.isIntersecting) {
          setVisivel(true);
          observador.disconnect();
        }
      },
      { threshold: 0.15 },
    );

    observador.observe(elemento);

    return () => observador.disconnect();
  }, []);

  return (
    <>
      <style>{`
        .etapa-animada {
          opacity: 0;
          transform: translateX(-36px);
          transition:
            opacity 600ms ease,
            transform 600ms cubic-bezier(0.22, 1, 0.36, 1);
        }

        .etapa-animada.etapa-visivel {
          opacity: 1;
          transform: translateX(0);
        }

        @media (prefers-reduced-motion: reduce) {
          .etapa-animada,
          .etapa-animada.etapa-visivel {
            opacity: 1;
            transform: none;
            transition: none;
          }
        }
      `}</style>

      <section
        ref={secaoRef}
        id="como-funciona"
        className="bg-porcelain px-5 py-16 md:px-10 md:py-24"
      >
        <div className="mx-auto max-w-5xl">
          <div className="mx-auto mb-12 max-w-2xl text-center md:mb-16">
            <span className="text-sm font-semibold uppercase tracking-[0.18em] text-doutivida-blue-primary">
              Simples e prático
            </span>

            <h2 className="mt-3 text-3xl font-bold tracking-tight text-doutivida-blue-primary md:text-4xl">
              Como funciona?
            </h2>

            <p className="mx-auto mt-4 max-w-xl text-base leading-relaxed text-slate-600 md:text-lg">
              Da primeira conversa ao atendimento médico, acompanhe cada etapa
              para cuidar da sua saúde com mais praticidade.
            </p>
          </div>

          <div className="relative mx-auto max-w-3xl">
            {/* Linha que conecta as etapas */}
            <div
              aria-hidden="true"
              className="absolute bottom-12 left-6 top-12 w-px bg-slate-200 md:left-8"
            />

            <ol className="relative space-y-7 md:space-y-9">
              {etapas.map((etapa, index) => (
                <li
                  key={etapa.numero}
                  className={`etapa-animada ${visivel ? "etapa-visivel" : ""}`}
                  style={{
                    transitionDelay: visivel ? `${index * 150}ms` : "0ms",
                  }}
                >
                  <div className="relative flex items-start gap-4 md:gap-6">
                    {/* Ícone */}
                    <div
                      className={`relative z-10 flex h-12 w-12 shrink-0 items-center justify-center rounded-full border border-slate-200 shadow-sm md:h-16 md:w-16 ${
                        index === 4
                          ? "bg-emerald-50 text-emerald-700"
                          : "bg-white text-doutivida-blue-primary"
                      }`}
                    >
                      <IconeEtapa nome={etapa.icone} />
                    </div>

                    {/* Card da etapa */}
                    <div
                      className={`min-w-0 flex-1 rounded-2xl border p-5 shadow-sm transition-colors duration-300 md:p-6 ${
                        index === 4
                          ? "border-emerald-100 bg-emerald-50/70"
                          : "border-slate-100 bg-white hover:border-slate-200"
                      }`}
                    >
                      <span
                        className={`text-xs font-bold tracking-widest ${
                          index === 4
                            ? "text-emerald-700"
                            : "text-doutivida-blue-support"
                        }`}
                      >
                        ETAPA {etapa.numero}
                      </span>

                      <h3 className="mt-1 text-lg font-semibold text-doutivida-blue-primary md:text-xl">
                        {etapa.titulo}
                      </h3>

                      <p className="mt-2 text-sm leading-relaxed text-slate-600 md:text-base">
                        {etapa.descricao}
                      </p>
                    </div>
                  </div>
                </li>
              ))}
            </ol>
          </div>

          {/* CTA final */}
          <div className="mt-12 text-center md:mt-16">
            <p className="text-lg font-semibold text-doutivida-blue-primary">
              Pronto para começar?
            </p>

            <a
              href="https://wa.me/5562992548400?text=Quero%20saber%20mais%20sobre%20a%20consulta"
              target="_blank"
              rel="noopener noreferrer"
              className="mt-5 inline-flex w-full items-center justify-center rounded-xl bg-doutivida-blue-support px-7 py-4 font-semibold text-porcelain shadow-sm transition duration-300 hover:brightness-95 focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-doutivida-blue-primary sm:w-auto"
            >
              Falar com um especialista
            </a>
          </div>
        </div>
      </section>
    </>
  );
}
