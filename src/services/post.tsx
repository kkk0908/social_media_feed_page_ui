import { IPost } from "../interfaces/IPost";
import Service from "./service";

export async function getPosts(): Promise<any> {
  try {
    const response = await Service.get("/posts");
    return { status: true, data: response.data, message: "Get All" };
  } catch (error: any) {
    return { status: false, data: null, message: "Error" };
  }
}

export async function createPost(postData: IPost): Promise<any> {
  const response = await Service.post(`/posts`, postData);
  return response.data;
}

export const updatePost = async (postId: number, post: any): Promise<any> => {
  const response = await Service.put<any>(`/posts/${postId}`, post);
  return response.data;
};

export const deletePostById = async (postId: string): Promise<any> => {
  await Service.delete(`/posts/${postId}`);
};

export const postActivites = async (postId: string, type: any): Promise<any> => {
  let result = await Service.get(`/posts/activities/${postId}?Type=${type}`);

  return result;
};

