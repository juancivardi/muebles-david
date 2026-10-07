import Carousel from "@/components/ui/Carousel";

export default function Coments() {
    const comments = [
        {
            name: "Juan Bourdids",
            text: "El rack que figura en la página lo realizaron para mí esta espectacular recomiendo la verdad están baratos para lo bueno que estan los trabajos.",
        },
        {
            name: "Nuria Avalos",
            text: "Con mi esposo compramos un escritorio y la mesa de arrime..., muy buenos muy resistentes",
        },
        {
            name: "Mateo Bourdids",
            text: "El chico que se encarga de coordinar todo tiene una paciencia y una capacidad de explicar increibles. Recomiendo mil veces!",
        },
        {
            name: "Anónimo",
            text: "Les compre un escritorio para mi pc, espectacular. Busque precios y lo más barato que encontré fue aca y el resultado es genial, voy a volver a comprar cuando tenga posibilidad.",
        },
        
    ];
  return (
    <main>
      <section className="mx-auto max-w-7xl px-6 py-20">
        <div className="mb-10 text-center">
            <p className="text-3xl mb-2 text-sm font-medium uppercase tracking-widest md:text-4xl">
            Opiniones
            </p>
        </div>

        <Carousel>
            {comments.map((comment, index) => (
            <div
                key={index}
                className="min-w-0 flex-[0_0_85%] md:flex-[0_0_45%]"
            >
                <article className="h-full rounded-2xl border border-gray-200 bg-white p-6 shadow-sm">
                <div className="mb-4 flex gap-1 text-lg">
                    ★★★★★
                </div>

                <p className="text-base leading-relaxed text-gray-600">
                    "{comment.text}"
                </p>

                <div className="mt-6">
                    <p className="font-semibold text-gray-900">
                    {comment.name}
                    </p>
                </div>
                </article>
            </div>
            ))}
        </Carousel>
        <p className="text-xs mt-10 text-sm font-medium">
            Si realizaste una compra nos ayudaría mucho conocer tu opinión para seguir creciendo! Escribinos por whatsapp y la publicamos en esta sección.
        </p>
      </section>
    </main>
  );
}