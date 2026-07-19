import { useEffect } from 'react';
import Script from 'next/script';

export default function FeedSection() {
  useEffect(() => {
    if (window.twttr?.widgets) {
      window.twttr.widgets.load();
    }
  }, []);

  return (
    <>
      <section id='feed'>
        <h2>Feed</h2>
        <div className='feed-grid'>
          <a
            className='twitter-timeline'
            data-theme='dark'
            href='https://twitter.com/CaptainSwoosh_'
          >
            Tweets by CaptainSwoosh_
          </a>
          <a
            className='linkedin-card'
            href='https://www.linkedin.com/in/loganedeal/'
            target='_blank'
            rel='noopener noreferrer'
          >
            <h3>Connect on LinkedIn</h3>
            <p>Follow along for career updates and posts.</p>
          </a>
        </div>
      </section>
      <Script
        src='https://platform.twitter.com/widgets.js'
        strategy='lazyOnload'
      />
      <style jsx>{`
        section {
          max-width: 640px;
        }
        .feed-grid {
          display: flex;
          flex-wrap: wrap;
          gap: 1.5rem;
          align-items: flex-start;
        }
        .linkedin-card {
          display: block;
          color: #fff;
          text-decoration: none;
          background: #3a3a3a;
          border-radius: 8px;
          padding: 1.5rem;
          min-width: 220px;
        }
        .linkedin-card h3 {
          margin: 0 0 0.5rem;
        }
        .linkedin-card p {
          margin: 0;
          color: #bdbdbd;
          font-size: 0.9rem;
        }
      `}</style>
    </>
  );
}
