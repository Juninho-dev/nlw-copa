export default function Home() {
  return <h1>Hello World</h1>;
}

export const getServerSideProps = async () => {
  const res = await fetch("https://api.github.com/repos/vercel/next.js");
  const json = await res.json();
  return { props: { stars: json.stargazers_count } };
};
