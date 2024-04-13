import { Navbar } from "@/components/complete/navbar";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card"
import { Button } from "@/components/ui/button";

export default function Dashboard() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-start p-3">
      {/* <Navbar /> */}
      <div className="max-w-2xl p-10 text-center items-start mt-3 mb-20">
        <h1 className="scroll-m-20 text-9xl font-extrabold tracking-tight">
          GameDay
        </h1>
        <p className="mt-3 text-3xl">
        Elevate your sports experience, compete casually and at a high level, and join your local community of athletes. Step up your game with GameDay!
        </p>
        <Button className="mt-5" size="lg">Get Started</Button>
      </div>
      <div className="flex justify-between space-x-4">
        <Card>
        <CardHeader>
          <CardTitle>30,000 Members</CardTitle>
          <CardDescription>Currently in 34 states</CardDescription>
        </CardHeader>
        </Card>
        <Card>
        <CardHeader>
          <CardTitle>7,456 Games This Week</CardTitle>
          <CardDescription>178,527 Total games</CardDescription>
        </CardHeader>
        </Card>
        <Card>
        <CardHeader>
          <CardTitle>1,500 Current Brackets</CardTitle>
          <CardDescription>21,973 Total brackets</CardDescription>
        </CardHeader>
        </Card>
      </div>
      <div className="flex flex-row justify-between space-x-8">
        <div className="flex-1">
          <h1 className="mt-12 scroll-m-20 border-b pb-2 text-5xl font-semibold tracking-tight transition-colors">Gear up</h1>
          <h2 className="mt-8 scroll-m-20 text-3xl font-semibold tracking-tight">Basic info</h2>
          <p className="leading-7 mt-3 max-w-md">First you'll need to create an account and give some generic info about you but most importantly your location!</p>
        </div>
        
        <div className="flex-1">
          <h1 className="mt-12 scroll-m-20 border-b pb-2 text-5xl font-semibold tracking-tight transition-colors">Find a Team</h1>
          <h2 className="mt-8 scroll-m-20 text-3xl font-semibold tracking-tight">Define your sport</h2>
          <p className="leading-7 mt-3 max-w-md">We'll automatically find open teams near you but you'll have to tell us what sport you plan on playing before we do that.</p>
        </div>
        
        <div className="flex-1 mb-20">
          <h1 className="mt-12 scroll-m-20 border-b pb-2 text-5xl font-semibold tracking-tight transition-colors">Compete</h1>
          <h2 className="mt-8 scroll-m-20 text-3xl font-semibold tracking-tight">Play hard</h2>
          <p className="leading-7 mt-3 max-w-md">Once you're in a team you'll be fed a schedule and placed against an opponent with similar skill level using our very own ELO system.</p>
        </div>
      </div>

    </main>
  );
}
