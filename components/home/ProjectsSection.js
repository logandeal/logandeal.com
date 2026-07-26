import { projects } from '../../data/projects';

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
              </h3>
              <p>{project.description}</p>
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
          margin-top: 0.75rem;
          margin-bottom: 0.35rem;
        }
        .card p {
          margin-bottom: 0.5rem;
          color: #bdbdbd;
          font-size: 0.9rem;
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
