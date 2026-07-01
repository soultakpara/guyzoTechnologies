import type { Metadata } from "next";
import "./globals.css";

import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { Toaster } from "react-hot-toast";

export const metadata: Metadata = {
  title: "Guyzo Technologie",
  description: "Application de gestion des réparations informatiques",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="fr">
      <body className="bg-slate-100 text-slate-900">

        <Navbar />

        <main className="min-h-screen pt-20">
          {children}
        </main>

        <Footer />

        <Toaster position="top-right" />

      </body>
    </html>
  );
}