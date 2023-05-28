import axios from "axios";

const BASE_URL = "http://localhost:4000";

export const getPosts = async (): Promise<any> => {
  const response = await axios.get<any[]>(`${BASE_URL}/posts`);
  return response.data;
};

export const createPost = async (post: any): Promise<any> => {
  const response = await axios.post<any>(`${BASE_URL}/posts`, post);
  return response.data;
};

export const updatePost = async (postId: number, post: any): Promise<any> => {
  const response = await axios.put<any>(`${BASE_URL}/posts/${postId}`, post);
  return response.data;
};

export const deletePost = async (postId: number): Promise<void> => {
  await axios.delete(`${BASE_URL}/posts/${postId}`);
};

