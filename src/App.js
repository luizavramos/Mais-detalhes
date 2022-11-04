import { BrowserRouter, Routes, Route } from "react-router-dom";
import DescritionRecipe from "./DescriptionRecipe";
import HomePage from "./HomePage";

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/products/:recipesId" element={<DescritionRecipe/>}></Route>

        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
