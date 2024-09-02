import { notFound } from "next/navigation";
import Markdown from "react-markdown";
import styles from "./page.module.scss";
import remarkGfm from "remark-gfm";
import { Prism as SyntaxHighlighter } from "react-syntax-highlighter";
import { oneLight } from "react-syntax-highlighter/dist/esm/styles/prism";

const getArticle = async (slug: string) => {
  const res = await fetch(
    `${process.env.NEXT_PUBLIC_BACKEND_URL}/slugify/slugs/article/${slug}`,
    { cache: "force-cache" }
  );
  if (!res.ok) {
    if (res.status === 404) {
      return null;
    }
    throw new Error("Failed to fetch article");
  }
  return res.json();
};

const ArticlePage = async ({
  params: { slug },
}: {
  params: { slug: string };
}) => {
  const data = await getArticle(slug);
  if (!data) {
    notFound();
  }
  return (
    <main>
      <article className={styles.articleContainer}>
        <header className={styles.header}>
          <h1>{data.data.attributes.title}</h1>
        </header>
        <Markdown
          remarkPlugins={[remarkGfm]}
          className={styles["markdown-body"]}
          components={{
            code(props) {
              const { children, className, node, ...rest } = props;
              const match = /language-(\w+)/.exec(className || "");
              return match ? (
                <SyntaxHighlighter
                  {...(rest as any)}
                  PreTag="div"
                  language={match[1]}
                  style={oneLight}
                >
                  {String(children).replace(/\n$/, "")}
                </SyntaxHighlighter>
              ) : (
                <code {...rest} className={className}>
                  {children}
                </code>
              );
            },
          }}
        >
          {data.data.attributes.content}
        </Markdown>
      </article>
    </main>
  );
};

export const dynamic = "force-static";


export async function generateStaticParams() {
  const articles = await fetch(
    `${process.env.NEXT_PUBLIC_BACKEND_URL}/articles`
  ).then((res) => res.json());
  return articles.data.map(({ attributes }: any) => ({
    slug: attributes.slug,
  }));
}


export default ArticlePage;
