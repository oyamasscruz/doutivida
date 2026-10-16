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
    <header className="relative z-50 bg-porcelain">
      <div className="flex items-center justify-between p-4 md:px-10">
        {/* Logo */}
        <a href="/" aria-label="DoutiVida - Página inicial">
          <img className="h-auto w-40 md:w-64" src={Logo} alt="DoutiVida" />
        </a>

        {/* Botão do menu mobile */}
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

        {/* Navegação principal */}
        <nav
          id="main-navigation"
          aria-label="Navegação principal"
          className={`
            absolute left-0 top-full z-50 w-full
            origin-top bg-porcelain px-6 shadow-lg
            transition-all duration-300 ease-in-out

            ${
              menuOpen
                ? "visible translate-y-0 scale-y-100 opacity-100 py-6 pointer-events-auto"
                : "invisible -translate-y-3 scale-y-95 opacity-0 py-0 pointer-events-none"
            }

            md:visible md:static md:block md:w-auto
            md:translate-y-0 md:scale-y-100
            md:bg-transparent md:p-0 md:opacity-100
            md:shadow-none md:pointer-events-auto
          `}
        >
          <ul className="flex flex-col gap-3 md:flex-row md:items-center md:gap-6">
            {navItems.map((item, index) => (
              <li
                key={item.href}
                className="list-none transition-all duration-300 ease-out md:opacity-100 md:translate-x-0"
                style={{
                  transitionDelay: menuOpen ? `${index * 60}ms` : "0ms",
                  opacity: menuOpen ? 1 : undefined,
                  transform: menuOpen ? "translateX(0)" : undefined,
                }}
              >
                <a
                  href={item.href}
                  onClick={() => setMenuOpen(false)}
                  className="
                    group relative inline-flex w-fit py-2
                    text-base font-medium text-gray-600
                    transition-colors duration-200
                    hover:text-doutivida-blue-primary
                    active:text-doutivida-blue-primary
                    focus-visible:text-doutivida-blue-primary
                    focus-visible:outline-none
                    md:text-sm
                  "
                >
                  {item.label}

                  {/* Faixa animada de sublinhado azul */}
                  <span
                    aria-hidden="true"
                    className="
                      absolute bottom-0 left-0
                      h-0.5 w-full
                      origin-left scale-x-0
                      bg-blue-600
                      transition-transform duration-300 ease-out
                      group-hover:scale-x-100
                      group-active:scale-x-100
                      group-focus-visible:scale-x-100
                    "
                  />
                </a>
              </li>
            ))}
          </ul>

          {/* Redes sociais - mobile */}
          <div
            className="mt-6 flex items-center gap-4 border-t border-gray-200/60 pt-4 md:hidden"
            style={{
              transition: "opacity 250ms ease, transform 250ms ease",
              opacity: menuOpen ? 1 : 0,
              transform: menuOpen ? "translateX(0)" : "translateX(-12px)",
              transitionDelay: menuOpen ? "240ms" : "0ms",
            }}
          >
            <a
              href="https://www.instagram.com/institutonura/"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Instagram"
              tabIndex={menuOpen ? 0 : -1}
              className="transition-transform active:scale-95"
            >
              <img className="h-7 w-7" src={Instagram} alt="Instagram" />
            </a>

            <a
              href="https://wa.me/5562992548400?text=Quero%20saber%20mais%20sobre%20a%20consulta"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="WhatsApp"
              tabIndex={menuOpen ? 0 : -1}
              className="transition-transform active:scale-95"
            >
              <img className="h-7 w-7" src={Whatsapp} alt="WhatsApp" />
            </a>
          </div>
        </nav>

        {/* Redes sociais - desktop */}
        <div className="hidden items-center gap-4 md:flex">
          <a
            href="https://www.instagram.com/institutonura/"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="Instagram"
            className="transition-transform hover:scale-105"
          >
            <img className="h-7 w-7" src={Instagram} alt="Instagram" />
          </a>

          <a
            href="https://wa.me/5562992548400?text=Quero%20saber%20mais%20sobre%20a%20consulta"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="WhatsApp"
            className="transition-transform hover:scale-105"
          >
            <img className="h-7 w-7" src={Whatsapp} alt="WhatsApp" />
          </a>
        </div>
      </div>
    </header>
  );
}
