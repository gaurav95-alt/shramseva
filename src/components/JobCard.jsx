import React from 'react'

export default function JobCard({ job, onApply }) {
  return (
    <div className="bg-white shadow rounded overflow-hidden flex flex-col md:flex-row">
      <img src={job.img} alt={job.title} className="h-40 md:h-auto md:w-48 object-cover" />
      <div className="p-4 flex-grow">
        <h3 className="text-lg font-semibold">{job.title}</h3>
        <p className="text-sm text-gray-600">{job.company} · {job.location}</p>
        <p className="mt-2 text-sm">{job.description}</p>
        <div className="mt-4 flex items-center justify-between">
          <div className="text-sm">
            <div>{job.type} • {job.shift}</div>
            <div className="text-indigo-600 font-semibold mt-1">{job.salary}</div>
          </div>
          <div className="flex gap-2">
            <button onClick={() => onApply(job)} className="px-3 py-2 bg-indigo-600 text-white rounded">Apply</button>
            <button className="px-3 py-2 border rounded">Details</button>
          </div>
        </div>
      </div>
    </div>
  )
}
