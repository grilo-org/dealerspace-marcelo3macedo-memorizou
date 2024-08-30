import { Metadata } from "next";

const url = process.env.NEXT_PUBLIC_URL;

export const metadataContent: Metadata = {
  title: "Memorizou",
  description:
    "Memorizou é a solução perfeita para estudantes que buscam uma maneira eficiente de aprender.",
  applicationName: "Memorizou",
  authors: [
    {
      name: "Memorizou",
      url: url,
    },
  ],
  generator: "Memorizou",
  keywords: "ensino infantil, professor, atividades",
  referrer: "origin",
  themeColor: "#f9a8d4",
  colorScheme: "light",
  viewport: {
    width: "device-width",
    initialScale: 1,
    maximumScale: 5,
  },
  creator: "Memorizou",
  publisher: "Memorizou",
  robots: {
    follow: true,
    index: true,
  },
  alternates: {
    canonical: url,
    types: {
      "application/rss+xml": [
        { url: `${url}/feed`, title: "rss" },
        {
          url: `${url}/comments/feed`,
          title: "comments",
        },
      ],
    },
  },
  manifest: "/manifest.json",
  openGraph: {
    type: "website",
    url: url,
    title: "Conteúdos Memorizou",
    description:
      "Memorizou é a solução perfeita para estudantes que buscam uma maneira eficiente de aprender.",
    siteName: "Memorizou",
    images: [
      {
        url: `${url}/logo.png`,
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    site: "@site",
    creator: "@creator",
    images: `${url}/logo.png`,
  },
  verification: {
    google: "tFdcpznLCzvIod9E3mKF-ieBu31t6aE8FHHLBWToHAg",
    yandex: "1234567890",
    me: "1234567890",
  },
  appleWebApp: {
    capable: true,
    title: "Memorizou",
    statusBarStyle: "black-translucent",
  },
  formatDetection: { telephone: false },
  abstract:
    "Memorizou é a solução perfeita para estudantes que buscam uma maneira eficiente de aprender.",
  archives: `${url}/archives`,
  category: "Educação Infantil",
  classification: "Professores Infantil",
};
