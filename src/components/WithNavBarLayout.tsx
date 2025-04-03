import NavBar, { InlineNavBar } from "./NavBar";
import { Outlet } from "react-router";

const WithNavBarLayout = () => {
  return (
    <div className="space-x-8 lg:flex xl:mr-32">
      <NavBar />
      <InlineNavBar />
      <Outlet />
    </div>
  );
};

export default WithNavBarLayout;
