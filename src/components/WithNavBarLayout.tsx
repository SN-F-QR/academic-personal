import NavBar, { InlineNavBar } from "./NavBar";
import { Outlet } from "react-router";

const WithNavBarLayout = () => {
  return (
    <div className="h-full space-x-8 place-self-center pt-8 pb-20 transition-all lg:flex xl:mr-32">
      <NavBar />
      <InlineNavBar />
      <Outlet />
    </div>
  );
};

export default WithNavBarLayout;
