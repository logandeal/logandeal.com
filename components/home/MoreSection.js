import { useState } from 'react';
import { AiFillGithub, AiFillLinkedin } from 'react-icons/ai';
import { FaXTwitter } from 'react-icons/fa6';
import { ChevronRight } from 'lucide-react';
import { extras } from '../../data/extras';

const COLUMNS = [
  { key: 'awards', label: 'Honors' },
  { key: 'credentials', label: 'Credentials' },
  { key: 'featuredIn', label: 'Featured' },
];

const EASTER_EGGS = [
  { key: 'strengths', label: "What are Logan's CliftonStrengths?" },
  {
    key: 'coursework',
    label: 'What cool courses has Logan taken?',
  },
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
  const [openEgg, setOpenEgg] = useState(null);

  return (
    <>
      <section id='more'>
        <h2>More</h2>
        <div className='rows'>
          {COLUMNS.map((column) => (
            <div key={column.key} className='row'>
              <h3>{column.label}</h3>
              <ul>
                {extras[column.key].map((item) =>
                  typeof item === 'string' ? (
                    <li key={item}>{item}</li>
                  ) : (
                    <li key={item.text}>
                      <a
                        href={item.link}
                        target='_blank'
                        rel='noopener noreferrer'
                      >
                        {item.text}
                      </a>
                    </li>
                  ),
                )}
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
        <div className='easter-eggs'>
          <div className='egg-toggles'>
            {EASTER_EGGS.map(({ key, label }) => (
              <button
                key={key}
                type='button'
                className='egg-toggle'
                aria-expanded={openEgg === key}
                onClick={() =>
                  setOpenEgg((current) => (current === key ? null : key))
                }
              >
                <ChevronRight className='chevron' size={16} />
                <span>{label}</span>
              </button>
            ))}
          </div>
          {openEgg === 'strengths' && (
            <div className='strengths'>
              {extras.strengths.themes.map((theme) => (
                <div key={theme.name} className='strength'>
                  <h4>{theme.name}</h4>
                  <p>{theme.description}</p>
                </div>
              ))}
              <p className='strengths-date'>Gallup CliftonStrengths</p>
            </div>
          )}
          {openEgg === 'coursework' && (
            <ul className='coursework'>
              {extras.coursework.map((course) => (
                <li key={course}>{course}</li>
              ))}
            </ul>
          )}
        </div>
      </section>
      <style jsx>{`
        section {
          max-width: 640px;
        }
        .rows {
          display: flex;
          flex-direction: column;
          gap: 1.25rem;
          margin-bottom: 2.5rem;
        }
        .row {
          display: flex;
          align-items: baseline;
          gap: 1.5rem;
          padding-bottom: 1.25rem;
          border-bottom: 1px solid #3a3a3a;
        }
        .row h3 {
          flex-shrink: 0;
          width: 110px;
          font-family: var(--font-satoshi), sans-serif;
          font-size: 0.8rem;
          font-weight: 700;
          letter-spacing: 0.06em;
          text-transform: uppercase;
          color: #f39c12;
          margin: 0;
        }
        .row ul {
          display: flex;
          flex-direction: column;
          gap: 0.4rem;
          margin: 0;
          padding: 0;
          list-style: none;
          color: #bdbdbd;
          font-size: 0.9rem;
        }
        .row ul :global(a) {
          color: inherit;
          text-decoration: underline;
          text-decoration-color: #666;
        }
        .row ul :global(a:hover) {
          color: #fff;
          text-decoration-color: #fff;
        }
        @media (max-width: 640px) {
          .row {
            flex-direction: column;
            gap: 0.5rem;
          }
          .row h3 {
            width: auto;
          }
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
        .easter-eggs {
          border-top: 1px solid #3a3a3a;
          margin-top: 2.5rem;
          padding: 1rem 0;
        }
        .egg-toggles {
          display: flex;
          flex-direction: row;
          gap: 1.5rem;
        }
        .egg-toggle {
          display: flex;
          align-items: center;
          gap: 0.35rem;
          background: none;
          border: none;
          padding: 0;
          cursor: pointer;
          color: #666;
          font-size: 0.8rem;
          line-height: 1;
          user-select: none;
        }
        .egg-toggle:hover {
          color: #bdbdbd;
        }
        .egg-toggle :global(.chevron) {
          flex-shrink: 0;
          transition: transform 0.15s ease;
        }
        .egg-toggle[aria-expanded='true'] {
          color: #bdbdbd;
        }
        .egg-toggle[aria-expanded='true'] :global(.chevron) {
          transform: rotate(90deg);
        }
        .strengths {
          display: flex;
          flex-direction: column;
          gap: 1rem;
          margin-top: 1rem;
          padding: 1rem 1.25rem;
          background: #333;
          border: 1px solid #454545;
          border-radius: 8px;
        }
        .strength h4 {
          margin: 0 0 0.25rem;
          color: #f39c12;
          font-size: 0.9rem;
        }
        .strength p {
          margin: 0;
          color: #bdbdbd;
          font-size: 0.85rem;
        }
        .strengths-date {
          color: #666;
          font-size: 0.75rem;
          font-style: italic;
        }
        .coursework {
          display: flex;
          flex-direction: column;
          gap: 0.5rem;
          margin: 1rem 0 0;
          padding: 1rem 1.25rem;
          list-style: none;
          background: #333;
          border: 1px solid #454545;
          border-radius: 8px;
          color: #bdbdbd;
          font-size: 0.85rem;
        }
      `}</style>
    </>
  );
}
