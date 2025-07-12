import {
  FaGithub,
  FaInbox,
  FaLinkedin,
  FaMailchimp,
  FaTwitter,
} from "react-icons/fa";
import { MdEmail } from "react-icons/md";
function Links() {
  return (
    <div className="flex gap-4 text-2xl my-6 cursor-pointer">
      <p>
        <a href="https://www.linkedin.com/in/abdullahi-salaudeen-08392a252" target="_blank" rel="noopener noreferrer">
          <FaLinkedin />
        </a>
      </p>
      <p>
        <a href="https://github.com/TheOnlyAbdull" target="_blank" rel="noopener noreferrer">
          <FaGithub />
        </a>
      </p>
      <p>
        <a href="https://twitter.com/TheOnlyAbdull?t=kcKxH0wNRouoDtCJ8Akugw&s=09" target="_blank" rel="noopener noreferrer">
          <FaTwitter />
        </a>
      </p>
      <p>
        <a href="mailto:abdullahisalaudeen@gmail.com" target="_blank" rel="noopener noreferrer">
          <MdEmail />
        </a>
      </p>
    </div>
  );
}

export default Links;
