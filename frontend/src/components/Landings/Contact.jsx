import React from 'react';

const ContactUs = () => {
  return (
    <section id="contactus" className="bg-slate-300 py-20">
      <div className="container mx-auto text-center">
        <h2 className="text-4xl font-bold mb-8">Contact Us</h2>
        <form className="max-w-md mx-auto">
          <div className="mb-4">
            <input type="text" className="w-full px-4 py-2 border rounded-lg" placeholder="Name" />
          </div>
          <div className="mb-4">
            <input type="email" className="w-full px-4 py-2 border rounded-lg" placeholder="Email" />
          </div>
          <div className="mb-4">
            <textarea className="w-full px-4 py-2 border rounded-lg" placeholder="Message" rows="4"></textarea>
          </div>
          <button className="bg-blue-600 text-white px-4 py-2 rounded">Send Message</button>
        </form>
      </div>
    </section>
  );
};

export default ContactUs;

