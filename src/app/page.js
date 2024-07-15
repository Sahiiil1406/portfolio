import Image from "next/image";
import Header from "@/components/Header";
import About from "@/components/About";
import TechStack from "@/components/TechStack";
import Project from "@/components/Project";
import Footer from '@/components/Footer'
import TerminalComponent from "@/components/Terminal";

export default function Home() {
  return (
    <div className="bg-custom-gradient h-[100%] text-slate-200 flex-column">
      <div className="lg:ml-40 lg:mr-40 md:ml-20 md:mr-20">
      <Header />
      <About/>
      <TechStack/>
      <Project/>
      <div className="">
      <TerminalComponent/>
      </div>
      <Footer/>
      </div>
      </div>
      
  );
}
