import Technology from "./Technology";

function Skills() {
  return (
    <div className="md:w-8/12 lg:w-7/12 mx-auto mt-10">
      <p className="text-2xl text-white px-6 ">Skills</p>
      <p className="text-sm px-6  mx-auto">
        The technologies behind the magic include:
      </p>
      <div>
        <div className="flex flex-wrap gap-4 justify-center px-6 mt-4  mx-auto">
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
