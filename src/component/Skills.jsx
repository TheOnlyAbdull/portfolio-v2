import Technology from "./Technology";

function Skills() {
  return (
  <div className="md:w-8/12 lg:w-7/12 mx-auto mt-10 px-2 text-neutral-800 dark:text-gray-300">
    <p className="text-2xl font-semibold text-neutral-900 dark:text-white">
      Skills
    </p>
    <p className="text-sm mx-auto text-neutral-600 dark:text-gray-400">
      The technologies behind the magic include:
    </p>
    
    <div>
      <div className="flex flex-wrap gap-4 justify-center mt-4 mx-auto">
        <Technology>ReactJs</Technology>
        <Technology>Next.js</Technology>
        <Technology>TypeScript</Technology>
        <Technology>JavaScript</Technology>
        <Technology>Tailwind CSS</Technology>
        <Technology>ReactQuery</Technology>
        <Technology>GSAP(animation)</Technology>
        <Technology>Git</Technology>
      </div>
    </div>
  </div>
);
}

export default Skills;
