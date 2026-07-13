import "react-image-gallery/styles/css/image-gallery.css";
import localFont from "next/font/local";
import Layout from "../components/Layout";

// Body / default text.
const satoshi = localFont({
  src: [
    { path: "../public/fonts/Satoshi-400.woff2", weight: "400", style: "normal" },
    { path: "../public/fonts/Satoshi-500.woff2", weight: "500", style: "normal" },
    { path: "../public/fonts/Satoshi-700.woff2", weight: "700", style: "normal" },
    { path: "../public/fonts/Satoshi-900.woff2", weight: "900", style: "normal" },
  ],
  variable: "--font-satoshi",
  display: "swap",
});

// Headings / emphasized text.
const instrumentSerif = localFont({
  src: [
    {
      path: "../public/fonts/InstrumentSerif-Regular.woff2",
      weight: "400",
      style: "normal",
    },
    {
      path: "../public/fonts/InstrumentSerif-Italic.woff2",
      weight: "400",
      style: "italic",
    },
  ],
  variable: "--font-instrument-serif",
  display: "swap",
});

export default function App({ Component, pageProps }) {
  const backgroundImage = Component.backgroundImage
    ? `url("/${Component.backgroundImage}")`
    : "none";

  return (
    <div className={`app-root ${satoshi.variable} ${instrumentSerif.variable}`}>
      <Layout pageTitle="Logan Deal" description="My Personal Blog">
        <Component {...pageProps} />
      </Layout>
      <style jsx>{`
        .app-root {
          min-height: 100vh;
          font-family: var(--font-satoshi), -apple-system, BlinkMacSystemFont,
            "Segoe UI", Roboto, Oxygen, Ubuntu, Cantarell, "Helvetica Neue",
            sans-serif;
          background-image: ${backgroundImage};
          background-position: center;
          background-repeat: no-repeat;
          background-size: cover;
        }
      `}</style>
    </div>
  );
}
