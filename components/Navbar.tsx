"use client";
import Link from "next/link";
import { useState } from "react"
import WhatsAppButton from "@/components/ui/WhatsappButton";

export default function Navbar() {

  return (
    <header>
    <nav className="w-full flex border-b border-black">
      <div className="flex w-full px-6 py-4 items-center justify-between">
        <div>
          <p>Muebles David</p>
        </div>
        <div className="gap-8 flex text-md font-bold">
          <Link
            href=""
            className=""
          >
            Muebles
          </Link>
          <Link
            href=""
            className=""
          >
            Metodologia de trabajo
          </Link>

          <Link
            href=""
            className=""
          >
            Contacto
          </Link>
        </div>

      </div>

    </nav>
    </header>
  );
}