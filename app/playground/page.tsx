import { EgoCodeEditor } from "@/components/playground/Editor";
import { JetBrains_Mono } from "next/font/google";
const jetbrains = JetBrains_Mono({ subsets: ["latin"] });

export default function Home() {
  return <div className={"h-screen w-screen p-20 " + jetbrains.className}>
    <div
      className="fixed top-5 left-1/2 translate-x-[-50%] h-fit w-fit flex px-10 py-3 bg-[#131313c8] rounded-lg border-solid border-[#2D2D2D]
          border-[1px] font-thin text-center"
    >🚧 under construction be careful</div>
    <EgoCodeEditor />
  </div>
} 
