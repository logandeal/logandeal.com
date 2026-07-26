import BackLink from "../components/BackLink";

export default function ServerErrorPage() {
  return (
    <>
      <BackLink />
      <h1>500</h1>
      <p>Something went wrong on our end.</p>
    </>
  );
}
