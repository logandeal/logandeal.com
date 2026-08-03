import { timeline } from '../../data/timeline';
import { LineDotRightHorizontal, GraduationCap } from 'lucide-react';
import { ChevronRight } from 'lucide-react';

const ICONS = {
  'graduation-cap': GraduationCap,
};

export default function TimelineSection() {
  return (
    <>
      <section id='timeline'>
        <h2>Timeline</h2>
        <ul>
          {timeline.map((entry) => {
            const Icon = ICONS[entry.icon];
            return (
              <li key={`${entry.title}-${entry.date}`}>
                <span className='date'>
                  {entry.type != 'education' && (
                    <span className='tick'>
                      <LineDotRightHorizontal size={16} />
                    </span>
                  )}
                  {entry.date}
                </span>
                <h3>
                  {Icon && <Icon size={16} />}
                  {entry.title} •{' '}
                  <em>
                    <a
                      href={entry.orgLink}
                      target='_blank'
                      rel='noopener noreferrer'
                    >
                      {entry.org}
                    </a>
                  </em>
                  <span className='chevron'>
                    <ChevronRight size={16} />
                  </span>
                </h3>
                <p className='description'>{entry.description}</p>
              </li>
            );
          })}
        </ul>
      </section>
      <style jsx>{`
        section {
          max-width: 640px;
        }
        ul {
          list-style: none;
          margin: 0;
          padding: 0;
          border-left: 2px solid #555;
        }
        li {
          padding: 0 0 0.25rem 1rem;
        }
        .date {
          position: relative;
          color: #f39c12;
          font-size: 0.85rem;
        }
        .tick {
          display: flex;
          position: absolute;
          left: -1.5rem;
          top: 50%;
          transform: translateY(-50%);
        }
        h3 {
          display: flex;
          align-items: center;
          gap: 0.35rem;
          margin: 0.25rem 0 0.25rem;
          font-size: 1.1rem;
        }
        .chevron {
          display: flex;
          flex-shrink: 0;
          transition: transform 1s ease;
        }
        li:hover .chevron {
          transform: rotate(90deg);
        }
        .description {
          margin: 0.15rem 0 0;
          color: #bdbdbd;
          font-size: 0.9rem;
          line-height: 1.1;
          min-height: 1.1em;
          opacity: 0;
          transition: opacity 1s ease;
        }
        li:hover .description {
          opacity: 1;
        }
      `}</style>
    </>
  );
}
