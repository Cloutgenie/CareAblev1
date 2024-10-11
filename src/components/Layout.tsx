import React from 'react'
import { Outlet } from 'react-router-dom'
import Header from './Header'
import Footer from './Footer'
import { useTheme } from '../contexts/ThemeContext'

const Layout: React.FC = () => {
  const { theme } = useTheme()

  return (
    <div className={`min-h-screen flex flex-col ${theme === 'dark' ? 'dark' : ''}`}>
      <Header />
      <main className="flex-grow bg-green-50 dark:bg-gray-800">
        <div className="container mx-auto px-4 py-8">
          <Outlet />
        </div>
      </main>
      <Footer />
    </div>
  )
}

export default Layout