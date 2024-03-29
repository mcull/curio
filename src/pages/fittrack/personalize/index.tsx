import * as React from "react";

interface ActivityCategoryProps {
  imageSrc: string;
  title: string;
  iconSrc: string;
}

const ActivityCategory: React.FC<ActivityCategoryProps> = ({ imageSrc, title, iconSrc }) => (
  <div className="flex overflow-hidden relative flex-col flex-1 gap-5 justify-between px-5 py-4 aspect-[2.56]">
    <img loading="lazy" src={imageSrc} alt="" className="object-cover absolute inset-0 size-full" />
    <div className="relative self-start mt-3">{title}</div>
    <img loading="lazy" src={iconSrc} alt="" className="shrink-0 w-8 aspect-square" />
  </div>
);

interface WorkoutFrequencyProps {
  imageSrc: string;
  title: string;
}

const WorkoutFrequency: React.FC<WorkoutFrequencyProps> = ({ imageSrc, title }) => (
  <div className="overflow-hidden relative flex-col justify-center items-center px-16 py-6 mt-4 w-full aspect-[5.45] fill-rose-500 text-stone-950">
    <img loading="lazy" src={imageSrc} alt="" className="object-cover absolute inset-0 size-full" />
    {title}
  </div>
);

const activityCategories = [
  { imageSrc: "https://cdn.builder.io/api/v1/image/assets/TEMP/65f472b75e57755d34fded456b0d9134ee8865aec67e7c165f027fd77bfa039d?apiKey=a342aafd07af4859aab3668db0c46a94&", title: "Yoga", iconSrc: "https://cdn.builder.io/api/v1/image/assets/TEMP/895597a7fc2bce9906d07e0caf1724ee4e14fd884bb162954033354ca807d600?apiKey=a342aafd07af4859aab3668db0c46a94&" },
  { imageSrc: "https://cdn.builder.io/api/v1/image/assets/TEMP/87c9772b8ae0220b3dcdb96eea21895d023ca258004c9191a4977c5e6cb69f3d?apiKey=a342aafd07af4859aab3668db0c46a94&", title: "Running", iconSrc: "https://cdn.builder.io/api/v1/image/assets/TEMP/0db5ea854ea42909623c21397093ae72397e1492dd4af52ec0ea8297cc1d2dc7?apiKey=a342aafd07af4859aab3668db0c46a94&" },
  { imageSrc: "https://cdn.builder.io/api/v1/image/assets/TEMP/417e2ac7458e22fe280a9881afaa6962fdf02f97e0c723df50ac9e66efd5ed7f?apiKey=a342aafd07af4859aab3668db0c46a94&", title: "Cycling", iconSrc: "https://cdn.builder.io/api/v1/image/assets/TEMP/b689334a7079b5825ccc6c2a1ca47ac55c783cf842dfdfa2e63f833a28bbc84f?apiKey=a342aafd07af4859aab3668db0c46a94&" },
  { imageSrc: "https://cdn.builder.io/api/v1/image/assets/TEMP/8432daa26ca13dc80333ee5d3ad2d93b63079907992f2a9419101f550cc6cc94?apiKey=a342aafd07af4859aab3668db0c46a94&", title: "Weights", iconSrc: "https://cdn.builder.io/api/v1/image/assets/TEMP/337bbe1d31979ea16e35c277d7da62a53942bc8132b0627b2fe1c8d7262c1bf8?apiKey=a342aafd07af4859aab3668db0c46a94&" },
];

const workoutFrequencies = [
  { imageSrc: "https://cdn.builder.io/api/v1/image/assets/TEMP/45fe82e163f1b4f6f60b0ce0ac8738217bd49057b28b0efad27755ade9ca8736?apiKey=a342aafd07af4859aab3668db0c46a94&", title: "3-4 times a week" },
  { imageSrc: "https://cdn.builder.io/api/v1/image/assets/TEMP/24afaaf9396bc9dee6380ea0aba56e837a3dbf7f83e94a38c909d7bc700369aa?apiKey=a342aafd07af4859aab3668db0c46a94&", title: "1-2 times a week" },
  { imageSrc: "https://cdn.builder.io/api/v1/image/assets/TEMP/a2545f5cefebe0d9586a840a85f58c21643fe04dead4a1df0d13157d4185e9dd?apiKey=a342aafd07af4859aab3668db0c46a94&", title: "Rarely" },
];

export default function Personalize() {
  return (
    <div className="flex flex-col px-5 pt-10 pb-4 text-lg font-bold text-white bg-zinc-950 max-w-[375px]">
      <div className="text-base text-white text-opacity-80">Personalize your experience</div>
      <h2 className="mt-9 text-2xl">Activity Categories</h2>
      <div className="flex gap-4 mt-6 whitespace-nowrap">
        {activityCategories.slice(0, 2).map((category) => (
          <ActivityCategory key={category.title} {...category} />
        ))}
      </div>
      <div className="flex gap-4 mt-3.5 whitespace-nowrap">
        {activityCategories.slice(2).map((category) => (
          <ActivityCategory key={category.title} {...category} />
        ))}
      </div>
      <h2 className="mt-9 text-2xl">Workout Frequency</h2>
      {workoutFrequencies.map((frequency) => (
        <WorkoutFrequency key={frequency.title} {...frequency} />
      ))}
      <button className="overflow-hidden relative flex-col justify-center items-center px-16 py-6 mt-6 w-full text-base whitespace-nowrap border border-rose-500 border-solid aspect-[5.93] stroke-[1px] stroke-rose-500">
        <img loading="lazy" src="https://cdn.builder.io/api/v1/image/assets/TEMP/172dcf6e2c86219ba203e99325352d64dbeb82fed4a55f6fe142fb2e44aebadf?apiKey=a342aafd07af4859aab3668db0c46a94&" alt="" className="object-cover absolute inset-0 size-full" />
        Done
      </button>
    </div>
  );
}
