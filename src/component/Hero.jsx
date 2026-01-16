import Links from "./Links";

function Hero() {
  return (
    <div className="px-2 pt-22 md:w-8/12 lg:w-7/12 mx-auto text-neutral-800 dark:text-gray-300">
      <p className="text-sm mb-6 text-neutral-600 dark:text-gray-400">
        <span className="border-b-2 pb-2 border-neutral-800 dark:border-gray-300">
          MEET THE
        </span>
        PROFESSIONAL
      </p>

      <h1 className="text-4xl mb-1 font-bold text-neutral-900 dark:text-white">
        Abdullah Salaudeen
      </h1>

      <h2 className="text-2xl mb-6 text-neutral-700 dark:text-white">
        The Frontend Developer
      </h2>

      <Links />

      <div className="text-base leading-6 flex flex-col gap-4 text-neutral-700 dark:text-gray-300">
        <p>
          I'm a Frontend Developer driven by the desire to solve complex
          problems and build impactful solutions. With a focus on creating
          stunning, user-friendly web experiences.
        </p>
        <p>
          I thrive on collaborating with visionaries to bring their concepts to
          life, creating user-centric experiences that genuinely make a
          difference. <span className="dark:text-white text-black">#I'm a fan of HealthCare</span>
        </p>
      </div>
    </div>
  );
}

export default Hero;
