import { useState } from 'react'

import './App.css'
import 'bootstrap/dist/css/bootstrap.min.css';
import {BrowserRouter, Routes, Route} from 'react-router-dom'
import Home from './components/Home';
import Profile from './components/Profile';
import Layout from './components/Layout'

function App() {

  return (
    <>
  
     <BrowserRouter>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<Home />} />
          <Route path="Profile" element={<Profile />} />
          <Route path="Settings" element={<Settings />} />
        
        </Route>
      </Routes>
    </BrowserRouter>
    </>
  )
}

export default App
