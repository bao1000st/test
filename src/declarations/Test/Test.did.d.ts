import type { Principal } from '@dfinity/principal';
export interface Bio {
  'username' : [] | [string],
  'email' : [] | [string],
  'phone_number' : [] | [string],
}
export interface Bio__1 {
  'username' : [] | [string],
  'email' : [] | [string],
  'phone_number' : [] | [string],
}
export type Error = { 'PostAlreadyExists' : null } |
  { 'UserAlreadyExists' : null } |
  { 'NotAuthorized' : null } |
  { 'PostNotFound' : null } |
  { 'UserNotFound' : null };
export interface Post {
  'updated_at' : bigint,
  'active' : boolean,
  'info' : Post_Info__1,
  'created_at' : bigint,
  'author' : Principal,
}
export interface Post_Info { 'title' : [] | [string], 'body' : string }
export interface Post_Info__1 { 'title' : [] | [string], 'body' : string }
export type Result = { 'ok' : null } |
  { 'err' : Error };
export type Result_1 = { 'ok' : User } |
  { 'err' : Error };
export type Result_2 = { 'ok' : Post } |
  { 'err' : Error };
export interface User {
  'id' : Principal,
  'bio' : Bio__1,
  'updated_at' : bigint,
  'created_at' : bigint,
}
export interface _SERVICE {
  'activePost' : (arg_0: bigint) => Promise<Result>,
  'createPost' : (arg_0: Post_Info) => Promise<Result>,
  'createUser' : (arg_0: Bio) => Promise<Result>,
  'deletePost' : (arg_0: bigint) => Promise<Result>,
  'deleteUser' : () => Promise<Result>,
  'listPosts' : () => Promise<Array<Post>>,
  'listUsers' : () => Promise<Array<User>>,
  'readPost' : (arg_0: bigint) => Promise<Result_2>,
  'readUser' : () => Promise<Result_1>,
  'updatePost' : (arg_0: bigint, arg_1: Post_Info) => Promise<Result>,
  'updateUser' : (arg_0: Bio) => Promise<Result>,
}
