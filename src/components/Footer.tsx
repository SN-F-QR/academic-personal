import GithubIcon from "/github-mark.svg";

const Footer = () => {
  return (
    <footer className="font-sans text-xs font-light text-gray">
      <p>Last updated 2025-04-24</p>
      <span className="mt-1 inline-flex">
        <p>&copy; Designed by Yang Zhan. Code available on</p>
        <a href="https://github.com/SN-F-QR/academic-personal">
          <img src={GithubIcon} className="ml-1 size-3" />
        </a>
        <p>.</p>
      </span>
    </footer>
  );
};

export default Footer;
