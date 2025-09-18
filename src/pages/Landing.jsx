import React from 'react'
import { Link } from 'react-router-dom'

export default function Landing() {
  return (
    <section className="bg-gradient-to-b from-indigo-50 to-white">
      <div className="container mx-auto px-4 py-12 grid md:grid-cols-2 gap-8 items-center">
        <div>
          <h2 className="text-3xl md:text-4xl font-bold text-gray-800">ShramSeva — Work that fits.</h2>
          <p className="mt-4 text-gray-600 max-w-xl">
            We connect employers and workers (uneducated, semi-educated, and students) across India. Post jobs or find local workers quickly — trusted, simple, and low-cost.
          </p>

          <div className="mt-6 flex gap-3">
            <Link to="/jobs" className="px-5 py-3 bg-indigo-600 text-white rounded shadow">Find Jobs</Link>
            <Link to="/employer/post" className="px-5 py-3 border rounded">Post a Job</Link>
          </div>

          <div className="mt-6 text-sm text-gray-500">
            <strong>How it works:</strong> Employers post jobs → Workers search and apply → Employers review & hire.
          </div>
        </div>

        <div>
          <img src="/images/hero.jpg" alt="ShramSeva hero" className="rounded shadow-md w-full object-cover h-64 md:h-80" />
        </div>
      </div>

      <div className="container mx-auto px-4 py-8 grid md:grid-cols-3 gap-6">
        <div className="bg-white p-6 rounded shadow text-center">
          <h4 className="font-semibold">Local Jobs</h4>
          <p className="text-sm text-gray-600 mt-2">Find nearby work across cities and towns.</p>
        </div>
        <div className="bg-white p-6 rounded shadow text-center">
          <h4 className="font-semibold">Simple Hiring</h4>
          <p className="text-sm text-gray-600 mt-2">Employers can post jobs within minutes.</p>
        </div>
        <div className="bg-white p-6 rounded shadow text-center">
          <h4 className="font-semibold">Affordable</h4>
          <p className="text-sm text-gray-600 mt-2">Low-cost platform designed for small businesses.</p>
        </div>
      </div>
    </section>
  )
}
