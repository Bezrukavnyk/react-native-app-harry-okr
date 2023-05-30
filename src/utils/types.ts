export interface InitialStateModel {
  posts: PostModel[] | null;
  post: PostModel | null;
  isLoading: boolean;
}

export type RootStackParamListModel = {
  ToDoList: undefined;
  PostDetail: { postId: number };
};

export type PostModel = {
  userId?: number;
  id?: number;
  title: string;
  body: string;
};
