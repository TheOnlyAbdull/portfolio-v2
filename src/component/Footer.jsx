import { MdEmail } from "react-icons/md";
import Button from "./Button";

function Footer() {
  return (
    <div className=" mt-16">
      <div className="border-2 p-2  text-center md:w-7/12 w-6/12 mx-auto rounded-lg">
        <p className="text-lg font-semibold text-white">Get in Touch</p>
        <p className="text-sm px-4 md:w-7/12 mx-auto mb-4">
          Feel free to reach out via email, to discuss projects, collaborations,
          or just to say hello!
        </p>
        <Button
          url="mailto:abdullahisalaudeen65@gmail.com"
          linkClass="flex items-center gap-2 text-gray-200"
        >
          <MdEmail /> send me an email
        </Button>
      </div>
      <div className="text-center text-gray-500 text-sm mt-10 py-2 border-t-1">
        <p>&copy; 2025 Abdullah. All rights reserved.</p>
      </div>
    </div>
  );
}

export default Footer;
