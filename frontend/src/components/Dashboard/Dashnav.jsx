import React from 'react';
import { Searchbar } from './Searchbar';

const Dashnav = () => {
  return (
    <nav className="bg-gray-100 border-grey-200 border-2 fixed top-0 right-0 left-0 h-15 p-4">
      <div className="container mx-auto flex justify-between items-center">
        <div className="text-black font-bold text-xl">Courser</div>
        <div className='flex flex-1 justify-center'>
          <Searchbar />
        </div>
       

        
      </div>
    </nav>
  );
};

export default Dashnav;
