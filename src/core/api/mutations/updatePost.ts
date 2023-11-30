import { Post } from "../../models/post.type";
import { graphQLClient } from "../client";

interface UpdatePostResponse {
  updatePost: Post;
}

export const updatePost = async ({
  postId,
  updatedPost,
}: {
  postId: number;
  updatedPost: { title: string; body: string };
}): Promise<Post> => {
  const mutation = `
    mutation UpdatePost($id: ID!, $title: String!, $body: String!) {
      updatePost(id: $id, input: { title: $title, body: $body }) {
        id
        title
        body
      }
    }
  `;

  const variables = { id: postId, ...updatedPost };
  const data = await graphQLClient.request<UpdatePostResponse>(mutation, variables);

  return data.updatePost;
};
