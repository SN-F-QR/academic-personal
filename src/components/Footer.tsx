import GithubIcon from "/github-mark.svg";

const Footer = () => {
  return (
    <footer className="font-sans text-xs font-light text-gray">
      <p>Last updated 2025-04-19</p>
      <span className="mt-1 inline-flex">
        <p>&copy; Designed by Yang Zhan. Code soon available at</p>
        <img src={GithubIcon} className="ml-1 size-3 place-self-center" />
        <p>.</p>
      </span>
    </footer>
  );
};

export default Footer;
