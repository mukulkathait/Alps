import { z } from "zod";

// user routes
export const signupSchema = z.object({
  name: z.string().min(3).optional(),
  email: z.string().email(),
  password: z.string().min(6),
});

export const signinSchema = z.object({
  email: z.string().email(),
  password: z.string().min(6),
});

export const editProfileSchema = z.object({
  name: z.string().min(3),
  bio: z.string().max(160).optional(),
  profilePic: z.string().optional(),
});

// blog routes
export const createPostSchema = z.object({
  title: z.string(),
  content: z.string(),
  published: z.boolean().optional(),
});

export const updatePostSchema = z.object({
  title: z.string().optional(),
  content: z.string().optional(),
  published: z.boolean().optional(),
  id: z.string(),
});

export type SignupInput = z.infer<typeof signupSchema>;
export type SigninInput = z.infer<typeof signinSchema>;
export type EditProfileInput = z.infer<typeof editProfileSchema>;
export type CreateBlogInput = z.infer<typeof createPostSchema>;
export type UpdateBlogInput = z.infer<typeof updatePostSchema>;
