"use client";

import useEmblaCarousel from "embla-carousel-react";

interface CarouselProps {
  images: string[];
}

export default function Carousel({ images }: CarouselProps) {
  const [emblaRef, emblaApi] = useEmblaCarousel({
    loop: true,
    align: "center",
  });

  const scrollPrev = () => {
    emblaApi?.scrollPrev();
  };

  const scrollNext = () => {
    emblaApi?.scrollNext();
  };

  return (
    <div className="relative max-w-5xl mx-auto">
      <div ref={emblaRef} className="overflow-hidden">
        <div className="flex gap-4">
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
        </div>
      </div>

      <button
        onClick={scrollPrev}
        className="absolute left-2 top-1/2 -translate-y-1/2
                   flex h-10 w-10 items-center justify-center
                   rounded-full bg-white/90 shadow-md
                   hover:bg-white"
        aria-label="Mueble anterior"
      >
        ←
      </button>

      <button
        onClick={scrollNext}
        className="absolute right-2 top-1/2 -translate-y-1/2
                   flex h-10 w-10 items-center justify-center
                   rounded-full bg-white/90 shadow-md
                   hover:bg-white"
        aria-label="Mueble siguiente"
      >
        →
      </button>
    </div>
  );
}