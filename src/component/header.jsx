import { CiLight } from "react-icons/ci";
import Button from "./Button";

function Header() {
  return (
    <div className="tranparent fixed bg-neutral-900  w-full font-plex text-gray-300 px-6 py-6 flex justify-between items-center md:px-16  ">
      <div className="text-2xl md:text-3xl flex gap-2 items-center">
        <span>=&gt;</span>
        <span>Abdullah.</span>
      </div>
      <div className="flex items-center gap-4 text-base">
        <Button url="">Read CV</Button>
        <p className="text-2xl cursor-pointer  hover:text-neutral-500 ">
          <CiLight />
        </p>
      </div>
    </div>
  );
}

export default Header;
