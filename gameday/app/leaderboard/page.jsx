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

const players = [
  {
    Username: "dmr019",
    Sport: "Soccer",
    Team: "Onside",
    Badge: "PICTURE",
  },
  {
    Username: "Kaizens",
    Sport: "Football",
    Team: "Razorbacks",
    Badge: "PICTURE",
  },
  {
    Username: "Kaizens",
    Sport: "Football",
    Team: "Razorbacks",
    Badge: "PICTURE",
  },
  {
    Username: "Kaizens",
    Sport: "Football",
    Team: "Razorbacks",
    Badge: "PICTURE",
  },
  {
    Username: "Kaizens",
    Sport: "Football",
    Team: "Razorbacks",
    Badge: "PICTURE",
  },
  {
    Username: "Kaizens",
    Sport: "Football",
    Team: "Razorbacks",
    Badge: "PICTURE",
  },
  {
    Username: "Kaizens",
    Sport: "Football",
    Team: "Razorbacks",
    Badge: "PICTURE",
  },
]



export default async function Leaderboard () {
  const {data: teams} = await supabase.from('team').select('*')

    return (
      <Table>
        <TableCaption>LEADERBOARD</TableCaption>
        <TableHeader>
          <TableRow>
            <TableHead className="w-[100px]">Username</TableHead>
            <TableHead>Sport</TableHead>
            <TableHead>Team</TableHead>
            <TableHead className="text-right">Badge</TableHead>
          </TableRow>
        </TableHeader>
        <TableBody>
          {teams.map((team) => (
            <TableRow key={team.name}>
              <TableCell className="font-medium">{team.name}</TableCell>
              <TableCell>{team.sport}</TableCell>
              <TableCell>{team.wins}</TableCell>
              <TableCell className="text-right">{team.city}</TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    )
  }
  