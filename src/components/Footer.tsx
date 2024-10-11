import React from 'react'

const Footer: React.FC = () => {
  return (
    <footer className="bg-gray-800 text-white py-8">
      <div className="container mx-auto px-4">
        <div className="text-center">
          <h3 className="text-lg font-semibold mb-2">CareAble</h3>
          <p className="text-sm">Empowering your health journey</p>
        </div>
        <div className="mt-4 text-center text-sm">
          © {new Date().getFullYear()} CareAble. All rights reserved.
        </div>
      </div>
    </footer>
  )
}

export default Footer