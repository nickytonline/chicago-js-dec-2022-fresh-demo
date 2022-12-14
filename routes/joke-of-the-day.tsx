import { HandlerContext, Handlers, PageProps } from "$fresh/server.ts";
import Layout from "../components/Layout.tsx";

type Joke = string;

export const handler: Handlers<Joke> = {
  async GET(req: Request, ctx: HandlerContext<Joke>) {
    const jokeUrl = new URL("/api/joke", req.url);
    console.log(jokeUrl);
    const response = await fetch(jokeUrl);
    const joke = await response.text();

    return ctx.render(joke);
  },
};

export default function ProjectPage(props: PageProps<Joke>) {
  return (
    <Layout title="Movies">
      <h1>Joke of the Day</h1>
      <p>{props.data}</p>
    </Layout>
  );
}
