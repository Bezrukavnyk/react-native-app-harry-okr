import { createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';

import { PostModel } from '../utils/types';

export const fetchPosts = createAsyncThunk('posts/fetchPosts', async () => {
  const response = await axios.get<PostModel[]>(
    'https://jsonplaceholder.typicode.com/posts',
  );
  return response.data;
});

export const createPost = createAsyncThunk(
  'posts/createPost',
  async (newPost: PostModel, { dispatch }) => {
    try {
      const response = await axios.post<PostModel>(
        'https://jsonplaceholder.typicode.com/posts',
        newPost,
      );
      dispatch(fetchPosts());
    } catch (error) {
      console.log('error');
    }
  },
);

export const deletePost = createAsyncThunk(
  'posts/deletePost',
  async (postId: number, { dispatch }) => {
    try {
      const response = await axios.delete(
        `https://jsonplaceholder.typicode.com/posts/${postId}`,
      );
      dispatch(fetchPosts());
    } catch (error) {
      console.log('error');
    }
  },
);

export const fetchPost = createAsyncThunk(
  'posts/fetchPost',
  async (postId: number) => {
    try {
      const response = await axios.get<PostModel>(
        `https://jsonplaceholder.typicode.com/posts/${postId}`,
      );
      return response.data;
    } catch (error) {
      console.log('error');
    }
  },
);
