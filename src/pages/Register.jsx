import React from 'react'
import Input from '../components/Input'
import { Link } from 'react-router-dom'

export default function Register() {
  const [form, setForm] = React.useState({ name: '', email: '', password: '', role: 'worker' })
  const [error, setError] = React.useState(null)

  function handleSubmit(e) {
    e.preventDefault()
    if (!form.name || !form.email || !form.password) {
      setError('Please fill required fields')
      return
    }
    // TODO: call backend register endpoint
    setError(null)
    alert('Registered (demo). Connect to backend to persist user.')
  }

  return (
    <section className="container mx-auto px-4 py-12 max-w-md">
      <h2 className="text-2xl font-bold">Register</h2>
      <form onSubmit={handleSubmit} className="mt-4 bg-white p-6 rounded shadow">
        <Input label="Full Name" id="name" value={form.name} onChange={e => setForm({ ...form, name: e.target.value })} />
        <Input label="Email" id="email" value={form.email} onChange={e => setForm({ ...form, email: e.target.value })} />
        <Input label="Password" id="password" type="password" value={form.password} onChange={e => setForm({ ...form, password: e.target.value })} />
        <div className="mb-4">
          <label className="block text-sm font-medium mb-1">I am a</label>
          <select value={form.role} onChange={e => setForm({ ...form, role: e.target.value })} className="w-full border rounded px-3 py-2">
            <option value="worker">Worker</option>
            <option value="employer">Employer</option>
          </select>
        </div>

        {error && <div className="text-red-500 text-sm mb-2">{error}</div>}
        <button type="submit" className="px-4 py-2 bg-indigo-600 text-white rounded">Register</button>
        <p className="mt-4 text-sm">Already have an account? <Link to="/login" className="text-indigo-600">Login</Link></p>
      </form>
    </section>
  )
}
