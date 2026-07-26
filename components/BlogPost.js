import BackLink from './BackLink';
import { HeadPost } from './HeadPost';

export default function BlogPost({ children, meta }) {
  return (
    <>
      <BackLink />
      <div className='spacer'>
        <HeadPost meta={meta} isBlogPost />
      </div>
      <article>{children}</article>
      <style jsx>{`
        .spacer {
          margin-top: 1rem;
        }
      `}</style>
    </>
  );
}
