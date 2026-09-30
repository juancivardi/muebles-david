export default function Footer() {
  return (
    <footer className="px-6 py-10">
      <div className="mx-auto max-w-7xl">
        <div className="flex flex-col gap-8 md:flex-row md:items-center md:justify-between">
          <div>
            <p className="mt-2 text-sm">
              Muebles estilo industrial.
            </p>
          </div>

          <div className="flex gap-6 text-sm">
            <a href="" target="_blank" className="">
              Instagram
            </a>

            <a href="" target="_blank" className="">
              WhatsApp
            </a>
          </div>
        </div>

        <div className="mt-8 border-t border-black pt-6 text-center text-sm">
          {new Date().getFullYear()}
        </div>
      </div>
    </footer>
  );
}