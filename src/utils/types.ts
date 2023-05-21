export interface Task {
  id: string;
  content: string;
}

export interface TaskState {
  tasks: Task[];
}

export type RootStackParamList = {
  ToDoList: undefined;
  TaskDetail: { taskId: string };
};
