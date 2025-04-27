import { BrowserRouter, Routes, Route } from "react-router";
import Academic from "./Academic";
import Links from "./Links";
import WithNavBarLayout from "../components/WithNavBarLayout";
import About from "./About";
import Resume from "./Resume";
import NotFound from "./NotFound";

function App() {
  const pageStyle =
    "markdown flex h-full w-full flex-col place-self-center overflow-hidden md:w-2xl lg:ml-16";

  return (
    <BrowserRouter>
      <div className="flex min-h-dvh w-full flex-col bg-purple-light p-4">
        <div className="flex w-full flex-grow flex-col pt-8 pb-8">
          <Routes>
            <Route path="/" element={<WithNavBarLayout />}>
              <Route index element={<Academic pageStyle={pageStyle} />} />
              <Route path="/about" element={<About pageStyle={pageStyle} />} />
              <Route path="/links" element={<Links pageStyle={pageStyle} />} />
            </Route>
            <Route path="/resume" element={<Resume />} />
            <Route path="*" element={<NotFound />} />
          </Routes>
        </div>
      </div>
    </BrowserRouter>
  );
}

export default App;
