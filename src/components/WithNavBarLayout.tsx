import NavBar, { InlineNavBar } from "./NavBar";
import { Outlet } from "react-router";
import Footer from "./Footer";

const WithNavBarLayout = () => {
  return (
    <div className="flex h-full flex-grow flex-col space-x-8 place-self-center transition-all lg:flex-row xl:mr-32">
      <NavBar />
      <InlineNavBar />
      <div className="flex flex-grow flex-col">
        <Outlet />
        <div className="flex-grow place-content-end lg:ml-16">
          <Footer />
        </div>
      </div>
    </div>
  );
};

export default WithNavBarLayout;
