import React from 'react'

export default function About() {
  return (
    <section className="container mx-auto px-4 py-12">
      <div className="grid md:grid-cols-2 gap-8 items-center">
        <div>
          <h2 className="text-2xl font-bold">About ShramSeva</h2>
          <p className="mt-4 text-gray-600">
            ShramSeva’s mission is to bridge the gap between employers and workers across India. We focus on accessible, trustworthy hiring for industries like construction, logistics, hospitality, housekeeping, and more.
          </p>

          <ul className="mt-4 space-y-2 text-gray-600">
            <li> • Serve uneducated, semi-educated workers and students</li>
            <li> • Simple application flow — minimal documentation</li>
            <li> • Local job discovery & fast hiring</li>
          </ul>
        </div>

        <div>
          <img src="/images/about.jpg" alt="About ShramSeva" className="rounded shadow-md w-full object-cover h-64" />
        </div>
      </div>
    </section>
  )
}
