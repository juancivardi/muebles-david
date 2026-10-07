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
    <main id="muebles">
      <section className="w-full px-6 py-20">
        <div className="mb-10 text-center">
          <h2 className="mb-10 text-3xl uppercase tracking-widest md:text-4xl">
            Nuestros últimos proyectos
          </h2>
        </div>

        <Carousel>
          {images.map((image, index) => (
            <div
              key={index}
              className="min-w-0 flex-[0_0_70%] md:flex-[0_0_25%]"
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