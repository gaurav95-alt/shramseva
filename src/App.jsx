import React from 'react'
import { Routes, Route } from 'react-router-dom'
import Header from './components/Header'
import Footer from './components/Footer'
import Landing from './pages/Landing'
import About from './pages/About'
import Services from './pages/Services'
import Jobs from './pages/Jobs'
import EmployerPost from './pages/EmployerPost'
import WorkerApply from './pages/WorkerApply'
import Contact from './pages/Contact'
import Login from './pages/Login'
import Register from './pages/Register'

export default function App() {
  return (
    <div className="flex flex-col min-h-screen">
      <Header />
      <main className="flex-grow">
        <Routes>
          <Route path="/" element={<Landing />} />
          <Route path="/about" element={<About />} />
          <Route path="/services" element={<Services />} />
          <Route path="/jobs" element={<Jobs />} />
          <Route path="/employer/post" element={<EmployerPost />} />
          <Route path="/worker/apply" element={<WorkerApply />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/login" element={<Login />} />
          <Route path="/register" element={<Register />} />
        </Routes>
      </main>
      <Footer />
    </div>
  )
}
