import React, { lazy, Suspense } from "react";

import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { DefaultLayout } from "./layouts";

const Dashboard = lazy(() => import("./routes/Dashboard"));
const Signup = lazy(() => import("./routes/Signup"));

const App = () => (
  <Router
    basename={
      process.env.NODE_ENV !== "development"
        ? process.env.PUBLIC_URL
        : undefined
    }
  >
    <Suspense fallback={<div>Loading...</div>}>
      <Routes>
        <Route path="/" element={<DefaultLayout />}>
          <Route index element={<Dashboard />} />
          <Route path="signup" element={<Signup />} />
        </Route>
      </Routes>
    </Suspense>
  </Router>
);

export default App;
