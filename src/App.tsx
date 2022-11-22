import React, { lazy, Suspense } from 'react';
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";

import Spinner from 'react-bootstrap/Spinner';
import './App.sass';

import NavigationBar from "./components/NavigationBar";
const Main = lazy(() => import("./components/Main"));
const SignIn = lazy(() => import("./components/SignIn"));
const SignUp = lazy(() => import("./components/SignUp"));

function App() {
  return (
    <div className="App">
      <Router>
        <NavigationBar />
        <Suspense fallback={
          <div className="mt-4 text-center">
            <Spinner animation="border" variant="primary role='status'">
              <span className="visually-hidden">Loading...</span>
            </Spinner>
          </div>
        }>
          <Routes>
            <Route path="/" element={<Main />}/>
            <Route path="/sign-in" element={<SignIn />}/>
            <Route path="/sign-up" element={<SignUp />}/>
          </Routes>
        </Suspense>
      </Router>
    </div>
  );
}

export default App;
