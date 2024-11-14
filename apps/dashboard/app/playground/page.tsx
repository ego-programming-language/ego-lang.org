import { EgoCodeEditor } from "@/components/playground/Editor";
import { JetBrains_Mono } from "next/font/google";
const jetbrains = JetBrains_Mono({ subsets: ["latin"] });

export default function Home() {
  return <div className={"h-screen w-screen p-20 " + jetbrains.className}>
    <EgoCodeEditor />
  </div>
} 
