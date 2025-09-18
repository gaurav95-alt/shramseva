import React from 'react'
import { Link } from 'react-router-dom'

export default function Footer() {
  return (
    <footer className="bg-white border-t mt-12">
      <div className="container mx-auto px-4 py-8 flex flex-col md:flex-row justify-between items-start gap-6">
        <div>
          <h3 className="text-lg font-semibold">ShramSeva</h3>
          <p className="text-sm text-gray-600 max-w-xs">Connecting employers and workers across India — trustworthy, fast and local.</p>
          <p className="mt-3 text-xs text-gray-500">© {new Date().getFullYear()} ShramSeva</p>
        </div>

        <div className="flex gap-8">
          <div>
            <h4 className="font-semibold">Company</h4>
            <ul className="mt-2 text-sm text-gray-600">
              <li><Link to="/about">About</Link></li>
              <li><Link to="/services">Services</Link></li>
              <li><Link to="/contact">Contact</Link></li>
            </ul>
          </div>
          <div>
            <h4 className="font-semibold">Support</h4>
            <ul className="mt-2 text-sm text-gray-600">
              <li>Email: support@shramseva.example</li>
              <li>Phone: +91 98765 43210</li>
            </ul>
          </div>
        </div>
      </div>
    </footer>
  )
}
