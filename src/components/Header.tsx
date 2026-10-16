import { useState } from "react";

import Logo from "../assets/gemini-svg.svg";
import Whatsapp from "../assets/whatsapp (1).png";
import Instagram from "../assets/instagram (1).png";

const navItems = [
  { label: "Home", href: "/" },
  { label: "Como Funciona", href: "#como-funciona" },
  { label: "Serviços", href: "#servicos" },
  { label: "Perguntas Frequentes", href: "#faq" },
];

export default function Header() {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <header className="relative bg-porcelain">
      <div className="flex items-center justify-between p-4 md:px-10">
        <a href="/" aria-label="DoutiVida - Página inicial">
          <img className="h-auto w-40 md:w-64" src={Logo} alt="DoutiVida" />
        </a>
        <button
          type="button"
          className="rounded-md p-2 text-doutivida-blue-primary hover:bg-gray-100 focus-visible:outline-2 focus-visible:outline-offset-2 md:hidden"
          aria-label={menuOpen ? "Fechar menu" : "Abrir menu"}
          aria-expanded={menuOpen}
          aria-controls="main-navigation"
          onClick={() => setMenuOpen((open) => !open)}
        >
          {menuOpen ? (
            <svg
              viewBox="0 0 24 24"
              className="h-7 w-7"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              aria-hidden="true"
            >
              <path d="M18 6 6 18M6 6l12 12" />
            </svg>
          ) : (
            <svg
              viewBox="0 0 24 24"
              className="h-7 w-7"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              aria-hidden="true"
            >
              <path d="M4 6h16M4 12h16M4 18h16" />
            </svg>
          )}
        </button>

        <nav
          id="main-navigation"
          aria-hidden={!menuOpen}
          inert={!menuOpen ? true : undefined}
          className={`
    absolute left-0 top-full z-50 w-full
    origin-top bg-porcelain px-6 shadow-lg
    transition-[opacity,transform,visibility,padding] duration-300 ease-in-out

    md:visible md:static md:block md:w-auto
    md:origin-center md:translate-y-0 md:scale-100
    md:bg-transparent md:p-0 md:opacity-100 md:shadow-none

    ${
      menuOpen
        ? "visible translate-y-0 scale-y-100 opacity-100 py-6"
        : "invisible -translate-y-3 scale-y-95 opacity-0 py-0 pointer-events-none md:pointer-events-auto"
    }
  `}
        >
          <ul className="flex flex-col gap-3 md:flex-row md:items-center md:gap-6">
            {navItems.map((item, index) => (
              <li
                key={item.href}
                className="list-none transition-[opacity,transform] duration-300 ease-out"
                style={{
                  transitionDelay: menuOpen ? `${index * 60}ms` : "0ms",
                  opacity: menuOpen ? 1 : 0,
                  transform: menuOpen ? "translateY(0)" : "translateY(-8px)",
                }}
              >
                <a
                  href={item.href}
                  onClick={() => setMenuOpen(false)}
                  className="
            group relative inline-flex py-2
            text-sm font-medium text-gray-600
            transition-colors duration-200
            hover:text-doutivida-blue-primary
            focus-visible:outline-2
            focus-visible:outline-offset-4
            focus-visible:outline-doutivida-blue-primary
          "
                >
                  {item.label}

                  <span
                    className="
              absolute bottom-0 left-0 h-0.5 w-full
              origin-left scale-x-0
              bg-doutivida-blue-primary
              transition-transform duration-300 ease-out
              group-hover:scale-x-100
            "
                  />
                </a>
              </li>
            ))}
          </ul>

          <div
            className="mt-5 flex items-center gap-4 md:hidden"
            style={{
              transition: "opacity 250ms ease, transform 250ms ease",
              opacity: menuOpen ? 1 : 0,
              transform: menuOpen ? "translateY(0)" : "translateY(-6px)",
            }}
          >
            <a
              href="https://www.instagram.com/institutonura/"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Instagram"
              tabIndex={menuOpen ? 0 : -1}
            >
              <img className="h-7 w-7" src={Instagram} alt="" />
            </a>

            <a
              href="https://wa.me/5562992548400?text=Quero%20saber%20mais%20sobre%20a%20consulta"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="WhatsApp"
              tabIndex={menuOpen ? 0 : -1}
            >
              <img className="h-7 w-7" src={Whatsapp} alt="" />
            </a>
          </div>
        </nav>

        <div className="hidden items-center gap-4 md:flex">
          <a
            href="https://www.instagram.com/institutonura/"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="Instagram"
          >
            <img className="h-7 w-7" src={Instagram} alt="" />
          </a>
          <a
            href="https://wa.me/5562992548400?text=Quero%20saber%20mais%20sobre%20a%20consulta"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="WhatsApp"
          >
            <img className="h-7 w-7" src={Whatsapp} alt="" />
          </a>
        </div>
      </div>
    </header>
  );
}
