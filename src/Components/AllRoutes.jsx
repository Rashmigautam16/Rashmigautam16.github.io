import React from 'react'
import { Route, Routes } from 'react-router-dom'
import About from './About'
import Contact from './Contact'
import Home from './Home'
import Project from './Project'
import Skills from './Skills'

const AllRoutes = () => {
  return (
    <Routes>
        <Route path="/" element={<Home/>}></Route>
        <Route path="/about" element={<About/>}></Route>
        <Route path="/skills" element={<Skills/>}></Route>
        <Route path="/project" element={<Project/>}></Route>
        <Route path="/contact" element={<Contact/>}></Route>
    </Routes>
  )
}

export default AllRoutes