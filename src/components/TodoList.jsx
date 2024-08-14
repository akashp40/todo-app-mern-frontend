import React, { useState, useEffect } from 'react';
import todoService  from '../services/todoService';


const TodoList = () => {
  const [todos, setTodos] = useState([]);
  const [currentPage, setCurrentPage] = useState(1);
  const [todosPerPage] = useState(5); 
  const [totalTodos, setTotalTodos] = useState(0);

  useEffect(() => {
    const loadTodos = async () => {
      const { data, total } = await todoService.getTodos(currentPage, todosPerPage);
      setTodos(data);
      setTotalTodos(total);
    };
    loadTodos();
  }, [currentPage, todosPerPage]);

  const handleEdit = (id) => {
    // Handle edit
  };

  const handleDelete = (id) => {
    // Handle delete
  };

  const handlePageChange = (page) => {
    setCurrentPage(page);
  };

  return (
    <div className="p-4">
      <table className="min-w-full border-collapse">
        <thead>
          <tr>
            <th className="px-4 py-2">Select</th>
            <th className="px-4 py-2">Assigned To</th>
            <th className="px-4 py-2">Status</th>
            <th className="px-4 py-2">Due Date</th>
            <th className="px-4 py-2">Priority</th>
            <th className="px-4 py-2">Comments</th>
            <th className="px-4 py-2">Actions</th>
          </tr>
        </thead>
        <tbody>
          {todos.map((todo) => (
            <tr key={todo.id} className="border-t">
              <td className="px-4 py-2">
                <input type="checkbox" />
              </td>
              <td className="px-4 py-2">{todo.assignedTo}</td>
              <td className="px-4 py-2">{todo.status}</td>
              <td className="px-4 py-2">{todo.dueDate}</td>
              <td className="px-4 py-2">{todo.priority}</td>
              <td className="px-4 py-2">{todo.comments}</td>
              <td className="px-4 py-2">
                <div className="relative">
                  <button className="relative">
                    ▼
                    <div className="absolute right-0 hidden mt-1 bg-white border border-gray-300 rounded shadow-md">
                      <button
                        className="block w-full px-4 py-2 text-left hover:bg-gray-100"
                        onClick={() => handleEdit(todo.id)}
                      >
                        Edit
                      </button>
                      <button
                        className="block w-full px-4 py-2 text-left hover:bg-gray-100"
                        onClick={() => handleDelete(todo.id)}
                      >
                        Delete
                      </button>
                    </div>
                  </button>
                </div>
              </td>
            </tr>
          ))}
        </tbody>
      </table>

      <div className="flex justify-between items-center mt-4">
        <span>Total Todos: {totalTodos}</span>
        <div className="flex space-x-2">
          <button
            className="px-4 py-2 bg-gray-200 rounded"
            onClick={() => handlePageChange(1)}
            disabled={currentPage === 1}
          >
            First
          </button>
          <button
            className="px-4 py-2 bg-gray-200 rounded"
            onClick={() => handlePageChange(currentPage - 1)}
            disabled={currentPage === 1}
          >
            Prev
          </button>
          <span>{currentPage}</span>
          <button
            className="px-4 py-2 bg-gray-200 rounded"
            onClick={() => handlePageChange(currentPage + 1)}
            disabled={currentPage * todosPerPage >= totalTodos}
          >
            Next
          </button>
          <button
            className="px-4 py-2 bg-gray-200 rounded"
            onClick={() => handlePageChange(Math.ceil(totalTodos / todosPerPage))}
            disabled={currentPage * todosPerPage >= totalTodos}
          >
            Last
          </button>
        </div>
      </div>
    </div>
  );
};

export default TodoList;
