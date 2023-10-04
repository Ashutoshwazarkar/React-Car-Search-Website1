import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Homepage from './Components/Homepage';

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Homepage/>}>
        </Route>
      </Routes>
    </BrowserRouter>
  )
}

export default App;
