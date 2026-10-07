import Image from "next/image";

export default function Hero() {
  return (
    <main>
      <section className="relative grid grid-cols-1 overflow-hidden bg-[#faf5e6] px-6 pb-40 md:grid-cols-2 md:px-20 md:items-center">
        <div className="relative mx-auto w-full max-w-[900px]">
          <Image
            src="/images/muebles-hero.png"
            alt="Mueble de estilo industrial"
            width={800}
            height={1000}
            priority
            className="w-full h-auto"
            sizes="(max-width: 640px) 100vw, 400px"
          />
        </div>

        <div className="relative mx-auto w-full max-w-[300px]">
          <Image
            src="/images/logo.png"
            alt="Mueble de estilo industrial"
            width={800}
            height={1000}
            priority
            className="w-full h-auto"
            sizes="(max-width: 640px) 100vw, 400px"
          />
        </div>
      </section>
    </main>
  );
}