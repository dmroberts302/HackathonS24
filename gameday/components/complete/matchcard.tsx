import * as React from "react"

import { Card, CardContent,
    CardDescription,
    CardFooter,
    CardHeader,
    CardTitle }
from "@/components/ui/card"

export function Matchcard() {
  return (
    <Card>
    <CardHeader>
        <CardTitle>Opponent Name</CardTitle>
        <CardDescription>ELO: 450</CardDescription>
    </CardHeader>
    <CardContent>
        <p>Dallas</p>
    </CardContent>
    <CardFooter>
        <p>7pm</p>
    </CardFooter>
    </Card>
  )
}
