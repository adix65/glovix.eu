"use client";

import { useState } from "react";

const PHONE = "+48XXXXXXXXX";
const EMAIL = "kontakt@glovix.eu";
const WHATSAPP = "+48XXXXXXXXX";

/* ───────────────────────── NAVBAR (fostla-style: logo center, menu btn right) ── */
function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <>
      <nav className="fixed top-0 left-0 right-0 z-50 bg-[#111]/90 backdrop-blur-md">
        <div className="flex items-center justify-center h-16 px-6 relative">
          <a href="#" className="flex items-center">
            <img src="/logo.png" alt="GLOVIX" className="h-10 w-auto" />
          </a>
          <button
            onClick={() => setMenuOpen(!menuOpen)}
            className="absolute right-6 flex items-center gap-3 bg-[#1a1a1a] hover:bg-[#222] border border-white/10 rounded px-5 py-2.5 transition-colors"
          >
            <span className="flex flex-col gap-[5px]">
              <span className={`w-5 h-[2px] bg-white transition-all ${menuOpen ? "rotate-45 translate-y-[7px]" : ""}`} />
              <span className={`w-5 h-[2px] bg-white transition-all ${menuOpen ? "opacity-0" : ""}`} />
              <span className={`w-5 h-[2px] bg-white transition-all ${menuOpen ? "-rotate-45 -translate-y-[7px]" : ""}`} />
            </span>
            <span className="text-white text-sm font-medium hidden sm:inline">Menu</span>
          </button>
        </div>
        <div className="h-[3px] bg-[#E31937]" />
      </nav>

      {menuOpen && (
        <div className="fixed inset-0 z-[60] bg-[#0a0a0a]/98 backdrop-blur-xl flex items-center justify-center">
          <button
            onClick={() => setMenuOpen(false)}
            className="absolute top-5 right-6 flex items-center gap-3 bg-[#1a1a1a] border border-white/10 rounded px-5 py-2.5"
          >
            <span className="flex flex-col gap-[5px]">
              <span className="w-5 h-[2px] bg-white rotate-45 translate-y-[7px]" />
              <span className="w-5 h-[2px] bg-white opacity-0" />
              <span className="w-5 h-[2px] bg-white -rotate-45 -translate-y-[7px]" />
            </span>
            <span className="text-white text-sm font-medium hidden sm:inline">Zamknij</span>
          </button>
          <div className="flex flex-col items-center gap-8">
            {[
              { label: "Start", href: "#" },
              { label: "O nas", href: "#o-nas" },
              { label: "Usługi", href: "#uslugi" },
              { label: "Flota", href: "#flota" },
              { label: "Kontakt", href: "#kontakt" },
            ].map((item) => (
              <a
                key={item.label}
                href={item.href}
                onClick={() => setMenuOpen(false)}
                className="text-4xl sm:text-5xl font-bold text-white/80 hover:text-[#E31937] transition-colors tracking-wider"
              >
                {item.label}
              </a>
            ))}
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
  return (
    <section className="hero-bg min-h-screen flex items-end relative overflow-hidden">
      <div className="absolute inset-0">
        <video
          autoPlay
          loop
          muted
          playsInline
          className="w-full h-full object-cover"
        >
          <source src="/hero-video.webm" type="video/webm" />
        </video>
        <div className="absolute inset-0 bg-black/50" />
      </div>
      <div className="relative z-10 px-8 sm:px-16 pb-24 pt-32 max-w-4xl">
        <h1 className="text-5xl sm:text-7xl lg:text-8xl font-black uppercase leading-[0.95] tracking-tight mb-6">
          GLOVIX
        </h1>
        <p className="text-xl sm:text-2xl font-light text-white/80 mb-2">
          Transport samochodów
        </p>
        <p className="text-lg sm:text-xl font-light text-white/60">
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
      icon: (
        <svg className="w-16 h-16 text-white/30 group-hover:text-[#E31937] transition-colors duration-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
        </svg>
      ),
    },
    {
      title: "TRANSPORT EU",
      subtitle: "Dostawy w całej Europie",
      icon: (
        <svg className="w-16 h-16 text-white/30 group-hover:text-[#E31937] transition-colors duration-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1} d="M3.055 11H5a2 2 0 012 2v1a2 2 0 002 2 2 2 0 012 2v2.945M8 3.935V5.5A2.5 2.5 0 0010.5 8h.5a2 2 0 012 2 2 2 0 104 0 2 2 0 012-2h1.064M15 20.488V18a2 2 0 012-2h3.064M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
        </svg>
      ),
    },
    {
      title: "POMOC DROGOWA",
      subtitle: "Holowanie i odbiór pojazdów",
      icon: (
        <svg className="w-16 h-16 text-white/30 group-hover:text-[#E31937] transition-colors duration-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1} d="M13 10V3L4 14h7v7l9-11h-7z" />
        </svg>
      ),
    },
  ];

  return (
    <section id="uslugi" className="bg-[#0a0a0a] py-28">
      <div className="max-w-7xl mx-auto px-6 sm:px-8">
        <div className="text-center mb-20">
          <h2 className="text-4xl sm:text-5xl lg:text-6xl font-light uppercase tracking-wide">
            Profesjonalny &amp; niezawodny
          </h2>
          <h3 className="text-4xl sm:text-5xl lg:text-6xl font-bold uppercase tracking-wide mt-2">
            Transport pojazdów
          </h3>
          <p className="text-white/50 text-base sm:text-lg max-w-3xl mx-auto mt-8 leading-relaxed">
            Specjalizujemy się w bezpiecznym przewozie samochodów na terenie
            Polski i całej Europy. Dysponujemy lawetą Iveco Daily z przyczepą,
            co pozwala na transport do 3 pojazdów jednocześnie.
          </p>
        </div>
        <div className="grid md:grid-cols-3 gap-4">
          {services.map((s) => (
            <div key={s.title} className="service-card group relative h-80 sm:h-96 bg-[#151515] rounded overflow-hidden cursor-pointer">
              <div className="service-card-img absolute inset-0 flex items-center justify-center bg-gradient-to-br from-[#1a1a1a] to-[#111]">
                {s.icon}
              </div>
              <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent" />
              <div className="absolute bottom-0 left-0 right-0 p-8">
                <h4 className="text-xl sm:text-2xl font-bold uppercase tracking-wider mb-2">{s.title}</h4>
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
    <section id="o-nas" className="stats-bg relative py-32 sm:py-44 overflow-hidden">
      <div className="relative z-10 max-w-6xl mx-auto px-6 sm:px-8 flex flex-col sm:flex-row items-center justify-around gap-16">
        {[
          { value: "EU", label: "Zasięg" },
          { value: "24/7", label: "Dostępność" },
          { value: "100%", label: "Ubezpieczenie" },
        ].map((s) => (
          <div key={s.label} className="text-center">
            <div className="text-6xl sm:text-7xl lg:text-8xl font-black text-white italic tracking-tight">{s.value}</div>
            <div className="text-white/50 text-base sm:text-lg mt-3 font-light tracking-wider">{s.label}</div>
          </div>
        ))}
      </div>
    </section>
  );
}

/* ───────────────────────── FLEET ── */
function Fleet() {
  return (
    <section id="flota" className="bg-[#0a0a0a] py-28">
      <div className="max-w-7xl mx-auto px-6 sm:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl sm:text-5xl lg:text-6xl font-light uppercase tracking-wide">Nasza</h2>
          <h3 className="text-4xl sm:text-5xl lg:text-6xl font-bold uppercase tracking-wide mt-2">Flota</h3>
        </div>
        <div className="grid md:grid-cols-2 gap-6">
          <div className="group bg-[#111] border border-white/5 rounded overflow-hidden hover:border-[#E31937]/20 transition-all duration-500">
            <div className="h-64 bg-gradient-to-br from-[#1a1a1a] to-[#0d0d0d] flex items-center justify-center">
              <svg className="w-32 h-32 text-white/10 group-hover:text-[#E31937]/30 transition-colors duration-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={0.8} d="M9 17a2 2 0 11-4 0 2 2 0 014 0zM19 17a2 2 0 11-4 0 2 2 0 014 0z" />
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={0.8} d="M13 16V6a1 1 0 00-1-1H4a1 1 0 00-1 1v10a1 1 0 001 1h1m8-1a1 1 0 01-1 1H9m4-1V8a1 1 0 011-1h2.586a1 1 0 01.707.293l3.414 3.414a1 1 0 01.293.707V16a1 1 0 01-1 1h-1m-6-1a1 1 0 001 1h1M5 17a2 2 0 104 0m-4 0a2 2 0 114 0m6 0a2 2 0 104 0m-4 0a2 2 0 114 0" />
              </svg>
            </div>
            <div className="p-8">
              <h4 className="text-2xl font-bold uppercase tracking-wide mb-4">Iveco Daily — Laweta</h4>
              <p className="text-white/40 text-sm leading-relaxed mb-6">
                Nowoczesna laweta na bazie Iveco Daily z hydraulicznym systemem załadunku. Idealny do szybkiego i bezpiecznego transportu.
              </p>
              <ul className="space-y-3">
                {["Hydrauliczny najazd", "Wyciągarka elektryczna", "Pełne ubezpieczenie ładunku", "GPS tracking"].map((item) => (
                  <li key={item} className="flex items-center gap-3 text-white/60 text-sm">
                    <span className="w-1.5 h-1.5 bg-[#E31937] rounded-full flex-shrink-0" />
                    {item}
                  </li>
                ))}
              </ul>
            </div>
          </div>
          <div className="group bg-[#111] border border-white/5 rounded overflow-hidden hover:border-[#E31937]/20 transition-all duration-500">
            <div className="h-64 bg-gradient-to-br from-[#1a1a1a] to-[#0d0d0d] flex items-center justify-center gap-3">
              <svg className="w-24 h-24 text-white/10 group-hover:text-[#E31937]/30 transition-colors duration-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={0.8} d="M9 17a2 2 0 11-4 0 2 2 0 014 0zM19 17a2 2 0 11-4 0 2 2 0 014 0z" />
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={0.8} d="M13 16V6a1 1 0 00-1-1H4a1 1 0 00-1 1v10a1 1 0 001 1h1m8-1a1 1 0 01-1 1H9m4-1V8a1 1 0 011-1h2.586a1 1 0 01.707.293l3.414 3.414a1 1 0 01.293.707V16a1 1 0 01-1 1h-1m-6-1a1 1 0 001 1h1M5 17a2 2 0 104 0m-4 0a2 2 0 114 0m6 0a2 2 0 104 0m-4 0a2 2 0 114 0" />
              </svg>
              <span className="text-[#E31937] text-2xl font-bold">+</span>
              <svg className="w-20 h-20 text-white/10 group-hover:text-[#E31937]/30 transition-colors duration-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <rect x="2" y="8" width="18" height="8" rx="1" strokeWidth={0.8} />
                <circle cx="6" cy="17" r="2" strokeWidth={0.8} />
                <circle cx="16" cy="17" r="2" strokeWidth={0.8} />
              </svg>
            </div>
            <div className="p-8">
              <h4 className="text-2xl font-bold uppercase tracking-wide mb-4">Zestaw z przyczepą</h4>
              <p className="text-white/40 text-sm leading-relaxed mb-6">
                Pełny zestaw transportowy — laweta Iveco Daily z przyczepą. Jednoczesny przewóz do 3 pojazdów, optymalizacja kosztów.
              </p>
              <ul className="space-y-3">
                {["Do 3 pojazdów naraz", "Optymalizacja kosztów", "Profesjonalne mocowanie", "Transport door-to-door"].map((item) => (
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
    { text: "Profesjonalna obsługa od początku do końca. Samochód dotarł w idealnym stanie, w ustalonym terminie. Polecam każdemu!", name: "Marcin K." },
    { text: "Korzystałem z usług GLOVIX kilkukrotnie — transport z Niemiec do Polski. Zawsze bezproblemowo, kontakt świetny, ceny konkurencyjne.", name: "Tomasz W." },
    { text: "Bardzo sprawna realizacja zlecenia. Auto odebrane z aukcji i dostarczone pod dom w 3 dni. Na pewno skorzystam ponownie.", name: "Anna S." },
  ];

  return (
    <section className="bg-[#0e0e0e] py-28">
      <div className="max-w-7xl mx-auto px-6 sm:px-8">
        <div className="mb-16">
          <h2 className="text-4xl sm:text-5xl font-light uppercase tracking-wide">Co mówią nasi</h2>
          <h3 className="text-4xl sm:text-5xl font-bold uppercase tracking-wide mt-2">Klienci</h3>
        </div>
        <div className="grid md:grid-cols-3 gap-6">
          {reviews.map((r) => (
            <div key={r.name} className="bg-[#151515] border border-white/5 rounded p-8 sm:p-10">
              <div className="flex gap-1 justify-center mb-6">
                {[...Array(5)].map((_, i) => (
                  <svg key={i} className="w-5 h-5 text-white" fill="currentColor" viewBox="0 0 20 20">
                    <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                  </svg>
                ))}
              </div>
              <p className="text-white/60 text-sm leading-relaxed text-center mb-8">&bdquo;{r.text}&rdquo;</p>
              <p className="text-white/30 text-sm text-center font-medium tracking-wider">{r.name}</p>
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
    <section id="kontakt" className="bg-[#0a0a0a] py-28 relative">
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,_rgba(227,25,55,0.04)_0%,_transparent_60%)]" />
      <div className="max-w-7xl mx-auto px-6 sm:px-8 relative z-10">
        <div className="text-center mb-16">
          <h2 className="text-4xl sm:text-5xl lg:text-6xl font-light uppercase tracking-wide">Skontaktuj się</h2>
          <h3 className="text-4xl sm:text-5xl lg:text-6xl font-bold uppercase tracking-wide mt-2">Z nami</h3>
          <p className="text-white/40 text-base sm:text-lg max-w-2xl mx-auto mt-8">
            Potrzebujesz wyceny? Zadzwoń, napisz na WhatsApp lub wyślij e-mail.
          </p>
        </div>
        <div className="grid sm:grid-cols-3 gap-6 max-w-4xl mx-auto">
          <a href={`tel:${PHONE}`} className="group bg-[#111] border border-white/5 rounded p-10 text-center hover:border-[#E31937]/30 transition-all duration-500 block">
            <div className="w-16 h-16 rounded-full border border-white/10 flex items-center justify-center mx-auto mb-6 group-hover:border-[#E31937]/50 transition-all duration-500">
              <svg className="w-6 h-6 text-white/40 group-hover:text-[#E31937] transition-colors duration-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
              </svg>
            </div>
            <h4 className="text-sm font-bold uppercase tracking-widest mb-3">Telefon</h4>
            <p className="text-[#E31937] text-sm font-medium">{PHONE}</p>
          </a>
          <a href={`https://wa.me/${WHATSAPP.replace("+", "")}`} target="_blank" rel="noopener noreferrer" className="group bg-[#111] border border-white/5 rounded p-10 text-center hover:border-[#25D366]/30 transition-all duration-500 block">
            <div className="w-16 h-16 rounded-full border border-white/10 flex items-center justify-center mx-auto mb-6 group-hover:border-[#25D366]/50 transition-all duration-500">
              <svg className="w-6 h-6 text-white/40 group-hover:text-[#25D366] transition-colors duration-500" fill="currentColor" viewBox="0 0 24 24">
                <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z" />
              </svg>
            </div>
            <h4 className="text-sm font-bold uppercase tracking-widest mb-3">WhatsApp</h4>
            <p className="text-[#25D366] text-sm font-medium">{WHATSAPP}</p>
          </a>
          <a href={`mailto:${EMAIL}`} className="group bg-[#111] border border-white/5 rounded p-10 text-center hover:border-[#E31937]/30 transition-all duration-500 block">
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
    <footer className="bg-[#080808] border-t border-white/5 py-10">
      <div className="max-w-7xl mx-auto px-6 sm:px-8 flex flex-col sm:flex-row items-center justify-between gap-6">
        <img src="/logo.png" alt="GLOVIX" className="h-8 w-auto opacity-60" />
        <p className="text-white/20 text-xs tracking-wider">
          &copy; {new Date().getFullYear()} GLOVIX. Wszelkie prawa zastrzeżone.
        </p>
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
      className="fixed bottom-6 right-6 z-50 bg-[#25D366] hover:bg-[#20BD5A] text-white w-14 h-14 rounded-full flex items-center justify-center shadow-2xl shadow-[#25D366]/30 hover:scale-110 transition-all"
      aria-label="WhatsApp"
    >
      <svg className="w-7 h-7" fill="currentColor" viewBox="0 0 24 24">
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
