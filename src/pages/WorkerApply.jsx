import React from 'react'
import { useLocation } from 'react-router-dom'
import Input from '../components/Input'

export default function WorkerApply() {
  const { state } = useLocation()
  const job = state?.job || null

  const [form, setForm] = React.useState({
    name: '',
    phone: '',
    age: '',
    experience: '',
    resumeLink: ''
  })
  const [errors, setErrors] = React.useState({})
  const [message, setMessage] = React.useState(null)

  function validate() {
    const err = {}
    if (!form.name) err.name = 'Name is required'
    if (!form.phone) err.phone = 'Phone is required'
    setErrors(err)
    return Object.keys(err).length === 0
  }

  function handleSubmit(e) {
    e.preventDefault()
    if (!validate()) return
    // TODO: send to backend: axios.post('/api/applications', { jobId: job?.id, ...form })
    setMessage('Application submitted locally (demo). Connect to backend to persist.')
    setForm({ name: '', phone: '', age: '', experience: '', resumeLink: '' })
  }

  return (
    <section className="container mx-auto px-4 py-12">
      <h2 className="text-2xl font-bold">Apply for Job</h2>
      {job && (
        <div className="mt-4 bg-white p-4 rounded shadow">
          <h3 className="font-semibold">{job.title}</h3>
          <p className="text-sm text-gray-600">{job.company} · {job.location}</p>
        </div>
      )}

      <form onSubmit={handleSubmit} className="mt-4 bg-white p-6 rounded shadow max-w-2xl">
        <Input label="Full Name" id="name" value={form.name} onChange={e => setForm({ ...form, name: e.target.value })} />
        {errors.name && <div className="text-red-500 text-sm">{errors.name}</div>}
        <Input label="Phone" id="phone" value={form.phone} onChange={e => setForm({ ...form, phone: e.target.value })} />
        {errors.phone && <div className="text-red-500 text-sm">{errors.phone}</div>}
        <Input label="Age (optional)" id="age" value={form.age} onChange={e => setForm({ ...form, age: e.target.value })} />
        <Input label="Experience (brief)" id="experience" value={form.experience} onChange={e => setForm({ ...form, experience: e.target.value })} />
        <Input label="Resume link (optional)" id="resumeLink" value={form.resumeLink} onChange={e => setForm({ ...form, resumeLink: e.target.value })} />

        <div className="flex items-center gap-3 mt-4">
          <button type="submit" className="px-4 py-2 bg-indigo-600 text-white rounded">Submit Application</button>
          {message && <span className="text-sm text-gray-600">{message}</span>}
        </div>
      </form>
    </section>
  )
}
