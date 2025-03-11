import { PostItem } from './post-item.tsx';
import type { IPost } from '../types/types.ts';
import { Loader } from './ui/loader/loader.tsx';
import { createPortal } from 'react-dom';
import { Modal } from './ui/modal/modal.tsx';
import { useState } from 'react';

interface PostsListProps {
  posts: IPost[];
  isLoading: boolean;
}

export const PostsList = ({ posts, isLoading }: PostsListProps) => {
  const [selectedPost, setSelectedPost] = useState<IPost | null>(null);
  const [isPostModalOpen, setIsPostModalOpen] = useState<boolean>(false);

  const onPostClick = (post: IPost) => {
    setIsPostModalOpen(true);
    setSelectedPost(post);
  };

  if (!posts.length && !isLoading) return (
    <div className="container message-container">
      <h3>No posts found</h3>
    </div>
  );

  if (isLoading) return <Loader/>;

  return (
    <>
      <div className="posts-list">
        {posts && posts.map((post, index) => (
          <PostItem
            key={index}
            post={post}
            onClick={() => onPostClick(post)}
          />
        ))}
      </div>

      {selectedPost && createPortal(
        <Modal
          open={isPostModalOpen}
          setIsOpen={setIsPostModalOpen}
        >
          <div className="post-modal-content">
            <PostItem
              post={selectedPost}
              variant="horizontal"
            />
          </div>
        </Modal>,
        document.body
      )}
    </>
  );
};
