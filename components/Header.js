import Link from 'next/link'
import { AiFillGithub } from 'react-icons/ai'
import { AiFillTwitterCircle } from 'react-icons/ai'
import { AiFillLinkedin } from 'react-icons/ai'

export default function Header() {
  return (
    <>
      <link rel="stylesheet" href="/globals.css"></link>
      <nav>
        <div>
          <span id="first">
            <img src="/me.png" width="50" height="46"></img>
          </span>
          <h1>Logan Deal</h1>
          <span className="icon">
            <a href='https://github.com/logandeal' target="_blank"><AiFillGithub/></a>
          </span>
          <span className="icon">
            <a href='https://twitter.com/CaptainSwoosh_' target="_blank"><AiFillTwitterCircle/></a>
          </span>
          <span className="icon">
            <a href='https://www.linkedin.com/in/logan-d-4ba836128/' target="_blank"><AiFillLinkedin/></a>
          </span>
          
        </div>
        <div className="siteLinks">
          <Link href='/'>
            <a>Home</a>
          </Link>
          <Link href='/blog'>
            <a>Blog</a>
          </Link>
          <Link href='/portfolio'>
            <a>Portfolio</a>
          </Link>
          <Link href='/about'>
            <a>About</a>
          </Link>
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
        nav div a {
          margin-block-start: auto;
          margin-block-end: auto;
        }
        nav a:hover {
          text-decoration: underline;
        }
        nav .siteLinks a {
          margin-left: 1rem;
          text-decoration: none;
        }
      `}</style>
    </>
  )
}
