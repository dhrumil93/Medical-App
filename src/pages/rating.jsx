import React from 'react';

const Rating = () => {
  const testimonials = [
    {
      id: 1,
      name: "Jane Doe",
      role: "Chief Digital Officer",
      image: "https://img.freepik.com/free-photo/young-beautiful-woman-pink-warm-sweater-natural-look-smiling-portrait-isolated-long-hair_285396-896.jpg",
      comment: "Nam sollicitudin dignissim nunc, cursus ullamcorper eros vulputate sed. Vestibulum sit amet tortor sit amet libero.",
      rating: 5
    },
    {
      id: 2,
      name: "John Smith",
      role: "Medical Director",
      image: "https://img.freepik.com/free-photo/portrait-white-man-isolated_53876-40306.jpg",
      comment: "Nam sollicitudin dignissim nunc, cursus ullamcorper eros vulputate sed. Vestibulum sit amet tortor sit amet libero.",
      rating: 5
    },
    {
      id: 3,
      name: "Emily Chen",
      role: "Patient Care Coordinator",
      image: "https://img.freepik.com/free-photo/young-asian-woman-smiling-confidently-camera_1262-18255.jpg",
      comment: "Nam sollicitudin dignissim nunc, cursus ullamcorper eros vulputate sed. Vestibulum sit amet tortor sit amet libero.",
      rating: 5
    }
  ];

  return (
    <div className="pt-24 px-4 md:px-8 max-w-7xl mx-auto mb-16">
      <div className="text-center mb-12">
        <h2 className="text-3xl md:text-4xl font-bold text-gray-800 mb-4">
          What Our Patients Say
        </h2>
        <p className="text-gray-600 max-w-2xl mx-auto">
          Real stories from our patients about their experience with our services and care.
        </p>
      </div>

      <div className="flex flex-col md:flex-row gap-8 items-stretch justify-center">
        {testimonials.map((testimonial) => (
          <div 
            key={testimonial.id}
            className="bg-white rounded-[2rem] p-8 flex flex-col items-center text-center max-w-sm transform transition-all duration-300 hover:-translate-y-1 hover:shadow-xl"
          >
         
            <p className="text-gray-600 mb-6">
              {testimonial.comment}
            </p>

          
            <div className="flex gap-1 mb-6">
              {[...Array(testimonial.rating)].map((_, index) => (
                <svg 
                  key={index}
                  className="w-5 h-5 text-yellow-400"
                  fill="currentColor"
                  viewBox="0 0 20 20"
                >
                  <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                </svg>
              ))}
            </div>

      
            <div className="flex flex-col items-center">
              <img 
                src={testimonial.image} 
                alt={testimonial.name}
                className="w-16 h-16 rounded-full object-cover mb-3"
              />
              <h3 className="font-semibold text-gray-800">
                {testimonial.name}
              </h3>
              <p className="text-sm text-gray-500">
                {testimonial.role}
              </p>
            </div>
          </div>
        ))}
      </div>

  
      <div className="flex justify-center gap-2 mt-8">
        {[...Array(6)].map((_, index) => (
          <button
            key={index}
            className={`w-2 h-2 rounded-full transition-all duration-300 
              ${index === 0 ? 'w-8 bg-blue-500' : 'bg-gray-300 hover:bg-gray-400'}`}
            aria-label={`Go to slide ${index + 1}`}
          />
        ))}
      </div>
    </div>
  );
};

export default Rating;