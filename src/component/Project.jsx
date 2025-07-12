import Button from "./Button";

function Project({ id, project, role, description, technologies, image, liveUrl, gitHubUrl }) {
    return (
        <div className="mt-8">
        <div className="flex items-center justify-between">
          <div className="">
            <p className="text-xl md:text-2xl">{id}</p>
            <p className="text-lg md:text-2xl font-bold text-white">{project}</p>
            <p className="text-base md:text-xl">{role}</p>
          </div>
          <div className="border-2 w-4/12"><img src={image}/></div>
        </div>
        <div className="mt-2">
          <p className="text-sm md:text-base">
            {description} <span className="text-gray-500">{technologies.map((e)=> `#${e} `).reduce((prev, curr) => [prev, curr])}</span>
          </p>
          <div className="flex gap-4 mt-4">
            <Button url={gitHubUrl}>GitHub</Button>
            <Button url={liveUrl}>Live</Button>
          </div>
        </div>
      </div>
    )
}

export default Project
