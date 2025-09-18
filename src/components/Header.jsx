import React from 'react'
import { Link, NavLink } from 'react-router-dom'

export default function Header() {
  return (
    <header className="bg-white shadow">
      <div className="container mx-auto px-4 py-4 flex items-center justify-between">
        <Link to="/" className="flex items-center gap-3">
          <div className="bg-indigo-600 text-white font-bold px-3 py-2 rounded">SS</div>
          <div>
            <h1 className="text-lg font-semibold">ShramSeva</h1>
            <p className="text-xs text-gray-500">Connecting workers & employers across India</p>
          </div>
        </Link>

        <nav className="hidden md:flex gap-4 items-center">
          <NavLink to="/" className={({isActive}) => isActive ? 'text-indigo-600 font-semibold' : 'text-gray-700'}>Home</NavLink>
          <NavLink to="/jobs" className={({isActive}) => isActive ? 'text-indigo-600 font-semibold' : 'text-gray-700'}>Jobs</NavLink>
          <NavLink to="/services" className={({isActive}) => isActive ? 'text-indigo-600 font-semibold' : 'text-gray-700'}>Services</NavLink>
          <NavLink to="/about" className={({isActive}) => isActive ? 'text-indigo-600 font-semibold' : 'text-gray-700'}>About</NavLink>
          <NavLink to="/contact" className={({isActive}) => isActive ? 'text-indigo-600 font-semibold' : 'text-gray-700'}>Contact</NavLink>
          <Link to="/login" className="ml-4 px-4 py-2 border rounded">Login</Link>
        </nav>

        <div className="md:hidden">
          <MobileMenu />
        </div>
      </div>
    </header>
  )
}

function MobileMenu() {
  const [open, setOpen] = React.useState(false)
  return (
    <div className="relative">
      <button onClick={() => setOpen(!open)} className="p-2 border rounded">
        ☰
      </button>

      {open && (
        <div className="absolute right-0 mt-2 w-48 bg-white shadow rounded z-50">
          <nav className="flex flex-col p-3">
            <Link to="/" onClick={() => setOpen(false)} className="py-2">Home</Link>
            <Link to="/jobs" onClick={() => setOpen(false)} className="py-2">Jobs</Link>
            <Link to="/services" onClick={() => setOpen(false)} className="py-2">Services</Link>
            <Link to="/about" onClick={() => setOpen(false)} className="py-2">About</Link>
            <Link to="/contact" onClick={() => setOpen(false)} className="py-2">Contact</Link>
            <Link to="/login" onClick={() => setOpen(false)} className="py-2">Login</Link>
          </nav>
        </div>
      )}
    </div>
  )
}
