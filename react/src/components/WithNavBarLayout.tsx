import NavBar, { InlineNavBar } from "./NavBar";
import { Outlet } from "react-router";
import Footer from "./Footer";

const WithNavBarLayout = () => {
  return (
    <div className="relative flex min-h-dvh w-full flex-col justify-center pb-4 transition-all max-lg:items-center lg:flex-row xl:pr-32">
      <div className="sticky top-8 h-full">
        <NavBar />
      </div>
      <InlineNavBar />
      <div className="flex w-full max-w-2xl flex-grow flex-col justify-between lg:ml-24 lg:pt-8">
        <Outlet />
        <div className="mt-16">
          <Footer />
        </div>
      </div>
    </div>
  );
};

export default WithNavBarLayout;
