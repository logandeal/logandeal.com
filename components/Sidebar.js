import { AiFillGithub, AiFillLinkedin } from 'react-icons/ai';
import { FaXTwitter } from 'react-icons/fa6';

const SECTIONS = [
  { id: 'about', label: 'About' },
  { id: 'blog', label: 'Blog' },
  { id: 'projects', label: 'Projects' },
  { id: 'timeline', label: 'Timeline' },
  { id: 'more', label: 'More' },
];

export default function Sidebar({ activeId }) {

  return (
    <>
      <aside>
        <div className='intro'>
          <img
            src='/me.png'
            width='56'
            height='56'
            alt='Logan Deal'
            style={{ objectFit: 'cover' }}
          />
          <h1>Logan Deal</h1>
          <p className='tagline'>Computer science entrepreneur.</p>
        </div>
        <nav>
          {SECTIONS.map((section) => (
            <a
              key={section.id}
              href={`#${section.id}`}
              className={activeId === section.id ? 'active' : undefined}
            >
              {section.label}
            </a>
          ))}
        </nav>
        <div className='socials'>
          <a
            href='https://www.linkedin.com/in/loganedeal/'
            target='_blank'
            rel='noopener noreferrer'
            aria-label='LinkedIn'
          >
            <AiFillLinkedin />
          </a>
          <a
            href='https://github.com/logandeal'
            target='_blank'
            rel='noopener noreferrer'
            aria-label='GitHub'
          >
            <AiFillGithub />
          </a>
          <a
            href='https://x.com/CaptainSwoosh_'
            target='_blank'
            rel='noopener noreferrer'
            aria-label='Twitter'
          >
            <FaXTwitter />
          </a>
        </div>
      </aside>
      <style jsx>{`
        aside {
          display: flex;
          flex-direction: column;
          justify-content: space-between;
          width: 260px;
          flex-shrink: 0;
          height: 100vh;
          position: sticky;
          top: 0;
          padding: 3rem 2rem;
          box-sizing: border-box;
        }
        .intro h1 {
          font-size: 2.5rem;
          margin: 1rem 0 0.5rem;
        }
        .tagline {
          color: #bdbdbd;
          margin: 0;
        }
        nav {
          display: flex;
          flex-direction: column;
          gap: 0.75rem;
        }
        nav :global(a) {
          text-decoration: none;
          color: #bdbdbd;
          font-size: 0.95rem;
        }
        nav :global(a:hover),
        nav :global(a.active) {
          color: #fff;
          text-decoration: underline;
        }
        .socials {
          display: flex;
          gap: 1.25rem;
          font-size: 1.5rem;
        }
        .socials :global(a) {
          color: #fff;
          display: flex;
        }
        @media (max-width: 900px) {
          aside {
            width: auto;
            height: auto;
            position: static;
            padding: 2rem 1rem;
          }
          nav {
            flex-direction: row;
            flex-wrap: wrap;
            gap: 1rem;
            margin: 1.5rem 0;
          }
        }
      `}</style>
    </>
  );
}
