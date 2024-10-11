import React from 'react'
import { Link } from 'react-router-dom'
import { Menu } from 'lucide-react'
import Logo from './Logo'

interface HeaderProps {
  toggleMobileMenu: () => void
}

const Header: React.FC<HeaderProps> = ({ toggleMobileMenu }) => {
  return (
    <header className="bg-white shadow-md">
      <div className="container mx-auto px-4 py-4">
        <div className="flex items-center justify-between">
          <Link to="/" className="flex items-center">
            <Logo />
          </Link>
          <nav className="hidden md:flex items-center space-x-4">
            <Link to="/" className="text-gray-600 hover:text-green-600">Home</Link>
            <Link to="/login" className="text-gray-600 hover:text-green-600">Login</Link>
            <Link to="/register" className="text-gray-600 hover:text-green-600">Register</Link>
          </nav>
          <button className="md:hidden" onClick={toggleMobileMenu}>
            <Menu size={24} />
          </button>
        </div>
      </div>
    </header>
  )
}

export default Header