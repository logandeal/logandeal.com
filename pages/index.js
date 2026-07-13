import Link from 'next/link'

function IndexPage() {
  return (
    <>
      <div>
        My name is Logan Deal. I'm a computer science entrepreneur. See what's up (or down):
      </div>
      <br/>
      <p>You can check out my most recent{' '}
      <Link className='post-link' href='/blog'>blog post</Link>
      </p>
      <p>or view cool new stuff in my{' '}
      <Link className='post-link' href='/portfolio'>portfolio</Link>
      .</p>
      <style jsx>{`
        :global(a.post-link) {
          color: orange;
        }
      `}</style>
    </>
  );
}

IndexPage.backgroundImage = "coding.jpeg";

export default IndexPage;