"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.updatePostSchema = exports.createPostSchema = exports.editProfileSchema = exports.signinSchema = exports.signupSchema = void 0;
const zod_1 = require("zod");
// user routes
exports.signupSchema = zod_1.z.object({
    name: zod_1.z.string().min(3).optional(),
    email: zod_1.z.string().email(),
    password: zod_1.z.string().min(6),
});
exports.signinSchema = zod_1.z.object({
    email: zod_1.z.string().email(),
    password: zod_1.z.string().min(6),
});
exports.editProfileSchema = zod_1.z.object({
    name: zod_1.z.string().min(3),
    bio: zod_1.z.string().max(160).optional(),
    profilePic: zod_1.z.string().optional(),
});
// blog routes
exports.createPostSchema = zod_1.z.object({
    title: zod_1.z.string(),
    content: zod_1.z.string(),
    blogImage: zod_1.z.string(),
    published: zod_1.z.boolean(),
});
exports.updatePostSchema = zod_1.z.object({
    title: zod_1.z.string().optional(),
    content: zod_1.z.string().optional(),
    blogImage: zod_1.z.string().optional(),
    published: zod_1.z.boolean(),
    id: zod_1.z.string(),
});
