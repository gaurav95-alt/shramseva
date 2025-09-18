import React from 'react'
import jobsData from '../data/jobs'
import JobCard from '../components/JobCard'
import { useNavigate } from 'react-router-dom'

export default function Jobs() {
  const [jobs, setJobs] = React.useState(jobsData)
  const [location, setLocation] = React.useState('')
  const [shift, setShift] = React.useState('')
  const [type, setType] = React.useState('')
  const [query, setQuery] = React.useState('')
  const navigate = useNavigate()

  const filtered = jobs.filter(j => {
    const matchesLocation = location ? j.location.toLowerCase().includes(location.toLowerCase()) : true
    const matchesShift = shift ? j.shift.toLowerCase() === shift.toLowerCase() : true
    const matchesType = type ? j.type.toLowerCase() === type.toLowerCase() : true
    const matchesQuery = query ? (j.title + j.company + j.description).toLowerCase().includes(query.toLowerCase()) : true
    return matchesLocation && matchesShift && matchesType && matchesQuery
  })

  function handleApply(job) {
    // Redirect to worker apply page and pass job id via state
    navigate('/worker/apply', { state: { job } })
  }

  return (
    <section className="container mx-auto px-4 py-12">
      <h2 className="text-2xl font-bold">Job Listings</h2>

      <div className="mt-4 bg-white p-4 rounded shadow">
        <div className="grid md:grid-cols-4 gap-3">
          <input value={query} onChange={e => setQuery(e.target.value)} placeholder="Search jobs, company..." className="border rounded px-3 py-2" />
          <input value={location} onChange={e => setLocation(e.target.value)} placeholder="Location (city/state)" className="border rounded px-3 py-2" />
          <select value={shift} onChange={e => setShift(e.target.value)} className="border rounded px-3 py-2">
            <option value="">Any Shift</option>
            <option value="Morning">Morning</option>
            <option value="Evening">Evening</option>
            <option value="Night">Night</option>
          </select>
          <select value={type} onChange={e => setType(e.target.value)} className="border rounded px-3 py-2">
            <option value="">Any Type</option>
            <option value="Full-time">Full-time</option>
            <option value="Part-time">Part-time</option>
          </select>
        </div>
      </div>

      <div className="mt-6 space-y-4">
        {filtered.length > 0 ? (
          filtered.map(job => <JobCard key={job.id} job={job} onApply={handleApply} />)
        ) : (
          <div className="text-gray-600">No jobs found — try clearing filters.</div>
        )}
      </div>
    </section>
  )
}
