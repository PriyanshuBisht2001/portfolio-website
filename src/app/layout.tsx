import type { Metadata } from "next";
import { Outfit } from "next/font/google";
import "./globals.css";
import "./globals.css";
import Navbar from "@/components/Navbar";
import ProfileWidget from "@/components/ProfileWidget";
import { Providers } from "./providers";

const outfit = Outfit({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700", "800"],
  variable: "--font-outfit", // Defines the CSS variable
});

export const metadata: Metadata = {
  title: "Priyanshu's Portfolio",
  description:
    "Explore the portfolio of Priyanshu, a passionate developer showcasing projects and skills in web development and design.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${outfit.variable} antialiased flex flex-row gap-6`}>
        <Providers>
          <div className="flex w-1/4">
            <ProfileWidget />
          </div>
          <div className="flex w-3/4 relative bg-brand-200 rounded-[20px]">
            <div className="absolute right-0 top-0">
              <Navbar />
            </div>
            {children}
          </div>
        </Providers>
      </body>
    </html>
  );
}
