import React, { useEffect, useState } from 'react';

export const blogIndex = [
  {
    title: 'Yearly Review 2024',
    date: '2025-01-15',
    filename: 'yearly-review-2024.md'
  }
];

const BlogList: React.FC = () => {
  const [posts, setPosts] = useState<BlogPost[]>([]);

  useEffect(() => {
    const loadPosts = async () => {
      const loadedPosts = await Promise.all(
        blogIndex.map(async (metadata) => {
          const response = await fetch(`/blog-posts/${metadata.filename}`);
          const content = await response.text();

          return {
            ...metadata,
            content
          };
        })
      );

      setPosts(loadedPosts);
    };

    loadPosts();
  }, []);

  // Gets the first 200 characters and cuts off with ...
  const getPreview = (content: string | undefined) => {
    if (!content) return '';
    const previewLength = 200;
    const cleanText = content.replace(/[#*`]/g, ''); // Remove markdown symbols
    return cleanText.slice(0, previewLength) + (cleanText.length > previewLength ? '...' : '');
  };

  return (
    <div className='blogs'>
      <div className='posts'>
        {posts.map((post) => (
          <article key={post.filename} className='blog-post-card'>
            <div className='post-header'>
              <h2 className="post-title">
                {post.title}
              </h2>
              <time className='post-date'>
                {new Date(post.date).toLocaleDateString()}
              </time>
            </div>
            <div className='post-preview'>
              {getPreview(post.content)}
            </div>
            <div className='post-buttons'>
              <a className='select-button' href={`/#/blog/${post.filename.replace('.md', '')}`}>
                Read More
              </a>
            </div>
          </article>
        ))}
      </div>
    </div>
  );
};

export default BlogList;