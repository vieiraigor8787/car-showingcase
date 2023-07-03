'use client'

import { useState } from 'react'
import Image from 'next/image'

import SearchManufacturer from './SearchManufacturer'

const SearchButton = ({ otherClasses }: { otherClasses: string }) => (
  <button type="submit" className={`-ml-3 z-10 ${otherClasses}`}>
    <Image
      src="/magnifying-glass.svg"
      alt="glass"
      width={40}
      height={40}
      className="object-contain"
    />
  </button>
)

export default function SearchBar() {
  const [manufacturer, setManufacturer] = useState('')

  const handleSearch = () => {}

  return (
    <form className="searchbar" onSubmit={handleSearch}>
      <div className="searchbar__item">
        <SearchManufacturer
          manufacturer={manufacturer}
          setManufacturer={setManufacturer}
        />
      </div>

      <SearchButton otherClasses="sm:hidden" />
    </form>
  )
}
