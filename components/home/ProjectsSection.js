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
              <img src={project.image} alt={project.title} />
              <h3>{project.title}</h3>
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
          display: grid;
          grid-template-columns: repeat(auto-fill, minmax(240px, 1fr));
          gap: 1.5rem;
        }
        .card {
          display: block;
          color: #fff;
          text-decoration: none;
          background: #3a3a3a;
          border-radius: 8px;
          overflow: hidden;
        }
        .card img {
          width: 100%;
          height: 140px;
          object-fit: cover;
          display: block;
        }
        .card h3,
        .card p,
        .card .tags {
          padding: 0 1rem;
        }
        .card p {
          color: #bdbdbd;
          font-size: 0.9rem;
        }
        .tags {
          list-style: none;
          display: flex;
          flex-wrap: wrap;
          gap: 0.5rem;
          margin: 0;
          padding-bottom: 1rem;
        }
        .tags li {
          font-size: 0.75rem;
          color: #f39c12;
        }
      `}</style>
    </>
  );
}
