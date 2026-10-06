import Carousel from "@/components/ui/Carousel";


export default function Projects() {
   const images = [
    "/images/mueblesPNG/mueble1a.png",
    "/images/mueblesPNG/mueble1b.png",
    "/images/mueblesPNG/mueble1c.png",
    "/images/mueblesPNG/mueble2a.png",
    "/images/mueblesPNG/mueble2b.png",
    "/images/mueblesPNG/mueble3a.png",
    ];

  return (
    <main>
      <section className="min-h-screen w-full px-6 py-20">
        <div className="mb-10 text-center">

          <h2 className="text-4xl font-semibold tracking-tight md:text-5xl">
            Nuestros últimos proyectos
          </h2>

          <p className="mx-auto mt-4 max-w-2xl">
            Conocé algunos de los muebles que fabricamos y descubrí la calidad
            de nuestro trabajo.
          </p>
        </div>

        <Carousel>
          {images.map((image, index) => (
            <div
              key={index}
              className="min-w-0 flex-[0_0_70%] md:flex-[0_0_35%]"
            >
              <img
                src={image}
                alt={`Mueble ${index + 1}`}
                className="block w-full h-auto"
              />
            </div>
          ))}
        </Carousel>
      </section>
    </main>
  );
}