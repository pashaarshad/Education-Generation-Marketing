import Navbar from "@/components/Navbar";
import Hero from "@/sections/Hero";
import Trust from "@/sections/Trust";
import Problem from "@/sections/Problem";
import Solution from "@/sections/Solution";
import Services from "@/sections/Services";
import Courses from "@/sections/Courses";
import About from "@/sections/About";
import Reports from "@/sections/Reports";
import Booking from "@/sections/Booking";
import Footer from "@/sections/Footer";

export default function Home() {
  return (
    <>
      <Navbar />
      <main className="flex-1 flex flex-col">
        <Hero />
        <Trust />
        <Problem />
        <Solution />
        <Services />
        <Courses />
        <About />
        <Reports />
        <Booking />
      </main>
      <Footer />
    </>
  );
}
