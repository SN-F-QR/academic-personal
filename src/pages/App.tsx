import { BrowserRouter, Routes, Route } from "react-router";
import Academic from "./Academic";
import Links from "./Links";
import NavBar, { InlineNavBar } from "../components/NavBar";
import About from "./About";

function App() {
  const pageStyle =
    "markdown flex min-h-dvh w-full flex-col place-self-center overflow-hidden lg:ml-16 md:max-w-2xl md:min-w-2xl";

  return (
    <BrowserRouter>
      <div className="h-full w-full bg-purple-light p-4">
        <div className="h-full space-x-8 place-self-center pt-8 pb-20 transition-all lg:flex xl:mr-40">
          <NavBar />
          <InlineNavBar />
          <div>
            <Routes>
              <Route path="/" element={<Academic pageStyle={pageStyle} />} />
              <Route path="/about" element={<About pageStyle={pageStyle} />} />
              <Route path="/links" element={<Links pageStyle={pageStyle} />} />
            </Routes>
          </div>
        </div>
      </div>
    </BrowserRouter>
  );
}

export default App;
