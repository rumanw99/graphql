import { Post } from "../../models/post.type";
import { graphQLClient } from "../client";

interface CreatePostResponse {
  createPost: Post;
}

export const createPost = async (newPost: {
  title: string;
  body: string;
}): Promise<Post> => {
  const mutation = `
    mutation CreatePost($title: String!, $body: String!) {
      createPost(input: { title: $title, body: $body }) {
        id
        title
        body
      }
    }
  `;

  const variables = { title: newPost.title, body: newPost.body };
  const data = await graphQLClient.request<CreatePostResponse>(mutation, variables);

  return data.createPost;
};
