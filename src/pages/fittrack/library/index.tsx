import * as React from "react";

interface WorkoutCardProps {
  image: string;
  title: string;
  description: string;
}

const WorkoutCard: React.FC<WorkoutCardProps> = ({ image, title, description }) => {
    const className = "flex overflow-hidden relative flex-col pt-3 mt-6 w-full aspect-[1.68] fill-[url(" + image + ")_lightgray_0px_-11.667px_/_100%_111.667%_no-repeat]";
    return (
    <div className={className}>
        <img src={image} alt="" className="object-cover absolute inset-0 size-full" />
        <div className="flex relative flex-col items-start py-5 pr-20 pl-3 mt-20 bg-zinc-800 shadow-[0px_0px_0px_rgba(0,0,0,0.08)] text-white text-opacity-80">
        <h3 className="text-xl">{title}</h3>
        <p className="mt-3.5 text-sm">{description}</p>
        </div>
    </div>
    )
};

interface NavItemProps {
  icon: string;
  label: string;
  isActive?: boolean;
}

const NavItem: React.FC<NavItemProps> = ({ icon, label, isActive = false }) => (
  <div className={`flex flex-col flex-1 ${isActive ? "text-white" : "text-white text-opacity-80"}`}>
    <img src={icon} alt="" className="self-center aspect-square w-[31px]" />
    <div className={isActive ? "mt-2" : ""}>{label}</div>
  </div>
);

function MyComponent() {
  const workoutCards = [
    {
      image: "https://cdn.builder.io/api/v1/image/assets/TEMP/8367d865e7fe3bb28259e55e07cbf4ab35b12bd5a87bd32c9d8e02b659db1494?apiKey=a342aafd07af4859aab3668db0c46a94&",
      title: "Morning Stretch Routine",
      description: "Sun Salutation",
    },
    {
      image: "https://cdn.builder.io/api/v1/image/assets/TEMP/e361725df4a43032538ba926242d555440c22968082972738460160f72ba0e47?apiKey=a342aafd07af4859aab3668db0c46a94&",
      title: "Dance Fitness Class",
      description: "Ballet Moves",
    },
  ];

  return (
    <div className="flex flex-col pt-5 bg-zinc-950 max-w-[375px]">
      <header className="flex gap-5 justify-between items-start self-end mr-6 max-w-full text-2xl font-bold whitespace-nowrap text-white text-opacity-80 w-[205px]">
        <h1 className="mt-5">Library</h1>
        <img src="https://cdn.builder.io/api/v1/image/assets/TEMP/346019016f249adc13fa7f68d42ec846c055fd34ccb7f5f85f83b9a1fe48906e?apiKey=a342aafd07af4859aab3668db0c46a94&" alt="" className="shrink-0 w-6 aspect-square" />
      </header>
      <main className="flex flex-col pl-5 mt-10 w-full">
        <nav>
          <ul className="flex gap-5 text-lg whitespace-nowrap text-white text-opacity-80">
            <li className="font-bold">All</li>
            <li>Leg</li>
            <li>Arm</li>
            <li className="flex-auto">Core</li>
          </ul>
        </nav>
        <section className="flex overflow-hidden relative flex-col justify-center items-start mt-1.5 aspect-[355] fill-zinc-800">
          <img src="https://cdn.builder.io/api/v1/image/assets/TEMP/335a851c7a6a588f3e899962a616348c5eb198885b20b71d795fa3e2769a0611?apiKey=a342aafd07af4859aab3668db0c46a94&" alt="" className="object-cover absolute inset-0 size-full" />
          <img src="https://cdn.builder.io/api/v1/image/assets/TEMP/ca9262ce98d62427c9f4d8f85fd6e35066baf2228dd6ce5d4092de08c86773fd?apiKey=a342aafd07af4859aab3668db0c46a94&" alt="" className="aspect-[33.33] w-[30px]" />
        </section>
        {workoutCards.map((card, index) => (
          <WorkoutCard key={index} {...card} />
        ))}
      </main>
      <footer className="flex gap-5 items-start px-12 py-3 mt-6 w-full text-xs whitespace-nowrap bg-zinc-800 shadow-[0px_0px_0px_rgba(0,0,0,0.08)] text-white text-opacity-80">
        <NavItem icon="https://cdn.builder.io/api/v1/image/assets/TEMP/5c8a0ad01b6a77f0c4a0cc46cf243820fcba84f550a9267a4b9087c9c17e1141?apiKey=a342aafd07af4859aab3668db0c46a94&" label="Home" />
        <NavItem icon="https://cdn.builder.io/api/v1/image/assets/TEMP/2d082004f819d12d8ce85d4c6f7d800d20f1257b56093f0580f96581c992e709?apiKey=a342aafd07af4859aab3668db0c46a94&" label="Library" isActive />
        <NavItem icon="https://cdn.builder.io/api/v1/image/assets/TEMP/a0dcd516740847ffcfad5ccbb99f6f4d3525ae472dcf2bc8726eb98e4e4ebe7c?apiKey=a342aafd07af4859aab3668db0c46a94&" label="Progress" />
        <NavItem icon="https://cdn.builder.io/api/v1/image/assets/TEMP/bc8a7720befc3a8705fcf7928e888bd154526c3b78bddd602e940993e263341d?apiKey=a342aafd07af4859aab3668db0c46a94&" label="Profile" />
      </footer>
    </div>
  );
}

export default MyComponent;