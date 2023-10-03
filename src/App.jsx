import React from "react";
import { SignUp, SignIn, Home } from './components/index.js';
import { BrowserRouter, Routes, Route, Navigate } from 'react-router-dom';
import { AuthContext } from "./context/AuthContext.jsx";
import { useContext } from "react";

const App = () => {
  const { currentUser } = useContext(AuthContext);
  const ProtectedRoute = ({ children }) => {
    if (!currentUser) {
      return <Navigate to="/login" />
    }
  }

  return (
    <BrowserRouter>
      <Routes>
        <Route path="/">
          <Route index element={
            <ProtectedRoute>
              <Home />
            </ProtectedRoute>
          } />
          <Route path="login" element={<SignIn />} />
          <Route path="register" element={<SignUp />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
};

export default App;
