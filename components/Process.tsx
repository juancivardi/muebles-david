import Image from "next/image";
export default function Proceso() {

  return (
    <main className="bg-[#fce5d4]">
      <section className="px-6 pt-20">
        <div className="mx-auto max-w-4xl text-center">

          <h1 className="text-4xl font-semibold tracking-tight md:text-5xl">
            Cómo trabajamos
          </h1>

          <p className="mx-auto mt-6 max-w-2xl text-base leading-relaxed">
            Conocé el paso a paso de nuestros proyectos.
          </p>
        </div>
      </section>

      <Image
        src="/images/pasos-phone.png"
        alt=""
        width={1080}
        height={1920}
        className="h-screen w-screen object-cover md:hidden"
      />
      <Image
        src="/images/pasos-pc.png"
        alt=""
        width={2560}
        height={1440}
        className="hidden h-screen w-screen object-cover md:block"
      />

      <section className="border-t border-gray-200 bg-white px-6 py-20 md:px-20">
        <div className="mx-auto max-w-3xl text-center">
          <h2 className="text-3xl font-semibold tracking-tight text-gray-900 md:text-4xl">
            ¿Tenés una idea?
          </h2>

          <p className="mt-4 leading-relaxed text-gray-600">
            Contanos qué mueble estás buscando y empecemos a trabajar en tu
            proyecto.
          </p>

          <a
            href="#contacto"
            className="mt-8 inline-flex rounded-full bg-gray-900 px-7 py-3 text-sm font-medium text-white transition hover:bg-gray-700"
          >
            Contactanos
          </a>
        </div>
      </section>
    </main>
  );
}
