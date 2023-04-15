import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import ROUTES from "../Routes/Routes";
import Navbar from "../layouts/Navbar/Navbar";
function App() {
  return (
    <div className="app">
      <Router>
        <Navbar ROUTES={ROUTES} />
        <Routes>
          {ROUTES?.map((route) => (
            <Route element={route.Element} key={route.id} path={route.path} />
          ))}
        </Routes>
      </Router>
    </div>
  );
}

export default App;
