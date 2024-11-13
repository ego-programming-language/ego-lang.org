'use client'
import React, { useRef } from 'react'

export function EmailInput({ font, subscribeEmail }: { font: string, subscribeEmail: Function }) {
  const ref = useRef<HTMLFormElement>(null)
  const inputRef = useRef<HTMLInputElement>(null)

  return <form className="flex flex-row pl-5 pr-2 py-2 bg-[#131313] gap-3 rounded-xl w-full md:w-1/3 lg:w-1/3 xl:w-1/3" action={async (e) => {
    let is_ok = await subscribeEmail(e)
    if (is_ok) {
      ref.current && ref.current['reset']()
      console.log("is_ok", is_ok)
    } else {
      inputRef.current && (inputRef.current.value = "invalid format")
    }
  }} ref={ref}>
    <input placeholder="self@ego-lang.org" className={font + ` bg-transparent outline-none border-none text-base
    w-full placeholder:text-[#494949]` } name='email' type="email" ref={inputRef} />
    <button className={font + ` hover:bg-[#1F1F1F] rounded-lg px-3.5 py-2`}
    >subscribe</button>
  </form>
}