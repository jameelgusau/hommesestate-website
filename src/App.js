import React, { lazy, Suspense } from "react";
import { Route, Routes, Navigate, } from "react-router-dom";
import Home from "./components/home";
import LandingLayout from "./components/LandingLayout";
// import Properties from "./components/pages/properties";
import PropertyLayout from "./components/PropertyLayout";
import Loading from "./components/pages/Loading"

const NotFound = lazy(() => import("./components/pages/notfound"));
const Properties = lazy(() => import("./components/pages/properties"));

function App() {
  return (
    <Suspense fallback={<Loading />}>
    <Routes>
      <Route path="/" element={<LandingLayout />}>
        <Route index element={<Home />} />
        {/* <Route path="/property" element={<Properties />} /> */}
      </Route>
      <Route path="property" element={<PropertyLayout />}>
        <Route path=":id"  element={<Properties  />} />
      </Route>
      <Route path="notfound" element={<NotFound />} />
      <Route path="*" element={<Navigate to="/notfound" replace />} />
    </Routes>
    </Suspense>
  );
}

export default App;
