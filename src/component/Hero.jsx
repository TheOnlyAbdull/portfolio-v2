import Links from "./Links";

function Hero() {
  return (
    <section id="about" aria-labelledby="hero-title" data-reveal className="px-2 pt-22 md:w-8/12 lg:w-7/12 mx-auto text-neutral-800 dark:text-gray-300">
      <p className="text-sm mb-6 text-neutral-600 dark:text-gray-400">
        <span className="border-b-2 pb-2 border-neutral-800 dark:border-gray-300">MEET THE </span>
         PROFESSIONAL
      </p>

      <h1 className=" text-3xl md:text-4xl mb-1 font-bold text-neutral-900 dark:text-white">
        Abdullah Salaudeen
      </h1>

      <h2 className="text-[1.375rem] md:text-2xl mb-4 text-neutral-700 dark:text-white">
        The Frontend Developer
      </h2>

      <Links />

      <div className="text-sm md:text-base leading-6 flex flex-col gap-4 text-neutral-700 dark:text-gray-300">
        <p>
          I'm a Frontend Developer currently working with early-stage startups,
          solving complex problems and building, stunning, user-friendly web
          experiences each day.
        </p>
        <p>
          I collaborate closely with founders and startups to bring their vision
          to life, building user-centric experiences that genuinely make a
          difference
          <span className="dark:text-white text-black">
            {" "}
            #open to new startup partnership.
          </span>
        </p>
      </div>
    </section>
  );
}

export default Hero;
