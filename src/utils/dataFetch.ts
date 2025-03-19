// ENDPOINT -> https://jsonplaceholder.typicode.com/posts
import axios from "axios";

export type PostType = {
  userId: number;
  id: number;
  title: string;
  body: string;
};

async function getPosts({
  pageParam,
}: {
  pageParam: number;
}): Promise<PostType[]> {
  try {
    const response = await axios.get<PostType[]>(
      `https://jsonplaceholder.typicode.com/posts?_page=${pageParam}`
    );

    if (response.status !== 200) {
      throw new Error("An error occurred while trying to fetch posts");
    }

    return response.data;
  } catch (error) {
    console.error("Failed to fetch posts:", error);
    // It's often better to rethrow the error or return a default value if appropriate
    throw error;
  }
}

export { getPosts };
