import React from 'react'
import image from '../assets/Banner1.svg' 
import showscore from '../components/score'

const Home = () => {
  return (
    <>
      <div className="pt-20 px-4 md:px-8 max-w-7xl mx-auto">
        {/* Hero Section */}
        <div className="flex flex-col md:flex-row items-center justify-between gap-8 mb-16">
          {/* Left Content */}
          <div className="md:w-1/2">
            <h1 className="text-4xl md:text-5xl font-bold mb-4 text-gray-800">
              Lorem ipsum dolor amet
            </h1>
            <p className="text-lg text-gray-600 mb-8">
              Nam sollicitud nunc, cursus eros vulputate sed. Vestibulum lobortis.
            </p>
            <div className="flex gap-4">
              <button className="px-6 py-2 bg-green-600 text-white rounded-md hover:bg-green-700 transition-colors">
                MORE INFO
              </button>
              <button className="px-6 py-2 bg-blue-500 text-white rounded-md hover:bg-blue-600 transition-colors">
                REGISTER NOW
              </button>
            </div>
          </div>

          {/* Right Image */}
          <div className="md:w-1/2">
            <img 
              src={image} 
              alt="Healthcare Illustration" 
              className="w-full h-auto"
            />
          </div>
        </div>

        
        {/* Features Section */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-16">
          {/* Business Solution */}
          <div className="p-6 bg-white rounded-lg shadow-md hover:bg-blue-50 transition-colors duration-300">
            <h2 className="text-xl font-bold text-gray-800 mb-3">
              Business Solution
            </h2>
            <p className="text-gray-600">
              Interdum et malesuada fames ac ante...
            </p>
          </div>

          {/* Free project quote */}
          <div className="p-6 bg-white rounded-lg shadow-md hover:bg-blue-50 transition-colors duration-300">
            <h2 className="text-xl font-bold text-gray-800 mb-3">
              Free project quote
            </h2>
            <p className="text-gray-600">
              Interdum et malesuada fames ac ante...
            </p>
          </div>

          {/* Nulla lobortis nunc */}
          <div className="p-6 bg-white rounded-lg shadow-md hover:bg-blue-50 transition-colors duration-300">
            <h2 className="text-xl font-bold text-gray-800 mb-3">
              Nulla lobortis nunc
            </h2>
            <p className="text-gray-600">
              Interdum et malesuada fames ac ante...
            </p>
          </div>
        </div>
      </div>
      <showscore />
    </>
  )
}

export default Home;