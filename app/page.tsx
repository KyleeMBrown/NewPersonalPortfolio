import About from "@/components/About";
import Education from "@/components/Education";
import Experience from "@/components/Experience";
import Homepage from "@/components/Homepage";
import Skills from "@/components/Skills";
import Work from "@/components/Work";


export default function Home() {
  return (
    <div className="flex flex-col flex-1 items-center justify-center font-sans bg-white">
      <span id="home"></span>
      <Homepage />
      <span id="work"></span>
      <Work />
      <span id="experience"></span>
      <Experience />
      <span id="skills"></span>
      <Skills />
      <span id="education"></span>
      <Education />
      <span id="about"></span>
      <About /> 
    </div>
  );
}
