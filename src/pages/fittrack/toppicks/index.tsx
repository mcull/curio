import * as React from "react";

interface WorkoutCardProps {
  imageSrc: string;
  ratingIconSrc: string;
  rating: number;
  title: string;
  duration: string;
}

const WorkoutCard: React.FC<WorkoutCardProps> = ({
  imageSrc,
  ratingIconSrc,
  rating,
  title,
  duration,
}) => (
  <div className="flex overflow-hidden relative flex-col gap-5 items-start pt-5 pr-8 pb-20 pl-20 text-base text-white whitespace-nowrap aspect-[1.78]">
    <img src={imageSrc} alt={title} className="object-cover absolute inset-0 size-full" />
    <img src={ratingIconSrc} alt="Rating icon" className="shrink-0 w-3.5 aspect-square" />
    <div className="flex relative gap-2">
      <img src={ratingIconSrc} alt="Rating icon" className="shrink-0 w-3.5 aspect-square" />
      <div>{rating}</div>
    </div>
    <div className="flex gap-5 mt-5">
      <div className="flex-auto text-base">{title}</div>
      <div className="text-sm">{duration}</div>
    </div>
  </div>
);

interface SavedWorkoutProps {
  imageSrc: string;
  overlayImageSrc: string;
  title: string;
}

const SavedWorkout: React.FC<SavedWorkoutProps> = ({ imageSrc, overlayImageSrc, title }) => (
  <div className="flex overflow-hidden relative flex-col items-center px-2 pt-14 pb-2 w-32 aspect-[1.45]">
    <img src={imageSrc} alt={title} className="object-cover absolute inset-0 size-full" />
    <div className="overflow-hidden relative flex-col justify-center px-7 py-2 aspect-[4.67]">
      <img src={overlayImageSrc} alt="" className="object-cover absolute inset-0 size-full" />
      {title}
    </div>
  </div>
);

interface NavItemProps {
  iconSrc: string;
  label: string;
}

const NavItem: React.FC<NavItemProps> = ({ iconSrc, label }) => (
  <div className="flex flex-col flex-1">
    <img src={iconSrc} alt={label} className="self-center aspect-square w-[31px]" />
    <div>{label}</div>
  </div>
);

const workouts = [
  {
    imageSrc: "https://cdn.builder.io/api/v1/image/assets/TEMP/cae4473328e6ad3bd99fed0575ccf569241641e35ae2462d9513b977fc176dbc?apiKey=a342aafd07af4859aab3668db0c46a94&",
    ratingIconSrc: "https://cdn.builder.io/api/v1/image/assets/TEMP/bc27f6eb0d7cee16312aba300580d8e3438d0183eed370d8f63d120198aecf02?apiKey=a342aafd07af4859aab3668db0c46a94&",
    rating: 4.9,
    title: "Morning Routine",
    duration: "30 minutes",
  },
  {
    imageSrc: "https://cdn.builder.io/api/v1/image/assets/TEMP/afe9cf01e0a82dc6e21415b9cb2cf71d960d8cd1d86112449ea4d5f11195ff5c?apiKey=a342aafd07af4859aab3668db0c46a94&",
    ratingIconSrc: "https://cdn.builder.io/api/v1/image/assets/TEMP/1b8d18e8030f9c6dc68340fe0c5d18538a1f4032dd0c91b23cdc62124b18b630?apiKey=a342aafd07af4859aab3668db0c46a94&",
    rating: 4.9,
    title: "Positive Vibes Flow",
    duration: "25 minutes",
  },
  {
    imageSrc: "https://cdn.builder.io/api/v1/image/assets/TEMP/edea5ed36733ce940b86134a1e085f352d1c438be58adab5091b341734fb5ada?apiKey=a342aafd07af4859aab3668db0c46a94&",
    ratingIconSrc: "https://cdn.builder.io/api/v1/image/assets/TEMP/bc27f6eb0d7cee16312aba300580d8e3438d0183eed370d8f63d120198aecf02?apiKey=a342aafd07af4859aab3668db0c46a94&",
    rating: 4.9,
    title: "Boost Your Energy",
    duration: "Quick 20-min",
  },
];

