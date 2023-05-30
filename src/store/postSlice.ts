import { createSlice } from '@reduxjs/toolkit';

import { InitialStateModel } from '../utils/types';
import { RootState } from './store';
import { createPost, deletePost, fetchPost, fetchPosts } from './postAsync';

const initialState: InitialStateModel = {
  posts: [],
  isLoading: false,
  post: null,
};

export const postSlice = createSlice({
  name: 'posts',
  initialState,
  reducers: {},
  extraReducers: {
    [fetchPosts.pending.type]: state => {
      state.isLoading = true;
    },
    [fetchPosts.fulfilled.type]: (state, action) => {
      state.isLoading = false;
      state.posts = action.payload;
    },
    [fetchPost.pending.type]: state => {
      state.isLoading = true;
    },
    [fetchPost.fulfilled.type]: (state, action) => {
      state.isLoading = false;
      state.post = action.payload;
    },
    [deletePost.pending.type]: state => {
      state.isLoading = true;
    },
    [createPost.pending.type]: state => {
      state.isLoading = true;
    },
  },
});

export const selectorPosts = (state: RootState) => state.posts.posts;
export const selectorPost = (state: RootState) => state.posts.post;
export const selectorLoading = (state: RootState) => state.posts.isLoading;

export default postSlice.reducer;
