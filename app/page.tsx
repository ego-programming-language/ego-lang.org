import Image from "next/image";
import { jetbrains } from "./layout";

export default function Home() {
  return (
    <main className="flex h-screen w-screen flex-col items-center justify-start p-10">
      <header
        className={jetbrains.className + " h-fit w-fit flex px-10 py-3 bg-[#131313] rounded-lg border-solid border-[#2D2D2D] border-[1px] font-thin text-center"}
      >
        🚧 actively building alpha-v0.1
      </header>
      <div className="h-full w-full flex flex-col justify-center items-center">
        <div className="h-fit w-fit flex flex-col justify-center items-center gap-4 pb-6">
          <img src="ego.svg"
            width={160}
            alt="Ego logo"
            style={{
              boxShadow: "0px 0px 50px -5px #0056ff",
              borderRadius: "40px"
            }} />
          <h1 className="text-5xl">ego</h1>
        </div>
        <p className="text-2xl font-[400]  text-center">multipurpose programming language  <br />powered by rust</p>
      </div>
    </main >
  );
}
