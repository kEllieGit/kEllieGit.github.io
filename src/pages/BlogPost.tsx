import React, { useEffect, useState } from 'react';
import { blogIndex } from './Blogs';
import { useParams, Link } from 'react-router-dom';
import ReactMarkdown from 'react-markdown';

const BlogPost: React.FC = () => {
  const { slug } = useParams<{ slug: string }>();
  const [post, setPost] = useState<BlogPost | null>(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const loadPost = async () => {
      try {
        const metadata = blogIndex.find(post => post.filename === `${slug}.md`);
        if (!metadata) throw new Error('Post not found');

        const response = await fetch(`/blog-posts/${metadata.filename}`);
        const content = await response.text();

        setPost({ ...metadata, content });
      } catch (error) {
        console.error('Error loading post:', error);
      } finally {
        setLoading(false);
      }
    };

    loadPost();
  }, [slug]);

  const handleShare = () => {
    if (navigator.share) {
      navigator.share({
        title: post?.title,
        text: post?.title,
        url: window.location.href,
      }).catch(error => console.error('Error sharing:', error));
    } else {
      alert('Share not supported on this browser');
    }
  };

  if (loading) return <div>Loading...</div>;
  if (!post) return <div>Post not found</div>;

  return (
    <div className='blog-post'>
      <article>
        <div className='post-header'>
          <h1 className='post-title'>{post.title}</h1>
          <time className='post-date'>{new Date(post.date).toLocaleDateString()}</time>
        </div>
        <div className='post-content'>
          <ReactMarkdown>{post.content}</ReactMarkdown>
        </div>
      </article>
      <Link to='/blog' className='select-button'>Back</Link>
      <button onClick={handleShare}>Share</button>
    </div>
  );
};

export default BlogPost;
