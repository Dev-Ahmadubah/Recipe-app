import Cusine from "./Cusine";
import Home from "./Home";
import { Routes, Route, useLocation } from "react-router-dom";
import Searched from "./Searched";
import Recipe from "./Recipe";

const Pages = () => {
  let location = useLocation();
  return (
    <Routes location={location} key={location.pathname}>
      <Route path="/" element={<Home />} />
      <Route path="/cusine/:type" element={<Cusine />} />
      <Route path="/searched/:search" element={<Searched />} />
      <Route path="/recipe/:name" element={<Recipe />} />
    </Routes>
  );
};

export default Pages;
