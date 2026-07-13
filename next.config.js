const withMDX = require("@next/mdx")({
   extension: /\.mdx?$/,
});

module.exports = withMDX({
   pageExtensions: ["js", "jsx", "md", "mdx"],
   // Produce a fully static site (replaces the old `next export`).
   output: "export",
   // Emit each route as a folder with index.html so it serves cleanly on
   // static hosts like GitHub Pages.
   trailingSlash: true,
   // The Image Optimization API can't run on a static export.
   images: { unoptimized: true },
});
