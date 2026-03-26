"use client";

import { useState, useEffect, useCallback, useRef } from "react";

const PHONE = "+48518296379";
const EMAIL = "kontakt@glovix.eu";
const WHATSAPP = "+48518296379";

/* ───────────────────────── NAVBAR (fostla-style: logo center, menu btn right) ── */
const MENU_ITEMS = [
  { label: "Start", href: "#" },
  { label: "O nas", href: "#o-nas" },
  { label: "Usługi", href: "#uslugi" },
  { label: "Flota", href: "#flota" },
  { label: "Kontakt", href: "#kontakt" },
];

function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [closing, setClosing] = useState(false);
  const [itemsVisible, setItemsVisible] = useState(false);
  const [navVisible, setNavVisible] = useState(true);

  const openMenu = useCallback(() => {
    setMenuOpen(true);
    setClosing(false);
    setItemsVisible(false);
    setTimeout(() => setItemsVisible(true), 400);
  }, []);

  const closeMenu = useCallback(() => {
    setItemsVisible(false);
    setClosing(true);
    setTimeout(() => {
      setMenuOpen(false);
      setClosing(false);
    }, 600);
  }, []);

  useEffect(() => {
    document.body.style.overflow = menuOpen ? "hidden" : "";
    return () => { document.body.style.overflow = ""; };
  }, [menuOpen]);

  useEffect(() => {
    let lastY = window.scrollY;
    const onScroll = () => {
      const y = window.scrollY;
      if (y < 100) { setNavVisible(true); }
      else if (y < lastY) { setNavVisible(true); }
      else { setNavVisible(false); }
      lastY = y;
    };
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <>
      <style jsx global>{`
        @keyframes menuSlideDown {
          0% { clip-path: inset(0 0 100% 0); }
          50% { clip-path: inset(0 0 0% 0); }
          100% { clip-path: inset(0 0 0% 0); }
        }
        @keyframes menuSlideUp {
          0% { clip-path: inset(0 0 0% 0); }
          100% { clip-path: inset(0 0 100% 0); }
        }
        .menu-overlay-open {
          animation: menuSlideDown 0.6s cubic-bezier(0.76, 0, 0.24, 1) forwards;
        }
        .menu-overlay-close {
          animation: menuSlideUp 0.6s cubic-bezier(0.76, 0, 0.24, 1) forwards;
        }
      `}</style>

      <nav className={`fixed top-0 left-0 right-0 z-50 transition-transform duration-500 ease-[cubic-bezier(0.76,0,0.24,1)] ${navVisible || menuOpen ? "translate-y-0" : "-translate-y-full"}`}>
        <div className="flex items-center justify-center h-20 sm:h-36 px-4 sm:px-6 relative">
          <a href="#" className="flex items-center">
            <img src="/logo.png" alt="GLOVIX" className="h-32 sm:h-56 w-auto object-contain" />
          </a>
          <button
            onClick={openMenu}
            className="absolute right-4 sm:right-6 flex items-center gap-2 hover:bg-white/10 rounded px-3 py-2 sm:px-4 transition-colors z-[80]"
          >
            <span className="flex flex-col gap-[5px]">
              <span className="w-5 h-[2px] bg-white" />
              <span className="w-5 h-[2px] bg-white" />
              <span className="w-5 h-[2px] bg-white" />
            </span>
          </button>
        </div>
      </nav>

      {/* Fullscreen menu overlay */}
      {menuOpen && (
        <div className={`fixed inset-0 z-[70] bg-[#0a0a0a] ${closing ? "menu-overlay-close" : "menu-overlay-open"}`}>
          {/* Close button */}
          <button
            onClick={closeMenu}
            className={`absolute top-6 right-4 sm:top-8 sm:right-8 z-[80] w-12 h-12 flex items-center justify-center hover:bg-white/10 rounded transition-all duration-500 ${itemsVisible ? "opacity-100 rotate-0" : "opacity-0 rotate-90"}`}
          >
            <span className="relative w-6 h-6">
              <span className="absolute top-1/2 left-0 w-6 h-[2px] bg-white rotate-45" />
              <span className="absolute top-1/2 left-0 w-6 h-[2px] bg-white -rotate-45" />
            </span>
          </button>
          <div className={`absolute inset-0 flex transition-opacity duration-300 ${itemsVisible ? "opacity-100" : "opacity-0"}`}>
            {/* Left side - navigation */}
            <div className="flex-1 flex flex-col justify-center px-6 sm:px-16 lg:px-24">
              <div className="absolute top-6 left-6 sm:top-8 sm:left-16 lg:left-24">
                <span className={`text-[10px] sm:text-xs uppercase tracking-[6px] text-white/20 font-medium transition-all duration-500 ${itemsVisible ? "opacity-100 translate-y-0" : "opacity-0 -translate-y-4"}`}>
                  MENU
                </span>
              </div>

              <nav className="flex flex-col gap-2 sm:gap-4">
                {MENU_ITEMS.map((item, i) => (
                  <div key={item.label} className="overflow-hidden">
                    <a
                      href={item.href}
                      onClick={closeMenu}
                      className={`group flex items-center gap-4 transition-all duration-500 ease-[cubic-bezier(0.76,0,0.24,1)] ${
                        itemsVisible
                          ? "translate-y-0 opacity-100"
                          : "translate-y-[110%] opacity-0"
                      }`}
                      style={{ transitionDelay: itemsVisible ? `${i * 80}ms` : "0ms" }}
                    >
                      <span className="text-3xl sm:text-5xl lg:text-6xl xl:text-7xl font-bold text-white/80 group-hover:text-[#E31937] transition-colors duration-300 tracking-tight leading-[1.1]">
                        {item.label}
                      </span>
                      <span className="w-0 group-hover:w-12 h-[2px] bg-[#E31937] transition-all duration-300" />
                    </a>
                  </div>
                ))}
              </nav>
            </div>

            {/* Right side - contact info */}
            <div
              className={`hidden lg:flex flex-col justify-center w-[350px] xl:w-[400px] border-l border-white/5 px-12 transition-all duration-700 delay-300 ${
                itemsVisible ? "opacity-100 translate-x-0" : "opacity-0 translate-x-8"
              }`}
            >
              <div className="space-y-8 text-sm text-white/50">
                <div>
                  <h6 className="text-[10px] uppercase tracking-[4px] text-white/25 mb-3">Telefon</h6>
                  <a href={`tel:${PHONE}`} className="text-white/70 hover:text-white transition-colors">{PHONE}</a>
                </div>
                <div>
                  <h6 className="text-[10px] uppercase tracking-[4px] text-white/25 mb-3">E-Mail</h6>
                  <a href={`mailto:${EMAIL}`} className="text-white/70 hover:text-white transition-colors">{EMAIL}</a>
                </div>
                <div>
                  <h6 className="text-[10px] uppercase tracking-[4px] text-white/25 mb-3">WhatsApp</h6>
                  <a href={`https://wa.me/${WHATSAPP}`} className="text-white/70 hover:text-white transition-colors">{WHATSAPP}</a>
                </div>
              </div>
            </div>
          </div>
        </div>
      )}
    </>
  );
}

