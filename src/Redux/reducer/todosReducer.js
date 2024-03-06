import { createSlice } from "@reduxjs/toolkit";
import { createTodo, deleteTodo, fetchTodos, updateTodo } from "../api";

const initialState = {
  todos: [],
  status: "idle",
  error: null,
};

const todosSlice = createSlice({
  name: "todos",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(fetchTodos.pending, (state) => {
        state.status = "loading";
      })
      .addCase(fetchTodos.fulfilled, (state, action) => {
        state.status = "idle";
        state.todos = action.payload;
      })
      .addCase(fetchTodos.rejected, (state, action) => {
        state.status = "failed";
        state.error = action.error.message;
      })
      .addCase(createTodo.fulfilled, (state, action) => {
        state.status = "fulfilled";
        //business logic manually below
        // state.todos = [...state.todos,action.payload];
      })
      .addCase(updateTodo.fulfilled, (state, action) => {
        state.status = "fulfilled";
        //business logic manually below
        // const updatedTodoIndex = state.todos.findIndex(todo => todo.id
        // const updatedTodoIndex = state.todos.findIndex(todo => todo.id === action.payload.id);
        // if (updatedTodoIndex !== -1) {
        //   state.todos[updatedTodoIndex] = action.payload;
        // }
      })
      .addCase(deleteTodo.fulfilled, (state, action) => {
        //business logic manually below
        // state.todos = state.todos.filter(todo => todo.id !== action.payload);
        state.status = "fulfilled";
      });
  },
});

export const {} = todosSlice.actions;
export default todosSlice.reducer;
