import PostService from '../api/services/post-service.ts';
import { useEffect } from 'react';
import { useFetching } from '../hooks/use-fetching.ts';
import { PostsList } from '../components/posts-list.tsx';
import { useAppContext } from '../context/app-context.tsx';

export const Home = () => {
  const { searchedPosts, setPosts } = useAppContext();

  const [fetchPosts, isLoading, error] = useFetching(async () => {
    const data = await PostService.getAllPosts();
    setPosts(data);
  });

  useEffect(() => {
    fetchPosts();
  }, []);

  if (error) return (
    <div className="container message-container">
      <h3>{error}</h3>
    </div>
  );

  return (
    <>
      <div className="container">
        <PostsList
          posts={searchedPosts}
          isLoading={isLoading}
        />
      </div>
    </>
  );
};
