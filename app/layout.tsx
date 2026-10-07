import type { Metadata } from "next";
import "./globals.css";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import WhatsappButton from "@/components/ui/WhatsappButton";
import { FaWhatsapp } from "react-icons/fa";
import { Geist } from "next/font/google";

const geist = Geist({subsets:['latin'],variable:'--font-sans'});

export const metadata: Metadata = {
  title: "David Muebles | Muebles estilo industrial",
  description:
    "Emprendimiento dedicado a la venta de muebles de estilo industrial.",
  icons: {
    icon: "/images/logo-png.png",
  },
  openGraph: {
    title: "David Muebles | Muebles estilo industrial",
    description:
      "Emprendimiento dedicado a la venta de muebles de estilo industrial.",
    url: "",
    siteName: "David Muebles",
    images: [
      {
        url: "",
        width: 1200,
        height: 630,
        alt: "David Muebles | Muebles estilo industrial",
      },
    ],
    locale: "es_AR",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="es">
      <body className="bg-white">               
        <Navbar />
        <main>{children}</main> 
        <Footer />
        <WhatsappButton
          className="fixed bottom-10 right-7 z-50 flex h-15 w-15 items-center justify-center rounded-full bg-[#f0b37a] shadow-md transition hover:scale-105"
        >
          <FaWhatsapp className="text-2xl" />
        </WhatsappButton>
      </body>
    </html>
  );
}
