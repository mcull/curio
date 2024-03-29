import * as React from "react";

interface WorkoutCardProps {
  count: number;
  title: string;
}

const WorkoutCard: React.FC<WorkoutCardProps> = ({ count, title }) => (
  <div className="flex flex-col mt-1">
    <div className="font-bold">{count}</div>
    <div className="mt-2">{title}</div>
  </div>
);

interface DateCardProps {
  date: string;
  imageSrc: string;
}

const DateCard: React.FC<DateCardProps> = ({ date, imageSrc }) => (
  <div className="overflow-hidden relative flex-col justify-center py-2 aspect-square">
    <img src={imageSrc} alt="" className="object-cover absolute inset-0 size-full" />
    {date}
  </div>
);

const MyComponent: React.FC = () => {
  const workouts = [
    { count: 127, title: "Run" },
    { count: 58, title: "Yoga" },
    { count: 29, title: "Bike" },
    { count: 4, title: "Swim" },
    { count: 1, title: "Other" },
  ];

  const dates = [
    { date: "27", imageSrc: "https://cdn.builder.io/api/v1/image/assets/TEMP/6c3ef503e0181763fd56c211b212abecb96f85ddeaa70bb8261596b347881060?apiKey=a342aafd07af4859aab3668db0c46a94&" },
    { date: "28", imageSrc: "https://cdn.builder.io/api/v1/image/assets/TEMP/23aea22a86e2f8ef1c7ca9190263be3e0a8c6f0836a7aade65c962026fd0ef99?apiKey=a342aafd07af4859aab3668db0c46a94&" },
    { date: "29", imageSrc: "https://cdn.builder.io/api/v1/image/assets/TEMP/1afddbac6c66bf342939053f4af7b1f2cba8cd397fbb82d4e3ff2e3760a6ce53?apiKey=a342aafd07af4859aab3668db0c46a94&" },
    { date: "30", imageSrc: "https://cdn.builder.io/api/v1/image/assets/TEMP/2140bcff6831a8096c02db64833f51b9b86956b08aa5cd66683a4060a0e49d31?apiKey=a342aafd07af4859aab3668db0c46a94&" },
    { date: "1", imageSrc: "https://cdn.builder.io/api/v1/image/assets/TEMP/dd2e89ef5e9fe67e701a5478a5975ec8a25e17db3a96a190fccb362b0be6f471?apiKey=a342aafd07af4859aab3668db0c46a94&" },
    { date: "2", imageSrc: "https://cdn.builder.io/api/v1/image/assets/TEMP/cd2deb4d494375831c8594a2b573c052a362ab731594fa39a9eee62f6977b2a7?apiKey=a342aafd07af4859aab3668db0c46a94&" },
    { date: "3", imageSrc: "https://cdn.builder.io/api/v1/image/assets/TEMP/516bdfbcf0e2803103e61fee18dbf9dbd2980a0f0c280714ea0697b6ca41b2cc?apiKey=a342aafd07af4859aab3668db0c46a94&" },
    { date: "4", imageSrc: "https://cdn.builder.io/api/v1/image/assets/TEMP/ea98dcee71d5522326dbebf55cc03834ce87d6fdbb61c944f6feb6a0bd8a184a?apiKey=a342aafd07af4859aab3668db0c46a94&" },
  ];

  return (
    <div className="flex flex-col items-center pt-6 bg-zinc-950 max-w-[375px] text-white text-opacity-80">
      <header className="flex gap-4 px-5 text-2xl font-bold">
        <img src="https://cdn.builder.io/api/v1/image/assets/TEMP/8f86a4d56dff035aa540ef4b91e8e145fb64fc66e7b12b4539b189c2708d9c1e?apiKey=a342aafd07af4859aab3668db0c46a94&" alt="FitTrack logo" className="shrink-0 w-10 aspect-square" />
        <h1 className="flex-auto my-auto">Welcome to FitTrack!</h1>
      </header>
      <main className="flex gap-px mt-7">
        <section className="flex flex-col flex-1 px-5">
          <div className="flex gap-5 items-start text-xs whitespace-nowrap">
            <div className="flex flex-col mt-1 font-bold">
              <WorkoutCard count={127} title="Run" />
              <div className="mt-9 text-base">Today</div>
            </div>
            <img src="https://cdn.builder.io/api/v1/image/assets/TEMP/225ca47b6a5be2c62d3e32194e0fd64f58dbcf0a676e51b274ec39729fcfa6c8?apiKey=a342aafd07af4859aab3668db0c46a94&" alt="" className="shrink-0 w-px aspect-[0.03]" />
            {workouts.slice(1, 3).map((workout, index) => (
              <React.Fragment key={index}>
                <WorkoutCard count={workout.count} title={workout.title} />
                {index < 1 && <img src="https://cdn.builder.io/api/v1/image/assets/TEMP/225ca47b6a5be2c62d3e32194e0fd64f58dbcf0a676e51b274ec39729fcfa6c8?apiKey=a342aafd07af4859aab3668db0c46a94&" alt="" className="shrink-0 w-px aspect-[0.03]" />}
              </React.Fragment>
            ))}
          </div>
          <div className="flex overflow-hidden relative flex-col items-start py-7 pr-20 pl-5 mt-3 whitespace-nowrap aspect-[1.67] w-[155px]">
            <img src="https://cdn.builder.io/api/v1/image/assets/TEMP/bc79feaa69d30061dd8906aea23df67bef9fb448a62f24f7b83a85cfe7f586b6?apiKey=a342aafd07af4859aab3668db0c46a94&" alt="" className="object-cover absolute inset-0 size-full" />
            <div className="relative text-2xl font-bold">6,732</div>
            <div className="relative mt-2 text-sm">Steps</div>
          </div>
          <h2 className="mt-8 text-base font-bold">Workouts this Week</h2>
        </section>
        <section className="flex flex-col flex-1 items-center self-start whitespace-nowrap">
          <div className="flex gap-4 px-5 text-xs">
            {workouts.slice(3).map((workout, index) => (
              <React.Fragment key={index}>
                <img src={`{{ext_${4 + index * 2}}}`} alt="" className="shrink-0 w-px aspect-[0.03]" />
                <WorkoutCard count={workout.count} title={workout.title} />
              </React.Fragment>
            ))}
          </div>
          <div className="flex overflow-hidden relative flex-col pt-3.5 pr-14 pb-6 pl-5 mt-16 text-sm aspect-[1.67] w-[155px]">
            <img src="https://cdn.builder.io/api/v1/image/assets/TEMP/e502888b719ca78d7ec300f73978beded931fa43c8ff1f4b9d6147babbe2c6d5?apiKey=a342aafd07af4859aab3668db0c46a94&" alt="" className="object-cover absolute inset-0 size-full" />
            <img src="https://cdn.builder.io/api/v1/image/assets/TEMP/50e08aa54597b5c3b69d1c6896bd4b05f95886e196b8c57261c3621fb5a1edcf?apiKey=a342aafd07af4859aab3668db0c46a94&" alt="Excited emoji" className="self-end w-10 aspect-square" />
            <div className="relative self-start mt-1.5">Excited</div>
          </div>
        </section>
      </main>
      <section className="flex gap-4 px-5 mt-4 text-xs font-bold whitespace-nowrap">
        {dates.map((date, index) => (
          <DateCard key={index} date={date.date} imageSrc={date.imageSrc} />
        ))}
      </section>
      <section className="flex gap-5 px-5 mt-8 font-bold">
        <h2 className="flex-auto text-base">Nutrition intake</h2>
        <div className="flex gap-2.5 self-start text-xs whitespace-nowrap">
          <div className="grow">Summary</div>
          <div>Target</div>
          <div>Remaining</div>
        </div>
      </section>
      <div className="flex overflow-hidden relative flex-col py-7 pr-10 pl-4 mt-3.5 w-full text-xs whitespace-nowrap aspect-[1.84] max-w-[324px]">
        <img src="https://cdn.builder.io/api/v1/image/assets/TEMP/6193464cbe96107157dadb76dca311ee90ddcb42b090f4697cee1d7887a186a7?apiKey=a342aafd07af4859aab3668db0c46a94&" alt="" className="object-cover absolute inset-0 size-full" />
        <div className="flex relative gap-5 justify-between w-full">
          <div className="font-bold">Intake</div>
          <div className="flex gap-5 justify-between">
            <div>2000</div>
            <div>2200</div>
            <div>200</div>
          </div>
        </div>
        <div className="flex relative gap-5 justify-between items-center mt-3">
          <div className="flex flex-col self-stretch font-bold">
            <img src="https://cdn.builder.io/api/v1/image/assets/TEMP/783943a008e342d5bcd85b39e3fde9d66d1f4b9bdab392ac3b62c4cc7cb9d751?apiKey=a342aafd07af4859aab3668db0c46a94&" alt="" className="self-center aspect-[12.5] w-[106px]" />
            <div className="mt-5">Macronutrients</div>
            <img src="https://cdn.builder.io/api/v1/image/assets/TEMP/cca64ed8f36b2a06e0c195d0289cd2f6c2dd3086c2c5bdad44ccb08bd62b630f?apiKey=a342aafd07af4859aab3668db0c46a94&" alt="" className="mt-3 aspect-[7.69] w-[60px]" />
          </div>
          <div className="self-stretch my-auto">180</div>
          <div className="self-stretch my-auto">210</div>
          <div className="self-stretch my-auto">70</div>
        </div>
        <div className="flex relative gap-5 justify-between items-start mt-5">
          <div className="flex flex-col self-stretch font-bold">
            <div>Protein</div>
            <img src="https://cdn.builder.io/api/v1/image/assets/TEMP/d46d1f9f9635c1a0da5b7b56a7f37f7842535951587e3adf3b60c340db1ec5d8?apiKey=a342aafd07af4859aab3668db0c46a94&" alt="" className="self-center mt-3 aspect-[16.67] w-[124px]" />
          </div>
          <div>45</div>
          <div>60</div>
          <div>15</div>
        </div>
      </div>
      <footer className="flex gap-5 items-start self-stretch px-12 py-3 mt-3 w-full text-xs whitespace-nowrap bg-zinc-800 shadow-[0px_0px_0px_rgba(0,0,0,0.08)]">
        <div className="flex flex-col flex-1 font-bold text-neutral-300">
          <img src="https://cdn.builder.io/api/v1/image/assets/TEMP/e26a0b5bc4e2654123a41f1dbf5997482b4ed448a43d6267e3212f2bde5420b7?apiKey=a342aafd07af4859aab3668db0c46a94&" alt="Home icon" className="self-center aspect-square w-[31px]" />
          <div>Home</div>
        </div>
        <div className="flex flex-col flex-1">
          <img src="https://cdn.builder.io/api/v1/image/assets/TEMP/a9524e9024da4b71ee8094aaaa56a1ed343a39c2df98d8578fc4a89333310ef2?apiKey=a342aafd07af4859aab3668db0c46a94&" alt="Library icon" className="w-6 aspect-square" />
          <div className="mt-2">Library</div>
        </div>
        <div className="flex flex-col flex-1 text-white">
          <img src="https://cdn.builder.io/api/v1/image/assets/TEMP/9500c09ca2bae1ac72789f844d1391ca228a7897e98024cd05b925c5d64e0e33?apiKey=a342aafd07af4859aab3668db0c46a94&" alt="Progress icon" className="self-center aspect-[1.61] w-[39px]" />
          <div className="mt-1.5">Progress</div>
        </div>
        <div className="flex flex-col flex-1">
          <img src="https://cdn.builder.io/api/v1/image/assets/TEMP/b26432e7bc3dc216d071ca9a2a82b12068e4525cceefa1c782f3e0bd22d6fe21?apiKey=a342aafd07af4859aab3668db0c46a94&" alt="Profile icon" className="self-center aspect-square w-[31px]" />
          <div>Profile</div>
        </div>
      </footer>
    </div>
  );
};

export default MyComponent;