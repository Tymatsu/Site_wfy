
import {NextIntlClientProvider} from 'next-intl';
import {getMessages} from 'next-intl/server';

export const metadata = {
  title: "WFY",
  description: 'What Flows You',
}
export default async function RootLayout({children, params: {locale}}) {
  // Receive messages provided in `i18n.ts`
  const messages = await getMessages();
 
  return (
    <html lang={locale}>
      <body>
        <NextIntlClientProvider messages={messages}>
          {children}
        </NextIntlClientProvider>
      </body>
    </html>
  );
}
