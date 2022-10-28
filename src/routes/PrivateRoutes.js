import React from "react";
import { BrowserRouter as Router, Routes, Route} from "react-router-dom";
import Profile from "../pages/Profile";
import ProtectedRoute from './ProtectedRoute';

function PrivateRoutes() {
  return (
    <Router>
      <Routes>
        <Route element={<ProtectedRoute />}>
          <Route element={<Profile />} path="/profile" exact/>
        </Route>
      </Routes>
    </Router>
  );
}

export default PrivateRoutes;
