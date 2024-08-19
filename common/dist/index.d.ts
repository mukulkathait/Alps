import { z } from "zod";
export declare const signupSchema: z.ZodObject<{
    name: z.ZodOptional<z.ZodString>;
    email: z.ZodString;
    password: z.ZodString;
}, "strip", z.ZodTypeAny, {
    email: string;
    password: string;
    name?: string | undefined;
}, {
    email: string;
    password: string;
    name?: string | undefined;
}>;
export declare const signinSchema: z.ZodObject<{
    email: z.ZodString;
    password: z.ZodString;
}, "strip", z.ZodTypeAny, {
    email: string;
    password: string;
}, {
    email: string;
    password: string;
}>;
export declare const editProfileSchema: z.ZodObject<{
    name: z.ZodString;
    bio: z.ZodOptional<z.ZodString>;
    profilePic: z.ZodOptional<z.ZodString>;
}, "strip", z.ZodTypeAny, {
    name: string;
    bio?: string | undefined;
    profilePic?: string | undefined;
}, {
    name: string;
    bio?: string | undefined;
    profilePic?: string | undefined;
}>;
export declare const createPostSchema: z.ZodObject<{
    title: z.ZodString;
    content: z.ZodString;
    blogImage: z.ZodString;
    published: z.ZodBoolean;
}, "strip", z.ZodTypeAny, {
    title: string;
    content: string;
    blogImage: string;
    published: boolean;
}, {
    title: string;
    content: string;
    blogImage: string;
    published: boolean;
}>;
export declare const updatePostSchema: z.ZodObject<{
    title: z.ZodOptional<z.ZodString>;
    content: z.ZodOptional<z.ZodString>;
    blogImage: z.ZodOptional<z.ZodString>;
    published: z.ZodBoolean;
    id: z.ZodString;
}, "strip", z.ZodTypeAny, {
    published: boolean;
    id: string;
    title?: string | undefined;
    content?: string | undefined;
    blogImage?: string | undefined;
}, {
    published: boolean;
    id: string;
    title?: string | undefined;
    content?: string | undefined;
    blogImage?: string | undefined;
}>;
export type SignupInput = z.infer<typeof signupSchema>;
export type SigninInput = z.infer<typeof signinSchema>;
export type EditProfileInput = z.infer<typeof editProfileSchema>;
export type CreateBlogInput = z.infer<typeof createPostSchema>;
export type UpdateBlogInput = z.infer<typeof updatePostSchema>;
