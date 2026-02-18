import type { Metadata } from "next";
import { Outfit, Poppins } from "next/font/google";
import "./globals.css";
import Navbar from "@/components/Navbar";
import ProfileWidget from "@/components/ProfileWidget";
import { AuthProvider } from "@/contexts/AuthContext";

const outfit = Outfit({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700", "800"],
  variable: "--font-outfit",
});

const poppins = Poppins({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700", "800"],
  variable: "--font-poppins",
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
      <body className={`${poppins.variable} ${outfit.variable} antialiased lg:flex flex-row gap-6`}>
        <AuthProvider>
          <div className="lg:flex lg:w-1/4">
            <ProfileWidget />
          </div>
          <div className="flex lg:w-3/4 lg:relative bg-[linear-gradient(235deg,#1b1f2e,#2c133d,#020617,#301541,#101435)] lg:bg-none lg:bg-brand-200 lg:rounded-[20px]">
            <div className="hidden lg:block lg:absolute right-0 top-0 z-30">
              <Navbar />
            </div>
            {children}
          </div>
        </AuthProvider>
      </body>
    </html>
  );
}
