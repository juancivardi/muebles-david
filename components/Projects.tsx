import Carousel from "@/components/ui/Carousel";


export default function Projects() {
   const images = [
    "/images/mueblesPNG/mueble1a.PNG",
    "/images/mueblesPNG/mueble1b.PNG",
    "/images/mueblesPNG/mueble1c.PNG",
    "/images/mueblesPNG/mueble2a.PNG",
    "/images/mueblesPNG/mueble2b.PNG",
    "/images/mueblesPNG/mueble3a.PNG",
  ];
  return (
    <main>
      <section className="mx-auto">
        <Carousel images={images}/>
      </section>
    </main>
  );
}