import { Inter } from "next/font/google";
import "./globals.css";
import logotipo from '../../../public/L.png'

const inter = Inter({ subsets: ["latin"] });

// export const metadata = {
//   title: "WFY",
//   description: "What Flows You",
// };

export default function RootLayout({ children, params:{locale} }) {
  return (
    <html lang={locale}>
      <body className={inter.className}>{children}</body>
    </html>
  );
}