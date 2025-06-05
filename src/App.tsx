import React, { useState } from 'react'
import { Search, Mic, Camera, Grid3X3, Plus } from 'lucide-react'

const apps = [
  { name: 'ChatAndBuild', icon: '🏗️', url: '#' },
  { name: 'Google Translate', icon: '🌐', url: '#' },
  { name: 'ChatAndBuild', icon: '🏗️', url: '#' },
  { name: 'DeepSeek', icon: '🔍', url: '#' },
  { name: 'GitHub', icon: '🐙', url: '#' },
  { name: 'MEXC Exchange', icon: '💱', url: '#' },
  { name: 'ChatAndBuild', icon: '🏗️', url: '#' },
  { name: 'BNB Smart Chain', icon: '🔗', url: '#' },
  { name: '000 • TETR.IO', icon: '🎮', url: '#' }
]

function App() {
  const [searchQuery, setSearchQuery] = useState('')
  const [showApps, setShowApps] = useState(false)

  const handleSearch = (e: React.FormEvent) => {
    e.preventDefault()
    if (searchQuery.trim()) {
      window.open(`https://www.google.com/search?q=${encodeURIComponent(searchQuery)}`, '_blank')
    }
  }

  return (
    <div className="min-h-screen bg-green-50 flex flex-col">
      {/* Header */}
      <header className="flex justify-end items-center p-4 space-x-4">
        <a href="#" className="text-sm text-gray-700 hover:underline">Gmail</a>
        <a href="#" className="text-sm text-gray-700 hover:underline">Images</a>
        
        {/* Apps Grid Button */}
        <div className="relative">
          <button 
            onClick={() => setShowApps(!showApps)}
            className="p-2 rounded-full hover:bg-green-100 transition-colors"
          >
            <Grid3X3 className="w-6 h-6 text-gray-600" />
          </button>
          
          {/* Apps Dropdown */}
          {showApps && (
            <div className="absolute right-0 top-12 bg-white rounded-lg shadow-lg border p-4 w-80 z-10">
              <div className="grid grid-cols-3 gap-4">
                {apps.map((app, index) => (
                  <a
                    key={index}
                    href={app.url}
                    className="flex flex-col items-center p-3 rounded-lg hover:bg-gray-100 transition-colors"
                  >
                    <div className="w-12 h-12 bg-blue-500 rounded-lg flex items-center justify-center text-white text-xl mb-2">
                      {app.icon}
                    </div>
                    <span className="text-xs text-gray-700 text-center leading-tight">{app.name}</span>
                  </a>
                ))}
                <button className="flex flex-col items-center p-3 rounded-lg hover:bg-gray-100 transition-colors">
                  <div className="w-12 h-12 bg-gray-200 rounded-lg flex items-center justify-center mb-2">
                    <Plus className="w-6 h-6 text-gray-600" />
                  </div>
                  <span className="text-xs text-gray-700">Add shortcut</span>
                </button>
              </div>
            </div>
          )}
        </div>
        
        {/* Profile Picture */}
        <div className="w-8 h-8 bg-blue-500 rounded-full flex items-center justify-center text-white font-medium">
          U
        </div>
      </header>

      {/* Main Content */}
      <main className="flex-1 flex flex-col items-center justify-center px-4 -mt-20">
        {/* Google Logo */}
        <div className="mb-8">
          <h1 className="text-8xl font-normal text-gray-700 tracking-tight">
            <span className="text-blue-500">G</span>
            <span className="text-red-500">o</span>
            <span className="text-yellow-500">o</span>
            <span className="text-blue-500">g</span>
            <span className="text-green-500">l</span>
            <span className="text-red-500">e</span>
          </h1>
        </div>

        {/* Search Form */}
        <form onSubmit={handleSearch} className="w-full max-w-2xl">
          <div className="relative group">
            <div className="flex items-center border border-gray-300 rounded-full px-4 py-3 hover:shadow-md focus-within:shadow-md transition-shadow bg-white">
              <Search className="w-5 h-5 text-gray-400 mr-3" />
              <input
                type="text"
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                placeholder="Search Google or type a URL"
                className="flex-1 outline-none text-gray-700 text-base"
              />
              <div className="flex items-center space-x-3 ml-3">
                <button type="button" className="p-1 hover:bg-gray-100 rounded">
                  <Mic className="w-5 h-5 text-gray-400" />
                </button>
                <button type="button" className="p-1 hover:bg-gray-100 rounded">
                  <Camera className="w-5 h-5 text-gray-400" />
                </button>
              </div>
            </div>
          </div>

          {/* Search Buttons */}
          <div className="flex justify-center space-x-4 mt-8">
            <button
              type="submit"
              className="bg-gray-50 hover:bg-gray-100 border border-gray-300 rounded px-6 py-2 text-sm text-gray-700 transition-colors"
            >
              Google Search
            </button>
            <button
              type="button"
              onClick={() => window.open('https://www.google.com/doodles', '_blank')}
              className="bg-gray-50 hover:bg-gray-100 border border-gray-300 rounded px-6 py-2 text-sm text-gray-700 transition-colors"
            >
              I'm Feeling Lucky
            </button>
          </div>
        </form>

        {/* Language Options */}
        <div className="mt-8 text-sm text-gray-600">
          Google offered in: 
          <a href="#" className="text-blue-600 hover:underline ml-1">العربية</a>
          <a href="#" className="text-blue-600 hover:underline ml-3">Français</a>
          <a href="#" className="text-blue-600 hover:underline ml-3">Español</a>
        </div>
      </main>

      {/* Footer */}
      <footer className="bg-gray-100 border-t">
        <div className="px-6 py-3 border-b border-gray-300">
          <span className="text-gray-600 text-sm">United States</span>
        </div>
        <div className="px-6 py-3 flex flex-col sm:flex-row justify-between items-center space-y-2 sm:space-y-0">
          <div className="flex flex-wrap justify-center sm:justify-start space-x-6">
            <a href="#" className="text-gray-600 text-sm hover:underline">About</a>
            <a href="#" className="text-gray-600 text-sm hover:underline">Advertising</a>
            <a href="#" className="text-gray-600 text-sm hover:underline">Business</a>
            <a href="#" className="text-gray-600 text-sm hover:underline">How Search works</a>
          </div>
          <div className="flex flex-wrap justify-center sm:justify-end space-x-6">
            <a href="#" className="text-gray-600 text-sm hover:underline">Privacy</a>
            <a href="#" className="text-gray-600 text-sm hover:underline">Terms</a>
            <a href="#" className="text-gray-600 text-sm hover:underline">Settings</a>
          </div>
        </div>
      </footer>

      {/* Click outside to close apps */}
      {showApps && (
        <div 
          className="fixed inset-0 z-0" 
          onClick={() => setShowApps(false)}
        />
      )}
    </div>
  )
}

export default App
