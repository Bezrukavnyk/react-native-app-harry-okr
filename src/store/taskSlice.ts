import { createSlice, PayloadAction } from "@reduxjs/toolkit";

import { TaskModel, TaskStateModel } from "../utils/types";
import { RootState } from "./store";

const initialState: TaskStateModel = {
  tasks: [],
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
});

export const selectorTasks = (state: RootState) => state.tasks.tasks;

export const { addTask, removeTask } = taskSlice.actions;

export default taskSlice.reducer;
