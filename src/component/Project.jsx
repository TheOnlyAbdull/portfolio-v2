import Button from "./Button";

function Project({ id, project, role, description, technologies, image, liveUrl, gitHubUrl }) {
    return (
  <article data-reveal className="project-card mt-8 text-neutral-700 dark:text-gray-300">
    <div className="flex items-center justify-between">
      <div className="">
  
        <p className="text-xl md:text-2xl text-neutral-500 dark:text-gray-400">{id}</p>
        
        <h3 className="text-lg md:text-2xl font-bold text-neutral-900 dark:text-white">
          {project}
        </h3>
      
        <p className="text-base md:text-xl text-neutral-600 dark:text-gray-400">
          {role}
        </p>
      </div>
      <div className="border-2 border-gray-200 dark:border-gray-600 w-4/12 overflow-hidden rounded">
        <img src={image} alt={`${project} project preview`} loading="lazy" decoding="async" className="w-full h-full object-cover" />
      </div>
    </div>

    <div className="mt-2">
      <p className="text-sm md:text-base leading-relaxed">
        {description}
        <span className="text-neutral-600 dark:text-gray-400 italic">
          {technologies.map((technology) => (
            <span key={technology}> #{technology}</span>
          ))}
        </span>
      </p>
      
      <div className="flex gap-4 mt-4">
        <Button url={gitHubUrl}>GitHub</Button>
        <Button url={liveUrl}>Live</Button>
      </div>
    </div>
  </article>
);
}

export default Project
