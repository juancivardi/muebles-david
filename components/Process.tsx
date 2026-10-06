import Image from "next/image";
export default function Proceso() {

  return (
    <main className="bg-[#faf5e6]">
      <section className="px-6 pt-20">
        <div className="mx-auto max-w-4xl text-center">
          <p className="mb-3 text-sm font-medium uppercase tracking-[0.2em] text-gray-500">
            Nuestro proceso
          </p>

          <h1 className="text-4xl font-semibold tracking-tight text-gray-900 md:text-6xl">
            Cómo trabajamos
          </h1>

          <p className="mx-auto mt-6 max-w-2xl text-base leading-relaxed text-gray-600 md:text-lg">
            Te acompañamos en cada etapa para transformar tu idea en un mueble
            pensado especialmente para vos.
          </p>
        </div>
      </section>

      <section className="px-6 pb-24 mt-20">
        <div className="flex items-center gap-8">
            <div className="max-w-md border p-10">

                <h2 className="mt-2 text-3xl font-semibold tracking-tight text-gray-900">
                Contanos tu idea
                </h2>

                <p className="mt-4 leading-relaxed">
                Contanos qué mueble estás buscando y qué tenés en mente. Te asesoramos
                para encontrar la mejor opción.
                </p>
            </div>

            <Image
                src="/images/flecha2.png"
                alt=""
                width={300}
                height={300}
                className="rotate-[35deg] hidden md:block"
            />
        </div>    
      </section>

      <section className="px-6 pb-24">
        <div className="flex items-center justify-center gap-8">
            <Image
                src="/images/flecha2.png"
                alt=""
                width={300}
                height={300}
                className="rotate-[-35deg] scale-x-[-1] hidden md:block lg:block"
            />
            <div className="max-w-md border p-10">
                <span className="text-sm font-medium tracking-widest text-gray-400">
                02
                </span>

                <h2 className="mt-2 text-3xl font-semibold tracking-tight text-gray-900">
                Armamos el plano y definimos los materiales
                </h2>

                <p className="mt-4 leading-relaxed text-gray-600">
                Definimos juntos las medidas, materiales, colores y terminaciones para que el mueble se adapte perfectamente a tu espacio.
                </p>
            </div>
        </div>    
      </section>

      <section className="px-6 pb-24">
        <div className="flex items-center gap-8">
            <div className="max-w-md">
                <span className="text-sm font-medium tracking-widest text-gray-400">
                03
                </span>

                <h2 className="mt-2 text-3xl font-semibold tracking-tight text-gray-900">
                Coordinamos el inicio del proyecto
                </h2>

                <p className="mt-4 leading-relaxed text-gray-600">
                Una vez definidos todos los detalles, confirmamos el presupuesto y coordinamos el inicio del proyecto.
                </p>
            </div>
            <Image
                src="/images/flecha2.png"
                alt=""
                width={300}
                height={300}
                className="rotate-[-35deg] scale-x-[-1] hidden md:block lg:block"
            />
        </div>    
      </section>
      <section className="px-6 pb-24">
        <div className="flex items-center gap-8">
            <Image
                src="/images/flecha2.png"
                alt=""
                width={300}
                height={300}
                className="rotate-[-35deg] scale-x-[-1] hidden md:block lg:block"
            />
            <div className="max-w-md">
                <span className="text-sm font-medium tracking-widest text-gray-400">
                04
                </span>

                <h2 className="mt-2 text-3xl font-semibold tracking-tight text-gray-900">
                Iniciamos la fabricacion
                </h2>

                <p className="mt-4 leading-relaxed text-gray-600">
                Comenzamos la fabricación poniendo atención en cada detalle y utilizando materiales de calidad.
                </p>            
            </div>          
        </div>    
      </section>
      <section className="px-6 pb-24">
        <div className="flex items-center gap-8">
            <div className="max-w-md">
                <span className="text-sm font-medium tracking-widest text-gray-400">
                05
                </span>

                <h2 className="mt-2 text-3xl font-semibold tracking-tight text-gray-900">
                ¡Te lo llevas a casa!
                </h2>

                <p className="mt-4 leading-relaxed text-gray-600">
                Coordinamos la entrega para que puedas disfrutar de tu mueble terminado y listo para usar.
                </p>            
            </div>        
        </div>    
      </section>

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
