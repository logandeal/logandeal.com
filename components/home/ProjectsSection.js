import { useLayoutEffect, useRef } from 'react';
import { projects } from '../../data/projects';
import { ChevronRight } from 'lucide-react';

const columns = [
  projects.filter((project) => project.column === 1),
  projects.filter((project) => project.column === 2),
];

function ProjectCard({ project, order }) {
  const descRef = useRef(null);
  const shortRef = useRef(null);
  const longRef = useRef(null);

  // The card eases smoothly between the short and long description heights.
  // CSS can't transition to/from an intrinsic "auto" height, so we measure
  // both descriptions once they've rendered and expose them as custom
  // properties that the height transition below can target directly.
  useLayoutEffect(() => {
    descRef.current.style.setProperty(
      '--short-h',
      `${shortRef.current.offsetHeight}px`,
    );
    descRef.current.style.setProperty(
      '--long-h',
      `${longRef.current.offsetHeight}px`,
    );
  }, []);

  return (
    <a
      className='card'
      href={project.link}
      target='_blank'
      rel='noopener noreferrer'
      // Only consumed by the single-column mobile layout, where the
      // columns collapse and the cards interleave back into
      // reading order: col1[0], col2[0], col1[1], col2[1], ...
      style={{ order }}
    >
      <h3>
        {project.title} &nbsp; {project.icon}
        <span className='chevron'>
          <ChevronRight size={16} />
        </span>
      </h3>
      <div className='descriptions' ref={descRef}>
        <div className='desc short' ref={shortRef}>
          <p>{project.shortDescription}</p>
        </div>
        <div className='desc long' ref={longRef}>
          <p>{project.description}</p>
        </div>
      </div>
      <ul className='tags'>
        {project.tags.map((tag) => (
          <li key={tag}>{tag}</li>
        ))}
      </ul>
      <style jsx>{`
        .card {
          display: block;
          color: #fff;
          text-decoration: none;
          background: #454545;
          border: 1px solid #555;
          border-radius: 8px;
          overflow: hidden;
          transition: border-color 1s ease;
        }
        .card:hover {
          border-color: #777;
        }
        .card h3,
        .card p {
          margin: 0;
          padding: 0 1rem;
        }
        .card h3 {
          display: flex;
          align-items: center;
          margin-top: 0.75rem;
          margin-bottom: 0.35rem;
        }
        .chevron {
          display: flex;
          margin-left: auto;
          flex-shrink: 0;
          transition: transform 1s ease;
        }
        .card:hover .chevron {
          transform: rotate(90deg);
        }
        .card p {
          color: #bdbdbd;
          font-size: 0.9rem;
        }

        /* .short and .long are overlaid in the same grid cell so neither
           displaces the other. The container's own height eases between
           the two measured pixel heights above, and the text cross-fades
           on a tighter, staggered schedule so you never read half-clipped
           lines. */
        .descriptions {
          display: grid;
          align-items: start;
          overflow: hidden;
          margin-bottom: 0.5rem;
          height: var(--short-h, auto);
          transition: height 1s ease;
        }
        .card:hover .descriptions {
          height: var(--long-h, auto);
        }
        .desc {
          grid-area: 1 / 1;
        }
        .short > p {
          opacity: 1;
          transition: opacity 0.5s ease;
        }
        .card:hover .short > p {
          opacity: 0;
          transition: opacity 0.5s ease;
        }
        .long > p {
          opacity: 0;
          transition: opacity 0.5s ease;
        }
        .card:hover .long > p {
          opacity: 1;
          transition: opacity 0.5s ease;
        }

        .tags {
          list-style: none;
          display: flex;
          flex-wrap: wrap;
          gap: 0.35rem;
          margin: 0;
          padding: 0 1rem 0.75rem;
        }
        .tags li {
          font-size: 0.75rem;
          color: #f39c12;
        }

        @media (prefers-reduced-motion: reduce) {
          /* TODO(human): decide the no-motion behavior for the description swap. */
        }
      `}</style>
    </a>
  );
}

export default function ProjectsSection() {
  return (
    <>
      <section id='projects'>
        <h2>Projects</h2>
        <div className='grid'>
          {columns.map((column, columnIndex) => (
            <div className='column' key={columnIndex}>
              {column.map((project, rowIndex) => (
                <ProjectCard
                  key={project.title}
                  project={project}
                  order={rowIndex * 2 + columnIndex}
                />
              ))}
            </div>
          ))}
        </div>
      </section>
      <style jsx>{`
        section {
          max-width: 640px;
        }
        .grid {
          display: grid;
          grid-template-columns: 1fr 1fr;
          gap: 1.5rem;
          align-items: start;
        }
        .column {
          display: flex;
          flex-direction: column;
          gap: 1.5rem;
        }

        @media (max-width: 640px) {
          .grid {
            display: flex;
            flex-direction: column;
            gap: 1.5rem;
          }
          .column {
            display: contents;
          }
        }
      `}</style>
    </>
  );
}
