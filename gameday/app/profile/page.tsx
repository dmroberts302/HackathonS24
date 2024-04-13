"use client";

import React, { useState, useEffect } from 'react';
import styles from './page.module.css';

interface UserProfile {
  username: string;
  email: string;
  bio: string;
  location: string;
}

const EditProfilePage: React.FC = () => {
  const [profile, setProfile] = useState<UserProfile>(() => {
    const savedProfile = localStorage.getItem('profile');
    return savedProfile
      ? JSON.parse(savedProfile)
      : {
          username: 'JohnDoe',
          email: 'john@example.com',
          bio: 'This is my bio',
          location: 'New York',
        };
  });

  useEffect(() => {
    localStorage.setItem('profile', JSON.stringify(profile));
  }, [profile]);

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    const { name, value } = e.target;
    setProfile((prevProfile) => ({
      ...prevProfile,
      [name]: value,
    }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Handle submission, e.g., send data to backend
    console.log('Profile updated:', profile);
  };

  return (
    <main className="flex min-h-screen flex-col items-center justify-start p-3">
      <h1 className="text-6xl font-extrabold tracking-tight">
        Edit Profile
      </h1>
      <div className="max-w-2xl p-10 text-center items-start mt-3 mb-20">
        <form onSubmit={handleSubmit} className="space-y-6">
          <div>
            <label className="text-3xl font-semibold tracking-tight text-center mb-8">Username</label>
            <input
              type="text"
              name="username"
              value={profile.username}
              onChange={handleChange}
              className="w-full mt-1 p-2 border-2 rounded-lg"
            />
          </div>
          <div>
            <label className="text-3xl font-semibold">Email</label>
            <input
              type="email"
              name="email"
              value={profile.email}
              onChange={handleChange}
              className="w-full mt-1 p-2 border-2 rounded-lg"
            />
          </div>
          <div>
            <label className="text-3xl font-semibold">Location</label>
            <input
              type="text"
              name="location"
              value={profile.location}
              onChange={handleChange}
              className="w-full mt-1 p-2 border-2 rounded-lg"
            />
          </div>
          <div>
            <label className="text-3xl font-semibold">Bio</label>
            <textarea
              name="bio"
              value={profile.bio}
              onChange={handleChange}
              className="w-full mt-1 p-2 border-2 rounded-lg"
            />
          </div>
          <button
            type="submit"
            className="py-3 px-6 bg-blue-500 text-white font-semibold rounded-lg hover:bg-blue-600 transition duration-300"
          >
            Save Changes
          </button>
        </form>
      </div>
    </main>
  );
};

export default EditProfilePage;