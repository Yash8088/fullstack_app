import { Post, User } from "./models";
import { connectToDb } from "./utils";
import { unstable_noStore as noStore } from "next/cache";

export const getPosts = async () => {
  try {
    connectToDb();
    const posts = await Post.find(); // all the posts we find
    return posts;
  } catch (err) {
    console.log(err);
    throw new Error("failed to fetch posts!");
  }
};

export const getPost = async (slug) => {
  try {
    connectToDb();
    const post = await Post.findOne({ slug });
    return post;
  } catch (err) {
    console.log(err);
    throw new Error("Failed to fetch post!");
  }
};

export const getUser = async (id) => {
  noStore(); //stops caching
  try {
    connectToDb();
    const user = await User.findById(id);
    // console.log("User", user); log to test database info
    return user;
  } catch (err) {
    console.log(err);
    throw new Error("failed to fetch user!");
  }
};

export const getUsers = async (id) => {
  try {
    connectToDb();
    const users = await User.find(); // all the users we find
    return users;
  } catch (err) {
    console.log(err);
    throw new Error("failed to fetch users!");
  }
};
