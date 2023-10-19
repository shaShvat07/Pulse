import React, { useEffect, useRef } from "react";
import { SignUp, SignIn, Home } from './components/index.js';
import { BrowserRouter, Routes, Route, Navigate } from 'react-router-dom';
import { AuthContext } from "./context/AuthContext.jsx";
import { useContext } from "react";
import { toast, Toaster } from 'react-hot-toast';

const App = () => {
  const { currentUser } = useContext(AuthContext);

  const toastShownRef = useRef(false);

  useEffect(() => {
    if (currentUser && !toastShownRef.current) {
      toast.success("Welcome to Pulse", {
        toastId: 'success1',
      });
      toastShownRef.current = true;
    }
  }, [currentUser]);
  const ProtectedRoute = ({ children }) => {
    if (!currentUser) {
      return <Navigate to="/login" />
    }
    return children;
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
      <Toaster
        position="top-right"
        reverseOrder={false}
      />
    </BrowserRouter>
  );
};

export default App;
