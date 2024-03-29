import * as React from "react";

interface BadgeProps {
  imageSrc: string;
  altText: string;
  title: string;
}

const Badge: React.FC<BadgeProps> = ({ imageSrc, altText, title }) => (
  <div className="flex flex-col">
    <img loading="lazy" src={imageSrc} alt={altText} className="ml-3 aspect-square w-[45px]" />
    <div className="mt-5 text-xs">{title}</div>
  </div>
);

interface ActivityLogItemProps {
  imageSrc: string;
  altText: string;
  title: string;
  date: string;
}

const ActivityLogItem: React.FC<ActivityLogItemProps> = ({ imageSrc, altText, title, date }) => (
  <div className="flex relative gap-5 justify-between w-full">
    <div className="flex gap-4 items-start">
      <img loading="lazy" src={imageSrc} alt={altText} className="shrink-0 w-6 aspect-square" />
      <div className="flex flex-col">
        <div className="text-xs">{title}</div>
        <div className="mt-2 text-xs">{date}</div>
      </div>
    </div>
    <img loading="lazy" src="https://cdn.builder.io/api/v1/image/assets/TEMP/020bc1637cdee992df058ef49e8375d82ab3d5a70bc24e2f484db81a9baa28e1?apiKey=a342aafd07af4859aab3668db0c46a94&" alt="" className="shrink-0 self-start aspect-square w-[18px]" />
  </div>
);

interface NavItemProps {
  imageSrc: string;
  altText: string;
  title: string;
  isActive?: boolean;
}

const NavItem: React.FC<NavItemProps> = ({ imageSrc, altText, title, isActive = false }) => (
  <div className={`flex flex-col flex-1 ${isActive ? "text-white" : ""}`}>
    <img loading="lazy" src={imageSrc} alt={altText} className="self-center aspect-square w-[31px]" />
    <div>{title}</div>
  </div>
);

