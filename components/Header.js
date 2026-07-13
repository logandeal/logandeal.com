import Link from 'next/link';
import { AiFillGithub, AiFillLinkedin } from 'react-icons/ai';
import { FaXTwitter } from 'react-icons/fa6';

export default function Header() {
  return (
    <>
      <nav>
        <div>
          <span id='first'>
            <img src='/me.png' width='50' height='46' alt='Logan Deal' />
          </span>
          <h1>Logan Deal</h1>
          <span className='icon'>
            <a
              href='https://www.linkedin.com/in/loganedeal/'
              target='_blank'
              rel='noopener noreferrer'
              aria-label='LinkedIn'
            >
              <AiFillLinkedin />
            </a>
          </span>
          <span className='icon'>
            <a
              href='https://github.com/logandeal'
              target='_blank'
              rel='noopener noreferrer'
              aria-label='GitHub'
            >
              <AiFillGithub />
            </a>
          </span>
          <span className='icon'>
            <a
              href='https://twitter.com/CaptainSwoosh_'
              target='_blank'
              rel='noopener noreferrer'
              aria-label='Twitter'
            >
              <FaXTwitter />
            </a>
          </span>
        </div>
        <div className='siteLinks'>
          <Link href='/'>Home</Link>
          <Link href='/blog'>Blog</Link>
          <Link href='/portfolio'>Portfolio</Link>
          <Link href='/about'>About</Link>
        </div>
      </nav>
      <style jsx>{`
        #first {
          margin-right: 1rem;
          display: flex;
          justify-content: center;
          align-items: center;
        }
        .icon {
          margin-left: 1rem;
          display: flex;
          justify-content: center;
          align-items: center;
        }
        nav {
          background: #444;
          width: auto;
          padding: 0 2rem;
          display: flex;
          justify-content: space-between;
          align-items: center;
          font-size: 1rem;
        }
        nav div {
          display: flex;
        }
        nav div :global(a) {
          margin-block-start: auto;
          margin-block-end: auto;
        }
        nav :global(a):hover {
          text-decoration: underline;
        }
        nav .siteLinks {
          gap: 1rem;
        }
        nav .siteLinks :global(a) {
          text-decoration: none;
        }
      `}</style>
    </>
  );
}
