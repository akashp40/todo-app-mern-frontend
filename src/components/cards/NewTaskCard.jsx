import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import todoService  from '..//../services/todoService';

const NewTaskCard = () => {

  const [assignedTo, setAssignedTo] = useState('');
  const [status, setStatus] = useState('');
  const [dueDate, setDueDate] = useState('');
  const [priority, setPriority] = useState('');
  const [description, setDescription] = useState('');
  const navigate = useNavigate()

  const handleCancel = () => {
    // Clear all fields
    navigate('/')
  };

  const handleSave = async () => {
    const newTask = {
      assignedTo,
      status,
      dueDate,
      priority,
      description,
    };

    try {
      const savedTask = await todoService.createTodo(newTask);
      console.log('Task saved successfully:', savedTask);
      navigate("/")
    } catch (error) {
      console.error('Failed to save task:', error);
      // Handle error accordingly, e.g., show a notification
    }}
  return (
<div className="flex justify-center items-center min-h-screen">
<div className="bg-white p-6 rounded-lg shadow-lg w-96">      <h2 className="text-xl font-semibold mb-4">New Task</h2>
      <form onSubmit={(e) => e.preventDefault()}>
        <div className="mb-4">
          <label className="block text-gray-700">Assigned To</label>
          <select
            value={assignedTo}
            onChange={(e) => setAssignedTo(e.target.value)}
            className="block w-full mt-2 p-2 border rounded"
          >
            <option value="">Select user</option>
            <option value="User 1">User 1</option>
            <option value="User 2">User 2</option>
            <option value="User 3">User 3</option>
            {/* Add more users as needed */}
          </select>
        </div>
        <div className="mb-4">
          <label className="block text-gray-700">Status</label>
          <select
            value={status}
            onChange={(e) => setStatus(e.target.value)}
            className="block w-full mt-2 p-2 border rounded"
          >
            <option value="">Select status</option>
            <option value="Completed">Completed</option>
            <option value="Not Started">Not Started</option>
            <option value="In Progress">In Progress</option>
          </select>
        </div>
        <div className="mb-4">
          <label className="block text-gray-700">Due Date</label>
          <input
            type="date"
            value={dueDate}
            onChange={(e) => setDueDate(e.target.value)}
            className="block w-full mt-2 p-2 border rounded"
          />
        </div>
        <div className="mb-4">
          <label className="block text-gray-700">Priority</label>
          <select
            value={priority}
            onChange={(e) => setPriority(e.target.value)}
            className="block w-full mt-2 p-2 border rounded"
          >
            <option value="">Select priority</option>
            <option value="High">High</option>
            <option value="Normal">Normal</option>
            <option value="Low">Low</option>
          </select>
        </div>
        <div className="mb-4">
          <label className="block text-gray-700">Description</label>
          <textarea
            value={description}
            onChange={(e) => setDescription(e.target.value)}
            className="block w-full mt-2 p-2 border rounded"
            rows="4"
          />
        </div>
        <div className="flex justify-end space-x-4">
          <button
            type="button"
            onClick={handleCancel}
            className="bg-gray-300 hover:bg-gray-400 text-gray-700 py-2 px-4 rounded"
          >
            Cancel
          </button>
          <button
            type="button"
            onClick={handleSave}
            className="bg-blue-500 hover:bg-blue-700 text-white py-2 px-4 rounded"
          >
            Save
          </button>
        </div>
      </form>
      </div>
    </div>
  );
};

export default NewTaskCard;
