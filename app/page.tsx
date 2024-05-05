import { JetBrains_Mono } from "next/font/google";
import Image from "next/image";
const jetbrains = JetBrains_Mono({ subsets: ["latin"] });

export default function Home() {
  return (
    <main className="flex h-screen w-screen flex-col 
      items-center justify-start overflow-x-hidden">
      <header
        className={jetbrains.className + ` fixed h-fit w-fit flex px-10 py-3 bg-[#131313c8] rounded-lg border-solid border-[#2D2D2D]
           border-[1px] font-thin text-center m-10 z-10`}
      >
        🚧 actively building alpha-v0.1
      </header>
      <div className="relative min-h-screen w-full flex flex-col justify-center items-center mb-20">
        <Image src="ego.svg"
          height={300}
          width={300}
          alt="Ego logo"
          style={{
            boxShadow: "0px 0px 100px 0px #0056ff",
            borderRadius: "63px",
          }}
          className="absolute bottom-[150px]"
        />
        <h1 className="text-[300px] absolute bottom-[-80px]">ego</h1>
      </div>
      <footer className="flex flex-row h-fit w-full justify-center items-center pb-20">
        <a
          href="https://github.com/noreplydev/ego"
          className="underline"
        >github</a>
      </footer>
    </main >
  );
}
