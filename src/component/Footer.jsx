import { MdEmail } from "react-icons/md";
import Button from "./Button";

function Footer() {
  return (
  <div className="mt-16 bg-stone-50 text-neutral-900 dark:bg-neutral-900 dark:text-gray-300">
    <div className="border-2 border-gray-200 p-2 text-center md:w-5/12 w-10/12 mx-auto rounded-lg dark:border-gray-600">
      <p className="text-lg font-semibold text-neutral-900 dark:text-white">
        Get in Touch
      </p>
      <p className="text-sm px-8 md:px-12 mx-auto mb-4 text-neutral-600 dark:text-gray-300">
        Feel free to reach out via email, to discuss projects, collaborations,
        or just to say hello!
      </p>
      <Button
        url="mailto:abdullahisalaudeen65@gmail.com"
       
        linkClass="flex items-center gap-2 text-white dark:text-gray-200"
      >
        <MdEmail /> send me an email
      </Button>
    </div>

    <div className="text-center text-gray-500 text-sm mt-10 py-2 border-t border-gray-200 dark:border-gray-800">
      <p>&copy; <span>{new Date().getFullYear()}</span> Abdullah. All rights reserved.</p>
    </div>
  </div>
);
}

export default Footer;
