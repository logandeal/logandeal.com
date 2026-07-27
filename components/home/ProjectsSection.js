import { projects } from '../../data/projects';
import { ChevronRight } from 'lucide-react';

export default function ProjectsSection() {
  return (
    <>
      <section id='projects'>
        <h2>Projects</h2>
        <div className='grid'>
          {projects.map((project) => (
            <a
              key={project.title}
              className='card'
              href={project.link}
              target='_blank'
              rel='noopener noreferrer'
            >
              <h3>
                {project.title} &nbsp; {project.icon}
                <span className='chevron'>
                  <ChevronRight size={16} />
                </span>
              </h3>
              <p className='short-description'>
                <span>{project.shortDescription}</span>
              </p>
              <p className='description'>
                <span>{project.description}</span>
              </p>
              <ul className='tags'>
                {project.tags.map((tag) => (
                  <li key={tag}>{tag}</li>
                ))}
              </ul>
            </a>
          ))}
        </div>
      </section>
      <style jsx>{`
        section {
          max-width: 640px;
        }
        .grid {
          column-count: 2;
          column-gap: 1.5rem;
        }
        .card {
          display: block;
          break-inside: avoid;
          margin-bottom: 1.5rem;
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
        .short-description,
        .description {
          display: grid;
          overflow: hidden;
          opacity: 0;
          grid-template-rows: 0fr;
          transition:
            grid-template-rows 1s ease,
            margin-bottom 1s ease,
            opacity 1s ease;
        }
        .short-description > span,
        .description > span {
          overflow: hidden;
          min-height: 0;
        }
        .short-description {
          margin-bottom: 0.5rem;
          opacity: 1;
          grid-template-rows: 1fr;
        }
        .card:hover .short-description {
          margin-bottom: 0;
          opacity: 0;
          grid-template-rows: 0fr;
        }
        .card:hover .description {
          margin-bottom: 0.5rem;
          opacity: 1;
          grid-template-rows: 1fr;
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
      `}</style>
    </>
  );
}
