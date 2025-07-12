import freeketImg from "../assets/ProjectImage/freeket.png";
import randdom from "../assets/ProjectImage/random.png";
import nota from "../assets/ProjectImage/nota.png";
import quizzify from "../assets/ProjectImage/quizzify.png";
import shortly from "../assets/ProjectImage/shortly.png";
import Project from "./Project";

function Experience() {
  return (
    <div className="px-6 mt-10 md:w-8/12 lg:w-7/12 mx-auto ">
      <h2 className="text-2xl text-white">Experience/Project</h2>
      <p className="text-sm">Some of my commitments include:</p>
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
        technologies={["REACT", "TAILWIND"]}
        image={nota}
        liveUrl="https://theonlyabdull.github.io/nota/"
        gitHubUrl="https://github.com/TheOnlyAbdull/nota"
      />
      <Project
        id="04"
        project="SHORTLY"
        role="Frontend Developer"
        description="Shortly is a responsive web app that allows users to shorten long, complex URLs into compact, shareable links — ideal for social media, messaging, and memory recall. Designed with a mobile-first mindset, the app delivers a fast, lightweight experience that makes link sharing effortless on any device."
        technologies={["REACT", "TAILWIND", "Url Shortener API",]}
        image={shortly}
        liveUrl="https://theonlyabdull.github.io/Shortly/"
        gitHubUrl="https://github.com/TheOnlyAbdull/Shortly"
      />
      <Project
        id="05"
        project="QUIZZIFY"
        role="Software Developer"
        description="Quizzify is a responsive, user-friendly quiz application that allows individuals or study groups to test knowledge on specific topics in an engaging way. The app features personalized touches, such as dynamically displaying the user’s name throughout the interface, and provides immediate feedback through a point-based scoring system at the end of each quiz session."
        technologies={["HTML5", "CSS3", "JAVASCRIPT", ]}
        image={freeketImg}
        liveUrl="https://quiziify.netlify.app/"
        gitHubUrl="https://github.com/TheOnlyAbdull/Q-and-A"
      />
    </div>
  );
}

export default Experience;