function MyComponent() {
  const badges = [
    { imageSrc: "https://cdn.builder.io/api/v1/image/assets/TEMP/276d28ff16b3e65dbbf86f1ade2d8d3d5c3a92f8d0de8dfa92049a89c75c4d5a?apiKey=a342aafd07af4859aab3668db0c46a94&", altText: "Early Riser badge", title: "Early Riser" },
    { imageSrc: "https://cdn.builder.io/api/v1/image/assets/TEMP/461580433e3f09f038660491de237c2100f17291e864dfd5387316d9ed0c1e82?apiKey=a342aafd07af4859aab3668db0c46a94&", altText: "Active badge", title: "Active" },
  ];

  const activityLogItems = [
    { imageSrc: "https://cdn.builder.io/api/v1/image/assets/TEMP/e3f78c451fd055917f88889eae427ac8f8dc1629034dc5e11c751cfcb0f9cec2?apiKey=a342aafd07af4859aab3668db0c46a94&", altText: "Morning jog icon", title: "Morning Jog 3 km", date: "10/08/2023" },
    { imageSrc: "https://cdn.builder.io/api/v1/image/assets/TEMP/8a30099e1d7b41ea65747ad2cb6effade41ad90676133114f746f95d2f81fee9?apiKey=a342aafd07af4859aab3668db0c46a94&", altText: "Tennis match icon", title: "Tennis Match, 45 mins", date: "08/08/2023" },
  ];

  const navItems = [
    { imageSrc: "https://cdn.builder.io/api/v1/image/assets/TEMP/f8337e86b97f614da9b7eb3c92a13ceb6ebefd1096265c2a236779bd813cb6f4?apiKey=a342aafd07af4859aab3668db0c46a94&", altText: "Home icon", title: "Home" },
    { imageSrc: "https://cdn.builder.io/api/v1/image/assets/TEMP/a9524e9024da4b71ee8094aaaa56a1ed343a39c2df98d8578fc4a89333310ef2?apiKey=a342aafd07af4859aab3668db0c46a94&", altText: "Library icon", title: "Library" },
    { imageSrc: "https://cdn.builder.io/api/v1/image/assets/TEMP/a0dcd516740847ffcfad5ccbb99f6f4d3525ae472dcf2bc8726eb98e4e4ebe7c?apiKey=a342aafd07af4859aab3668db0c46a94&", altText: "Progress icon", title: "Progress" },
    { imageSrc: "https://cdn.builder.io/api/v1/image/assets/TEMP/3560da517c708f7222ae7bc4874ec30de7a464ea7e7693cddca718f0605a833f?apiKey=a342aafd07af4859aab3668db0c46a94&", altText: "Profile icon", title: "Profile", isActive: true },
  ];

  return (
    <div className="flex flex-col items-center bg-zinc-950 max-w-[375px] text-white text-opacity-80">
      <img loading="lazy" src="https://cdn.builder.io/api/v1/image/assets/TEMP/18fdcb17103ab4950f2ed37d381766935756867650da4e6cbe4c97ee085b4fc5?apiKey=a342aafd07af4859aab3668db0c46a94&" alt="Profile background" className="self-stretch w-full aspect-[1.82] fill-[url(https://cdn.builder.io/api/v1/image/assets/TEMP/18fdcb17103ab4950f2ed37d381766935756867650da4e6cbe4c97ee085b4fc5?apiKey=a342aafd07af4859aab3668db0c46a94&)_lightgray_0px_-103.5px_/_100%_223.214%_no-repeat]" />
      <div className="mt-7 text-xl">FitTrack Profile</div>
      <div className="mt-3 text-xs">Member since 2019</div>
      <div className="flex gap-5 justify-between items-center px-5 mt-8">
        <div className="flex flex-col self-stretch">
          <div className="text-base font-bold">Badges</div>
          <div className="flex gap-2 mt-2.5">
            {badges.map((badge, index) => (
              <Badge key={index} {...badge} />
            ))}
          </div>
        </div>
        <div className="flex flex-col self-stretch my-auto text-xs whitespace-nowrap">
          <img loading="lazy" src="https://cdn.builder.io/api/v1/image/assets/TEMP/a83a992779f2c20ceb0fbb85d615bb67b4ed2e40e1f724cd865c525ea78943d4?apiKey=a342aafd07af4859aab3668db0c46a94&" alt="Running streak icon" className="self-center aspect-[1.02] w-[46px]" />
          <div className="mt-3">Running</div>
          <div>Streak</div>
        </div>
        <div className="flex flex-col self-stretch my-auto text-xs">
          <div>See all</div>
          <img loading="lazy" src="https://cdn.builder.io/api/v1/image/assets/TEMP/731ba9fc18b28bbb51f198b240416d9b7308420e8b8fddf79bd4e785068b7774?apiKey=a342aafd07af4859aab3668db0c46a94&" alt="Dive in icon" className="mt-3 aspect-square w-[45px]" />
          <div className="mt-5">Dive In!</div>
          <div className="mt-8">See all</div>
        </div>
      </div>
      <section className="flex overflow-hidden relative flex-col px-5 py-5 mt-2.5 w-full aspect-[2.69] max-w-[325px]">
        <img loading="lazy" src="https://cdn.builder.io/api/v1/image/assets/TEMP/d00cfc9e1118556d5bf9298f1e2d5d88cc32fa6124457b1bb104385e8a69ed7b?apiKey=a342aafd07af4859aab3668db0c46a94&" alt="" className="object-cover absolute inset-0 size-full" />
        <div className="text-base font-bold mt-7">Activity Log</div>
        {activityLogItems.map((item, index) => (
          <ActivityLogItem key={index} {...item} />
        ))}
        <img loading="lazy" src="https://cdn.builder.io/api/v1/image/assets/TEMP/d2208391e46fe3b64b53a2c38527bd1567910c8a7b74ae6ed47842ba20663559?apiKey=a342aafd07af4859aab3668db0c46a94&" alt="" className="self-center mt-3.5 w-full fill-zinc-800 max-w-[260px]" />
      </section>
      <nav className="flex gap-5 items-start self-stretch px-12 py-3 mt-7 w-full text-xs whitespace-nowrap bg-zinc-800 shadow-[0px_0px_0px_rgba(0,0,0,0.08)]">
        {navItems.map((item, index) => (
          <NavItem key={index} {...item} />
        ))}
      </nav>
    </div>
  );
}

export default MyComponent;