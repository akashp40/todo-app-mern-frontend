import React from 'react';
import { FaTasks } from "react-icons/fa";
import { useNavigate } from 'react-router-dom';


const Navbar = () => {

  const navigate = useNavigate();

  return (
    <nav className="flex justify-between items-center p-4 bg-gray-800 text-white">
         <div className="flex items-center  space-x-2">
      <div className="w-6 h-6 bg-red-500 ml-12  rounded flex items-center justify-center">
        <FaTasks className="text-white" />
      </div>
      <span className="text-xl  font-semibold">Tasks</span>
    </div>
      <div className="flex items-center space-x-4">
        <button
          onClick={
            () => navigate("/newTask")
          }
        className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded">New Task</button>
        <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded">Refresh</button>
        <input
          type="text"
          placeholder="Search..."
          className="px-4 py-2 rounded bg-gray-700 border border-gray-600 text-white"
        />
      </div>
    </nav>
  );
};

export default Navbar;
