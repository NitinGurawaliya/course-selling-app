import React from 'react';

const Testimonial = () => {
  return (
    <section id="testimonial" className="bg-gray-300 py-20">
      <div className="container mx-auto text-center">
        <h2 className="text-4xl font-bold mb-8">What Our Students Say</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div className="bg-white p-6 rounded-lg shadow-lg">
            <p className="mb-4">"This platform is amazing! I've learned so much."</p>
            <h3 className="text-xl font-bold">Student 1</h3>
          </div>
          <div className="bg-white p-6 rounded-lg shadow-lg">
            <p className="mb-4">"Great courses and great instructors!"</p>
            <h3 className="text-xl font-bold">Student 2</h3>
          </div>
          <div className="bg-white p-6 rounded-lg shadow-lg">
            <p className="mb-4">"I highly recommend CourseApp to everyone."</p>
            <h3 className="text-xl font-bold">Student 3</h3>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Testimonial;
