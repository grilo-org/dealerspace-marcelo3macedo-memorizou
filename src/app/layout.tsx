import { AR_One_Sans } from "next/font/google";
import { NextIntlClientProvider } from "next-intl";

import messages from "../../messages/pt.json";

import { metadataContent } from "@/assets/data/metadata";

import type { Metadata } from "next";

import "./globals.css";

const ar_one_sans = AR_One_Sans({ subsets: ["latin"] });

export const metadata: Metadata = metadataContent;

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <NextIntlClientProvider messages={messages}>
      <html lang="pt-BR">
        <body className={ar_one_sans.className}>{children}</body>
      </html>
    </NextIntlClientProvider>
  );
}
