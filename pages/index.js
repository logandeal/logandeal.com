import Link from 'next/link'
import { Post } from "../components/Post";
import { posts } from "../getAllPosts";
import React from 'react'

function IndexPage() {
  return (
    <>
      <div>
        My name is Logan Deal. I'm a computer science entrepreneur. See what's up (or down):
      </div>
      <br/>
      <p>You can check out my most recent &nbsp;
      <Link href='/blog'>
        <a>blog post</a>
      </Link>
      </p>
      <p>or view cool new stuff in my &nbsp;
      <Link href='/portfolio'>
        <a>portfolio</a>
      </Link>
      .</p>
      <style jsx>{`
        a {
          color: orange;
        }
      `}</style>
    </>
  );
}

IndexPage.backgroundImage = "coding.jpeg";

export default IndexPage;