import type { AllPostsResponse, ApiResponse, ProfileResponse, User } from "../../types.ts";
import { api } from "../client.ts";
// ================= Extras =================
// GET /users/bookmarks — your saved posts
export async function getBookmarks(): Promise<AllPostsResponse> {
  const { data } = await api.get<AllPostsResponse>("/users/bookmarks");
  return data;
}
// GET /users/suggestions — people to follow
export async function getSuggestions(): Promise<ApiResponse<User[]>> {
  const { data } = await api.get<ApiResponse<User[]>>("/users/suggestions");
  return data;
}
// PUT /users/:userId/follow — follow toggle
export async function followUser(userId: string): Promise<ApiResponse<User>> {
  const { data } = await api.put<ApiResponse<User>>(`/users/${userId}/follow`);
  return data;
}
// GET /users/:userId/profile — another user's profile
export async function getUserProfile(userId: string): Promise<ProfileResponse> {
  const { data } = await api.get<ProfileResponse>(`/users/${userId}/profile`);
  const raw = data.data as unknown;
  const user = ((raw as { user?: User } | null)?.user ?? raw) as User;
  return { ...data, data: user };
}

// GET /users/:userId/posts — another user's posts
export async function getUserPosts(userId: string): Promise<AllPostsResponse> {
  const { data } = await api.get<AllPostsResponse>(`/users/${userId}/posts`);
  return data;
}
// PUT /users/upload-photo — profile photo
export async function uploadProfilePhoto(photo: File): Promise<ApiResponse<User>> {
  const formData = new FormData();
  formData.append("photo", photo);

  const { data } = await api.put<ApiResponse<User>>("/users/upload-photo", formData);
  return data;
}
