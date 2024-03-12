import { FC } from 'react'

const Navbar: FC = () => {
  return (
    <nav className="bg-gray-800 text-white p-4">
        <div>Search Field</div>
        <div>Filter Dropdown</div>
        <div>Sort Dropdown</div>
    </nav>
  )
}

export default Navbar