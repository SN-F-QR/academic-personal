import NavBar, { InlineNavBar } from "./NavBar";
import { Outlet } from "react-router";
import Footer from "./Footer";

const WithNavBarLayout = () => {
  return (
    <div className="flex w-full max-w-2xl flex-grow flex-col space-x-8 place-self-center transition-all lg:w-auto lg:max-w-full lg:flex-row xl:mr-32">
      <NavBar />
      <InlineNavBar />
      <div className="flex flex-grow flex-col">
        <Outlet />
        <div className="mt-16 flex-grow place-content-end lg:ml-16">
          <Footer />
        </div>
      </div>
    </div>
  );
};

export default WithNavBarLayout;
