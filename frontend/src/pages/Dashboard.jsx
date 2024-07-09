import React from 'react';
import { Sidebar } from '../components/Dashboard/Sidebar';
import Dashnav from '../components/Dashboard/Dashnav';
import Coursecard from '../components/Dashboard/Coursecard';

const Dashboard = () => {
  return (
    <div>
      <Sidebar />
      <Dashnav />
      <div className="ml-64 mt-20 p-4">
        <div className="grid grid-cols-3 gap-2">
          <Coursecard />
          <Coursecard />
          <Coursecard />
          <Coursecard />
          <Coursecard />
          <Coursecard />

          <Coursecard />
        </div>
      </div>
    </div>
  );
}

export default Dashboard;
