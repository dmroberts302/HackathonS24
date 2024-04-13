
import {
  Menubar,
  MenubarCheckboxItem,
  MenubarContent,
  MenubarItem,
  MenubarMenu,
  MenubarRadioGroup,
  MenubarRadioItem,
  MenubarSeparator,
  MenubarShortcut,
  MenubarSub,
  MenubarSubContent,
  MenubarSubTrigger,
  MenubarTrigger,
} from "@/components/ui/menubar"
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"
import Link from "next/link"


export function Navbar() {
return (
  <Menubar className="h-18">
    <Link href="/">
      <Avatar className="w-20 h-18">
        <AvatarImage src="/Logo.jpg"  /> 
        <AvatarFallback>GD</AvatarFallback>
      </Avatar>
    </Link>
    <MenubarMenu>
      <MenubarTrigger>Teams</MenubarTrigger>
      <MenubarContent>
        <Link href="/teams">
          <MenubarItem>My Teams</MenubarItem>
        </Link>
      </MenubarContent>
    </MenubarMenu>
    <MenubarMenu>
      <MenubarTrigger>Championships</MenubarTrigger>
      <MenubarContent>
        <MenubarItem>Region</MenubarItem>
        <MenubarItem>World</MenubarItem>
      </MenubarContent>
    </MenubarMenu>
    <MenubarMenu>
      <MenubarTrigger>Leaderboard</MenubarTrigger>
      <MenubarContent>
        <Link href="/leaderboard">
          <MenubarItem>Region</MenubarItem>
        </Link>
      </MenubarContent>
    </MenubarMenu>
    <MenubarMenu>
    <MenubarTrigger>Matchmaking</MenubarTrigger>
    <MenubarContent>
        <Link href="/matchmaking">
          <MenubarItem>Find a Match</MenubarItem>
        </Link>
        <Link href="/enter-match">
        <MenubarItem>Enter Results</MenubarItem>
        </Link>
      </MenubarContent>
    </MenubarMenu>
  </Menubar>
);
}

