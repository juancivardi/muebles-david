import Image from "next/image";

export default function Hero() {
  return (
    <main>
      <section className="grid grid-cols-1 px-6 py-10 md:grid-cols-2 md:px-20 md:items-center bg-[#faf5e6]">
        <div className="relative mx-auto w-full max-w-[600px]">
          <Image
              src="/images/logo-png.png"
              alt="Mueble de estilo industrial"
              width={800}
              height={1000}
              priority
              className="w-full h-auto"
              sizes="(max-width: 640px) 100vw, 400px"
          />
        </div>
        <div className="relative mx-auto w-full max-w-[900px]">
          <Image
              src="/images/muebles-png.png"
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