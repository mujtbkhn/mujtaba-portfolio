import type { NextPage } from "next";
import Head from "next/head";
import Home from "./components/Home";
import Experience from "./components/Experience";
import Projects from "./components/Projects";
import Footer from "./components/Footer";

export const metadata = {
  title: "Mujtaba Khan",
};

const Portfolio: NextPage = () => {
  return (
    <div className="min-h-screen bg-dark text-light px-4 md:px-96">
      <Head>
        <title>Mujtaba Khan</title>
        <meta name="description" content="Mujtaba khan portfolio website" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main>
        <Home />
        <Experience />
        <Projects />
      </main>
      <Footer />
    </div>
  );
};

export default Portfolio;
