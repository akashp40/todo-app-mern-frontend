import axios from 'axios';

// Set the base URL for the API
const API_URL = 'http://localhost:8080/tasks'; 

const todoService = {
  // Fetch all todos with pagination
  getTodos: async (page, limit) => {
    try {
      const response = await axios.get(`${API_URL}`, {
        params: { page, limit },
      });
      return response.data;
    } catch (error) {
      console.error('Error fetching todos:', error);
      throw error;
    }
  },

  // Create a new todo
  createTodo: async (todoData) => {
    try {
      console.log("in service add todo")
      const response = await axios.post(`${API_URL}`, todoData);
      return response.data;
    } catch (error) {
      console.error('Error creating todo:', error);
      throw error;
    }
  },

  // Update an existing todo
  updateTodo: async (id, todoData) => {
    try {
      const response = await axios.patch(`${API_URL}/${id}`, todoData);
      return response.data;
    } catch (error) {
      console.error('Error updating todo:', error);
      throw error;
    }
  },

  // Delete a todo
  deleteTodo: async (id) => {
    try {
      const response = await axios.delete(`${API_URL}/${id}`);
      return response.data;
    } catch (error) {
      console.error('Error deleting todo:', error);
      throw error;
    }
  },
};

export default todoService;
