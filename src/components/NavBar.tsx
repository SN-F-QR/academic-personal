import { NavLink } from "react-router";
import LocationWidget from "./LocationWidget";
import React from "react";

const NavBar: React.FC = () => {
  // const navButtons = ["Academic", "About", "Links"].map((name, index) => {
  //   let path = name.toLowerCase();
  //   if (index === 0) {
  //     path = "";
  //   }
  //   return <NavButton key={`nav-button-${name}`} name={name} path={path} />;
  // });

  return (
    <div className="sticky top-8 mx-8 hidden h-full max-w-54 flex-col justify-items-center space-y-4 font-sans lg:flex">
      <img
        src="./avatar.png"
        alt="avatar of Yang Zhan"
        className="mt-4 h-32 w-32 rounded-full border border-black"
      />
      <h1 className="place-self-start font-sans text-3xl font-bold">
        Yang Zhan
      </h1>
      <nav className="flex flex-col space-y-2 text-xl font-light text-gray">
        <NavButtonList names={["Academic", "About", "Links"]} />
      </nav>
      <LocationWidget />
    </div>
  );
};

export const InlineNavBar: React.FC = () => {
  return (
    <div className="flex w-full flex-1 flex-col space-y-4 pb-4 lg:hidden">
      <div className="flex items-center space-x-4">
        <img
          src="./avatar.png"
          alt="avatar of Yang Zhan"
          className="mt-4 h-32 w-32 rounded-full border border-black"
        />
        <h1 className="font-sans text-3xl font-bold">Yang Zhan</h1>
      </div>
      <nav className="flex space-x-2 text-xl font-light text-gray">
        <NavButtonList names={["Academic", "About", "Links"]} />
      </nav>
    </div>
  );
};

const NavButtonList: React.FC<{
  names: string[];
}> = ({ names }) => {
  const navButtons = names.map((name, index) => {
    let path = name.toLowerCase();
    if (index === 0) {
      path = "";
    }
    return <NavButton key={`nav-button-${name}`} name={name} path={path} />;
  });

  return navButtons;
};

const NavButton: React.FC<{
  name: string;
  path: string;
}> = ({ name, path }) => {
  return (
    <NavLink
      to={path}
      className={({ isActive }) =>
        `h-10 max-w-54 flex-1 grow cursor-pointer rounded-xl ${isActive ? "bg-purple-mid text-purple-strong shadow-md" : "bg-[#f5f4ff]"}`
      }
    >
      <div className="flex h-full">
        <span className="min-w-4 place-self-center px-4">{name}</span>
      </div>
    </NavLink>
  );
};

export default NavBar;
