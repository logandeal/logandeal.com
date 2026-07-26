import { timeline } from '../../data/timeline';
import { Dot, LineDotRightHorizontal } from 'lucide-react';

export default function TimelineSection() {
  return (
    <>
      <section id='timeline'>
        <h2>Timeline</h2>
        <ul>
          {timeline.map((entry) => (
            <li key={`${entry.title}-${entry.date}`}>
              <span className='date'>
                <span className='tick'>
                  <LineDotRightHorizontal size={16} />
                </span>
                {entry.date}
              </span>
              <h3>
                {entry.title} • {entry.org}
              </h3>
              <p>{entry.description}</p>
            </li>
          ))}
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
          padding: 0 0 1rem 1rem;
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
        p {
          margin: 0;
          color: #bdbdbd;
        }
      `}</style>
    </>
  );
}
