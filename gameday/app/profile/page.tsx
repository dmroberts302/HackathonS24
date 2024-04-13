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
    return savedProfile ? JSON.parse(savedProfile) : {
      username: 'JohnDoe',
      email: 'john@example.com',
      bio: 'This is my bio',
      location: 'New York',
    };
  });

  useEffect(() => {
    localStorage.setItem('profile', JSON.stringify(profile));
  }, [profile]);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setProfile(prevProfile => ({
      ...prevProfile,
      [name]: value
    }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Handle submission, e.g., send data to backend
    console.log('Profile updated:', profile);
  };

  return (
    <div>
      <h2>Edit Profile</h2>
      <form onSubmit={handleSubmit}>
        <div>
          <label>Username:</label>
          <input
            type="text"
            name="username"
            value={profile.username}
            onChange={handleChange}
          />
        </div>
        <div>
          <label>Email:</label>
          <input
            type="email"
            name="email"
            value={profile.email}
            onChange={handleChange}
          />
        </div>
        <div>
          <label>Location:</label>
          <input
            type="text"
            name="location"
            value={profile.location}
            onChange={handleChange}
          />
        </div>
        <div className={styles.bioContainer}>
          <label>Bio:</label>
          <textarea
            name="bio"
            value={profile.bio}
            onChange={handleChange}
            className={styles.bioTextarea}
          />
        </div>
        <button type="submit">Save Changes</button>
      </form>
    </div>
  );
};

export default EditProfilePage;