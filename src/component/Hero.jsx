import { FaGithub, FaInbox, FaLinkedin, FaMailchimp, FaTwitter } from "react-icons/fa";
import { MdEmail } from "react-icons/md";

function Hero() {
  return (
    <div className="px-6 md:w-8/12 lg:w-7/12 mx-auto">
      <p className="text-sm mb-6">
        <span className="border-b-2 pb-2">MEET THE</span> PROFESSIONAL
      </p>
      <h1 className="text-4xl mb-2">Abdullah Salaudeen</h1>
      <h2 className="text-2xl mb-6 text-white">The Frontend Developer</h2>
      <div className="flex gap-4 text-2xl my-6 cursor-pointer">
        <p>
          <FaLinkedin />
        </p>
        <p>
          <FaGithub />
        </p>
        <p>
          <FaTwitter />
        </p>
        <p><MdEmail/></p>
      </div>
      <div className="text-base leading-6 flex flex-col gap-4">
        <p>
          I'm a Frontend Developer driven by the desire to solve complex
          problems and build impactful solutions. With a focus on creating stunning, user-friendly web experiences.
        </p>
        <p>
          I thrive on collaborating with visionaries to bring their concepts to
          life, creating user-centric experiences that genuinely make a
          difference.
        </p>
      </div>
    </div>
  );
}

export default Hero;
