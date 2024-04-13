import {
    Table,
    TableBody,
    TableCaption,
    TableCell,
    TableHead,
    TableHeader,
    TableRow,
  } from "@/components/ui/table"
  import { Button } from "@/components/ui/button"
  import { PersonIcon } from "@radix-ui/react-icons"
  import React from 'react';
  const players = [
    {
      Sport: "Soccer",
      Team: "Onside",
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

console.log(players);


  export default function Teams() {
    return (
        <div style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', height: '100vh', padding: '10vh'}}>
          <div style={{ width: '80%', maxWidth: '1000px', textAlign: 'center', fontSize: '50px' }}>
            <h2 >My Teams</h2>
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
                    <TableRow key={index} style={{ height: '60px' }}>
                      <TableCell className="text-left" style={{ fontSize: '20px' }}>{player.Sport}</TableCell>
                      <TableCell className="text-center" style={{ fontSize: '20px' }}>{player.Team}</TableCell>
                      <TableCell className="text-right" style={{ fontSize: '20px' }}>{player.Badge}</TableCell>
                    </TableRow>
                  ))}
                </TableBody>
              </Table>
            </div>
            <Button ><PersonIcon className="mr-2 h-6 w-6"/>Join a Team!</Button>
          </div>
        </div>
      );
    }
  
  
  

