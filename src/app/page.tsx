"use client";

import { useState } from "react";

const PHONE = "+48XXXXXXXXX"; // TODO: Replace with actual phone number
const EMAIL = "kontakt@glovix.eu"; // TODO: Replace with actual email
const WHATSAPP = "+48XXXXXXXXX"; // TODO: Replace with actual WhatsApp number

function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-dark/95 backdrop-blur-md border-b border-white/5">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-20">
          <a href="#" className="flex items-center gap-3">
            <img
              src="/logo.svg"
              alt="GLOVIX - Transport Samochodów"
              className="h-14 w-auto"
            />
          </a>

          {/* Desktop nav */}
          <div className="hidden md:flex items-center gap-8">
            <a
              href="#o-nas"
              className="text-silver hover:text-white transition-colors text-sm font-medium uppercase tracking-wider"
            >
              O nas
            </a>
            <a
              href="#flota"
              className="text-silver hover:text-white transition-colors text-sm font-medium uppercase tracking-wider"
            >
              Flota
            </a>
            <a
              href="#uslugi"
              className="text-silver hover:text-white transition-colors text-sm font-medium uppercase tracking-wider"
            >
              Usługi
            </a>
            <a
              href="#kontakt"
              className="bg-primary hover:bg-primary-dark text-white px-6 py-2.5 rounded text-sm font-semibold uppercase tracking-wider transition-all"
            >
              Kontakt
            </a>
          </div>

          {/* Mobile hamburger */}
          <button
            className="md:hidden text-white"
            onClick={() => setIsOpen(!isOpen)}
            aria-label="Menu"
          >
            <svg
              className="w-7 h-7"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              {isOpen ? (
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M6 18L18 6M6 6l12 12"
                />
              ) : (
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M4 6h16M4 12h16M4 18h16"
                />
              )}
            </svg>
          </button>
        </div>

        {/* Mobile menu */}
        {isOpen && (
          <div className="md:hidden pb-6 border-t border-white/10 pt-4">
            <div className="flex flex-col gap-4">
              <a
                href="#o-nas"
                onClick={() => setIsOpen(false)}
                className="text-silver hover:text-white transition-colors text-sm font-medium uppercase tracking-wider"
              >
                O nas
              </a>
              <a
                href="#flota"
                onClick={() => setIsOpen(false)}
                className="text-silver hover:text-white transition-colors text-sm font-medium uppercase tracking-wider"
              >
                Flota
              </a>
              <a
                href="#uslugi"
                onClick={() => setIsOpen(false)}
                className="text-silver hover:text-white transition-colors text-sm font-medium uppercase tracking-wider"
              >
                Usługi
              </a>
              <a
                href="#kontakt"
                onClick={() => setIsOpen(false)}
                className="bg-primary text-white px-6 py-2.5 rounded text-sm font-semibold uppercase tracking-wider text-center"
              >
                Kontakt
              </a>
            </div>
          </div>
        )}
      </div>
    </nav>
  );
}

