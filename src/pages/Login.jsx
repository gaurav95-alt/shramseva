import React from 'react'
import Input from '../components/Input'
import { Link } from 'react-router-dom'

export default function Login() {
  const [form, setForm] = React.useState({ email: '', password: '' })
  const [error, setError] = React.useState(null)

  function handleSubmit(e) {
    e.preventDefault()
    if (!form.email || !form.password) {
      setError('Email and password required')
      return
    }
    // TODO: call backend auth and store JWT
    setError(null)
    alert('Logged in (demo). Connect to backend to authenticate.')
  }

  return (
    <section className="container mx-auto px-4 py-12 max-w-md">
      <h2 className="text-2xl font-bold">Login</h2>
      <form onSubmit={handleSubmit} className="mt-4 bg-white p-6 rounded shadow">
        <Input label="Email" id="email" value={form.email} onChange={e => setForm({ ...form, email: e.target.value })} />
        <Input label="Password" id="password" type="password" value={form.password} onChange={e => setForm({ ...form, password: e.target.value })} />
        {error && <div className="text-red-500 text-sm mb-2">{error}</div>}
        <button type="submit" className="px-4 py-2 bg-indigo-600 text-white rounded">Login</button>
        <p className="mt-4 text-sm">Don't have an account? <Link to="/register" className="text-indigo-600">Register</Link></p>
      </form>
    </section>
  )
}