/* ───────────────────────── SOCIAL SIDEBAR ── */
function SocialSidebar() {
  return (
    <div className="fixed left-0 top-1/2 -translate-y-1/2 z-40 hidden lg:flex flex-col items-center gap-5 pl-4">
      <a href="#" className="text-white/40 hover:text-white transition-colors" aria-label="Facebook">
        <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
          <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z" />
        </svg>
      </a>
      <a href="#" className="text-white/40 hover:text-white transition-colors" aria-label="Instagram">
        <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
          <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zM12 0C8.741 0 8.333.014 7.053.072 2.695.272.273 2.69.073 7.052.014 8.333 0 8.741 0 12c0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98C8.333 23.986 8.741 24 12 24c3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98C15.668.014 15.259 0 12 0zm0 5.838a6.162 6.162 0 100 12.324 6.162 6.162 0 000-12.324zM12 16a4 4 0 110-8 4 4 0 010 8zm6.406-11.845a1.44 1.44 0 100 2.881 1.44 1.44 0 000-2.881z" />
        </svg>
      </a>
      <div className="w-px h-8 bg-white/20" />
      <span className="social-sidebar text-[10px] uppercase tracking-[3px] text-white/30 font-medium">
        Follow us
      </span>
    </div>
  );
}

/* ───────────────────────── HERO ── */
function Hero() {
  const [videoFailed, setVideoFailed] = useState(false);

  return (
    <section className="hero-bg min-h-screen flex items-end relative overflow-hidden">
      <div className="absolute inset-0">
        {!videoFailed ? (
          <video
            autoPlay
            loop
            muted
            playsInline
            className="w-full h-full object-cover"
            onError={() => setVideoFailed(true)}
          >
            <source src="/hero-video.webm" type="video/webm" />
          </video>
        ) : (
          <img
            src="/hero-bg.jpeg"
            alt="GLOVIX Transport"
            className="w-full h-full object-cover"
          />
        )}
        <div className="absolute inset-0 bg-black/50" />
      </div>
      <div className="relative z-10 px-6 sm:px-16 pb-20 sm:pb-24 pt-28 sm:pt-32 max-w-4xl">
        <h1 className="text-4xl sm:text-7xl lg:text-8xl font-black uppercase leading-[0.95] tracking-tight mb-4 sm:mb-6">
          GLOVIX
        </h1>
        <p className="text-lg sm:text-2xl font-light text-white/80 mb-1 sm:mb-2">
          Transport samochodów
        </p>
        <p className="text-base sm:text-xl font-light text-white/60">
          Laweta Iveco Daily z przyczepą
        </p>
      </div>
      <div className="absolute bottom-0 left-0 right-0 h-40 bg-gradient-to-t from-[#0a0a0a] to-transparent" />
    </section>
  );
}

