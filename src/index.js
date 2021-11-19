import { render } from "react-dom";
import {
  BrowserRouter,
  Routes,
  Route
} from "react-router-dom";
import App from "./App";
import MovieDesc from "./routes/MovieDesc/MovieDesc.js";

const rootElement = document.getElementById("root");
render(
  <BrowserRouter>
    <Routes>
      <Route path="/" element={<App />} />
      <Route path="/Movie/:movieId" element={<MovieDesc />}/>
    </Routes>
  </BrowserRouter>,
  rootElement
);