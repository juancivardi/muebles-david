"use client";

import Link from "next/link";

export default function Navbar() {
  return (
    <header className="sticky top-0 z-50 border-b border-gray-200 bg-white/95 backdrop-blur">
      <nav className="mx-auto flex max-w-7xl items-center justify-between px-6 py-4">
        {/* Logo / Nombre */}
        <Link
          href="/"
          className="text-lg font-semibold tracking-tight text-gray-900"
        >
          Muebles David
        </Link>

        {/* Navegación */}
        <div className="hidden items-center gap-8 text-sm font-medium text-gray-600 md:flex">
          <Link
            href="#muebles"
            className="transition-colors hover:text-gray-900"
          >
            Muebles
          </Link>

          <Link
            href="#proceso"
            className="transition-colors hover:text-gray-900"
          >
            Cómo trabajamos
          </Link>

          <Link
            href="https://wa.me/542216438679"
            className="transition-colors hover:text-gray-900"
            target="_blank"
          >
            Contacto
          </Link>
        </div>
      </nav>
    </header>
  );
}