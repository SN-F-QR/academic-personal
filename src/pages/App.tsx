import { BrowserRouter, Routes, Route } from "react-router";
import Academic from "./Academic";
import Links from "./Links";
import WithNavBarLayout from "../components/WithNavBarLayout";
import About from "./About";
import Resume from "./Resume";
import NotFound from "./NotFound";

function App() {
  const pageStyle = "markdown flex flex-col md:max-w-2xl";

  return (
    <BrowserRouter>
      <div className="scrollbar h-dvh w-full overflow-auto bg-purple-light px-4">
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
    </BrowserRouter>
  );
}

export default App;
