export interface TaskModel {
  id: string;
  content: string;
}

export interface TaskStateModel {
  tasks: TaskModel[];
  posts: PostModel[] | null;
  post: PostModel | null;
  isLoading: boolean;
}

export type RootStackParamListModel = {
  ToDoList: undefined;
  TaskDetail: { postId: number };
};

export type PostModel = {
  userId?: number;
  id?: number;
  title: string;
  body: string;
};
