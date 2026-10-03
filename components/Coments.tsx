import Carousel from "@/components/ui/Carousel";

export default function Coments() {
    const comments = [
        {
            name: "Juan Pérez",
            text: "Excelente atención y muy buena calidad. El mueble quedó hermoso.",
        },
        {
            name: "María González",
            text: "Muy conformes con el trabajo. Cumplieron con los tiempos y el resultado fue excelente.",
        },
        {
            name: "Carlos Rodríguez",
            text: "Nos asesoraron en todo momento y el resultado superó nuestras expectativas.",
        },
        {
            name: "Laura Fernández",
            text: "Excelente trabajo, muy buena atención y el mueble quedó exactamente como lo queríamos.",
        },
        
    ];
  return (
    <main>
      <section className="mx-auto max-w-7xl px-6 py-20">
        <div className="mb-10 text-center">
            <p className="mb-2 text-sm font-medium uppercase tracking-widest text-gray-500">
            Opiniones
            </p>

            <h2 className="text-3xl font-semibold tracking-tight text-gray-900 md:text-4xl">
            Lo que dicen nuestros clientes
            </h2>

            <p className="mx-auto mt-4 max-w-2xl text-gray-600">
            La experiencia de nuestros clientes es parte fundamental de nuestro
            trabajo.
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
      </section>
    </main>
  );
}