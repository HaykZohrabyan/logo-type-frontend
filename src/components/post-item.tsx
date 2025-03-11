import type { IPost } from '../types/types.ts';

type Variant = 'horizontal' | 'vertical';

interface PostItemProps {
  post: IPost;
  variant?: Variant;
  onClick?: () => void;
}

export const PostItem = (
  {
    post,
    onClick,
    variant = 'vertical'
  }: PostItemProps
) => {
  return (
    <div
      className={variant === 'horizontal' ? 'post-item horizontal' : 'post-item'}
      onClick={onClick}
    >
      <div className="post-item-img">
        <picture>
          <source srcSet={post?.img_2x} width="360" height="230" media="(min-width: 768px)"/>
          <img src={post?.img} alt={post?.title} width="335" height="230"/>
        </picture>
      </div>

      <div className="post-item-content">
        <span>{post?.tags}</span>
        <strong>{post?.title}</strong>

        <div>
          <b>{post?.autor}</b>
          &bull;
          <span>{post?.date}</span>
          &bull;
          <span>{post?.views}</span>
        </div>

        <p>
          {post?.text}
        </p>
      </div>
    </div>
  );
};
