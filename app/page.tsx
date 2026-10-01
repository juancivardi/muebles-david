import Image from "next/image";
import Hero from "@/components/Hero.tsx";
import Projects from "@/components/Projects.tsx";

export default function Home() {
  return (
    <div className="">
      <main className="">
        <Hero/>
        <Projects/>
      </main>
    </div>
  );
}
