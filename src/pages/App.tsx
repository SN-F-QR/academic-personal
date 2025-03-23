import { BrowserRouter, Routes, Route } from "react-router";
import Academic from "./Academic";
import NavBar from "../components/NavBar";

function App() {
  return (
    <BrowserRouter>
      <div className="relative h-full w-full bg-purple-light">
        <NavBar />
        <Routes>
          <Route path="/" element={<Academic />} />
        </Routes>
      </div>
    </BrowserRouter>
  );
}

export default App;
