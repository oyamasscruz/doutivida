import Whatsapp from "../assets/whatsapp.webp";
import Instagram from "../assets/instagram.webp";

const DEV_LINK =
  "https://wa.me/5562992113288?text=" +
  encodeURIComponent("Olá! Vi o site da DoutiVida e quero um site também.");

export default function Footer() {
  const ano = new Date().getFullYear();

  return (
    <footer className="bg-doutivida-navy px-5 pb-6 pt-10 text-center text-slate-300 md:px-10">
      <div className="mx-auto max-w-5xl">
        <p className="text-xl font-semibold text-white">DoutiVida</p>
        <p className="mt-2 text-sm text-slate-400">
          Consulta médica online, simples e acessível.
        </p>

        <div className="mt-6 flex justify-center gap-5">
          <a
            href="https://www.instagram.com/doutivida"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="Instagram da DoutiVida"
            className="transition-transform hover:scale-105 active:scale-95"
          >
            <img
              className="h-7 w-7"
              src={Instagram}
              alt=""
              width={28}
              height={28}
              loading="lazy"
            />
          </a>

          <a
            href="https://wa.me/5562992548400?text=Quero%20saber%20mais%20sobre%20a%20consulta"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="WhatsApp da DoutiVida"
            className="transition-transform hover:scale-105 active:scale-95"
          >
            <img
              className="h-7 w-7"
              src={Whatsapp}
              alt=""
              width={28}
              height={28}
              loading="lazy"
            />
          </a>
        </div>

        <div className="mt-8 flex flex-col items-center gap-2 border-t border-white/10 pt-5 text-xs text-slate-400 md:flex-row md:justify-between">
          <p>© {ano} DoutiVida. Todos os direitos reservados.</p>
          <p>
            Desenvolvido por{" "}
            <a
              href={DEV_LINK}
              target="_blank"
              rel="noopener noreferrer"
              className="font-semibold text-slate-200 underline-offset-4 transition-colors hover:text-white hover:underline"
            >
              DevBoost
            </a>
          </p>
        </div>
      </div>
    </footer>
  );
}
