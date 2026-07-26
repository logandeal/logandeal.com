import BackLink from './BackLink'
import { HeadPost } from './HeadPost'

export default function BlogPost({ children, meta}) {
   return (
      <>
         <BackLink />
         <HeadPost meta={meta} isBlogPost />
         <article>{children}</article>
      </>
   )
}

