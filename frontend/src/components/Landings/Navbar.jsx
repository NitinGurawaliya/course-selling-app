import React from 'react';

const Navbar = () => {
  return (
    <nav className="bg-black fixed top-0 right-0 left-0 h-15 p-4">
      <div className="container mx-auto flex justify-between items-center">
        <div className="text-white font-bold text-xl">Courser</div>
        <div className="space-x-10">
          <a href="#home" className="text-white hover:text-gray-300">Home</a>
          <a href="#courses" className="text-white hover:text-gray-300">Courses</a>
          <a href="#testimonial" className="text-white hover:text-gray-300">Testimonial</a>
          <a href="#aboutus" className="text-white hover:text-gray-300">About Us</a>
          <a href="#contactus" className="text-white hover:text-gray-300">Contact Us</a>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
