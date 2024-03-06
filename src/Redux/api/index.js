import { createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";
const BASE_URL = "https://jsonplaceholder.typicode.com/todos";
export const fetchTodos = createAsyncThunk("todos/fetchTodos", async () => {
  const response = await axios.get(BASE_URL);
  return response.data;
});

export const createTodo = createAsyncThunk(
  "todos/createTodo",
  async (newTodo) => {
    const response = await axios.post(`${BASE_URL}`, newTodo);
    return response.status;
  }
);

export const updateTodo = createAsyncThunk(
  "todos/updateTodo",
  async (updatedTodo) => {
    const response = await axios.put(
      `${BASE_URL}/${updatedTodo.id}`,
      updatedTodo
    );
    return response.status;
  }
);

export const deleteTodo = createAsyncThunk(
  "todos/deleteTodo",
  async (todoId) => {
    const response = await axios.delete(`${BASE_URL}/${todoId}`);
    return response.status;
  }
);
