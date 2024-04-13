import {
  Table,
  TableBody,
  TableCaption,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table"
 
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

export default function Leaderboard () {
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
          {players.map((invoice) => (
            <TableRow key={invoice.Username}>
              <TableCell className="font-medium">{invoice.Username}</TableCell>
              <TableCell>{invoice.Sport}</TableCell>
              <TableCell>{invoice.Team}</TableCell>
              <TableCell className="text-right">{invoice.Badge}</TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    )
  }
  