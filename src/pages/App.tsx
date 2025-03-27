import { BrowserRouter, Routes, Route } from "react-router";
import Academic from "./Academic";
import Links from "./Links";
import NavBar from "../components/NavBar";
import About from "./About";

function App() {
  const pageStyle =
    "markdown flex min-h-dvh w-full flex-col place-self-center overflow-hidden pt-8 pb-20 mr-8 lg:ml-16 md:max-w-2xl";

  return (
    <BrowserRouter>
      <div className="h-full w-full bg-purple-light">
        <div className="flex h-full place-self-center xl:mr-40">
          <NavBar />
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
