import React from 'react'
import Input from '../components/Input'

export default function Contact() {
  const [form, setForm] = React.useState({ name: '', email: '', message: '' })
  const [errors, setErrors] = React.useState({})
  const [status, setStatus] = React.useState(null)

  function validate() {
    const err = {}
    if (!form.name) err.name = 'Name required'
    if (!form.email || !/\S+@\S+\.\S+/.test(form.email)) err.email = 'Valid email required'
    if (!form.message) err.message = 'Message required'
    setErrors(err)
    return Object.keys(err).length === 0
  }

  function handleSubmit(e) {
    e.preventDefault()
    if (!validate()) return
    setStatus('Message sent (demo).')
    setForm({ name: '', email: '', message: '' })
  }

  return (
    <section className="container mx-auto px-4 py-12">
      <h2 className="text-2xl font-bold">Contact Us</h2>
      <form onSubmit={handleSubmit} className="mt-4 bg-white p-6 rounded shadow max-w-2xl">
        <Input label="Name" id="name" value={form.name} onChange={e => setForm({ ...form, name: e.target.value })} />
        {errors.name && <div className="text-red-500 text-sm">{errors.name}</div>}
        <Input label="Email" id="email" value={form.email} onChange={e => setForm({ ...form, email: e.target.value })} />
        {errors.email && <div className="text-red-500 text-sm">{errors.email}</div>}
        <div className="mb-4">
          <label className="block text-sm font-medium mb-1">Message</label>
          <textarea value={form.message} onChange={e => setForm({ ...form, message: e.target.value })} className="w-full border rounded px-3 py-2 h-32" />
          {errors.message && <div className="text-red-500 text-sm">{errors.message}</div>}
        </div>

        <div className="flex items-center gap-3">
          <button type="submit" className="px-4 py-2 bg-indigo-600 text-white rounded">Send Message</button>
          {status && <span className="text-sm text-gray-600">{status}</span>}
        </div>
      </form>
    </section>
  )
}
