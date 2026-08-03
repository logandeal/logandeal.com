import { Coffee } from 'lucide-react';

export const HeadPost = ({ meta, isBlogPost }) => (
  <>
    <h1 className={isBlogPost ? 'title' : null}>{meta.title}</h1>
    <div className='details'>
      {isBlogPost ? null : <p>{meta.description}</p>}
      <div className='meta-row'>
        <span>{meta.date}</span>
        <span className='read-time' role='img' aria-label='one coffee'>
          <Coffee size={16} />
          {meta.readTime + ' min read'}
        </span>
      </div>
    </div>
    <style jsx>
      {`
        h1 {
          margin: 0 0 0.35rem;
          font-size: 1.5rem;
          font-weight: 700;
          color: #f39c12;
        }
        .title {
          font-size: 2rem;
        }
        .details span {
          color: #bdbdbd;
          margin-right: 1rem;
        }
        .details span[role='img'] {
          display: inline-flex;
          align-items: center;
          gap: 0.35rem;
        }
        .details {
          display: flex;
          flex-direction: column;
          align-items: flex-start;
          margin-bottom: 0.35rem;
        }
        .meta-row {
          display: flex;
          align-items: center;
        }
        .details p {
          margin: 0 0 0.35rem;
        }
        .read-time {
          opacity: var(--read-time-opacity);
          transition: opacity 1s ease;
        }
      `}
    </style>
  </>
);
