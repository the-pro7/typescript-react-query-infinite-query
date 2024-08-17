# Tanstack React Query Infinite Querying

This app baically showcases how infinite querying works in Tanstack React Query.

## Technologies used for this app

- React with Typescript

- Axios (For data fetching)

- Tanstack Query (formerly known as React Query)

## A code snippet from this app
This shows how the `useInfiniteQuery()` function is used to query data based on pages

```jsx
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
```

The data fethed is then rendered like this:
```jsx
 <div>
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
```

## Functionalities of this app

1. Fetch data from `https://jsonplaceholder.typicode.com/posts?_page={num}` using `axios`.

1. Display data using a dedicated React component

1. Load more data by clicking a button
   - `<button onClick={() => fetchNextPage()}>Load more</buton>`

## Conclusion
This definitely not the best of documentation 😅, but well, this what I can say about infinite querying with Tanstack Query. I hope you learned something 😁. Also, be sure to clone the project and send over a pull request of any additions 😁😁!!

Happy Hacking!!!

## For enquiries
Contact me: ameyawemmanuel900@gmail.com