const savedWorkouts = [
  {
    imageSrc: "https://cdn.builder.io/api/v1/image/assets/TEMP/ce072af75282ded70695fb90a0ed0d91b3c13f13cd52244adb1f48507c2a3f20?apiKey=a342aafd07af4859aab3668db0c46a94&",
    overlayImageSrc: "https://cdn.builder.io/api/v1/image/assets/TEMP/820fe08a2b6c3dcaa2b667f73b70691899eddf64b9b16f64a94818aa194a2f2c?apiKey=a342aafd07af4859aab3668db0c46a94&",
    title: "Runners'",
  },
  {
    imageSrc: "https://cdn.builder.io/api/v1/image/assets/TEMP/d743992ad14b9b62560dc2cbc0b7208b0cc72afc4af1bb01a1524b1555dbba53?apiKey=a342aafd07af4859aab3668db0c46a94&",
    overlayImageSrc: "https://cdn.builder.io/api/v1/image/assets/TEMP/88b42b288a5df1b0cf2a597e2bc4f404950b066b791a6c96d3e5d0b0f804d12f?apiKey=a342aafd07af4859aab3668db0c46a94&",
    title: "Easy",
  },
];

const navItems = [
  { iconSrc: "https://cdn.builder.io/api/v1/image/assets/TEMP/07c9e7cd11f1957211e44c9e519413fbd985e7b2c0b9e9b11febf9a1d3bbf56c?apiKey=a342aafd07af4859aab3668db0c46a94&", label: "Home" },
  { iconSrc: "https://cdn.builder.io/api/v1/image/assets/TEMP/a9524e9024da4b71ee8094aaaa56a1ed343a39c2df98d8578fc4a89333310ef2?apiKey=a342aafd07af4859aab3668db0c46a94&", label: "Library" },
  { iconSrc: "https://cdn.builder.io/api/v1/image/assets/TEMP/a0dcd516740847ffcfad5ccbb99f6f4d3525ae472dcf2bc8726eb98e4e4ebe7c?apiKey=a342aafd07af4859aab3668db0c46a94&", label: "Progress" },
  { iconSrc: "https://cdn.builder.io/api/v1/image/assets/TEMP/31b731d29725a54314ade9eb5bba0b50ae06e13aeb8b6fc61eac05a7e4d5fc51?apiKey=a342aafd07af4859aab3668db0c46a94&", label: "Profile" },
];

export default function TopPicks() {
  return (
    <div className="flex flex-col mx-auto w-full bg-zinc-950 max-w-[480px] text-white text-opacity-80">
      <header className="justify-center items-center px-16 py-6 w-full text-lg font-bold bg-zinc-800 shadow-[0px_0px_0px_rgba(0,0,0,0.08)]">
        Today's Top Picks
      </header>
      <main className="flex flex-col px-6 mt-8 w-full">
        {workouts.map((workout, index) => (
          <React.Fragment key={index}>
            <WorkoutCard {...workout} />
          </React.Fragment>
        ))}
        <h2 className="mt-7 text-lg font-bold">Your Saved Workouts</h2>
        <div className="flex gap-4 px-0.5 mt-5 text-sm whitespace-nowrap">
          {savedWorkouts.map((workout, index) => (
            <SavedWorkout key={index} {...workout} />
          ))}
          <img src="https://cdn.builder.io/api/v1/image/assets/TEMP/8eba9c0e304f7caf6bd332be5c3db51f80286ff3d897969c41970a0bbb49e0ef?apiKey=a342aafd07af4859aab3668db0c46a94&" alt="Arrow icon" className="shrink-0 my-auto w-9 aspect-square" />
        </div>
      </main>
      <nav className="flex gap-5 items-start px-12 py-3 mt-6 w-full text-xs whitespace-nowrap bg-zinc-800 shadow-[0px_0px_0px_rgba(0,0,0,0.08)]">
        {navItems.map((item, index) => (
          <NavItem key={index} {...item} />
        ))}
      </nav>
    </div>
  );
}