/* ───────────────────────── SERVICES ── */
function Services() {
  const services = [
    {
      title: "TRANSPORT KRAJOWY",
      subtitle: "Szybki przewóz w całej Polsce",
      image: "/service-krajowy.jpeg",
    },
    {
      title: "TRANSPORT EU",
      subtitle: "Dostawy w całej Europie",
      image: "/service-eu.jpeg",
    },
    {
      title: "POMOC DROGOWA",
      subtitle: "Holowanie i odbiór pojazdów",
      image: "/service-pomoc.jpeg",
    },
  ];

  return (
    <section id="uslugi" className="bg-[#0a0a0a] py-16 sm:py-28">
      <div className="max-w-7xl mx-auto px-5 sm:px-8">
        <div className="text-center mb-12 sm:mb-20">
          <h2 className="text-2xl sm:text-5xl lg:text-6xl font-light uppercase tracking-wide">
            Profesjonalny &amp; niezawodny
          </h2>
          <h3 className="text-2xl sm:text-5xl lg:text-6xl font-bold uppercase tracking-wide mt-1 sm:mt-2">
            Transport pojazdów
          </h3>
          <p className="text-white/50 text-sm sm:text-lg max-w-3xl mx-auto mt-4 sm:mt-8 leading-relaxed">
            Specjalizujemy się w bezpiecznym przewozie samochodów na terenie
            Polski i całej Europy. Dysponujemy lawetą Iveco Daily z przyczepą,
            co pozwala na transport do 3 pojazdów jednocześnie.
          </p>
        </div>
        <div className="grid md:grid-cols-3 gap-4">
          {services.map((s) => (
            <div key={s.title} className="service-card group relative h-60 sm:h-96 bg-[#151515] rounded overflow-hidden cursor-pointer">
              <div className="service-card-img absolute inset-0">
                <img src={s.image} alt={s.title} className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700" />
              </div>
              <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent" />
              <div className="absolute bottom-0 left-0 right-0 p-5 sm:p-8">
                <h4 className="text-lg sm:text-2xl font-bold uppercase tracking-wider mb-1 sm:mb-2">{s.title}</h4>
                <p className="text-white/50 text-sm">{s.subtitle}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

/* ───────────────────────── STATS ── */
function Stats() {
  return (
    <section id="o-nas" className="stats-bg relative py-16 sm:py-28 overflow-hidden">
      <div className="relative z-10 max-w-6xl mx-auto px-6 sm:px-8">
        <h3 className="text-center text-2xl sm:text-4xl font-bold uppercase tracking-wider mb-10 sm:mb-16">Dlaczego my?</h3>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 sm:gap-8">
          {[
            { icon: "🛡️", title: "Ubezpieczenie do 1 mln €", desc: "Pełne ubezpieczenie ładunków do miliona euro — Twój pojazd jest bezpieczny na każdym etapie transportu." },
            { icon: "📄", title: "Dokument CMR", desc: "Do każdego zlecenia wystawiamy międzynarodowy list przewozowy CMR — pełna dokumentacja transportu." },
            { icon: "📸", title: "Zdjęcia załadunku i rozładunku", desc: "Dokumentujemy stan pojazdu przed załadunkiem i po rozładunku — pełna transparentność i bezpieczeństwo." },
            { icon: "📍", title: "Śledzenie GPS", desc: "Możliwość śledzenia transportu w czasie rzeczywistym — zawsze wiesz, gdzie jest Twój pojazd." },
          ].map((item) => (
            <div key={item.title} className="bg-[#111] border border-white/5 rounded p-6 sm:p-8 text-center hover:border-[#E31937]/20 transition-all duration-500">
              <div className="text-4xl mb-4">{item.icon}</div>
              <h4 className="text-base sm:text-lg font-bold uppercase tracking-wide mb-3">{item.title}</h4>
              <p className="text-white/40 text-sm leading-relaxed">{item.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

/* ───────────────────────── FLEET ── */
function Fleet() {
  return (
    <section id="flota" className="bg-[#0a0a0a] py-16 sm:py-28">
      <div className="max-w-7xl mx-auto px-5 sm:px-8">
        <div className="text-center mb-10 sm:mb-16">
          <h2 className="text-3xl sm:text-5xl lg:text-6xl font-light uppercase tracking-wide">Nasza</h2>
          <h3 className="text-3xl sm:text-5xl lg:text-6xl font-bold uppercase tracking-wide mt-1 sm:mt-2">Flota</h3>
        </div>
        <div className="grid md:grid-cols-2 gap-6">
          <div className="group bg-[#111] border border-white/5 rounded overflow-hidden hover:border-[#E31937]/20 transition-all duration-500">
            <div className="h-48 sm:h-64 overflow-hidden">
              <img src="/fleet-laweta.jpeg" alt="Iveco Daily Laweta" className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700" />
            </div>
            <div className="p-5 sm:p-8">
              <h4 className="text-xl sm:text-2xl font-bold uppercase tracking-wide mb-3 sm:mb-4">Iveco Daily — Laweta</h4>
              <p className="text-white/40 text-sm leading-relaxed mb-6">
                Nowoczesna laweta na bazie Iveco Daily z hydraulicznym systemem załadunku. Idealny do szybkiego i bezpiecznego transportu.
              </p>
              <ul className="space-y-3">
                {["Pneumatycznie obniżany najazd", "Wyciągarka elektryczna", "Pełne ubezpieczenie ładunku", "GPS tracking"].map((item) => (
                  <li key={item} className="flex items-center gap-3 text-white/60 text-sm">
                    <span className="w-1.5 h-1.5 bg-[#E31937] rounded-full flex-shrink-0" />
                    {item}
                  </li>
                ))}
              </ul>
            </div>
          </div>
          <div className="group bg-[#111] border border-white/5 rounded overflow-hidden hover:border-[#E31937]/20 transition-all duration-500">
            <div className="h-48 sm:h-64 overflow-hidden">
              <img src="/fleet-zestaw.jpeg" alt="Zestaw z przyczepą" className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700" />
            </div>
            <div className="p-5 sm:p-8">
              <h4 className="text-xl sm:text-2xl font-bold uppercase tracking-wide mb-3 sm:mb-4">Zestaw z przyczepą</h4>
              <p className="text-white/40 text-sm leading-relaxed mb-6">
                Pełny zestaw transportowy — laweta Iveco Daily z przyczepą. Jednoczesny przewóz do 3 pojazdów, optymalizacja kosztów.
              </p>
              <ul className="space-y-3">
                {["Do 3 pojazdów naraz", "Optymalizacja kosztów", "Profesjonalne zabezpieczenie ładunku", "Transport door-to-door"].map((item) => (
                  <li key={item} className="flex items-center gap-3 text-white/60 text-sm">
                    <span className="w-1.5 h-1.5 bg-[#E31937] rounded-full flex-shrink-0" />
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

/* ───────────────────────── TESTIMONIALS ── */
function Testimonials() {
  const reviews = [
    { initials: "MO", name: "Marek", vehicle: "Suzuki Vitara", text: "Serdecznie polecam, wszystko zgodnie z ustaleniami kierowca udostępnił śledzenie przesyłki a więc na bieżąco można było monitorować gdzie znajduje się ładunek co ułatwia organizację pracy." },
    { initials: "FK", name: "Florian", vehicle: "Citroen C3 x 1, Citroen C3 AirCross x 1", text: "Absolut empfehlenswert. Schnell und zuverlässig. Fahrer war immer erreichbar und hat auf Wunsch Rückmeldung gegeben. Sehr gerne wieder - Vielen Dank" },
    { initials: "AA", name: "Adrian", vehicle: "Opel Astra", text: "Mega polecam!" },
    { initials: "KS", name: "Kamil", vehicle: "Opel Astra", text: "Wszystko ok szybko i sprawnie" },
    { initials: "DL", name: "Denis", vehicle: "Mazda RX-8", text: "Tutto perfetto e puntuale" },
    { initials: "PF", name: "Paolo", vehicle: "Dacia Dokker", text: "Sono rimasto molto soddisfatto del servizio. Comunicazione chiara, servizio efficiente, sono stati rispettati i tempi di consegna. Sicuramente ho trovato un riferimento affidabile e sicuro per le prossime volte. Grazie Bartek" },
    { initials: "KS", name: "Karol", vehicle: "Audi A4", text: "Serdecznie polecam przewoźnika." },
    { initials: "GS", name: "Giuseppe", vehicle: "Aixam", text: "Persona seria e professionale al massimo, trasporto avvenuto nei tempi previsti senza alcun problema e ad un prezzo onesto. Consigliatissimo" },
    { initials: "GK", name: "Georgios", vehicle: "Renault Captur", text: "Very professional and helpful. Car was delivered within the accepted time frame. Highly recommended!!!" },
    { initials: "RK", name: "Rafael", vehicle: "Ford Nugget Transit Camper", text: "Szybko bez problemowo Polecam" },
    { initials: "RB", name: "Roman", vehicle: "Renault Kangoo Maxi", text: "Alle wie vereinbart, danke :)" },
    { initials: "PŁ", name: "Paweł", vehicle: "Peugeot Expert", text: "Wszystko ok, polecam" },
    { initials: "MT", name: "Mariusz", vehicle: "Łyżka do koparki", text: "Polecam, wszystko zgodnie z ustaleniami - dobry kontakt, terminowe dostarczenie i odebranie. POLECAM!" },
    { initials: "SN", name: "Stefan", vehicle: "Volkswagen Golf", text: "Alles bestens! Vielen Dank" },
    { initials: "PK", name: "Peter", vehicle: "Volkswagen Transporter", text: "Hat alles perfekt geklappt sehr zu empfehlen. Top" },
    { initials: "PO", name: "Przemyslaw", vehicle: "Fiat Ducato", text: "Polecam, szybki przyjazd wieczorem, duże auto do przewiezienia miałem, daleka trasa, dostarczone szybko, na drugi dzień." },
    { initials: "EL", name: "Enzo", vehicle: "Ford Spartan", text: "Amazing service." },
    { initials: "SP", name: "Sławek", vehicle: "Renault Clio", text: "Pełna profeska, gość mega słowny i punktualny nawet zmieniając miejsce rozładunku nie było żadnego problemu dziękuję i polecam tą firmę!!!" },
    { initials: "OK", name: "Oskar", vehicle: "Audi Cabriolet", text: "Bardzo profesjonalnie, dobra komunikacja, bardzo sympatyczny gość. Gorąco polecam" },
    { initials: "PR", name: "Przemek", vehicle: "BMW 5 Series", text: "Wszystko dobrze, dobra cena, dobry kontakt i szybko dostarczona przesyłka. Polecam!" },
    { initials: "ŁM", name: "Łukasz", vehicle: "Citroen DS3", text: "Szybki kontakt, sprawnie i w dobrej cenie zrealizowany transport mojego Citroena DS3. Wszystko tak jak być powinno. POLECAM" },
    { initials: "ŁP", name: "Łukasz", vehicle: "Nissan Pathfinder", text: "Bardzo miły i rzetelny przewoźnik, polecam z całą pewnością" },
    { initials: "WD", name: "Wojciech", vehicle: "Citroen C3", text: "Kontakt bardzo konkretny i rzeczowy, żadnych problemów. Godny zaufania. Polecam!!!" },
    { initials: "TG", name: "Tadeusz", vehicle: "Ford Pickup", text: "Wszystko w najlepszym porządku dostarczony samochód w całości według ustalonych terminów. Polecam." },
    { initials: "AT", name: "Andrzej", vehicle: "Lexus RX", text: "Bez problemowo, solidnie i sympatycznie." },
    { initials: "KL", name: "Kamil", vehicle: "Mazda 5", text: "Super transport miły kontakt punktualny bez problemu z dogadaniem tematu. Po prostu super, na pewno nie raz skorzystam jeszcze z tego transportu" },
    { initials: "PT", name: "Patryk", vehicle: "FSO Polonez", text: "Wszystko w porządku według ustaleń, świetny kontakt. Polecam" },
  ];

  const scrollRef = useRef<HTMLDivElement>(null);
  const [canScrollLeft, setCanScrollLeft] = useState(false);
  const [canScrollRight, setCanScrollRight] = useState(true);

  const checkScroll = useCallback(() => {
    const el = scrollRef.current;
    if (!el) return;
    setCanScrollLeft(el.scrollLeft > 10);
    setCanScrollRight(el.scrollLeft < el.scrollWidth - el.clientWidth - 10);
  }, []);

  useEffect(() => {
    const el = scrollRef.current;
    if (!el) return;
    checkScroll();
    el.addEventListener("scroll", checkScroll, { passive: true });
    window.addEventListener("resize", checkScroll);
    return () => {
      el.removeEventListener("scroll", checkScroll);
      window.removeEventListener("resize", checkScroll);
    };
  }, [checkScroll]);

  const scroll = (dir: "left" | "right") => {
    const el = scrollRef.current;
    if (!el) return;
    const cardWidth = el.querySelector<HTMLElement>("[data-card]")?.offsetWidth ?? 350;
    const gap = 24;
    const amount = (cardWidth + gap) * (dir === "left" ? -1 : 1);
    el.scrollBy({ left: amount, behavior: "smooth" });
  };

  return (
    <section className="bg-[#0e0e0e] py-16 sm:py-28">
      <div className="max-w-7xl mx-auto px-5 sm:px-8">
        <div className="flex flex-col sm:flex-row sm:items-end sm:justify-between mb-10 sm:mb-16 gap-4 sm:gap-6">
          <div>
            <h2 className="text-3xl sm:text-5xl font-light uppercase tracking-wide">Opinie</h2>
            <h3 className="text-3xl sm:text-5xl font-bold uppercase tracking-wide mt-1 sm:mt-2">Klientów</h3>
            <p className="text-white/30 text-sm mt-4">Źródło: Clicktrans.pl — {reviews.length} pozytywnych opinii</p>
          </div>
          <div className="flex items-center gap-3">
            <button onClick={() => scroll("left")} disabled={!canScrollLeft} className="w-12 h-12 border border-white/10 rounded flex items-center justify-center text-white/40 hover:text-white hover:border-[#E31937] transition-all disabled:opacity-20 disabled:hover:border-white/10 disabled:hover:text-white/40">
              <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M15 19l-7-7 7-7" /></svg>
            </button>
            <button onClick={() => scroll("right")} disabled={!canScrollRight} className="w-12 h-12 border border-white/10 rounded flex items-center justify-center text-white/40 hover:text-white hover:border-[#E31937] transition-all disabled:opacity-20 disabled:hover:border-white/10 disabled:hover:text-white/40">
              <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9 5l7 7-7 7" /></svg>
            </button>
          </div>
        </div>
        <div
          ref={scrollRef}
          className="flex gap-6 overflow-x-auto scroll-smooth snap-x snap-mandatory pb-4 -mb-4"
          style={{ scrollbarWidth: "none", msOverflowStyle: "none", WebkitOverflowScrolling: "touch" }}
        >
          <style jsx>{`.testimonials-scroll::-webkit-scrollbar { display: none; }`}</style>
          {reviews.map((r, idx) => (
            <div
              key={idx}
              data-card
              className="bg-[#151515] border border-white/5 rounded p-6 sm:p-10 flex flex-col flex-shrink-0 w-[85vw] sm:w-[calc((100%-3rem)/3)] snap-start"
            >
              <div className="flex gap-1 justify-center mb-6">
                {[...Array(5)].map((_, i) => (
                  <svg key={i} className="w-5 h-5 text-[#E31937]" fill="currentColor" viewBox="0 0 20 20">
                    <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                  </svg>
                ))}
              </div>
              <p className="text-white/60 text-sm leading-relaxed text-center mb-6 flex-1">&bdquo;{r.text}&rdquo;</p>
              <div className="text-center">
                <div className="w-10 h-10 bg-[#E31937]/10 border border-[#E31937]/20 rounded-full flex items-center justify-center mx-auto mb-3">
                  <span className="text-[#E31937] text-xs font-bold">{r.initials}</span>
                </div>
                <p className="text-white/50 text-sm font-medium">{r.name}</p>
                <p className="text-white/20 text-xs mt-1">{r.vehicle}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

/* ───────────────────────── CONTACT ── */
function Contact() {
  return (
    <section id="kontakt" className="bg-[#0a0a0a] py-16 sm:py-28 relative">
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,_rgba(227,25,55,0.04)_0%,_transparent_60%)]" />
      <div className="max-w-7xl mx-auto px-5 sm:px-8 relative z-10">
        <div className="text-center mb-10 sm:mb-16">
          <h2 className="text-3xl sm:text-5xl lg:text-6xl font-light uppercase tracking-wide">Skontaktuj się</h2>
          <h3 className="text-3xl sm:text-5xl lg:text-6xl font-bold uppercase tracking-wide mt-1 sm:mt-2">Z nami</h3>
          <p className="text-white/40 text-sm sm:text-lg max-w-2xl mx-auto mt-4 sm:mt-8">
            Potrzebujesz wyceny? Zadzwoń, napisz na WhatsApp lub wyślij e-mail.
          </p>
        </div>
        <div className="bg-[#111] border border-white/5 rounded p-5 sm:p-8 max-w-2xl mx-auto mb-8 sm:mb-10 text-center">
          <p className="text-white/50 text-sm font-medium">GLOVIX Bartłomiej Adamiec</p>
          <p className="text-white/30 text-sm mt-1">52, 38-500 Sanoczek, woj. podkarpackie</p>
          <p className="text-white/20 text-xs mt-2">NIP: 6871983552 &nbsp;|&nbsp; REGON: 528636717</p>
        </div>
        <div className="grid sm:grid-cols-3 gap-6 max-w-4xl mx-auto">
          <a href={`tel:${PHONE}`} className="group bg-[#111] border border-white/5 rounded p-6 sm:p-10 text-center hover:border-[#E31937]/30 transition-all duration-500 block">
            <div className="w-16 h-16 rounded-full border border-white/10 flex items-center justify-center mx-auto mb-6 group-hover:border-[#E31937]/50 transition-all duration-500">
              <svg className="w-6 h-6 text-white/40 group-hover:text-[#E31937] transition-colors duration-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
              </svg>
            </div>
            <h4 className="text-sm font-bold uppercase tracking-widest mb-3">Telefon</h4>
            <p className="text-[#E31937] text-sm font-medium">{PHONE}</p>
          </a>
          <a href={`https://wa.me/${WHATSAPP.replace("+", "")}`} target="_blank" rel="noopener noreferrer" className="group bg-[#111] border border-white/5 rounded p-6 sm:p-10 text-center hover:border-[#25D366]/30 transition-all duration-500 block">
            <div className="w-16 h-16 rounded-full border border-white/10 flex items-center justify-center mx-auto mb-6 group-hover:border-[#25D366]/50 transition-all duration-500">
              <svg className="w-6 h-6 text-white/40 group-hover:text-[#25D366] transition-colors duration-500" fill="currentColor" viewBox="0 0 24 24">
                <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z" />
              </svg>
            </div>
            <h4 className="text-sm font-bold uppercase tracking-widest mb-3">WhatsApp</h4>
            <p className="text-[#25D366] text-sm font-medium">{WHATSAPP}</p>
          </a>
          <a href={`mailto:${EMAIL}`} className="group bg-[#111] border border-white/5 rounded p-6 sm:p-10 text-center hover:border-[#E31937]/30 transition-all duration-500 block">
            <div className="w-16 h-16 rounded-full border border-white/10 flex items-center justify-center mx-auto mb-6 group-hover:border-[#E31937]/50 transition-all duration-500">
              <svg className="w-6 h-6 text-white/40 group-hover:text-[#E31937] transition-colors duration-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
              </svg>
            </div>
            <h4 className="text-sm font-bold uppercase tracking-widest mb-3">E-mail</h4>
            <p className="text-[#E31937] text-sm font-medium break-all">{EMAIL}</p>
          </a>
        </div>
      </div>
    </section>
  );
}

/* ───────────────────────── FOOTER ── */
function Footer() {
  return (
    <footer className="bg-[#080808] border-t border-white/5 py-10 sm:py-16">
      <div className="max-w-7xl mx-auto px-5 sm:px-8">
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-8 sm:gap-10 mb-10 sm:mb-12">
          <div>
            <img src="/logo.png" alt="GLOVIX" className="h-8 sm:h-10 w-auto mb-4 sm:mb-6" />
            <p className="text-white/30 text-xs sm:text-sm leading-relaxed">
              Profesjonalny transport samochodów na lawecie w całej Europie. Szybko, bezpiecznie i w konkurencyjnej cenie.
            </p>
          </div>
          <div>
            <h5 className="text-xs sm:text-sm font-bold uppercase tracking-widest mb-3 sm:mb-5">Dane firmowe</h5>
            <ul className="space-y-1.5 sm:space-y-2 text-white/40 text-xs sm:text-sm">
              <li>GLOVIX Bartłomiej Adamiec</li>
              <li>52, 38-500 Sanoczek</li>
              <li>woj. podkarpackie</li>
            </ul>
            <h5 className="text-xs sm:text-sm font-bold uppercase tracking-widest mt-5 mb-3 sm:mb-5">Rejestracja</h5>
            <ul className="space-y-1.5 sm:space-y-2 text-white/40 text-xs sm:text-sm">
              <li>NIP: 6871983552</li>
              <li>REGON: 528636717</li>
              <li>Działalność od: 14.05.2024</li>
            </ul>
          </div>
          <div>
            <h5 className="text-xs sm:text-sm font-bold uppercase tracking-widest mb-3 sm:mb-5">Kontakt</h5>
            <ul className="space-y-1.5 sm:space-y-2 text-xs sm:text-sm">
              <li><a href={`tel:${PHONE}`} className="text-white/40 hover:text-[#E31937] transition-colors">{PHONE}</a></li>
              <li><a href={`mailto:${EMAIL}`} className="text-white/40 hover:text-[#E31937] transition-colors">{EMAIL}</a></li>
              <li><a href={`https://wa.me/${WHATSAPP.replace("+", "")}`} target="_blank" rel="noopener noreferrer" className="text-white/40 hover:text-[#25D366] transition-colors">WhatsApp</a></li>
            </ul>
          </div>
        </div>
        <div className="border-t border-white/5 pt-8 flex flex-col sm:flex-row items-center justify-between gap-4">
          <p className="text-white/20 text-xs tracking-wider">
            &copy; {new Date().getFullYear()} GLOVIX Bartłomiej Adamiec. Wszelkie prawa zastrzeżone.
          </p>
          <p className="text-white/10 text-xs">NIP: 6871983552 | REGON: 528636717</p>
        </div>
      </div>
    </footer>
  );
}

/* ───────────────────────── WHATSAPP FLOAT ── */
function WhatsAppFloat() {
  return (
    <a
      href={`https://wa.me/${WHATSAPP.replace("+", "")}`}
      target="_blank"
      rel="noopener noreferrer"
      className="fixed bottom-4 right-4 sm:bottom-6 sm:right-6 z-50 bg-[#25D366] hover:bg-[#20BD5A] text-white w-12 h-12 sm:w-14 sm:h-14 rounded-full flex items-center justify-center shadow-2xl shadow-[#25D366]/30 hover:scale-110 transition-all"
      aria-label="WhatsApp"
    >
      <svg className="w-6 h-6 sm:w-7 sm:h-7" fill="currentColor" viewBox="0 0 24 24">
        <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z" />
      </svg>
    </a>
  );
}

/* ───────────────────────── PAGE ── */
export default function Home() {
  return (
    <>
      <Navbar />
      <SocialSidebar />
      <Hero />
      <Services />
      <Stats />
      <Fleet />
      <Testimonials />
      <Contact />
      <Footer />
      <WhatsAppFloat />
    </>
  );
}
