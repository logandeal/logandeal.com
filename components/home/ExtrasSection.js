import { extras } from '../../data/extras';

const COLUMNS = [
  { key: 'awards', label: 'Awards' },
  { key: 'featuredIn', label: 'Featured In' },
  { key: 'credentials', label: 'Credentials' },
];

export default function ExtrasSection() {
  return (
    <>
      <section id='extras'>
        <h2>Extras</h2>
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
      </section>
      <style jsx>{`
        section {
          max-width: 640px;
        }
        .columns {
          display: grid;
          grid-template-columns: repeat(auto-fit, minmax(160px, 1fr));
          gap: 1.5rem;
        }
        h3 {
          font-size: 1rem;
          margin-bottom: 0.5rem;
        }
        ul {
          margin: 0;
          padding-left: 1.1rem;
          color: #bdbdbd;
          font-size: 0.9rem;
        }
      `}</style>
    </>
  );
}
