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

import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from "@/components/ui/popover"
import { Button } from '@/components/ui/button';

interface Opponent {
  name: string;
  elo: number;
  location: string;
  time: string;
}

import { useUser } from "@clerk/nextjs";
import { useEffect } from 'react';
import { supabase } from '../../utils/supabase'
import Link from 'next/link';

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
  
  const [selectedOpponent, setSelectedOpponent] = useState<Opponent | null>(null);
  const [upcomingMatches, setUpcomingMatches] = useState<Opponent[]>([]);
  const [elo, setElo] = useState<number>(1569);

  const opponents: Opponent[] = [
    { name: 'Steel Titans', elo: 450, location: 'UREC', time: '7:00pm' },
    { name: 'Cosmic Chargers', elo: 480, location: 'Wilson Park', time: '8:00pm' },
    { name: 'Mystic Mirage', elo: 420, location: 'Green Field', time: '6:00pm' },
    { name: 'Shadow Strikers', elo: 410, location: 'Wilson Park', time: '7:30pm' },
    { name: 'Phoenix Phantoms', elo: 470, location: 'Fayetteville', time: '6:30pm' },
    { name: 'Celestial Sentinels', elo: 440, location: 'Green Field', time: '8:30pm' },
    { name: 'Thunder Guardians', elo: 460, location: 'UREC', time: '7:00pm' },
    // Add more creatively named teams as needed
  ];


  const handleCardClick = (index: number) => {
    setSelectedCardIndex(index === selectedCardIndex ? null : index);
    setSelectedOpponent(opponents[index]); // Set the selected opponent
  };

  const handleChallengeClick = () => {
    if (selectedOpponent) {
      setUpcomingMatches([...upcomingMatches, selectedOpponent]);
      setSelectedCardIndex(null); // Reset selected card index
      setSelectedOpponent(null); // Reset selected opponent
    }
  };

  const handleOutcomeWinClick = () => {
    if (selectedOpponent) {
      setElo(elo + 20);
      // Filter out the selected opponent from upcomingMatches
      const updatedMatches = upcomingMatches.filter((match) => match !== selectedOpponent);
      setUpcomingMatches(updatedMatches);
      setSelectedCardIndex(null); // Reset selected card index
      setSelectedOpponent(null); // Reset selected opponent
    }
  };

  const handleOutcomeLoseClick = () => {
    if (selectedOpponent) {
      setElo(elo - 20);
      // Filter out the selected opponent from upcomingMatches
      const updatedMatches = upcomingMatches.filter((match) => match !== selectedOpponent);
      setUpcomingMatches(updatedMatches);
      setSelectedCardIndex(null); // Reset selected card index
      setSelectedOpponent(null); // Reset selected opponent
    }
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
      <Card className='mb-10'>
        <CardHeader className='flex flex-col'>
          <div className="flex justify-evenly">
            <div className="flex flex-col items-center">
              <CardTitle>Team Name</CardTitle>
              <CardDescription>Razorbacks</CardDescription>
            </div>
            <div className="flex flex-col items-center">
              <CardTitle>Sport</CardTitle>
              <CardDescription>Basketball</CardDescription>
            </div>
            <div className="flex flex-col items-center">
              <CardTitle>Location</CardTitle>
              <CardDescription>Fayetteville</CardDescription>
            </div>
            <div className="flex flex-col items-center">
              <CardTitle>ELO</CardTitle>
              <CardDescription>{elo}</CardDescription>
            </div>
          </div>
        </CardHeader>
        <div className='flex justify-center mb-5'>
          <Button className='align-center'>Change Team</Button>
        </div>
      </Card>
        <h2 className="text-3xl font-bold tracking-tight text-center mb-8">Matches</h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
          {opponents.map((opponent: Opponent, index: number) => (
            <Popover key={index}>
              <PopoverTrigger>
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
                <p className="text-gray-600 text-center">{opponent.time}</p>
              </CardFooter>
            </Card>
              </PopoverTrigger>
              <PopoverContent>
                <h1>Challenge team?</h1>
                <div className='flex space-x-3'>
                  <Button variant={'outline'} onClick={() => setSelectedCardIndex(null)}>No</Button>
                  <Button onClick={handleChallengeClick}>Yes</Button>
                </div>
              </PopoverContent>
            </Popover>
          ))}
        </div>
      </div>
      {/* Render upcoming matches */}
      <div className="mt-8">
        <h2 className="text-3xl font-bold mb-4">Schedule:</h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
          {upcomingMatches.map((opponent: Opponent, index: number) => (
            <Popover key={index}>
              <PopoverTrigger>
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
                <p className="text-gray-600 text-center">{opponent.time}</p>
              </CardFooter>
            </Card>
              </PopoverTrigger>
              <PopoverContent>
                <h1>Did you Win or Lose?</h1>
                <div className='flex space-x-3'>
                  <Button variant={'outline'} onClick={handleOutcomeLoseClick}>Lose</Button>
                  <Button onClick={handleOutcomeWinClick}>Win</Button>
                </div>
              </PopoverContent>
            </Popover>
          ))}
        </div>
      </div>
    </main>
  );
}
