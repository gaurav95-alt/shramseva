import React from 'react'

export default function Input({ label, id, type = 'text', value, onChange, placeholder }) {
  return (
    <div className="mb-4">
      {label && <label htmlFor={id} className="block text-sm font-medium mb-1">{label}</label>}
      <input
        id={id}
        type={type}
        value={value}
        onChange={onChange}
        placeholder={placeholder}
        className="w-full border rounded px-3 py-2 focus:outline-none focus:ring-2 focus:ring-indigo-500"
      />
    </div>
  )
}
