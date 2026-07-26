import { timeline } from '../../data/timeline';

export default function TimelineSection() {
  return (
    <>
      <section id='timeline'>
        <h2>Timeline</h2>
        <ul>
          {timeline.map((entry) => (
            <li key={`${entry.title}-${entry.date}`}>
              <span className='date'>{entry.date}</span>
              <h3>
                {entry.title} · {entry.org}
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
          padding: 0 0 1.5rem 1.5rem;
        }
        .date {
          color: #bdbdbd;
          font-size: 0.85rem;
        }
        h3 {
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
