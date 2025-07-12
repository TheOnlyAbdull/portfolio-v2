import Technology from "./Technology";

function Skills() {
  return (
    <div className="md:w-8/12 lg:w-7/12 mx-auto mt-10 px-2">
      <p className="text-2xl text-white ">Skills</p>
      <p className="text-sm  mx-auto">
        The technologies behind the magic include:
      </p>
      <div>
        <div className="flex flex-wrap gap-4 justify-center mt-4  mx-auto">
          <Technology>React</Technology>
          <Technology>JavaScript</Technology>
          <Technology>Tailwind CSS</Technology>
          <Technology>ReactQuery</Technology>
          <Technology>SupaBase</Technology>
          <Technology>GSAP(animation)</Technology>
          <Technology>HTML/CSS</Technology>
          <Technology>Git</Technology>
        </div>
      </div>
    </div>
  );
}

export default Skills;
