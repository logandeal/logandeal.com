import Link from 'next/link';
import { Post } from '../Post';
import { posts } from '../../getAllPosts';

const recentPosts = [...posts].reverse().slice(0, 3);

export default function BlogSection() {
  return (
    <>
      <section id='blog'>
        <h2>Blog</h2>
        {recentPosts.map((post) => (
          <Post key={post.link} post={post} />
        ))}
        <Link href='/blog' className='view-all'>
          View all posts →
        </Link>
      </section>
      <style jsx>{`
        section {
          max-width: 640px;
        }
        .view-all {
          display: inline-block;
          margin-top: 0.5rem;
          color: orange;
          text-decoration: none;
        }
        .view-all:hover {
          text-decoration: underline;
        }
      `}</style>
    </>
  );
}
