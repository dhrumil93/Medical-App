import React, { useState } from 'react'

const Drprofile = () => {
  const [selectedCategory, setSelectedCategory] = useState('All');

  const doctors = [
    {
      id: 1,
      name: "Dr. Sarah Johnson",
      image: "https://img.freepik.com/free-photo/female-doctor-hospital-with-stethoscope_23-2148827776.jpg",
      specialty: "Cardiologist",
      rating: "98%",
      experience: "8 Years"
    },
    {
      id: 2,
      name: "Dr. Emily Chen",
      image: "https://img.freepik.com/free-photo/attractive-young-female-doctor-with-stethoscope-hospital_651396-974.jpg",
      specialty: "Pediatrician",
      rating: "96%",
      experience: "6 Years"
    },
    {
      id: 3,
      name: "Dr. Michael Anderson",
      image: "https://img.freepik.com/free-photo/portrait-smiling-male-doctor_171337-1532.jpg",
      specialty: "Orthopedic",
      rating: "97%",
      experience: "12 Years"
    },
    {
      id: 4,
      name: "Dr. David Wilson",
      image: "https://img.freepik.com/free-photo/young-doctor-with-stethoscope-white-uniform_176474-8391.jpg",
      specialty: "Nutritionist",
      rating: "94%",
      experience: "5 Years"
    },
    {
      id: 5,
      name: "Dr. Robert Thompson",
      image: "https://img.freepik.com/free-photo/portrait-successful-mature-doctor-with-stethoscope_1262-12136.jpg",
      specialty: "Anaesthestic",
      rating: "99%",
      experience: "15 Years"
    },
    {
      id: 6,
      name: "Dr. Maria Garcia",
      image: "https://img.freepik.com/free-photo/female-doctor-hospital-with-stethoscope_23-2148827776.jpg",
      specialty: "Pediatric",
      rating: "95%",
      experience: "7 Years"
    }
  ];

  const categories = [
    { id: 1, name: 'All', count: doctors.length },
    { id: 2, name: 'Orthopedic', count: doctors.filter(d => d.specialty === 'Orthopedic').length },
    { id: 3, name: 'Nutritionist', count: doctors.filter(d => d.specialty === 'Nutritionist').length },
    { id: 4, name: 'Pediatric', count: doctors.filter(d => d.specialty === 'Pediatric').length },
    { id: 5, name: 'Anaesthestic', count: doctors.filter(d => d.specialty === 'Anaesthestic').length },
    { id: 6, name: 'Cardiologist', count: doctors.filter(d => d.specialty === 'Cardiologist').length }
  ];

  const filteredDoctors = selectedCategory === 'All' 
    ? doctors 
    : doctors.filter(doctor => doctor.specialty === selectedCategory);

  return (
    <div className="pt-24 px-4 md:px-8 max-w-7xl mx-auto">
      <div className="flex flex-col md:flex-row gap-8">
        {/* Left Sidebar - Title and Categories */}
        <div className="md:w-72 flex-shrink-0">
          <h1 className="text-4xl font-bold text-gray-800 mb-8">Find Doctors</h1>
          <div className="flex flex-col gap-3 bg-white p-4 rounded-lg shadow-sm">
            {categories.map((category) => (
              <button
                key={category.id}
                onClick={() => setSelectedCategory(category.name)}
                className={`px-6 py-3 text-left rounded-lg text-sm font-medium transition-all duration-300 flex justify-between items-center
                  ${selectedCategory === category.name 
                    ? 'bg-blue-100 text-blue-600' 
                    : 'bg-gray-50 text-gray-700 hover:bg-gray-100'}`}
              >
                <span>{category.name}</span>
                <span className="bg-white px-2 py-1 rounded-full text-xs">
                  {category.count}
                </span>
              </button>
            ))}
          </div>
        </div>

        {/* Right Content - Doctors Grid */}
        <div className="flex-grow">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
            {filteredDoctors.map((doctor) => (
              <div key={doctor.id} className="bg-white rounded-lg p-6 flex items-start gap-4 shadow-sm hover:shadow-md transition-shadow">
                {/* Doctor Image */}
                <div className="relative">
                  <img 
                    src={doctor.image} 
                    alt={doctor.name} 
                    className="w-20 h-20 rounded-full object-cover border-2 border-gray-100"
                  />
                  <span className="absolute bottom-0 right-0 w-4 h-4 bg-green-400 border-2 border-white rounded-full"></span>
                </div>
                
                {/* Doctor Info */}
                <div className="flex-grow">
                  <h3 className="text-lg font-bold text-gray-800 mb-1">{doctor.name}</h3>
                  <p className="text-blue-600 text-sm font-medium mb-2">{doctor.specialty}</p>
                  
                  {/* Stats */}
                  <div className="flex items-center gap-4 text-sm text-gray-500 mb-4">
                    <div className="flex items-center gap-1">
                      <svg className="w-4 h-4 text-yellow-400" fill="currentColor" viewBox="0 0 20 20">
                        <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                      </svg>
                      {doctor.rating}
                    </div>
                    <div className="flex items-center gap-1">
                      <svg className="w-4 h-4 text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                      </svg>
                      {doctor.experience}
                    </div>
                  </div>

                  {/* Chat Button */}
                  <button className="w-full px-6 py-2 bg-green-500 text-white rounded-md text-sm font-medium hover:bg-green-600 transition-colors flex items-center justify-center gap-2">
                    <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 12h.01M12 12h.01M16 12h.01M21 12c0 4.418-4.03 8-9 8a9.863 9.863 0 01-4.255-.949L3 20l1.395-3.72C3.512 15.042 3 13.574 3 12c0-4.418 4.03-8 9-8s9 3.582 9 8z" />
                    </svg>
                    CHAT NOW
                  </button>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  )
}

export default Drprofile;