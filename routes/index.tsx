import Layout from "../components/Layout.tsx";
import Counter from "../islands/Counter.tsx";

export default function Home() {
  return (
    <Layout title="Home">
      <h1>Home</h1>
      <div class="lemon-container stack">
        <img
          src="/logo.svg"
          width="128"
          height="128"
          alt="the fresh logo: a sliced lemon dripping with juice"
        />
        <Counter start={3} />
      </div>
    </Layout>
  );
}
