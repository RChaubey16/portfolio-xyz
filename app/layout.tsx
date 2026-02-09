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
  title: "Ruturaj Chaubey",
  description: "Portfolio",
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
            <aside className="hidden lg:flex flex-1 sticky top-0 h-screen">
              <Particles
                particleColors={["#696767"]}
                particleCount={300}
                particleSpread={5}
                speed={0.1}
                particleBaseSize={100}
                moveParticlesOnHover
                alphaParticles={false}
                disableRotation={false}
                pixelRatio={1}
                className={""}
              />
            </aside>

            {/* Main content */}
            <main className="w-full max-w-4xl px-6 mx-auto">{children}</main>

            {/* Right sidebar */}
            <aside className="hidden lg:flex flex-1 sticky top-0 h-screen">
              <Particles
                particleColors={["#696767"]}
                particleCount={300}
                particleSpread={5}
                speed={0.1}
                particleBaseSize={100}
                moveParticlesOnHover
                alphaParticles={false}
                disableRotation={false}
                pixelRatio={1}
                className={""}
              />
            </aside>
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
