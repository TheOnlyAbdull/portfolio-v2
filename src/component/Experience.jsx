import freeketImg from "../assets/ProjectImage/freeket.png";
import randdom from "../assets/ProjectImage/random.png";
import nota from "../assets/ProjectImage/nota.png";
import biccass from "../assets/ProjectImage/biccas.png";
import Project from "./Project";

function Experience() {
  return (
    <div className="px-2 mt-10 md:w-8/12 lg:w-7/12 mx-auto ">
      <h2 className="text-2xl text-neutral-900 dark:text-white">Experience/Project</h2>
      <p className="text-sm text-neutral-600">Some of my commitments include:</p>
      <Project
        id="01"
        project="FREEKET"
        role="Software Developer"
        description="Freeket is a full-featured web application that allows event organizers across various niches to create and manage free events, distribute digital tickets, and track attendee metrics. Built from scratch with a focus on accessibility, responsiveness, and performance. Users can also discover local events, making networking and participation easier and more inclusive."
        technologies={["REACT", "TAILWIND", "SUPABASE", "REACT_ROUTER"]}
        image={freeketImg}
        liveUrl="https://freeket.xyz"
        gitHubUrl="https://github.com/TheOnlyAbdull/Freeket"
      />
      <Project
        id="02"
        project="RANDDOM"
        role="Frontend Developer"
        description="Randdom is an AI-backed web application built to help creatives overcome character design blocks. Targeted at designers, illustrators, writers, and storytellers, the app generates unique characters complete with names, traits, and backstories — offering a creative spark when it's most needed."
        technologies={["REACT", "OPEN AI", "TAILWIND", "REACT_ROUTER"]}
        image={randdom}
        liveUrl="https://randdom.netlify.app/"
        gitHubUrl="https://github.com/TheOnlyAbdull/Random-character-generator"
      />
      <Project
        id="03"
        project="NOTA"
        role="Software Developer"
        description="NOTA is a lightweight, user-friendly productivity app designed to help users organize and manage daily tasks across multiple categories — from work and errands to personal projects. With a personalized touch, it greets users by name and provides contextual awareness by tracking the current day, helping them stay focused and intentional."
        technologies={["REACT", "CSS3"]}
        image={nota}
        liveUrl="https://theonlyabdull.github.io/nota/"
        gitHubUrl="https://github.com/TheOnlyAbdull/nota"
      />

      <Project
        id="04"
        project="BICCAS"
        role="Frontend Developer"
        description="Biccas is a high-performance productivity landing page meticulously crafted from a Figma design. focusing on clean UI/UX to help teams organize workflows. The project highlights precise design-to-code implementation."
        technologies={["REACT", "Tailwind CSS", "Figma"]}
        image={biccass}
        liveUrl="https://biccass.netlify.app/"
        gitHubUrl="https://github.com/TheOnlyAbdull/BICCAS"
      />
    </div>
  );
}

export default Experience;
