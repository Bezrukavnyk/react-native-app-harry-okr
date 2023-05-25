export interface TaskModel {
  id: string;
  content: string;
}

export interface TaskStateModel {
  tasks: TaskModel[];
}

export type RootStackParamListModel = {
  ToDoList: undefined;
  TaskDetail: { taskId: string };
};
