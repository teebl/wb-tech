import React, { lazy, Suspense } from "react";
import "./App.css";

import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

const Dashboard = lazy(() => import("./routes/Dashboard"));

const App = () => (
  <Router>
    <Suspense fallback={<div>Loading...</div>}>
      <Routes>
        <Route path="/" element={<Dashboard />} />
      </Routes>
    </Suspense>
  </Router>
);

export default App;
