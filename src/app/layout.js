// import { Inter } from "next/font/google";
import "./[locale]/globals.css";

// const inter = Inter({ subsets: ["latin"] });

// export const metadata = {
//   icons: {
//     icon: '/icon.png', // /public path
//   },
// }

// export default function RootLayout({ children, params:{locale} }) {
//   return (
//     <html lang={locale}>
//       <body className={inter.className}>{children}</body>
//     </html>
//   );
// }


import { Inter } from "next/font/google";
import logotipo from "../../public/logotipo.png"


const inter = Inter({ subsets: ["latin"] });

export default function RootLayout({ children, params: { locale } }) {
  const metadata = getMetadataByLocale(locale);

  return (
    <html lang={locale}>
      <head>
        <title>{metadata.title}</title>

        <meta name="viewport" content={metadata.viewport} />

        <meta name="description" content={metadata.description} />
        <meta property="og:image" content={metadata.image} />
        <meta name="twitter:image" content={metadata.image} />
        <link rel="icon" href="/icon.png" />
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
        image: logotipo,
        viewport: 'width=device-width, initial-scale=1.0'
      };
    case "pt":
      return {
        title: "WFY",
        description: "What Flows You",
        image: logotipo,
        viewport: 'width=device-width, initial-scale=1.0'
      };
    // Adicione outros locais conforme necessário
    default:
      return {
        title: "WFY",
        description: "What Flows You",
        image: logotipo,
        viewport: 'width=device-width, initial-scale=1.0'
      };
  }
}