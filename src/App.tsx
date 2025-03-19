import "./App.css";
import { useInfiniteQuery } from "@tanstack/react-query";
import { getPosts } from "./utils/dataFetch";
import PostItem from "./components/PostItem";

function App() {
  // const [postValue, setPostValue] = useState<string>("");
  // const [showPosts, setShowPosts] = useState<boolean>(false); // State to manage post visibility

  // const client = new QueryClient();

  // Using useQuery from react-query
  const query = useInfiniteQuery({
    queryKey: ["posts"],
    queryFn: ({ pageParam }) => getPosts({ pageParam }),
    initialPageParam: 1,
    getNextPageParam: (lastPage, allPages) => {
      return lastPage.length ? allPages.length + 1 : undefined;
    },
  });

  const {
    data,
    isLoading,
    isError,
    fetchNextPage,
    hasNextPage,
    isFetchingNextPage,
  } = query;

  // function onSubmit(event: FormEvent<HTMLFormElement>) {
  //   event.preventDefault();
  //   // Handle post submission here
  // }

  // function handleShowPostsClick() {
  //   setShowPosts((prev) => !prev); // Toggle the visibility state
  // }

  console.log(data);

  if (isError) return <h1>Failed to get posts</h1>;
  if (isLoading) return <h1>Loading posts...</h1>;

  return (
    <div>
      {/* <form className="post-form" onSubmit={onSubmit}>
        <input
          type="text"
          value={postValue}
          placeholder="Enter a new post..."
          onChange={(e) => setPostValue(e.target.value)}
        />
        <button>Add post</button>
      </form> */}
      {/* <button onClick={handleShowPostsClick}>
        {showPosts ? "Hide all posts" : "See all posts"}
      </button> */}
      <h1>Your Posts</h1>
      {data?.pages && data?.pages.length > 0 ? (
        data.pages.flatMap((page) =>
          page.map((item, index) => <PostItem post={item} key={index} />)
        )
      ) : (
        <p>No data found</p>
      )}
      <button
        disabled={!hasNextPage || isFetchingNextPage}
        onClick={() => fetchNextPage()}
      >
        {isFetchingNextPage
          ? "Loading more..."
          : hasNextPage
          ? "Load more"
          : "No more posts to load"}
      </button>
    </div>
  );
}

export default App;
