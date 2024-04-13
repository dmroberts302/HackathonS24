import Image from "next/image";
import dynamic from 'next/dynamic'; // Import dynamic from Next.js
import React from 'react';
import Link from 'next/link'; // Import Link from Next.js

const ProfilePage = dynamic(() => import('./profile/page').catch(error => {
  console.error('Error loading ProfilePage:', error);
  return () => <div>Error loading ProfilePage. Please try again later.</div>;
}), { ssr: false });

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-24">
      <h1>Welcome to GameDay!</h1>
      <p>Explore our features:</p>
      <nav className="mt-8">
        <ul className="flex space-x-4">
          <li>
          <Link href="/profile" passHref>
            Profile
          </Link>
          </li>
        </ul>
      </nav>
      <ProfilePage />
    </main>
  );
}