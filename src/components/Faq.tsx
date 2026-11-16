const perguntas = [
  {
    pergunta: "O atestado tem validade?",
    resposta:
      "Sim. O atestado é emitido por médico com CRM ativo e tem a mesma validade de um atestado presencial.",
  },
  {
    pergunta: "Como recebo a receita?",
    resposta:
      "Você recebe a receita em PDF com assinatura digital, direto no seu WhatsApp.",
  },
  {
    pergunta: "Quais são as formas de pagamento?",
    resposta: "O pagamento é feito somente via Pix, de forma rápida e segura.",
  },
  {
    pergunta: "Quanto tempo demora para ser atendido?",
    resposta:
      "Em média de 15 a 30 minutos após a confirmação do pagamento, podendo variar de acordo com o fluxo de consultas.",
  },
  {
    pergunta: "Preciso baixar algum aplicativo?",
    resposta:
      "Não. O atendimento por mensagem é pelo WhatsApp e a videochamada abre por um link no navegador.",
  },
];

export default function Faq() {
  return (
    <section id="faq" className="bg-white px-5 py-16 md:px-10 md:py-24">
      <div className="mx-auto max-w-3xl">
        <div className="mb-10 text-center md:mb-14">
          <span className="text-sm font-semibold uppercase tracking-[0.18em] text-doutivida-blue-primary">
            Tire suas dúvidas
          </span>

          <h2 className="mt-3 text-3xl font-bold tracking-tight text-doutivida-blue-primary md:text-4xl">
            Perguntas frequentes
          </h2>
        </div>

        <div className="divide-y divide-slate-200 border-y border-slate-200">
          {perguntas.map((item, index) => (
            <details
              key={item.pergunta}
              name="faq"
              open={index === 0}
              className="group"
            >
              <summary className="flex cursor-pointer list-none items-center justify-between gap-4 py-5 text-left text-base font-semibold text-doutivida-blue-primary md:text-lg [&::-webkit-details-marker]:hidden focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-doutivida-blue-support">
                {item.pergunta}

                <svg
                  viewBox="0 0 24 24"
                  className="h-5 w-5 shrink-0 text-doutivida-blue-support transition-transform duration-300 group-open:rotate-180"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  aria-hidden="true"
                >
                  <path d="m6 9 6 6 6-6" />
                </svg>
              </summary>

              <p className="pb-5 pr-9 text-sm leading-relaxed text-slate-600 md:text-base">
                {item.resposta}
              </p>
            </details>
          ))}
        </div>
      </div>
    </section>
  );
}
