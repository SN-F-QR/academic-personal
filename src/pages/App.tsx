import { BrowserRouter, Routes, Route } from "react-router";
import Academic from "./Academic";

function App() {
  return (
    <BrowserRouter>
      <div className="">
        <Routes>
          <Route path="/" element={<Academic />} />
        </Routes>
      </div>
    </BrowserRouter>
  );
}

export default App;
