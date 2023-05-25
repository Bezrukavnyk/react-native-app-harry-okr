import { createSlice, PayloadAction } from "@reduxjs/toolkit";

import { TaskModel, TaskStateModel } from "../utils/types";
import { RootState } from "./store";
import { createPost, deletePost, fetchPost, fetchPosts } from "./taskAsync";

const initialState: TaskStateModel = {
  tasks: [],
  posts: [],
  isLoading: false,
  post: null,
};

export const taskSlice = createSlice({
  name: "tasks",
  initialState,
  reducers: {
    addTask: (state, action: PayloadAction<TaskModel>) => {
      state.tasks.push(action.payload);
    },
    removeTask: (state, action: PayloadAction<string>) => {
      state.tasks = state.tasks.filter((task) => task.id !== action.payload);
    },
  },
  extraReducers: {
    [fetchPosts.pending.type]: (state) => {
      state.isLoading = true;
    },
    [fetchPosts.fulfilled.type]: (state, action) => {
      state.isLoading = false;
      state.posts = action.payload;
    },
    [fetchPost.pending.type]: (state) => {
      state.isLoading = true;
    },
    [fetchPost.fulfilled.type]: (state, action) => {
      state.isLoading = false;
      state.post = action.payload;
    },
    [deletePost.pending.type]: (state) => {
      state.isLoading = true;
    },
    [createPost.pending.type]: (state) => {
      state.isLoading = true;
    },
  },
});

export const selectorTasks = (state: RootState) => state.tasks.tasks;
export const selectorPosts = (state: RootState) => state.tasks.posts;
export const selectorPost = (state: RootState) => state.tasks.post;
export const selectorLoading = (state: RootState) => state.tasks.isLoading;

export const { addTask, removeTask } = taskSlice.actions;

export default taskSlice.reducer;
