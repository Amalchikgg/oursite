import { locales } from "@/middleware";
import "./globals.css";
import { NextIntlClientProvider, useMessages } from "next-intl";
import { notFound } from "next/navigation";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import LocalFont from "next/font/local";

export const metadata = {
  title: "Create Next App",
  description: "Generated by create next app",
};

const sfPro = LocalFont({
  src: [
    {
      path: "../../../public/assets/fonts/SFPRODISPLAYMEDIUM.ttf",
      weight: "500",
    },
    {
      path: "../../../public/assets/fonts/SFPRODISPLAYREGULAR.ttf",
      weight: "400",
    },
    {
      path: "../../../public/assets/fonts/SFPRODISPLAYBOLD.ttf",
      weight: "700",
    },
  ],
});

export default function RootLayout({
  children,
  params: { locale },
}: {
  children: React.ReactNode;
  params: { locale: (typeof locales)[0] };
}) {
  const messages = useMessages();
  if (!locales.includes(locale)) {
    notFound();
  }
  return (
    <html lang={locale}>
      <head>
        <meta name='viewport' content='width=device-width, initial-scale=1' />
      </head>
      <NextIntlClientProvider locale={locale} messages={messages}>
        <body className={sfPro.className}>
          <Header />
          {children}
          <Footer />
        </body>
      </NextIntlClientProvider>
    </html>
  );
}
