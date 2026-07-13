// Required by @next/mdx (v13+). Lets you map HTML elements produced by MDX to
// custom React components. Returning the defaults is enough for this site.
export function useMDXComponents(components) {
   return {
      ...components,
   };
}