function Hero() {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Background gradient overlay */}
      <div className="absolute inset-0 bg-gradient-to-br from-dark via-dark-medium to-dark-light" />
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top_right,_rgba(227,25,55,0.15)_0%,_transparent_60%)]" />
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_bottom_left,_rgba(192,192,192,0.05)_0%,_transparent_60%)]" />

      {/* Decorative line */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-px h-32 bg-gradient-to-b from-transparent via-primary/50 to-transparent" />

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-32 pb-20">
        <div className="text-center">
          <div className="inline-flex items-center gap-2 bg-white/5 border border-white/10 rounded-full px-4 py-1.5 mb-8">
            <span className="w-2 h-2 bg-primary rounded-full animate-pulse" />
            <span className="text-silver text-xs font-medium uppercase tracking-widest">
              Transport samochodów w całej Europie
            </span>
          </div>

          <h1 className="text-5xl sm:text-6xl lg:text-8xl font-black tracking-tight mb-6">
            <span className="text-gradient">PROFESJONALNY</span>
            <br />
            <span className="text-white">TRANSPORT</span>
            <br />
            <span className="text-primary">POJAZDÓW</span>
          </h1>

          <p className="text-silver text-lg sm:text-xl max-w-2xl mx-auto mb-12 leading-relaxed">
            Bezpieczny i terminowy przewóz samochodów na terenie całej Europy.
            Laweta Iveco Daily z przyczepą — do{" "}
            <strong className="text-white">3 pojazdów</strong> jednocześnie.
          </p>

          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <a
              href={`https://wa.me/${WHATSAPP.replace("+", "")}`}
              target="_blank"
              rel="noopener noreferrer"
              className="group flex items-center gap-3 bg-[#25D366] hover:bg-[#20BD5A] text-white px-8 py-4 rounded-lg text-base font-semibold transition-all shadow-lg shadow-[#25D366]/20 hover:shadow-[#25D366]/40 w-full sm:w-auto justify-center"
            >
              <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
                <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z" />
              </svg>
              WhatsApp
            </a>
            <a
              href={`tel:${PHONE}`}
              className="group flex items-center gap-3 bg-primary hover:bg-primary-dark text-white px-8 py-4 rounded-lg text-base font-semibold transition-all shadow-lg shadow-primary/20 hover:shadow-primary/40 w-full sm:w-auto justify-center"
            >
              <svg
                className="w-5 h-5"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z"
                />
              </svg>
              Zadzwoń teraz
            </a>
          </div>
        </div>
      </div>

      {/* Bottom fade */}
      <div className="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-t from-dark to-transparent" />
    </section>
  );
}

