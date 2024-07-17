import { Inter } from "next/font/google";
import Navbar from "@/components/Navbar";
import LeftSide from "@/components/LeftSide";
import RightSide from "@/components/RightSide";
import { motion } from "framer-motion";
import Hero from "@/components/Hero";
import About from "@/components/About";
import Experience from "@/components/Experience";
import Activities from "@/components/Activities";
import Projects from "@/components/Projects";
import Footer from "@/components/Footer";
import Head from "next/head";

const inter = Inter({ subsets: ["latin"] });

export default function Home() {
  return (
    <>
      <Head>
        <title>Raja Ahmed :D</title>
      </Head>
      <Navbar />
      <div className="w-full h-[88vh] xl:flex items-center gap-20 justify-between">
        <motion.div initial={{opacity:0}} animate={{opacity: 1}} transition={{delay: 1.5}} className="hidden border-green xl:inline-flex w-32 h-full fixed left-0 bottom-0">
          <LeftSide />
        </motion.div>
        <div className="h-[88vh] w-full mx-auto p-4">
          <Hero />
          <About />
          <Experience />
          <Activities />
          <Projects />
          <Footer />
        </div>
        <motion.div initial={{opacity:0}} animate={{opacity: 1}} transition={{delay: 1.5}} className="hidden xl:inline-flex w-32 h-full fixed right-0 bottom-0">
          <RightSide />
        </motion.div>
      </div>
    </>
  );
}
