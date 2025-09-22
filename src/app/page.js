import { About } from "./cmps/About";
import { Contact } from "./cmps/Contact";
import { Footer } from "./cmps/Footer";
import { Projects } from "./cmps/Projects";
import { Top } from "./cmps/Top";

export default function Home() {
  return (
    <main>
      <Top />
      <About />
      <Projects/>
      <Contact/>
      <Footer/>
    </main>
  );
}
