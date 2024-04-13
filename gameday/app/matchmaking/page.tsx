"use client"
import React, { useState } from 'react';
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import {
  Drawer,
  DrawerClose,
  DrawerContent,
  DrawerDescription,
  DrawerFooter,
  DrawerHeader,
  DrawerTitle,
  DrawerTrigger,
} from "@/components/ui/drawer"
import {TeamPicker} from "@/components/complete/teampicker"

interface Opponent {
  name: string;
  elo: number;
  location: string;
  time: string;
}


import { useUser } from "@clerk/nextjs";
import { useEffect } from 'react';
import { supabase } from '../../utils/supabase'

export default function Matchmaking() {
  const [selectedCardIndex, setSelectedCardIndex] = useState<number | null>(null);
  const [data, setPlayerData] = useState<any>();
  const [team, setTeamData] = useState<any>();
  const [firstName, setfirstName] = useState<any>();
  const [lastName, setlastName] = useState<any>();
  const { user } = useUser()

  useEffect(() => {
    setfirstName('Joe')
    setlastName('Bergin')
  }, [])
  
  

  useEffect(() => {
    const x = async () => {
      setPlayerData(await supabase.from('player').select('*'));
    }
    x();
    
  
  }, [])

  useEffect(() => {
    const x = async () => {
      setTeamData(await supabase.from('team').select('*'));
    }
    x();
    
  
  }, [])
  
  const opponents: Opponent[] = [
    { name: 'Steel Titans', elo: 450, location: 'Dallas', time: '7pm' },
    { name: 'Cosmic Chargers', elo: 480, location: 'Houston', time: '8pm' },
    { name: 'Mystic Mirage', elo: 420, location: 'Austin', time: '6pm' },
    { name: 'Shadow Strikers', elo: 410, location: 'San Antonio', time: '7:30pm' },
    { name: 'Phoenix Phantoms', elo: 470, location: 'Fort Worth', time: '6:30pm' },
    { name: 'Celestial Sentinels', elo: 440, location: 'El Paso', time: '8:30pm' },
    { name: 'Thunder Guardians', elo: 460, location: 'Plano', time: '7pm' },
    // Add more creatively named teams as needed
  ];
  

  const handleCardClick = (index: number) => {
    setSelectedCardIndex(index === selectedCardIndex ? null : index);
  };

  return (
    <main className="flex flex-col items-center justify-start p-3 min-h-screen bg-gray-100">
      <div className="max-w-2xl p-10 text-center items-start mt-3 mb-20">
        <h1 className="text-6xl font-extrabold tracking-tight">
          Matchmaking
        </h1>
        <div>
        <Drawer>
    <DrawerTrigger>
        <p className="mt-3 text-2xl text-gray-800">
            Using our <span className='underline'>ELO system</span> we'll find teams in the same location and set a date and time
        </p>
    </DrawerTrigger>
    <DrawerContent style={{ height: '500px' }}>
        <DrawerHeader>
            <DrawerTitle style={{ textAlign: 'center' }}>Ranks</DrawerTitle>
        </DrawerHeader>
        <DrawerDescription style={{ marginTop: '20px', display: 'flex', flexWrap: 'wrap', justifyContent: 'center' }}>
            <div style={{ textAlign: 'center', margin: '10px' }}>
                <img src="/Rank1.JPG" alt="Image 1" style={{ width: '500px', height: 'auto' }} />
                <p>Rookie: 0 - 300 ELO</p>
            </div>
            <div style={{ textAlign: 'center', margin: '10px' }}>
                <img src="/Rank2.JPG" alt="Image 2" style={{ width: '500px', height: 'auto' }} />
                <p>Semi-Pro: 301 - 600 ELO</p>
            </div>
            <div style={{ textAlign: 'center', margin: '10px' }}>
                <img src="/Rank3.JPG" alt="Image 3" style={{ width: '500px', height: 'auto' }} />
                <p>Professional: 601 - 900 ELO</p>
            </div>
            <div style={{ textAlign: 'center', margin: '10px' }}>
                <img src="/Rank4.JPG" alt="Image 4" style={{ width: '500px', height: 'auto' }} />
                <p>Elite: 901 - 1100 ELO</p>
            </div>
            <div style={{ textAlign: 'center', margin: '10px' }}>
                <img src="/Rank5.JPG" alt="Image 5" style={{ width: '500px', height: 'auto' }} />
                <p>Legend: 1101 + ELO</p>
            </div>
        </DrawerDescription>
        <DrawerFooter>
            <DrawerClose />
        </DrawerFooter>
    </DrawerContent>
</Drawer>

      </div>
      </div>
      <div className="w-full max-w-6xl mx-auto">
        <h2 className="text-3xl font-bold tracking-tight text-center mb-8">Your Stats NEED TO CHANGE TO PICKING YOUR TEAM THEN SHOW STATS</h2>
        
        <div className='mb-7'>
        <Card>
          <CardHeader>
            <CardTitle>Teamname</CardTitle>
            <CardDescription>YOURTEAMNAME</CardDescription>
            <CardTitle>Region</CardTitle>
            <CardDescription>YOURREGION</CardDescription>
            <CardTitle>ELO</CardTitle>
            <CardDescription>YOURELO</CardDescription>
            <CardTitle>Sport</CardTitle>
            <CardDescription>YOURSPORT</CardDescription>
          </CardHeader>
        </Card>
        </div>
        <h2 className="text-3xl font-bold tracking-tight text-center mb-8">Matches</h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
          {/* Render cards for each opponent */}
          {opponents.map((opponent: Opponent, index: number) => (
            <Card
              key={index}
              className={`bg-white rounded-lg shadow-md cursor-pointer transition-opacity duration-300 ${
                index === selectedCardIndex ? 'opacity-50' : ''
              }`}
              onClick={() => handleCardClick(index)}
            >
              <CardHeader>
                <CardTitle className="text-lg font-semibold">{opponent.name}</CardTitle>
                <CardDescription className="text-sm">ELO: {opponent.elo}</CardDescription>
              </CardHeader>
              <CardContent>
                <p className="text-gray-700">{opponent.location}</p>
              </CardContent>
              <CardFooter>
                <p className="text-gray-600">{opponent.time}</p>
              </CardFooter>
            </Card>
          ))}
        </div>
        
      </div>
    </main>
  );
}