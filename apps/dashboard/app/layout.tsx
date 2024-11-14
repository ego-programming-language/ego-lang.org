import type { Metadata } from "next";
import { JetBrains_Mono, Syne } from "next/font/google";
import "./globals.css";

const syne = Syne({ subsets: ["latin"], weight: ["400", "500", "600", "700"] });
const jetbrains = JetBrains_Mono({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "ego",
  description: "multipurpose programming language written in rust",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={syne.className}>
        <div
          className={`h-fit w-full flex px-10 py-3 bg-[#131313] 
            border-solid border-[#2D2D2D] border-[1px] font-thin text-center 
            justify-center items-center text-xl `
            + jetbrains.className}
        >🚧 actively building alpha-v0.1</div>
        {children}
      </body>
    </html>
  );
}
