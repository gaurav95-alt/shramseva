import React from 'react'

const services = [
  { title: 'Post Jobs', desc: 'Quick job posting for employers', img: '/images/service1.jpg' },
  { title: 'Find Workers', desc: 'Filter by location, shift and type', img: '/images/service1.jpg' },
  { title: 'Apply Easily', desc: 'Workers can apply from phone or computer', img: '/images/service1.jpg' }
]

export default function Services() {
  return (
    <section className="container mx-auto px-4 py-12">
      <h2 className="text-2xl font-bold">Services</h2>
      <p className="text-gray-600 mt-2">We provide simple tools for both employers and workers.</p>

      <div className="grid md:grid-cols-3 gap-6 mt-6">
        {services.map((s) => (
          <div key={s.title} className="bg-white rounded shadow p-4 text-center">
            <img src={s.img} alt={s.title} className="h-36 w-full object-cover rounded" />
            <h3 className="mt-3 font-semibold">{s.title}</h3>
            <p className="text-sm text-gray-600 mt-1">{s.desc}</p>
          </div>
        ))}
      </div>
    </section>
  )
}
