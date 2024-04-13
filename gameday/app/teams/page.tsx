"use client"
import React, { useState } from 'react';
import {
  AlertDialog,
  AlertDialogAction,
  AlertDialogCancel,
  AlertDialogContent,
  AlertDialogDescription,
  AlertDialogFooter,
  AlertDialogHeader,
  AlertDialogTitle,
  AlertDialogTrigger,
} from "@/components/ui/alert-dialog";
import { Table, TableBody, TableHead, TableHeader, TableRow, TableCell } from "@/components/ui/table";
import { Button } from "@/components/ui/button";
import { PersonIcon } from "@radix-ui/react-icons";

interface Player {
  Sport: string;
  Team: string;
  Badge: string;
}

const players = [
  {
    Sport: "Soccer",
    Team: "Hawgs",
    Badge: "PICTURE",
  },
  {
    Team: "Patriots",
    Sport: "Basketball",
    Badge: "PICTURE",
  },
  {
    Team: "Chargers",
    Sport: "Baseball",
    Badge: "PICTURE",
  },
  {
    Team: "Lakers",
    Sport: "Tennis",
    Badge: "PICTURE",
  },
  {
    Team: "Redhawks",
    Sport: "Golf",
    Badge: "PICTURE",
  },
  {
    Team: "Titans",
    Sport: "Swimming",
    Badge: "PICTURE",
  },
  {
    Team: "Dragons",
    Sport: "Hockey",
    Badge: "PICTURE",
  },
  {
    Team: "Cougars",
    Sport: "Track and Field",
    Badge: "PICTURE",
  },
  {
    Team: "Thunder",
    Sport: "Volleyball",
    Badge: "PICTURE",
  },
  {
    Team: "Bulldogs",
    Sport: "Rugby",
    Badge: "PICTURE",
  },
];

const Teams: React.FC = () => {
  const [selectedPlayer, setSelectedPlayer] = useState<Player | null>(null);

  const handlePlayerClick = (player: Player) => {
    setSelectedPlayer(player);
  };

  const handleCloseModal = () => {
    setSelectedPlayer(null);
    // need to add an action that removes the team from the database
  };

  return (
    <div style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', height: '100vh', padding: '10vh'}}>
      <div style={{ width: '80%', maxWidth: '1000px', textAlign: 'center', fontSize: '50px' }}>
        <h1 className="scroll-m-20 text-6xl font-extrabold tracking-tight">My Teams</h1>
        <div style={{ maxHeight: '400px', overflowY: 'auto', padding: '10px'}}>
          <Table>
            <TableHeader>
              <TableRow>
                <TableHead className="text-left">Sport</TableHead>
                <TableHead className="text-center">Team</TableHead>
                <TableHead className="text-right">Badge</TableHead>
              </TableRow>
            </TableHeader>
            <TableBody>
              {players.map((player, index) => (
                <AlertDialog key={index}>
                  <AlertDialogTrigger asChild>
                    <TableRow key={index} style={{ height: '60px' }} onClick={() => handlePlayerClick(player)}>
                      <TableCell className="text-left" style={{ fontSize: '20px' }}>{player.Sport}</TableCell>
                      <TableCell className="text-center" style={{ fontSize: '20px' }}>{player.Team}</TableCell>
                      <TableCell className="text-right" style={{ fontSize: '20px' }}>{player.Badge}</TableCell>
                    </TableRow>
                  </AlertDialogTrigger>
                  {selectedPlayer === player && (
                    <AlertDialogContent>
                      <AlertDialogHeader>
                        <AlertDialogTitle>{player.Team}</AlertDialogTitle>
                      </AlertDialogHeader>
                      <AlertDialogDescription>
                        You're currently a member of the {player.Team} which plays {player.Sport}.
                      </AlertDialogDescription>
                      <AlertDialogDescription>
                        Would you like to leave the team?
                      </AlertDialogDescription>
                      <AlertDialogFooter>
                        <AlertDialogCancel onClick={handleCloseModal}>Leave Team</AlertDialogCancel>
                        <AlertDialogAction>Do Nothing</AlertDialogAction>
                      </AlertDialogFooter>
                    </AlertDialogContent>
                  )}
                </AlertDialog>
              ))}
            </TableBody>
          </Table>
        </div>
        <Button><PersonIcon className="mr-2 h-6 w-6"/>Join a Team!</Button>
      </div>
    </div>
  );
};

export default Teams;
