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
      <section className="mx-auto">
        <Carousel images={images}/>
      </section>
    </main>
  );
}