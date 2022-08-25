import React from "react";
import { Route, Routes } from "react-router-dom";
import Home from "./components/home";
import LandingLayout from "./components/LandingLayout";
import Properties from "./components/pages/properties";
import PropertyLayout from "./components/PropertyLayout";

function App() {
  return (
    <Routes>
      <Route path="/" element={<LandingLayout />}>
        <Route index element={<Home />} />
        {/* <Route path="/property" element={<Properties />} /> */}
      </Route>
      <Route path="property" element={<PropertyLayout />}>
        <Route path=":id"  element={<Properties  />} />
      </Route>
    </Routes>
  );
}

export default App;
