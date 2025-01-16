"use client"

import { JSX, SVGProps, useState } from "react"


export default function Search() {
  const [searchText, setSearchText] = useState("")
  const handleClear = () => {
    setSearchText("")
  }
  return (
    <div className="relative w-full max-w-md mx-auto ">
      <div className="absolute inset-y-0  right-0 flex items-center pr-3 pointer-events-none">
        <SearchIcon className="w-5 h-5 " color="#757575" onClick={handleClear}/>
      </div>
      <input
        type="search"
        placeholder="What can we help you with?"
        value={searchText}
        onChange={(e) => setSearchText(e.target.value)}
        className="block w-[457.33px] mx-auto h-[56px]  pl-10 pr-10 rounded-[8px] border-2 border-[#757575] outline-none"
      />
      {searchText && (
        <div className="absolute inset-y-0 right-0 flex items-center pr-3 cursor-pointer">
          <XIcon className="w-5 h-5 text-muted-foreground hover:text-muted" />
        </div>
      )}
    </div>
  )
}

function SearchIcon(props: JSX.IntrinsicAttributes & SVGProps<SVGSVGElement>) {
  return (
    <svg
      {...props}
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <circle cx="11" cy="11" r="8" />
      <path d="m21 21-4.3-4.3" />
    </svg>
  )
}


function XIcon(props: JSX.IntrinsicAttributes & SVGProps<SVGSVGElement>) {
  return (
    <svg
      {...props}
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <path d="M18 6 6 18" />
      <path d="m6 6 12 12" />
    </svg>
  )
}