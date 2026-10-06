import Image from "next/image";
import Hero from "@/components/Hero";
import Projects from "@/components/Projects";
import Coments from "@/components/Coments";
import Process from "@/components/Process";

export default function Home() {
  return (
    <div className="">
      <main className="">
        <Hero/>
        <Projects/>
        <Process/>
        <Coments/>
      </main>
    </div>
  );
}
