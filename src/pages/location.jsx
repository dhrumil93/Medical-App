import React from 'react';

const Location = () => {
  const locations = [
    {
      id: 1,
      image: "https://img.freepik.com/free-photo/modern-hospital-building_1127-3184.jpg",
      name: "Main Hospital",
      phone: "+123 456 78 91",
      email: "hello@luxi.com",
      address: "Lorem ipsum street no 14 Block A",
      section: 1,
      status: "Open 24/7"
    },
    {
      id: 2,
      image: "https://img.freepik.com/free-photo/modern-medical-clinic-exterior_1127-3192.jpg",
      name: "Downtown Clinic",
      phone: "+123 456 78 91",
      email: "hello@luxi.com",
      address: "Lorem ipsum street no 14 Block A",
      section: 1,
      status: "Open Today"
    },
    {
      id: 3,
      image: "https://img.freepik.com/free-photo/hospital-reception-desk_1127-3195.jpg",
      name: "Medical Center",
      phone: "+123 456 78 91",
      email: "hello@luxi.com",
      address: "Lorem ipsum street no 14 Block A",
      section: 1,
      status: "Open Today"
    },
    {
      id: 4,
      image: "https://img.freepik.com/free-photo/modern-clinic-facade_1127-3196.jpg",
      name: "Specialty Clinic",
      phone: "+123 456 78 91",
      email: "hello@luxi.com",
      address: "Lorem ipsum street no 14 Block A",
      section: 2,
      status: "Open Today"
    },
    {
      id: 5,
      image: "https://img.freepik.com/free-photo/modern-hospital-exterior_1127-3198.jpg",
      name: "Emergency Center",
      phone: "+123 456 78 91",
      email: "hello@luxi.com",
      address: "Lorem ipsum street no 14 Block A",
      section: 2,
      status: "Open 24/7"
    },
    {
      id: 6,
      image: "https://img.freepik.com/free-photo/modern-medical-facility_1127-3199.jpg",
      name: "Family Care Center",
      phone: "+123 456 78 91",
      email: "hello@luxi.com",
      address: "Lorem ipsum street no 14 Block A",
      section: 2,
      status: "Open Today"
    }
  ];

  return (
    <div className="pt-24 px-4 md:px-8 max-w-7xl mx-auto mb-16">
      <div className="text-center mb-12">
        <h2 className="text-3xl md:text-4xl font-bold text-gray-800 mb-4">
          Our Locations
        </h2>
        <p className="text-gray-600 max-w-2xl mx-auto">
          Find the nearest medical facility in your area. We're here to serve you with multiple locations across the city.
        </p>
      </div>

      <div className="space-y-12">
        <div>
          <h3 className="text-2xl font-bold text-gray-800 mb-6">Primary Care Centers</h3>
          <div className="flex flex-nowrap overflow-x-auto gap-6 pb-4 scrollbar-hide">
            {locations.filter(loc => loc.section === 1).map((location) => (
              <div key={location.id} className="flex-none w-[400px]">
                <LocationCard location={location} />
              </div>
            ))}
          </div>
        </div>

        <div>
          <h3 className="text-2xl font-bold text-gray-800 mb-6">Specialty Centers</h3>
          <div className="flex flex-nowrap overflow-x-auto gap-6 pb-4 scrollbar-hide">
            {locations.filter(loc => loc.section === 2).map((location) => (
              <div key={location.id} className="flex-none w-[400px]">
                <LocationCard location={location} />
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

const LocationCard = ({ location }) => (
  <div className="bg-white rounded-xl overflow-hidden shadow-sm hover:shadow-lg transition-all duration-300">
    <div className="flex flex-col md:flex-row h-[180px]">
      <div className="md:w-1/3 h-[180px] md:h-full relative overflow-hidden">
        <img 
          src={location.image} 
          alt={location.name}
          className="w-full h-full object-cover hover:scale-105 transition-transform duration-300"
        />
        <span className="absolute top-2 right-2 bg-green-500 text-white text-xs px-3 py-1 rounded-full">
          {location.status}
        </span>
      </div>

      <div className="md:w-2/3 p-4 flex flex-col justify-between bg-gradient-to-br from-white to-gray-50">
        <div>
          <h3 className="text-lg font-bold text-gray-800 mb-2 flex items-center justify-between">
            {location.name}
          </h3>

          <div className="grid md:grid-cols-2 gap-2 text-sm">
            <div className="flex items-center gap-2 text-gray-600">
              <div className="bg-green-50 p-1.5 rounded-full">
                <svg className="w-4 h-4 text-green-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                </svg>
              </div>
              <span>{location.phone}</span>
            </div>

            <div className="flex items-center gap-2 text-gray-600">
              <div className="bg-blue-50 p-1.5 rounded-full">
                <svg className="w-4 h-4 text-blue-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                </svg>
              </div>
              <span>{location.email}</span>
            </div>

            <div className="flex items-center gap-2 text-gray-600 md:col-span-2">
              <div className="bg-red-50 p-1.5 rounded-full">
                <svg className="w-4 h-4 text-red-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                </svg>
              </div>
              <span>{location.address}</span>
            </div>
          </div>
        </div>

        <div className="flex gap-2 mt-3">
          <button className="flex-1 px-4 py-1.5 bg-gray-100 text-gray-700 rounded-full text-sm font-medium hover:bg-gray-200 transition-colors duration-300 flex items-center justify-center gap-1">
            <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 20l-5.447-2.724A1 1 0 013 16.382V5.618a1 1 0 011.447-.894L9 7m0 13l6-3m-6 3V7m6 10l4.553 2.276A1 1 0 0021 18.382V7.618a1 1 0 00-.553-.894L15 4m0 13V4m0 0L9 7" />
            </svg>
            DIRECTIONS
          </button>
          <button className="flex-1 px-4 py-1.5 bg-green-500 text-white rounded-full text-sm font-medium hover:bg-green-600 transition-colors duration-300 flex items-center justify-center gap-1">
            <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 12h.01M12 12h.01M16 12h.01M21 12c0 4.418-4.03 8-9 8a9.863 9.863 0 01-4.255-.949L3 20l1.395-3.72C3.512 15.042 3 13.574 3 12c0-4.418 4.03-8 9-8s9 3.582 9 8z" />
            </svg>
            CONTACT
          </button>
        </div>
      </div>
    </div>
  </div>
);

const styles = `
  .scrollbar-hide::-webkit-scrollbar {
    display: none;
  }
  .scrollbar-hide {
    -ms-overflow-style: none;
    scrollbar-width: none;
  }
`;

export default Location;
