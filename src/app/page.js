import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import Overview from "@/components/Overview";
import Services from "@/components/Services";
import KPI from "@/components/KPI";
import Testimonials from "@/components/Testimonials";
import Contact from "@/components/Contact"; 
export default function Home() {
  return (
    <main className="relative min-h-screen w-full bg-[#050505] text-white antialiased overflow-x-hidden">
      <Navbar />
      <Hero />
      <Overview />
      <Services />
      <KPI />
      <Testimonials />
      <Contact /> 
    </main>
  );
}