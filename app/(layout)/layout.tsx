import { Geist, Geist_Mono } from "next/font/google";

import type { Metadata } from "next";

import Footer from "@/components/Footer";
import FooterFadeUp from "@/components/FooterFadeUp";
import { MotionProvider } from "@/components/motion-provider";
import { ThemeProvider } from "@/components/theme-provider";
import { SITE_DESCRIPTION, SITE_NAME, SITE_URL } from "@/lib/site";

import "./globals.css";

const fontSans = Geist({
  subsets: ["latin"],
  variable: "--font-geist-sans",
});

const fontMono = Geist_Mono({
  subsets: ["latin"],
  variable: "--font-geist-mono",
});

const ogImage = {
  url: "/images/banner.png",
  width: 1806,
  height: 658,
  alt: "Ruturaj Chaubey, Full Stack Engineer",
};

export const metadata: Metadata = {
  metadataBase: new URL(SITE_URL),
  title: {
    // Name first: it's the exact query this page should rank for
    default: "Ruturaj Chaubey | Full Stack Engineer",
    template: "%s | Ruturaj Chaubey",
  },
  description: SITE_DESCRIPTION,
  applicationName: SITE_NAME,
  keywords: [
    "Ruturaj Chaubey",
    "Ruturaj",
    "Chaubey",
    "Full Stack Engineer",
    "Full Stack Developer",
    "QED42",
    "Drupal",
    "Next.js",
    "React",
    "TypeScript",
    "Pune",
  ],
  authors: [{ name: SITE_NAME, url: SITE_URL }],
  creator: SITE_NAME,
  publisher: SITE_NAME,
  openGraph: {
    type: "profile",
    firstName: "Ruturaj",
    lastName: "Chaubey",
    username: "RChaubey16",
    locale: "en_US",
    title: "Ruturaj Chaubey | Full Stack Engineer",
    description: SITE_DESCRIPTION,
    siteName: SITE_NAME,
    images: [ogImage],
  },
  twitter: {
    card: "summary_large_image",
    title: "Ruturaj Chaubey | Full Stack Engineer",
    description: SITE_DESCRIPTION,
    site: "@RChaubey16",
    creator: "@RChaubey16",
    images: [ogImage],
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-image-preview": "large",
      "max-snippet": -1,
      "max-video-preview": -1,
    },
  },
};

const personId = `${SITE_URL}/#person`;
const websiteId = `${SITE_URL}/#website`;

// WebSite tells Google the site's name (shown above the result); Person is the
// entity behind it, linked to the same identity on other profiles via sameAs.
const jsonLd = {
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": "WebSite",
      "@id": websiteId,
      url: SITE_URL,
      name: SITE_NAME,
      alternateName: ["Ruturaj", "ruturaj.xyz"],
      description: SITE_DESCRIPTION,
      inLanguage: "en",
      publisher: { "@id": personId },
    },
    {
      "@type": "ProfilePage",
      "@id": `${SITE_URL}/#profilepage`,
      url: SITE_URL,
      name: "Ruturaj Chaubey | Full Stack Engineer",
      isPartOf: { "@id": websiteId },
      mainEntity: { "@id": personId },
    },
    {
      "@type": "Person",
      "@id": personId,
      name: SITE_NAME,
      givenName: "Ruturaj",
      familyName: "Chaubey",
      url: SITE_URL,
      image: `${SITE_URL}/images/me.jpeg`,
      email: "mailto:ruturajchaubey16@gmail.com",
      description: SITE_DESCRIPTION,
      jobTitle: "Full Stack Engineer",
      worksFor: {
        "@type": "Organization",
        name: "QED42",
        url: "https://www.qed42.com",
      },
      address: {
        "@type": "PostalAddress",
        addressLocality: "Pune",
        addressRegion: "Maharashtra",
        addressCountry: "IN",
      },
      sameAs: [
        "https://github.com/RChaubey16",
        "https://linkedin.com/in/ruturajchaubey",
        "https://x.com/RChaubey16",
        "https://www.drupal.org/u/ruturaj-chaubey",
      ],
      knowsAbout: [
        "TypeScript",
        "React",
        "Next.js",
        "Node.js",
        "NestJS",
        "Drupal",
        "Headless CMS",
        "Full Stack Development",
      ],
    },
  ],
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
      </head>
      <body className={`${fontSans.variable} ${fontMono.variable} antialiased`}>
        <ThemeProvider
          attribute="class"
          defaultTheme="system"
          enableSystem
          disableTransitionOnChange
        >
          <MotionProvider>
            <div className="flex min-h-screen flex-col">
              <main className="mx-auto mb-24 w-full max-w-2xl grow px-4 pt-10 md:px-0 md:pt-16">
                {children}
              </main>
              <FooterFadeUp>
                <Footer />
              </FooterFadeUp>
            </div>
          </MotionProvider>
        </ThemeProvider>
      </body>
    </html>
  );
}
