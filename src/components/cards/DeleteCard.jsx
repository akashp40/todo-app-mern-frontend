import React from 'react';

const DeleteCard = ({ taskName, onDeleteConfirm, onCancel }) => {
  return (
    <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-50">
      <div className="bg-white rounded-lg shadow-lg p-6 w-80">
        <h2 className="text-lg font-bold text-white bg-red-500 p-4 rounded-t-lg">Delete</h2>
        <p className="text-gray-700 mt-4">Do you want to delete task "{taskName}"?</p>
        <div className="flex justify-end space-x-4 mt-6">
          <button
            onClick={onCancel}
            className="bg-gray-300 hover:bg-gray-400 text-gray-700 py-2 px-4 rounded"
          >
            No
          </button>
          <button
            onClick={onDeleteConfirm}
            className="bg-red-500 hover:bg-red-700 text-white py-2 px-4 rounded"
          >
            Yes
          </button>
        </div>
      </div>
    </div>
  );
};

export default DeleteCard;
