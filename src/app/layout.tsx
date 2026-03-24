import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "GLOVIX - Transport Samochodów | Laweta Iveco Daily | Europa",
  description:
    "GLOVIX - profesjonalny transport samochodów na lawecie Iveco Daily z przyczepą. Bezpieczny i terminowy przewóz pojazdów w całej Europie. Zadzwoń teraz!",
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
  ],
  authors: [{ name: "GLOVIX" }],
  openGraph: {
    title: "GLOVIX - Transport Samochodów | Laweta Iveco Daily",
    description:
      "Profesjonalny transport samochodów na lawecie Iveco Daily z przyczepą. Bezpieczny przewóz pojazdów w całej Europie.",
    url: "https://glovix.eu",
    siteName: "GLOVIX",
    locale: "pl_PL",
    type: "website",
  },
  robots: {
    index: true,
    follow: true,
  },
  alternates: {
    canonical: "https://glovix.eu",
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
        <link rel="icon" href="/favicon.svg" type="image/svg+xml" />
        <meta name="theme-color" content="#0A0A0A" />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "TransportService",
              name: "GLOVIX",
              description:
                "Profesjonalny transport samochodów na lawecie Iveco Daily z przyczepą w całej Europie.",
              url: "https://glovix.eu",
              areaServed: "Europe",
              serviceType: "Vehicle Transport",
            }),
          }}
        />
      </head>
      <body className="bg-dark text-white antialiased">{children}</body>
    </html>
  );
}
