import { CiLight } from "react-icons/ci";
import Button from "./Button";
import { IoMoonOutline } from "react-icons/io5";

function Header({ isDarkTheme, setIsDarkTheme }) {
  return (
    <div className="fixed bg-stone-50 dark:bg-neutral-900  w-full font-plex text-neutral-900 dark:text-gray-300 px-4 py-6 flex justify-between items-center md:px-16  ">
      <div className="text-2xl md:text-3xl flex gap-2 items-center">
        <span>=&gt;</span>
        <span>Abdullah.</span>
      </div>
      <div className="flex items-center gap-4 text-base">
        <Button url="https://drive.google.com/file/d/16RrcxX-Ry6xpz7n8eM95bKH5TCLGg4t3/view?usp=sharing">
          Read CV
        </Button>
        <p
          className="text-2xl cursor-pointer hover:text-gray-500 dark:hover:text-neutral-500"
          onClick={() => setIsDarkTheme(prev => !prev)}
        >
          {isDarkTheme ? <CiLight /> : <IoMoonOutline />}
        </p>
      </div>
    </div>
  );
}

export default Header;
