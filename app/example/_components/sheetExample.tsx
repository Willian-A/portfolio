import {
  Compass,
  Disc3,
  Library,
  ListMusic,
  MicVocal,
  PanelLeftOpen,
  SquarePlay,
  User,
} from "lucide-react";

import {
  Button,
  Sheet,
  SheetContent,
  SheetTitle,
  SheetTrigger,
} from "@/components";

export const SheetExample = () => {
  return (
    <Sheet>
      <SheetTrigger>
        <span className="fixed z-10 text-sm flex justify-center items-center gap-2 -left-4 py-2 px-3 pl-8 top-3 rounded-xl bg-zinc-900/50 backdrop-blur-md text-zinc-300 transition-all hover:bg-zinc-900 hover:scale-105 hover:text-zinc-100 hover:-left-2">
          <span className="hidden md:block">Open your library</span>
          <PanelLeftOpen />
        </span>
      </SheetTrigger>
      <SheetContent side="left" className="flex flex-col gap-8">
        <SheetTitle>Music navbar</SheetTitle>
        <div className="flex flex-col">
          <h2 className="mb-2 px-4 text-lg font-semibold tracking-tight">
            Discover
          </h2>
          <Button className="justify-start" variant="ghost">
            <SquarePlay />
            Listen now
          </Button>
          <Button className="justify-start" variant="ghost">
            <Compass />
            Explore
          </Button>
          <Button className="justify-start" variant="ghost">
            <User /> Made for you
          </Button>
        </div>
        <div className="flex flex-col">
          <h2 className="mb-2 px-4 text-lg font-semibold tracking-tight">
            Your library
          </h2>
          <Button className="justify-start" variant="ghost">
            <ListMusic /> Playlists
          </Button>
          <Button className="justify-start" variant="ghost">
            <Library /> Albums
          </Button>
          <Button className="justify-start" variant="ghost">
            <MicVocal /> Artists
          </Button>
          <Button className="justify-start" variant="ghost">
            <Disc3 /> Songs
          </Button>
        </div>
        <div className="flex flex-col">
          <h2 className="mb-2 px-4 text-lg font-semibold tracking-tight">
            Your playlists
          </h2>
          <Button className="justify-start" variant="ghost">
            <ListMusic /> Workout
          </Button>
          <Button className="justify-start" variant="ghost">
            <ListMusic /> 2024 Recap
          </Button>
          <Button className="justify-start" variant="ghost">
            <ListMusic /> Best of Don L
          </Button>
          <Button className="justify-start" variant="ghost">
            <ListMusic /> Best of Brazilian Rap
          </Button>
          <Button className="justify-start" variant="ghost">
            <ListMusic /> Top Artists
          </Button>
          <Button className="justify-start" variant="ghost">
            <ListMusic /> Top Albums
          </Button>
          <Button className="justify-start" variant="ghost">
            <ListMusic /> Good old days
          </Button>
          <Button className="justify-start" variant="ghost">
            <ListMusic /> Love songs
          </Button>
        </div>
      </SheetContent>
    </Sheet>
  );
};
