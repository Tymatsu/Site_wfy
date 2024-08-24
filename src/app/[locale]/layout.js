import { Inter } from "next/font/google";
import logotipo from "../../../public/logotipo.png"


const inter = Inter({ subsets: ["latin"] });

export default function RootLayout({ children, params: { locale } }) {
  const metadata = getMetadataByLocale(locale);

  return (
    <html lang={locale}>
      <head>
        <title>{metadata.title}</title>
        <meta name="description" content={metadata.description} />
        <meta property="og:image" content={metadata.image} />
        <meta name="twitter:image" content={metadata.image} />
      </head>
      <body className={inter.className}>{children}</body>
    </html>
  );
}

function getMetadataByLocale(locale) {
  switch (locale) {
    case "en":
      return {
        title: "WFY",
        description: "What Flows You",
        image: logotipo.src,
      };
    case "pt":
      return {
        title: "WFY",
        description: "What Flows You",
        image: logotipo.src,
      };
    // Adicione outros locais conforme necessário
    default:
      return {
        title: "WFY",
        description: "What Flows You",
        image: logotipo.src,
      };
  }
}
