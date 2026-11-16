const WHATSAPP = "https://wa.me/5562992548400?text=";

const servicos = [
  {
    titulo: "Videochamada",
    subtitulo: "Cara a cara com o médico",
    beneficios: [
      "Consulta ao vivo pelo link enviado",
      "Ideal para avaliar sintomas",
      "Receita e atestado digitais",
    ],
    botao: "Agendar por vídeo",
    link: WHATSAPP + encodeURIComponent("Quero agendar uma consulta por vídeo"),
    icone: "video",
    destaque: true,
  },
  {
    titulo: "WhatsApp",
    subtitulo: "Por mensagem, no seu tempo",
    beneficios: [
      "Gasta pouca internet",
      "Sem precisar abrir a câmera",
      "Receita direto na conversa",
    ],
    botao: "Chamar no WhatsApp",
    link: WHATSAPP + encodeURIComponent("Quero uma consulta pelo WhatsApp"),
    icone: "whatsapp",
    destaque: false,
  },
];

function IconeServico({ nome }: { nome: string }) {
  const props = {
    width: 24,
    height: 24,
    viewBox: "0 0 24 24",
    fill: "none",
    stroke: "currentColor",
    strokeWidth: 1.7,
    strokeLinecap: "round" as const,
    strokeLinejoin: "round" as const,
    "aria-hidden": true as const,
  };

  if (nome === "video") {
    return (
      <svg {...props}>
        <rect x="3" y="6" width="12" height="12" rx="2" />
        <path d="m15 10 6-3v10l-6-3" />
      </svg>
    );
  }

  return (
    <svg {...props}>
      <path d="M21 11.5a8.4 8.4 0 0 1-.9 3.8 8.5 8.5 0 0 1-7.6 4.7 8.4 8.4 0 0 1-3.8-.9L3 21l1.9-5.7a8.4 8.4 0 0 1-.9-3.8A8.5 8.5 0 0 1 8.7 4a8.4 8.4 0 0 1 3.8-.9h.5a8.5 8.5 0 0 1 8 8z" />
      <path d="M8 10h8M8 14h5" />
    </svg>
  );
}

function IconeCheck() {
  return (
    <svg
      viewBox="0 0 24 24"
      className="mt-0.5 h-4 w-4 shrink-0"
      fill="none"
      stroke="currentColor"
      strokeWidth="2.5"
      aria-hidden="true"
    >
      <path d="m5 12 5 5L20 7" />
    </svg>
  );
}

export default function Services() {
  return (
    <section
      id="servicos"
      className="bg-porcelain px-5 py-16 md:px-10 md:py-24"
    >
      <div className="mx-auto max-w-5xl">
        <div className="mx-auto mb-10 max-w-2xl text-center md:mb-14">
          <span className="text-sm font-semibold uppercase tracking-[0.18em] text-doutivida-blue-primary">
            Escolha como ser atendido
          </span>

          <h2 className="mt-3 text-3xl font-bold tracking-tight text-doutivida-blue-primary md:text-4xl">
            Nossos serviços
          </h2>

          <p className="mx-auto mt-4 max-w-xl text-base leading-relaxed text-slate-600 md:text-lg">
            O mesmo cuidado e o mesmo preço. Você escolhe o jeito mais
            confortável.
          </p>
        </div>

        <ul className="mx-auto grid max-w-3xl gap-5 md:grid-cols-2 md:gap-6">
          {servicos.map((servico) => {
            const cor = servico.destaque
              ? "text-doutivida-blue-support"
              : "text-emerald-700";

            return (
              <li
                key={servico.titulo}
                className="flex flex-col rounded-2xl border border-slate-100 bg-white p-6 shadow-sm"
              >
                <div className="flex items-center gap-4">
                  <div
                    className={`flex h-12 w-12 shrink-0 items-center justify-center rounded-full ${
                      servico.destaque
                        ? "bg-doutivida-blue-light text-doutivida-blue-primary"
                        : "bg-emerald-50 text-emerald-700"
                    }`}
                  >
                    <IconeServico nome={servico.icone} />
                  </div>

                  <div>
                    <h3 className="text-lg font-semibold text-doutivida-blue-primary md:text-xl">
                      {servico.titulo}
                    </h3>
                    <p className={`text-sm ${cor}`}>{servico.subtitulo}</p>
                  </div>
                </div>

                <ul className="mt-5 flex-1 space-y-2 text-sm text-slate-600 md:text-base">
                  {servico.beneficios.map((beneficio) => (
                    <li key={beneficio} className="flex gap-2">
                      <span className={cor}>
                        <IconeCheck />
                      </span>
                      {beneficio}
                    </li>
                  ))}
                </ul>

                <a
                  href={servico.link}
                  target="_blank"
                  rel="noopener noreferrer"
                  className={`mt-6 inline-flex w-full items-center justify-center rounded-xl px-5 py-4 font-semibold transition duration-300 focus-visible:outline-2 focus-visible:outline-offset-4 ${
                    servico.destaque
                      ? "bg-doutivida-blue-support text-porcelain hover:brightness-95 focus-visible:outline-doutivida-blue-primary"
                      : "border-2 border-emerald-700 text-emerald-700 hover:bg-emerald-50 focus-visible:outline-emerald-700"
                  }`}
                >
                  {servico.botao}
                </a>
              </li>
            );
          })}
        </ul>
      </div>
    </section>
  );
}
