import { useState } from "react";

const NavBar = () => {
  const [activePage, setActivePage] = useState("Academic");

  const buttonOnClick = (value: string) => {
    setActivePage(value);
  };

  const navButtons = ["Academic", "About", "Links"].map((name) => (
    <NavButton
      key={`nav-button-${name}`}
      name={name}
      activeName={activePage}
      setActiveName={buttonOnClick}
    />
  ));

  return (
    <div className="fixed top-8 left-1/12 flex h-full flex-col justify-items-center space-y-4 font-sans">
      <img
        src="./public/avatar.png"
        alt="avatar of Yang Zhan"
        className="mt-4 h-32 w-32 rounded-full border border-black"
      />
      <h1 className="place-self-start font-sans text-3xl font-bold">
        Yang Zhan
      </h1>
      <div className="flex flex-col space-y-2">{navButtons}</div>
    </div>
  );
};

const NavButton: React.FC<{
  name: string;
  activeName: string;
  setActiveName: (value: string) => void;
}> = ({ name, activeName, setActiveName }) => {
  return (
    <button
      className={`h-10 w-54 rounded-xl ${name === activeName ? "bg-purple-mid" : "bg-[#f5f4ff]"} cursor-pointer text-xl font-normal text-gray`}
      onClick={() => setActiveName(name)}
    >
      <div className="flex">
        <span className="place-self-start px-4">{name}</span>
      </div>
    </button>
  );
};

export default NavBar;
