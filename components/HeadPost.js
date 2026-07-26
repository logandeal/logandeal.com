import { Coffee } from 'lucide-react';

export const HeadPost = ({ meta, isBlogPost }) => (
  <>
    <h1 className={isBlogPost ? 'title' : null}>{meta.title}</h1>
    <div className='details'>
      {isBlogPost ? null : <p>{meta.description}</p>}
      <span>{meta.date}</span>
      <span role='img' aria-label='one coffee'>
        <Coffee size={16} />
        {meta.readTime + ' min read'}
      </span>
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
          gap: 0.25rem;
        }
        .details {
          margin-bottom: 0.5rem;
        }
        .details p {
          margin: 0 0 0.35rem;
        }
      `}
    </style>
  </>
);