function About() {
  const stats = [
    { value: "EU", label: "Zasięg działania" },
    { value: "24/7", label: "Dostępność" },
    { value: "100%", label: "Ubezpieczenie" },
    { value: "3", label: "Pojazdy jednocześnie" },
  ];

  return (
    <section id="o-nas" className="py-24 bg-dark-medium relative">
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,_rgba(227,25,55,0.05)_0%,_transparent_70%)]" />
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="text-center mb-16">
          <span className="text-primary text-sm font-semibold uppercase tracking-widest">
            O firmie
          </span>
          <h2 className="text-4xl sm:text-5xl font-bold mt-4 mb-6">
            Dlaczego <span className="text-primary">GLOVIX</span>?
          </h2>
          <p className="text-silver text-lg max-w-3xl mx-auto leading-relaxed">
            Jesteśmy firmą transportową specjalizującą się w przewozie
            samochodów na terenie całej Europy. Dysponujemy nowoczesną lawetą
            Iveco Daily z przyczepą, co pozwala nam na jednoczesny transport do
            3 pojazdów. Gwarantujemy bezpieczeństwo, terminowość i konkurencyjne
            ceny.
          </p>
        </div>

        <div className="grid grid-cols-2 lg:grid-cols-4 gap-6">
          {stats.map((stat) => (
            <div
              key={stat.label}
              className="bg-dark border border-white/5 rounded-2xl p-8 text-center hover:border-primary/30 transition-all group"
            >
              <div className="text-4xl sm:text-5xl font-black text-white group-hover:text-primary transition-colors mb-3">
                {stat.value}
              </div>
              <div className="text-silver-dark text-sm uppercase tracking-wider font-medium">
                {stat.label}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

function Fleet() {
  return (
    <section id="flota" className="py-24 bg-dark relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <span className="text-primary text-sm font-semibold uppercase tracking-widest">
            Nasza flota
          </span>
          <h2 className="text-4xl sm:text-5xl font-bold mt-4 mb-6">
            Czym <span className="text-primary">przewozimy</span>?
          </h2>
        </div>

        <div className="grid md:grid-cols-2 gap-8">
          {/* Iveco Daily */}
          <div className="bg-dark-medium border border-white/5 rounded-2xl overflow-hidden group hover:border-primary/30 transition-all">
            <div className="h-56 bg-gradient-to-br from-dark-light to-dark flex items-center justify-center">
              <svg
                className="w-32 h-32 text-silver-dark group-hover:text-primary transition-colors"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={1}
                  d="M9 17a2 2 0 11-4 0 2 2 0 014 0zM19 17a2 2 0 11-4 0 2 2 0 014 0z"
                />
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={1}
                  d="M13 16V6a1 1 0 00-1-1H4a1 1 0 00-1 1v10a1 1 0 001 1h1m8-1a1 1 0 01-1 1H9m4-1V8a1 1 0 011-1h2.586a1 1 0 01.707.293l3.414 3.414a1 1 0 01.293.707V16a1 1 0 01-1 1h-1m-6-1a1 1 0 001 1h1M5 17a2 2 0 104 0m-4 0a2 2 0 114 0m6 0a2 2 0 104 0m-4 0a2 2 0 114 0"
                />
              </svg>
            </div>
            <div className="p-8">
              <h3 className="text-2xl font-bold mb-3">Iveco Daily — Laweta</h3>
              <p className="text-silver leading-relaxed mb-4">
                Nowoczesna laweta na bazie Iveco Daily. Idealny do szybkiego i
                bezpiecznego transportu pojedynczych pojazdów. Wyposażona w
                hydrauliczny system załadunku.
              </p>
              <ul className="space-y-2">
                {[
                  "Hydrauliczny najazd",
                  "Wyciągarka elektryczna",
                  "Pełne ubezpieczenie ładunku",
                  "GPS tracking",
                ].map((item) => (
                  <li
                    key={item}
                    className="flex items-center gap-2 text-silver-light text-sm"
                  >
                    <svg
                      className="w-4 h-4 text-primary flex-shrink-0"
                      fill="currentColor"
                      viewBox="0 0 20 20"
                    >
                      <path
                        fillRule="evenodd"
                        d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
                        clipRule="evenodd"
                      />
                    </svg>
                    {item}
                  </li>
                ))}
              </ul>
            </div>
          </div>

          {/* Zestaw z przyczepą */}
          <div className="bg-dark-medium border border-white/5 rounded-2xl overflow-hidden group hover:border-primary/30 transition-all">
            <div className="h-56 bg-gradient-to-br from-dark-light to-dark flex items-center justify-center">
              <div className="flex items-center gap-2">
                <svg
                  className="w-28 h-28 text-silver-dark group-hover:text-primary transition-colors"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={1}
                    d="M9 17a2 2 0 11-4 0 2 2 0 014 0zM19 17a2 2 0 11-4 0 2 2 0 014 0z"
                  />
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={1}
                    d="M13 16V6a1 1 0 00-1-1H4a1 1 0 00-1 1v10a1 1 0 001 1h1m8-1a1 1 0 01-1 1H9m4-1V8a1 1 0 011-1h2.586a1 1 0 01.707.293l3.414 3.414a1 1 0 01.293.707V16a1 1 0 01-1 1h-1m-6-1a1 1 0 001 1h1M5 17a2 2 0 104 0m-4 0a2 2 0 114 0m6 0a2 2 0 104 0m-4 0a2 2 0 114 0"
                  />
                </svg>
                <svg
                  className="w-6 h-6 text-primary"
                  fill="currentColor"
                  viewBox="0 0 20 20"
                >
                  <path
                    fillRule="evenodd"
                    d="M10.293 3.293a1 1 0 011.414 0l6 6a1 1 0 010 1.414l-6 6a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-4.293-4.293a1 1 0 010-1.414z"
                    clipRule="evenodd"
                  />
                </svg>
                <svg
                  className="w-20 h-20 text-silver-dark group-hover:text-primary transition-colors"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <rect
                    x="2"
                    y="8"
                    width="18"
                    height="8"
                    rx="1"
                    strokeWidth={1}
                  />
                  <circle cx="6" cy="17" r="2" strokeWidth={1} />
                  <circle cx="16" cy="17" r="2" strokeWidth={1} />
                </svg>
              </div>
            </div>
            <div className="p-8">
              <h3 className="text-2xl font-bold mb-3">Zestaw z przyczepą</h3>
              <p className="text-silver leading-relaxed mb-4">
                Pełny zestaw transportowy — laweta Iveco Daily z przyczepą.
                Pozwala na jednoczesny przewóz do 3 pojazdów, co znacznie
                obniża koszty transportu.
              </p>
              <ul className="space-y-2">
                {[
                  "Do 3 pojazdów naraz",
                  "Optymalizacja kosztów",
                  "Profesjonalne mocowanie",
                  "Transport door-to-door",
                ].map((item) => (
                  <li
                    key={item}
                    className="flex items-center gap-2 text-silver-light text-sm"
                  >
                    <svg
                      className="w-4 h-4 text-primary flex-shrink-0"
                      fill="currentColor"
                      viewBox="0 0 20 20"
                    >
                      <path
                        fillRule="evenodd"
                        d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
                        clipRule="evenodd"
                      />
                    </svg>
                    {item}
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

function Services() {
  const services = [
    {
      title: "Transport krajowy",
      desc: "Przewóz samochodów na terenie całej Polski. Szybko, bezpiecznie i w konkurencyjnej cenie.",
      icon: (
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth={1.5}
          d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z"
        />
      ),
      icon2: (
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth={1.5}
          d="M15 11a3 3 0 11-6 0 3 3 0 016 0z"
        />
      ),
    },
    {
      title: "Transport międzynarodowy",
      desc: "Dostarczamy pojazdy w całej Europie. Niemcy, Holandia, Belgia, Francja i inne kraje EU.",
      icon: (
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth={1.5}
          d="M3.055 11H5a2 2 0 012 2v1a2 2 0 002 2 2 2 0 012 2v2.945M8 3.935V5.5A2.5 2.5 0 0010.5 8h.5a2 2 0 012 2 2 2 0 104 0 2 2 0 012-2h1.064M15 20.488V18a2 2 0 012-2h3.064M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
        />
      ),
    },
    {
      title: "Transport z aukcji",
      desc: "Odbieramy samochody z aukcji (Copart, IAAI, BCA) i dostarczamy pod wskazany adres.",
      icon: (
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth={1.5}
          d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"
        />
      ),
    },
    {
      title: "Pomoc drogowa",
      desc: "Holowanie pojazdów uszkodzonych, niesprawnych lub po kolizji. Szybka reakcja.",
      icon: (
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth={1.5}
          d="M13 10V3L4 14h7v7l9-11h-7z"
        />
      ),
    },
  ];

  return (
    <section id="uslugi" className="py-24 bg-dark-medium relative">
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_bottom_right,_rgba(227,25,55,0.05)_0%,_transparent_70%)]" />
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="text-center mb-16">
          <span className="text-primary text-sm font-semibold uppercase tracking-widest">
            Oferta
          </span>
          <h2 className="text-4xl sm:text-5xl font-bold mt-4 mb-6">
            Nasze <span className="text-primary">usługi</span>
          </h2>
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {services.map((service) => (
            <div
              key={service.title}
              className="bg-dark border border-white/5 rounded-2xl p-8 hover:border-primary/30 transition-all group"
            >
              <div className="w-14 h-14 bg-primary/10 rounded-xl flex items-center justify-center mb-6 group-hover:bg-primary/20 transition-all">
                <svg
                  className="w-7 h-7 text-primary"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  {service.icon}
                  {service.icon2}
                </svg>
              </div>
              <h3 className="text-lg font-bold mb-3">{service.title}</h3>
              <p className="text-silver text-sm leading-relaxed">
                {service.desc}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

function Contact() {
  return (
    <section id="kontakt" className="py-24 bg-dark relative">
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,_rgba(227,25,55,0.08)_0%,_transparent_60%)]" />
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="text-center mb-16">
          <span className="text-primary text-sm font-semibold uppercase tracking-widest">
            Kontakt
          </span>
          <h2 className="text-4xl sm:text-5xl font-bold mt-4 mb-6">
            Skontaktuj się <span className="text-primary">z nami</span>
          </h2>
          <p className="text-silver text-lg max-w-2xl mx-auto">
            Potrzebujesz wyceny? Zadzwoń, napisz na WhatsApp lub wyślij
            e-mail. Odpowiadamy szybko!
          </p>
        </div>

        <div className="grid sm:grid-cols-3 gap-6 max-w-4xl mx-auto">
          {/* Phone */}
          <a
            href={`tel:${PHONE}`}
            className="bg-dark-medium border border-white/5 rounded-2xl p-8 text-center hover:border-primary/30 transition-all group block"
          >
            <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-5 group-hover:bg-primary/20 transition-all">
              <svg
                className="w-7 h-7 text-primary"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z"
                />
              </svg>
            </div>
            <h3 className="text-lg font-bold mb-2">Telefon</h3>
            <p className="text-primary font-semibold">{PHONE}</p>
          </a>

          {/* WhatsApp */}
          <a
            href={`https://wa.me/${WHATSAPP.replace("+", "")}`}
            target="_blank"
            rel="noopener noreferrer"
            className="bg-dark-medium border border-white/5 rounded-2xl p-8 text-center hover:border-[#25D366]/30 transition-all group block"
          >
            <div className="w-16 h-16 bg-[#25D366]/10 rounded-full flex items-center justify-center mx-auto mb-5 group-hover:bg-[#25D366]/20 transition-all">
              <svg
                className="w-7 h-7 text-[#25D366]"
                fill="currentColor"
                viewBox="0 0 24 24"
              >
                <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z" />
              </svg>
            </div>
            <h3 className="text-lg font-bold mb-2">WhatsApp</h3>
            <p className="text-[#25D366] font-semibold">{WHATSAPP}</p>
          </a>

          {/* Email */}
          <a
            href={`mailto:${EMAIL}`}
            className="bg-dark-medium border border-white/5 rounded-2xl p-8 text-center hover:border-primary/30 transition-all group block"
          >
            <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-5 group-hover:bg-primary/20 transition-all">
              <svg
                className="w-7 h-7 text-primary"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"
                />
              </svg>
            </div>
            <h3 className="text-lg font-bold mb-2">E-mail</h3>
            <p className="text-primary font-semibold break-all">{EMAIL}</p>
          </a>
        </div>
      </div>
    </section>
  );
}

function WhatsAppFloat() {
  return (
    <a
      href={`https://wa.me/${WHATSAPP.replace("+", "")}`}
      target="_blank"
      rel="noopener noreferrer"
      className="fixed bottom-6 right-6 z-50 bg-[#25D366] hover:bg-[#20BD5A] text-white w-16 h-16 rounded-full flex items-center justify-center shadow-2xl shadow-[#25D366]/30 hover:scale-110 transition-all"
      aria-label="Napisz na WhatsApp"
    >
      <svg className="w-8 h-8" fill="currentColor" viewBox="0 0 24 24">
        <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z" />
      </svg>
    </a>
  );
}

function Footer() {
  return (
    <footer className="bg-dark-medium border-t border-white/5 py-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col md:flex-row items-center justify-between gap-6">
          <div className="flex items-center gap-3">
            <img src="/logo.svg" alt="GLOVIX" className="h-10 w-auto" />
          </div>
          <div className="flex items-center gap-6 text-silver text-sm">
            <a href="#o-nas" className="hover:text-white transition-colors">
              O nas
            </a>
            <a href="#flota" className="hover:text-white transition-colors">
              Flota
            </a>
            <a href="#uslugi" className="hover:text-white transition-colors">
              Usługi
            </a>
            <a href="#kontakt" className="hover:text-white transition-colors">
              Kontakt
            </a>
          </div>
          <p className="text-silver-dark text-sm">
            &copy; {new Date().getFullYear()} GLOVIX. Wszelkie prawa
            zastrzeżone.
          </p>
        </div>
      </div>
    </footer>
  );
}

export default function Home() {
  return (
    <>
      <Navbar />
      <Hero />
      <About />
      <Fleet />
      <Services />
      <Contact />
      <Footer />
      <WhatsAppFloat />
    </>
  );
}
