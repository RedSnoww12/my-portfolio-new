import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import { Analytics } from "@vercel/analytics/next";
import ThemeProvider from "@/components/ThemeProvider";
import LocaleProvider from "@/i18n/LocaleProvider";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

const siteUrl = process.env.NEXT_PUBLIC_SITE_URL || "https://localhost:3000";

export const metadata: Metadata = {
  title: "Sacha AMARA - Developpeur Full-Stack Java/React & DevOps",
  description: "Portfolio de Sacha AMARA, developpeur Full-Stack Java/React & DevOps avec 5 ans d'experience en developpement applicatif, CI/CD et DevOps.",
  metadataBase: new URL(siteUrl),
  openGraph: {
    title: "Sacha AMARA - Developpeur Full-Stack Java/React & DevOps",
    description: "5 ans d'experience en Java, React, Spring Boot, Docker, Kubernetes, CI/CD. Portfolio et projets.",
    type: "website",
    locale: "fr_FR",
  },
  twitter: {
    card: "summary_large_image",
    title: "Sacha AMARA - Developpeur Full-Stack Java/React & DevOps",
    description: "5 ans d'experience en Java, React, Spring Boot, Docker, Kubernetes, CI/CD.",
  },
  robots: {
    index: true,
    follow: true,
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="fr">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        <ThemeProvider>
          <LocaleProvider>{children}</LocaleProvider>
        </ThemeProvider>
        <Analytics />
      </body>
    </html>
  );
}
