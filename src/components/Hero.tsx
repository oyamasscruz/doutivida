import ImgHero from "../assets/Gemini_Generated_Image_gmcjftgmcjftgmcj.jpeg";

export default function Hero() {
  return (
    <section className="relative isolate flex min-h-[500px] items-center overflow-hidden md:min-h-0">
      <img
        className="absolute inset-0 -z-20 h-full w-full object-cover object-[65%_center] md:static md:z-0 md:h-auto"
        src={ImgHero}
        alt="Médico realizando uma consulta online"
      />
      <div className="absolute inset-0 -z-10 bg-white/35 md:hidden" />
      <div
        className="
        w-full p-5
        md:absolute md:left-10 md:top-1/2 md:w-auto md:max-w-2xl md:-translate-y-1/2 md:rounded-2xl md:border md:border-white/50 md:bg-white/65 md:p-10 md:shadow-lg md:backdrop-blur-md"
      >
        <h1
          className="text-center md:text-justify
          text-3xl font-bold leading-tight
          text-doutivida-blue-primary
          md:text-5xl
        "
        >
          Sua consulta na palma de sua mão!
        </h1>
        <p className="mt-4 text-lg text-slate-700 md:text-xl md:text-justify text-center">
          Sem filas, sem sair de casa e por apenas{" "}
          <span className="font-bold text-doutivida-blue-primary text-2xl bg-white/65 border-white/65 rounded-md p-1 md:text-4xl">
            R$ 39,90
          </span>
          .
        </p>
        <p className="mt-4 hidden text-base leading-relaxed text-slate-600 md:block">
          Atendimento de saúde rápido e humanizado para você e sua família.
          Receba receita digital e atestado médico direto no seu WhatsApp.
        </p>
        <button
          type="button"
          className="
            mt-6 w-full rounded-lg
            bg-doutivida-blue-support px-5 py-4
            font-bold text-porcelain
            transition-colors duration-300 hover:brightness-95
            md:mt-8 md:w-auto cursor-pointer
          "
        >
          Agende a sua consulta
        </button>
      </div>
    </section>
  );
}
