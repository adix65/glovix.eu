import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "GLOVIX - Transport Samochodów na Lawecie | Polska, Niemcy, Europa | Sanok",
  description:
    "GLOVIX Bartłomiej Adamiec — profesjonalny transport samochodów na lawecie Iveco Daily z przyczepą. Przewóz aut z Niemiec, Włoch, Holandii do Polski. Pomoc drogowa 24/7. Sanoczek, podkarpackie. Tel: 518 296 379",
  keywords: [
    "transport samochodów",
    "laweta",
    "Iveco Daily",
    "przewóz samochodów",
    "transport aut",
    "laweta z przyczepą",
    "transport pojazdów Europa",
    "autolaweta",
    "car transport Europe",
    "vehicle transport",
    "GLOVIX",
    "glovix.eu",
    "transport aut z Niemiec",
    "transport samochodów z Niemiec do Polski",
    "transport aut z Włoch",
    "transport samochodów z Holandii",
    "laweta Sanok",
    "laweta podkarpackie",
    "transport samochodów Polska",
    "przewóz aut na lawecie",
    "pomoc drogowa",
    "autotransport Europa",
    "Autotransport Deutschland Polen",
    "KFZ Transport",
    "Fahrzeugtransport",
    "car shipping Poland",
    "vehicle delivery Europe",
    "trasporto auto Polonia",
    "transport samochodów cena",
    "tania laweta",
    "laweta międzynarodowa",
  ],
  authors: [{ name: "GLOVIX Bartłomiej Adamiec" }],
  openGraph: {
    title: "GLOVIX - Transport Samochodów na Lawecie | Polska & Europa",
    description:
      "Profesjonalny transport samochodów na lawecie Iveco Daily z przyczepą. Przewóz aut z Niemiec, Włoch, Holandii do Polski. Zadzwoń: 518 296 379",
    url: "https://glovix.eu",
    siteName: "GLOVIX",
    locale: "pl_PL",
    type: "website",
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
  alternates: {
    canonical: "https://glovix.eu",
  },
  other: {
    "geo.region": "PL-18",
    "geo.placename": "Sanoczek",
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="pl">
      <head>
        <link rel="icon" href="/logo.png" type="image/png" />
        <meta name="theme-color" content="#0A0A0A" />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "MovingCompany",
              name: "GLOVIX Bartłomiej Adamiec",
              legalName: "GLOVIX Bartłomiej Adamiec",
              description:
                "Profesjonalny transport samochodów na lawecie Iveco Daily z przyczepą w całej Europie. Przewóz aut z Niemiec, Włoch, Holandii do Polski.",
              url: "https://glovix.eu",
              telephone: "+48518296379",
              email: "kontakt@glovix.eu",
              foundingDate: "2024-05-14",
              taxID: "6871983552",
              address: {
                "@type": "PostalAddress",
                streetAddress: "52",
                addressLocality: "Sanoczek",
                postalCode: "38-500",
                addressRegion: "podkarpackie",
                addressCountry: "PL",
              },
              geo: {
                "@type": "GeoCoordinates",
                latitude: 49.55,
                longitude: 22.2,
              },
              areaServed: [
                { "@type": "Country", name: "Poland" },
                { "@type": "Country", name: "Germany" },
                { "@type": "Country", name: "Italy" },
                { "@type": "Country", name: "Netherlands" },
                { "@type": "Country", name: "France" },
                { "@type": "Country", name: "Belgium" },
                { "@type": "Country", name: "Austria" },
                { "@type": "Continent", name: "Europe" },
              ],
              serviceType: ["Vehicle Transport", "Car Shipping", "Tow Truck Service", "Transport samochodów na lawecie"],
              priceRange: "$$",
              aggregateRating: {
                "@type": "AggregateRating",
                ratingValue: "5.0",
                bestRating: "5",
                worstRating: "1",
                ratingCount: "40",
                reviewCount: "40",
              },
              sameAs: [
                "https://www.facebook.com/profile.php?id=61575346498498",
                "https://www.instagram.com/glovix.eu/",
              ],
            }),
          }}
        />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "WebSite",
              name: "GLOVIX",
              url: "https://glovix.eu",
              potentialAction: {
                "@type": "SearchAction",
                target: "https://glovix.eu/?q={search_term_string}",
                "query-input": "required name=search_term_string",
              },
            }),
          }}
        />
      </head>
      <body className="bg-dark text-white antialiased">{children}</body>
    </html>
  );
}
