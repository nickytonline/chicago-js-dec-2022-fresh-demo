import { Head } from "$fresh/runtime.ts";
import { VNode } from "https://esm.sh/v99/preact@10.11.0/src/index";

interface LayoutProps {
  title: string;
  children: VNode | VNode[];
}

export default function Layout(props: LayoutProps) {
  return (
    <html lang="en">
      <Head>
        <title>{props.title}</title>
        <meta charSet="UTF-8" />
        <meta http-equiv="X-UA-Compatible" content="IE=edge" />
        <meta
          name="viewport"
          content="width=device-width, initial-scale=1.0"
        ></meta>
        <link rel="stylesheet" href="/styles.css" />
      </Head>
      <body>
        <header>
          <nav>
            <ul>
              <li>
                <a href="/">Home</a>
              </li>
              <li>
                <a href="/movies">Movies</a>
              </li>
              <li>
                <a href="/joke-of-the-day">Random Joke</a>
              </li>
            </ul>
          </nav>
        </header>
        <main>{props.children}</main>
      </body>
    </html>
  );
}
