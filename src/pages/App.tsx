import { BrowserRouter, Routes, Route } from "react-router";
import Academic from "./Academic";

function App() {
  return (
    <BrowserRouter>
      <div className="relative h-full w-full bg-purple-light">
        <Routes>
          <Route path="/" element={<Academic />} />
        </Routes>
      </div>
    </BrowserRouter>
  );
}

export default App;
