import { FaGithub, FaLinkedin } from "react-icons/fa";
import { FaXTwitter } from "react-icons/fa6";

export default function Links() {
  return (
    <div className="px-10 sm:px-16 py-5  bg-stone-950/20 z-10 fixed w-full top-0 left-0 backdrop-blur text-surface text-2xl flex space-x-3">
      <a href="https://github.com/RaucousDave">
        {" "}
        <FaGithub className="hover:text-primary transition ease-linear" />
      </a>
      <a href="https://www.linkedin.com/in/davies-enienghan-615718307/">
        {" "}
        <FaLinkedin className="hover:text-primary transition ease-linear" />
      </a>
      <a href="https://x.com/sagefrugal">
        {" "}
        <FaXTwitter className="hover:text-primary transition ease-linear" />
      </a>
    </div>
  );
}
