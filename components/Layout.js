import Head from "next/head";

export default function Layout({ children, pageTitle, description, fullWidth }) {
   return (
      <>
         <Head>
            <meta name="viewport" content="width=device-width, initial-scale=1" />
            <meta charSet="utf-8" />
            <meta name="Description" content={description}/>
            <title>{pageTitle}</title>
         </Head>
         <style jsx global>{`
         html {
            scroll-behavior: smooth;
         }
         html,
         body {
            margin: 0;
            padding: 0;
            font-family: -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto,
               Oxygen, Ubuntu, Cantarell, "Helvetica Neue", sans-serif;
            background: #333;
            color: #fff;
            font-size: 1rem;
         }
         h1,
         h2,
         h3,
         h4,
         h5,
         h6 {
            font-weight: 400;
            font-family: var(--font-instrument-serif), Georgia, "Times New Roman",
               serif;
            color: #fafafa;
         }
         h2 {
            font-size: 2.25rem;
            margin: 0 0 1rem;
         }
         h3 {
            color: #e8e8e8;
         }
         p {
            color: #e0e0e0;
         }
         a {
            color: #fff;
         }
         .content {
            max-width: 600px;
            margin: 2rem auto;
            padding: 0 1rem;
         }
         `}</style>
         <main>
            {fullWidth ? children : <div className="content">{children}</div>}
         </main>
      </>
   )
}