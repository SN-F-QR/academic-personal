import { FaGithub } from "react-icons/fa";

const Footer = () => {
  return (
    <footer className="text-xs font-light text-gray">
      <p>Last updated 2025-04-13</p>
      <span className="mt-1 inline-flex">
        <p>&copy; Designed by Yang Zhan. Code soon available at</p>
        <FaGithub className="ml-1 size-3 place-self-center text-purple-strong" />
        <p>.</p>
      </span>
    </footer>
  );
};

export default Footer;
