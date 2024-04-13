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
      <Menubar className="h-12">
        <Link href="/">
          <Avatar>
            <AvatarImage src="https://cdn.sportsforecaster.com/players/l.nba.com/60900/head/no-background/web" />
            <AvatarFallback>CN</AvatarFallback>
          </Avatar>
        </Link>
        <MenubarMenu>
          <MenubarTrigger>Teams</MenubarTrigger>
          <MenubarContent>
            <MenubarItem>Soccer</MenubarItem>
            <MenubarItem>Basketball</MenubarItem>
            <MenubarItem>Running</MenubarItem>
            <MenubarItem>Volleyball</MenubarItem>
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
            <MenubarItem>Region</MenubarItem>
            <MenubarItem>World</MenubarItem>
          </MenubarContent>
        </MenubarMenu>
      </Menubar>
    )
  }
  