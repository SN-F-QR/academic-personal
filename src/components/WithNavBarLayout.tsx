import NavBar, { InlineNavBar } from "./NavBar";
import { Outlet } from "react-router";
import Footer from "./Footer";

const WithNavBarLayout = () => {
  return (
    <div className="space-x-8 transition-all lg:flex xl:mr-32">
      <NavBar />
      <InlineNavBar />
      <div>
        <Outlet />
        <div className="lg:ml-16">
          <Footer />
        </div>
      </div>
    </div>
  );
};

export default WithNavBarLayout;
