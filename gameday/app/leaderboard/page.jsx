import {
  Table,
  TableBody,
  TableCaption,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table"

import { supabase } from '../../utils/supabase'

export default async function Leaderboard () {
  const {data: teams} = await supabase.from('team').select()
  teams.sort((a, b) => b.elo - a.elo);
  console.log(teams)
    return (
      <div style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', height: '50vh', padding: '10vh'}}>
      <div style={{ width: '80%', maxWidth: '1000px', textAlign: 'center', fontSize: '50px' }}>
        <h1 className="scroll-m-20 text-6xl font-extrabold tracking-tight">Leaderboard</h1>
        <div style={{ maxHeight: '400px', overflowY: 'auto', padding: '10px'}}></div>
      <Table>
        <TableHeader>
          <TableRow>
            <TableHead className="text-left">Rank</TableHead>
            <TableHead className="text-center">Team</TableHead>
            <TableHead className="text-center">Sport</TableHead>
            <TableHead className="text-center">Wins</TableHead>
            <TableHead className="text-center">Losses</TableHead>
            <TableHead className="text-center">ELO</TableHead>
            <TableHead className="text-right">Location</TableHead>
          </TableRow>
        </TableHeader>
        <TableBody>
          {teams.map((team, index) => (
            <TableRow key={team.name}>
              <TableCell className="text-left">{index + 1}</TableCell>
              <TableCell className="font-medium text-center">{team.name}</TableCell>
              <TableCell>{team.sport}</TableCell>
              <TableCell>{team.wins}</TableCell>
              <TableCell>{team.losses}</TableCell>
              <TableCell>{team.elo}</TableCell>
              <TableCell className="text-right">{team.city}</TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
      </div>
      </div>
    )
  }
  