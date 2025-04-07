// import { StrictMode } from 'react'
// import { createRoot } from 'react-dom/client';
// import { BrowserRouter, Route, Routes } from "react-router";
// import './index.css'

// import Home from './views/Home';
// import Add from './views/Add';
// import Edit from './views/Edit';

// createRoot(document.getElementById('root')).render(
//   <BrowserRouter>
//    <Routes>
//     <Route path="/" element={<Home />}/>
//     <Route path="/add" element={<Add />}/>
//     <Route path="/edit/:userId" element={<Edit />}/>
//    </Routes>
//   </BrowserRouter>
  
// )


import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import { BrowserRouter, Routes, Route } from 'react-router-dom';  // Correct import from 'react-router-dom'
import './index.css';

import Home from './views/Home';
import Add from './views/Add';
import Edit from './views/Edit';

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/add" element={<Add />} />
        <Route path="/edit/:userId" element={<Edit />} />
      </Routes>
    </BrowserRouter>
  </StrictMode>
);

