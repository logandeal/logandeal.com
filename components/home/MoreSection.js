import { AiFillGithub, AiFillLinkedin } from 'react-icons/ai';
import { FaXTwitter } from 'react-icons/fa6';
import { extras } from '../../data/extras';

const COLUMNS = [
  { key: 'awards', label: 'Honors' },
  { key: 'credentials', label: 'Credentials' },
  { key: 'featuredIn', label: 'Featured' },
];

const FOLLOW_LINKS = [
  {
    key: 'linkedin',
    href: 'https://www.linkedin.com/in/loganedeal/',
    description: 'My professional journey',
    Icon: AiFillLinkedin,
  },
  {
    key: 'github',
    href: 'https://github.com/logandeal',
    description: 'My coding journey',
    Icon: AiFillGithub,
  },
  {
    key: 'x',
    href: 'https://x.com/CaptainSwoosh_',
    description: 'My thoughts',
    Icon: FaXTwitter,
  },
];

export default function MoreSection() {
  return (
    <>
      <section id='more'>
        <h2>More</h2>
        <div className='columns'>
          {COLUMNS.map((column) => (
            <div key={column.key} className='column'>
              <h3>{column.label}</h3>
              <ul>
                {extras[column.key].map((item) => (
                  <li key={item}>{item}</li>
                ))}
              </ul>
            </div>
          ))}
        </div>
        <div className='follow-grid'>
          {FOLLOW_LINKS.map(({ key, href, label, description, Icon }) => (
            <a
              key={key}
              className='follow-card'
              href={href}
              target='_blank'
              rel='noopener noreferrer'
            >
              <span className='icon'>
                <Icon />
              </span>
              <div>
                <p>{description}</p>
              </div>
            </a>
          ))}
        </div>
      </section>
      <style jsx>{`
        section {
          max-width: 640px;
        }
        .columns {
          display: grid;
          grid-template-columns: repeat(auto-fit, minmax(160px, 1fr));
          gap: 1.5rem;
          margin-bottom: 2.5rem;
        }
        .column h3 {
          font-family: var(--font-satoshi), sans-serif;
          font-size: 0.8rem;
          font-weight: 700;
          letter-spacing: 0.06em;
          text-transform: uppercase;
          color: #f39c12;
          margin-bottom: 0.5rem;
        }
        .column ul {
          margin: 0;
          padding-left: 1.1rem;
          color: #bdbdbd;
          font-size: 0.9rem;
        }
        .follow-grid {
          display: flex;
          flex-wrap: wrap;
          gap: 1.5rem;
        }
        .follow-card {
          display: flex;
          align-items: center;
          gap: 1rem;
          color: #fff;
          text-decoration: none;
          background: #454545;
          border: 1px solid #555;
          border-radius: 8px;
          padding: 0.75rem 1rem;
          min-width: 220px;
        }
        .follow-card:hover {
          border-color: #777;
        }
        .icon {
          flex-shrink: 0;
          display: flex;
          font-size: 1.75rem;
          line-height: 0;
        }
        .follow-card h3 {
          margin: 0 0 0.25rem;
          font-size: 1rem;
          text-transform: none;
          letter-spacing: normal;
          color: #fff;
        }
        .follow-card p {
          margin: 0;
          color: #bdbdbd;
          font-size: 0.85rem;
        }
      `}</style>
    </>
  );
}
