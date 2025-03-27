import { NavLink } from "react-router";
import LocationWidget from "./LocationWidget";

const NavBar: React.FC = () => {
  const navButtons = ["Academic", "About", "Links"].map((name, index) => {
    let path = name.toLowerCase();
    if (index === 0) {
      path = "";
    }
    return <NavButton key={`nav-button-${name}`} name={name} path={path} />;
  });

  return (
    <div className="sticky top-8 mx-8 flex h-full max-w-54 flex-col justify-items-center space-y-4 font-sans">
      <img
        src="./avatar.png"
        alt="avatar of Yang Zhan"
        className="mt-4 h-32 w-32 rounded-full border border-black"
      />
      <h1 className="place-self-start font-sans text-3xl font-bold">
        Yang Zhan
      </h1>
      <nav className="flex flex-col space-y-2 text-xl font-light text-gray">
        {navButtons}
      </nav>
      <LocationWidget />
    </div>
  );
};

const NavButton: React.FC<{
  name: string;
  path: string;
}> = ({ name, path }) => {
  return (
    <NavLink
      to={path}
      className={({ isActive }) =>
        `h-10 w-54 cursor-pointer rounded-xl ${isActive ? "bg-purple-mid text-purple-strong shadow-md" : "bg-[#f5f4ff]"}`
      }
    >
      <div className="flex h-full">
        <span className="place-self-center px-4">{name}</span>
      </div>
    </NavLink>
  );
};

export default NavBar;
