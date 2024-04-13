"use client"
import React, { useState } from 'react';

export default function MyFormPage() {
  // State variables to store form data
  const [firstName, setFirstName] = useState('');
  const [lastName, setLastName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  // Function to handle form submission
  const handleSubmit = (e: { preventDefault: () => void; }) => {
    e.preventDefault();
    // Perform form submission logic here
    console.log('Form submitted:', { firstName, lastName, email, password });
    // Optionally, you can clear the form fields after submission
    setFirstName('');
    setLastName('');
    setEmail('');
    setPassword('');
  };

  return (
    <div className="container mx-auto p-4">
      <h1 className="text-3xl font-bold mb-4">Match Results</h1>
      <form onSubmit={handleSubmit} className="max-w-md mx-auto">
        <div className="mb-4">
          <label htmlFor="firstName" className="block text-gray-700">First Name</label>
          <input type="text" id="firstName" value={firstName} onChange={(e) => setFirstName(e.target.value)} className="form-input mt-1 block w-full" />
        </div>
        <div className="mb-4">
          <label htmlFor="lastName" className="block text-gray-700">Last Name</label>
          <input type="text" id="lastName" value={lastName} onChange={(e) => setLastName(e.target.value)} className="form-input mt-1 block w-full" />
        </div>
        <div className="mb-4">
          <label htmlFor="email" className="block text-gray-700">Email</label>
          <input type="email" id="email" value={email} onChange={(e) => setEmail(e.target.value)} className="form-input mt-1 block w-full" />
        </div>
        <div className="mb-4">
          <label htmlFor="password" className="block text-gray-700">Password</label>
          <input type="password" id="password" value={password} onChange={(e) => setPassword(e.target.value)} className="form-input mt-1 block w-full" />
        </div>
        <button type="submit" className="bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600">Submit</button>
      </form>
    </div>
  );
}
