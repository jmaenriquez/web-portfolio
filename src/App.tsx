import React from 'react'
import Dashboard from './Dashboard.tsx';
import NotFound from './NotFound.tsx';

import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

function App() {
  return (
    <>
      <Router>
        <Routes>
          <Route path='/' index element={<Dashboard/>}/>
          <Route path='*' element={<NotFound/>}/>
        </Routes>
      </Router>

    </>
  )
}

export default App