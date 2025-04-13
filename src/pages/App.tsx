import { BrowserRouter, Routes, Route } from "react-router";
import Academic from "./Academic";
import Links from "./Links";
import WithNavBarLayout from "../components/WithNavBarLayout";
import About from "./About";
import Resume from "./Resume";

function App() {
  const pageStyle =
    "markdown flex h-full w-full flex-col place-self-center overflow-hidden lg:ml-16 md:max-w-2xl md:min-w-2xl";

  return (
    <BrowserRouter>
      <div className="min-h-dvh w-full bg-purple-light p-4">
        <div className="h-full place-self-center pt-8 pb-20">
          <Routes>
            <Route path="/" element={<WithNavBarLayout />}>
              <Route index element={<Academic pageStyle={pageStyle} />} />
              <Route path="/about" element={<About pageStyle={pageStyle} />} />
              <Route path="/links" element={<Links pageStyle={pageStyle} />} />
            </Route>
            <Route path="/resume" element={<Resume />} />
          </Routes>
        </div>
      </div>
    </BrowserRouter>
  );
}

export default App;
