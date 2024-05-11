'use client'
import React from 'react'

export function EmailInput({ font, subscribeEmail }: { font: string, subscribeEmail: Function }) {
  return <form className="flex flex-row pl-5 pr-2 py-2 bg-[#131313] gap-3 rounded-xl w-full md:w-1/3 lg:w-1/3 xl:w-1/3" action={(e) => subscribeEmail(e)}>
    <input placeholder="self@ego-lang.org" className={font + ` bg-transparent outline-none border-none text-base
    w-full placeholder:text-[#494949]` } name='email' />
    <button
      className={font + ` hover:bg-[#1F1F1F] rounded-lg px-2 py-2`}
    >subscribe</button>
  </form>
}