import { locales } from "@/middleware";
import "./globals.css";
import { NextIntlClientProvider, useMessages } from "next-intl";
import { notFound } from "next/navigation";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import LocalFont from "next/font/local";
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
        <meta charSet='utf-8' />
        <meta name='viewport' content='width=device-width, initial-scale=1' />

        {/* Основные мета-теги */}
        <title>JIA | Создание современных веб-сайтов на заказ</title>
        <meta
          name='description'
          content='Разработка качественных веб-сайтов под ключ. Команда опытного дизайнера и разработчика создаст для вас уникальный проект.'
        />
        <meta
          name='keywords'
          content='веб-разработка, дизайн сайтов, создание сайтов, веб-студия, разработка под ключ, портфолио'
        />

        {/* Open Graph теги для соцсетей */}
        <meta
          property='og:title'
          content='JIA | Создание современных веб-сайтов'
        />
        <meta
          property='og:description'
          content='Разработка качественных веб-сайтов под ключ. Команда опытного дизайнера и разработчика.'
        />
        <meta property='og:type' content='website' />
        <meta property='og:image' content='/og-image.jpg' />
        <meta property='og:url' content='https://jiadev.site' />

        {/* Мета-теги для поисковых систем */}
        <meta name='robots' content='index, follow' />
        <meta name='author' content='JIA' />
        <meta name='theme-color' content='#ffffff' />

        {/* Favicon */}
        <link data-rh='true' rel='icon' href='/assets/images/logo.png' />
        <link rel='apple-touch-icon' href='/assets/images/logo.png' />

        {/* Дополнительные мета-теги */}
        <meta name='format-detection' content='telephone=no' />
        <meta name='copyright' content='JIA' />
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
