import { DM_Sans, Geist_Mono } from "next/font/google";

import type { Metadata } from "next";

import Navbar from "@/components/Navbar";
import { ThemeProvider } from "@/components/theme-provider";

import "./globals.css";

const fontSans = DM_Sans({
  subsets: ["latin"],
  variable: "--font-sans",
});

const fontMono = Geist_Mono({
  subsets: ["latin"],
  variable: "--font-mono",
});

export const metadata: Metadata = {
  title: {
    default: "Ruturaj Chaubey",
    template: "%s | Ruturaj Chaubey",
  },
  description:
    "Full Stack Developer with 3+ years of experience, known for building scalable, high-performance web apps.",
  keywords: [
    "Ruturaj Chaubey",
    "Software Engineer",
    "Full Stack Developer",
    "Web Developer",
    "Portfolio",
    "React",
    "Next.js",
    "Node.js",
    "TypeScript",
  ],
  authors: [{ name: "Ruturaj Chaubey" }],
  creator: "Ruturaj Chaubey",
  openGraph: {
    type: "website",
    locale: "en_US",
    url: "https://ruturajchaubey.com",
    title: "Ruturaj Chaubey",
    description:
      "Full Stack Developer with 3+ years of experience, known for building scalable, high-performance web apps.",
    siteName: "Ruturaj Chaubey Portfolio",
  },
  twitter: {
    card: "summary_large_image",
    title: "Ruturaj Chaubey",
    description:
      "Full Stack Developer with 3+ years of experience, known for building scalable, high-performance web apps.",
    creator: "@RChaubey16",
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
    <html lang="en" suppressHydrationWarning>
      <body className={`${fontSans.variable} ${fontMono.variable} antialiased`}>
        <ThemeProvider
          attribute="class"
          defaultTheme="system"
          enableSystem
          disableTransitionOnChange
        >
          {/* Main content */}
          <main className="mx-auto px-4 md:px-0 min-h-screen w-full max-w-2xl border border-red-500">
            <Navbar />
            {children}
          </main>
        </ThemeProvider>
      </body>
    </html>
  );
}
