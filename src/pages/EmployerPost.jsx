import React from 'react'
import Input from '../components/Input'

export default function EmployerPost() {
  const [form, setForm] = React.useState({
    title: '',
    company: '',
    location: '',
    type: '',
    shift: '',
    salary: '',
    description: ''
  })
  const [errors, setErrors] = React.useState({})
  const [success, setSuccess] = React.useState(null)

  function validate() {
    const err = {}
    if (!form.title) err.title = 'Title is required'
    if (!form.company) err.company = 'Company is required'
    if (!form.location) err.location = 'Location is required'
    if (!form.type) err.type = 'Type is required'
    if (!form.shift) err.shift = 'Shift is required'
    if (!form.description) err.description = 'Description is required'
    setErrors(err)
    return Object.keys(err).length === 0
  }

  function handleSubmit(e) {
    e.preventDefault()
    if (!validate()) return
    // TODO: call API to create job (axios.post('/api/jobs', form))
    setSuccess('Job posted locally (demo). Connect to backend to persist.')
    setForm({ title: '', company: '', location: '', type: '', shift: '', salary: '', description: '' })
  }

  return (
    <section className="container mx-auto px-4 py-12">
      <h2 className="text-2xl font-bold">Post a Job</h2>
      <form onSubmit={handleSubmit} className="mt-4 bg-white p-6 rounded shadow max-w-2xl">
        <Input label="Job Title" id="title" value={form.title} onChange={e => setForm({ ...form, title: e.target.value })} />
        {errors.title && <div className="text-red-500 text-sm">{errors.title}</div>}
        <Input label="Company" id="company" value={form.company} onChange={e => setForm({ ...form, company: e.target.value })} />
        {errors.company && <div className="text-red-500 text-sm">{errors.company}</div>}
        <Input label="Location" id="location" value={form.location} onChange={e => setForm({ ...form, location: e.target.value })} />
        {errors.location && <div className="text-red-500 text-sm">{errors.location}</div>}

        <div className="grid md:grid-cols-2 gap-4">
          <div>
            <label className="block text-sm font-medium mb-1">Type</label>
            <select value={form.type} onChange={e => setForm({ ...form, type: e.target.value })} className="w-full border rounded px-3 py-2">
              <option value="">Select Type</option>
              <option>Full-time</option>
              <option>Part-time</option>
            </select>
            {errors.type && <div className="text-red-500 text-sm">{errors.type}</div>}
          </div>

          <div>
            <label className="block text-sm font-medium mb-1">Shift</label>
            <select value={form.shift} onChange={e => setForm({ ...form, shift: e.target.value })} className="w-full border rounded px-3 py-2">
              <option value="">Select Shift</option>
              <option>Morning</option>
              <option>Evening</option>
              <option>Night</option>
            </select>
            {errors.shift && <div className="text-red-500 text-sm">{errors.shift}</div>}
          </div>
        </div>

        <Input label="Salary (optional)" id="salary" value={form.salary} onChange={e => setForm({ ...form, salary: e.target.value })} />
        <div className="mb-4">
          <label className="block text-sm font-medium mb-1">Description</label>
          <textarea value={form.description} onChange={e => setForm({ ...form, description: e.target.value })} className="w-full border rounded px-3 py-2 h-32" />
          {errors.description && <div className="text-red-500 text-sm">{errors.description}</div>}
        </div>

        <div className="flex items-center gap-3">
          <button type="submit" className="px-4 py-2 bg-indigo-600 text-white rounded">Post Job</button>
          <span className="text-sm text-gray-600">{success}</span>
        </div>
      </form>
    </section>
  )
}
