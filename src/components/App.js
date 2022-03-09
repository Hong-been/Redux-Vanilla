import React from 'react'
import { BrowserRouter as Router, Route,Routes } from 'react-router-dom';
import Home from "../routes/Home";
import Detail from "../routes/Detail";

const App = () => {
  return (
    <Router>
      <Routes>
        <Route path="/" exact element={<Home/>}></Route>
        <Route path="/:id" element={<Detail/>}></Route>
      </Routes>
    </Router>
  )
}

export default App