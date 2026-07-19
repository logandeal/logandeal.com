import Link from 'next/link';

export default function BackLink() {
  return (
    <>
      <Link href='/' className='back-link'>
        ← Back to home
      </Link>
      <style jsx>{`
        .back-link {
          display: inline-block;
          margin-bottom: 1rem;
          color: #bdbdbd;
          text-decoration: none;
        }
        .back-link:hover {
          text-decoration: underline;
        }
      `}</style>
    </>
  );
}
