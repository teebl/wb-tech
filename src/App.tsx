import React, { lazy, Suspense } from "react";
import "./App.css";

import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

const Dashboard = lazy(() => import("./routes/Dashboard"));
const Signup = lazy(() => import("./routes/Signup"));

const App = () => (
  <Router>
    <Suspense fallback={<div>Loading...</div>}>
      <Routes>
        <Route path="/">
          <Route index element={<Dashboard />} />
          <Route path="signup" element={<Signup />} />
        </Route>
      </Routes>
    </Suspense>
  </Router>
);

export default App;
