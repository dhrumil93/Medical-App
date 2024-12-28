import React from 'react'

const showscore = () => {
  const stats = [
    {
      id: 1,
      icon: (
        <svg className="w-12 h-12 text-blue-500" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
          <circle cx="9" cy="7" r="4" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
          <path d="M23 21v-2a4 4 0 0 0-3-3.87M16 3.13a4 4 0 0 1 0 7.75" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
        </svg>
      ),
      count: "+1200",
      label: "Doctors",
      description: "Maecenas nisl libero, tincidunt id odio id, feugiat vulputate quam."
    },
    {
      id: 2,
      icon: (
        <svg className="w-12 h-12 text-blue-500" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path d="M3 9l9-7 9 7v11a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V9z" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
          <path d="M9 22V12h6v10" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
        </svg>
      ),
      count: "+1200",
      label: "Clinics",
      description: "Maecenas nisl libero, tincidunt id odio id, feugiat vulputate quam."
    },
    {
      id: 3,
      icon: (
        <svg className="w-12 h-12 text-blue-500" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path d="M12 2L2 7l10 5 10-5-10-5zM2 17l10 5 10-5M2 12l10 5 10-5" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
        </svg>
      ),
      count: "+100",
      label: "Specialist",
      description: "Maecenas nisl libero, tincidunt id odio id, feugiat vulputate quam."
    }
  ];

  return (
    <div className="py-16 px-4 md:px-8">
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {stats.map((stat) => (
            <div key={stat.id} className="flex flex-col items-center text-center">
              {/* Icon */}
              <div className="mb-4">
                {stat.icon}
              </div>

              {/* Stats */}
              <div className="mb-2">
                <h3 className="text-4xl font-bold text-green-600">
                  {stat.count}
                </h3>
                <p className="text-2xl font-bold text-gray-800">
                  {stat.label}
                </p>
              </div>

              {/* Description */}
              <p className="text-gray-600 max-w-xs">
                {stat.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </div>
  )
}

export default showscore;