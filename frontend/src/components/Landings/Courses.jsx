import React from 'react';

const Courses = () => {
  return (
    <section id="courses" className="bg-white py-20">
      <div className="container mx-auto text-center">
        <h2 className="text-4xl font-bold mb-8">Our Courses</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div className="bg-gray-100 p-6 rounded-lg shadow-lg">
            <h3 className="text-2xl font-bold mb-2">Course 1</h3>
            <p className="mb-4">Description of Course 1</p>
            <button className="bg-blue-600 text-white px-4 py-2 rounded">Learn More</button>
          </div>
          <div className="bg-gray-100 p-6 rounded-lg shadow-lg">
            <h3 className="text-2xl font-bold mb-2">Course 2</h3>
            <p className="mb-4">Description of Course 2</p>
            <button className="bg-blue-600 text-white px-4 py-2 rounded">Learn More</button>
          </div>
          <div className="bg-gray-100 p-6 rounded-lg shadow-lg">
            <h3 className="text-2xl font-bold mb-2">Course 3</h3>
            <p className="mb-4">Description of Course 3</p>
            <button className="bg-blue-600 text-white px-4 py-2 rounded">Learn More</button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Courses;
