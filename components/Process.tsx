import Image from "next/image";
export default function Proceso() {

  return (
    <main className="" id="proceso">
      <section className="px-6 pt-20">
        <div className="mx-auto max-w-4xl text-center">

          <h1 className="mb-10 text-3xl uppercase tracking-widest md:text-4xl">
            Cómo trabajamos
          </h1>
        </div>
      </section>

      <Image
        src="/images/pasos-phone2.png"
        alt=""
        width={1080}
        height={1920}
        className="block w-full h-auto md:hidden"
      />
      <Image
        src="/images/paso-pc.png"
        alt=""
        width={2560}
        height={1440}
        className="hidden w-full h-auto md:block"
      />
    </main>
  );
}
