import Image from "next/image";
import Hero from "@/components/Hero";
import Projects from "@/components/Projects";
import Coments from "@/components/Coments";

export default function Home() {
  return (
    <div className="">
      <main className="">
        <Hero/>
        <Projects/>
        <Coments/>
      </main>
    </div>
  );
}
