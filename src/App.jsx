import React from "react";
import { Route, Routes } from "react-router-dom";
import Home from "./pages/home/Home";
import Blog from "./pages/blog/Blog";
import Contato from "./pages/contato/Contato";
import Page404 from "./pages/Page404";

function App() {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="contato" element={<Contato />} />
      <Route path="blog" element={<Blog />} />
      <Route path="*" element={<Page404 />} />
    </Routes>
  );
}

export default App;
