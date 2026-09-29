import type { Metadata } from "next";
import { Playfair_Display, Inter } from "next/font/google";
import "./globals.css";

const playfair = Playfair_Display({
  subsets: ["latin"],
  variable: "--font-serif",
  display: "swap",
});

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-sans",
  display: "swap",
});

export const metadata: Metadata = {
  title: "Syafiqa Zahroo — Software Engineering & Informatics Student",
  description:
    "Personal editorial portfolio of Syafiqa Zahroo, an Informatics Engineering student focused on software development, backend systems, web applications, and machine learning.",
  keywords: [
    "Syafiqa Zahroo",
    "Informatics Engineering",
    "Software Engineer",
    "Backend Developer",
    "Web Developer",
    "Machine Learning",
    "Portfolio",
  ],
  authors: [{ name: "Syafiqa Zahroo" }],
  openGraph: {
    title: "Syafiqa Zahroo — Personal Portfolio",
    description:
      "An Informatics Engineering student passionate about building reliable web applications, backend systems, and machine learning solutions.",
    url: "https://github.com/syafiqa23",
    siteName: "Syafiqa Zahroo Portfolio",
    locale: "en_US",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html
      lang="en"
      suppressHydrationWarning
      className={`${inter.variable} ${playfair.variable} light`}
    >
      <body
        suppressHydrationWarning
        className="bg-[#FFFDF8] text-[#252525] min-h-screen flex flex-col antialiased selection:bg-[#F6DDE5] selection:text-[#252525]"
      >
        {children}
      </body>
    </html>
  );
}
