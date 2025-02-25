import React, { useEffect, useState } from 'react';

export const blogIndex = [
  {
    title: 'Observation',
    date: '2025-02-08',
    filename: 'observation.md'
  },
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

  const getPreview = (content: string | undefined) => {
    if (!content) return '';
    const previewLength = 200;
    
    // Replace markdown links with their text.
    let cleanText = content.replace(/\[([^\]]+)\]\([^)]+\)/g, '$1');
    
    // Remove other markdown symbols
    cleanText = cleanText.replace(/[#*`]/g, '');
    
    return cleanText.slice(0, previewLength) + (cleanText.length > previewLength ? '...' : '');
  };

  return (
    <div className='layout'>
      <div className='container blogs'>
        <div className='posts'>
          {posts.map((post) => (
            <a key={post.filename} className='blog-post-card' href={`/#/blog/${post.filename.replace('.md', '')}`}>
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
            </a>
          ))}
        </div>
      </div>
    </div>
  );
};

export default BlogList;