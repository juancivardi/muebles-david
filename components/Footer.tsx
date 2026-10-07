export default function Footer() {
  return (
    <footer className="border-t border-gray-200 bg-gray-950 px-6 py-10 text-white">
      <div className="mx-auto max-w-7xl">
        <div className="flex flex-col gap-8 md:flex-row md:items-center md:justify-between">
          <div>
            <h2 className="text-lg font-semibold tracking-tight">
              Muebles David
            </h2>

            <p className="mt-2 text-sm text-gray-400">
              Muebles estilo industrial.
            </p>
          </div>

          <div className="flex gap-6 text-sm">

            <a
              href="https://wa.me/542216438679"
              target="_blank"
              rel="noopener noreferrer"
              className="text-gray-400 transition hover:text-white"
            >
              WhatsApp
            </a>
          </div>
        </div>

        <div className="mt-8 border-t border-gray-800 pt-6 text-center text-sm text-gray-500">
          © {new Date().getFullYear()} Muebles David. Todos los derechos
          reservados.
        </div>
      </div>
    </footer>
  );
}