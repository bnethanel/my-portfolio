import { About } from "./cmps/About";
import { Projects } from "./cmps/Projects";
import { Top } from "./cmps/Top";

export default function Home() {
  return (
    <main>
      <Top />
      <About />
      <Projects/>
    </main>
  );
}
