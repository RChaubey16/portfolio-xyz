import type { Metadata } from "next";
import { Geist_Mono, Figtree } from "next/font/google";
import { ThemeProvider } from "@/components/theme-provider";
import "./globals.css";

import Particles from "@/components/animation/Particles";
import Navbar from "@/components/Navbar";

const figtTree = Figtree({
  variable: "--font-sans",
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700", "800", "900"],
});

const geistMono = Geist_Mono({
  variable: "--font-mono",
  subsets: ["latin"],
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
      <body
        className={`${figtTree.variable} ${geistMono.variable} antialiased`}
      >
        <ThemeProvider
          attribute="class"
          defaultTheme="system"
          enableSystem
          disableTransitionOnChange
        >
          <Navbar />
          <div className="flex">
            {/* Left sidebar */}
            {/* <aside className="hidden lg:flex flex-1 sticky top-0 h-screen">
              <Particles
                particleColors={["#696767"]}
                particleCount={200}
                particleSpread={5}
                speed={0.1}
                particleBaseSize={100}
                moveParticlesOnHover
                alphaParticles={false}
                disableRotation={false}
                pixelRatio={1}
                className={""}
              />
            </aside> */}

            {/* Main content */}
            <main className="w-full max-w-4xl px-6 mx-auto">{children}</main>

            {/* Right sidebar */}
            {/* <aside className="hidden lg:flex flex-1 sticky top-0 h-screen">
              <Particles
                particleColors={["#696767"]}
                particleCount={200}
                particleSpread={5}
                speed={0.1}
                particleBaseSize={100}
                moveParticlesOnHover
                alphaParticles={false}
                disableRotation={false}
                pixelRatio={1}
                className={""}
              />
            </aside> */}
          </div>
        </ThemeProvider>

        <div className="mt-10 mb-20 w-full max-w-4xl px-6 mx-auto text-center">
          {/* Design & Developed by Ruturaj Chaubey (X profile link) */}
          Ruturaj Chaubey © {new Date().getFullYear()}. All rights reserved.
        </div>
      </body>
    </html>
  );
}
