'use client'
import { useEffect, useState } from 'react';
import init, { exec_ego_code } from '../../wego/ego.js';

export function EgoCodeEditor() {
  const [egoCode, setEgoCode] = useState("");
  const [executionOutput, setExecutionOutput] = useState<string[][]>([]);
  const [executionIndex, setExecutionIndex] = useState<number | null>(null);
  useEffect(() => {
    const run = async () => {
      await init();
    }

    run()
  }, [])

  const runEgo = (code: string, vm: boolean) => {
    let output = exec_ego_code(code, vm);
    setExecutionOutput((prev) => { prev.push(output); return prev })
    setExecutionIndex((prev) => (prev ?? 0) + 1)
  }

  return <div className='flex flex-col justify-start items-start w-full h-full bg-[#131313]
    border-solid border-2 border-[#2D2D2D] rounded-xl p-8'>
    <div className='flex flex-row w-fit items-center justify-center gap-5'>
      <div className='flex flex-row h-fit px-3 py-2 bg-[#2D2D2D] gap-3 rounded-md justify-center items-center'>
        <img src='/ego.svg' alt='ego logo' className='h-7 w-auto' />
        <p className='text-lg'>main.ego</p>
      </div>
      <div className='flex flex-row h-fit px-3 py-2 bg-white gap-3 rounded-md 
        justify-center items-center outline outline-[0px] outline-transparent 
        hover:outline-[#04A139] hover:outline-8 ease-in-out duration-150 cursor-pointer
        active:scale-[95%]'>
        <img src='/run.svg' alt='ego logo' className='h-5 w-auto' />
        <button
          className='text-[#04A139] text-nowrap h-full'
          onClick={() => runEgo(egoCode, false)}>run</button>
      </div>

    </div>
    <textarea
      className='w-full text-white h-full bg-transparent rounded-md outline-none 
       pl-3 pt-5 resize-none text-lg placeholder:text-[#2D2D2D]'
      onChange={(e) => setEgoCode(e.target.value)} placeholder={`// write here your ego code
fn greet(name) {
  print("hello, ", name)
}

greet("Cristian")
`} />
    <div className='w-full h-96 flex flex-col border-[1px] bg-[#1B1B1B]
      border-solid border-[#2D2D2D]
      rounded-md text-[#00ff41] overflow-scroll'>
      <div className='h-fit w-full p-2 border-b-solid border-b-[1px] border-b-[#2D2D2D]'>
        <p className='text-[#5F5F5F] text-lg'>console</p>
      </div>
      <div className='h-full w-ful overflow-scroll px-5 py-3'>
        {
          executionIndex
            ? executionOutput[executionIndex].map(log => {
              return <p key={log}>{log}</p>
            })
            : <p>no logs</p>
        }
      </div>
    </div>
  </div>
}