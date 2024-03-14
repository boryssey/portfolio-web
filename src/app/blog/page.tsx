import ArticleListItem from "@/components/ArticleListItem";
import styles from "./blog.module.scss";
import { blurHashToDataURL } from "@/utils/helpers";

const getArticles = async () => {
  const res = await fetch(
    "https://cdn.boryssey.com/api/articles?populate=preview",
    {
      next: { revalidate: 1 },
    }
  );
  if (!res.ok) {
    throw new Error("Failed to fetch articles");
  }
  return res.json();
};

const Blog = async () => {
  const data = await getArticles();

  return (
    <main className={styles.container}>
      {data.data.map((article: any) => {
        return (
          <ArticleListItem
            key={article.id}
            title={article.attributes.title}
            readingTime={article.attributes.readingTime}
            publishedAt={article.attributes.publishedAt}
            slug={article.attributes.slug}
            subtitle={article.attributes.subtitle}
            preview={
              article.attributes.preview.data
                ? {
                    imageURL: article.attributes.preview.data.attributes.url,
                    width: article.attributes.preview.data.attributes.width,
                    height: article.attributes.preview.data.attributes.height,
                    blurDataURL: blurHashToDataURL(
                      article.attributes.preview.data.attributes.blurhash
                    ),
                  }
                : null
            }
          />
        );
      })}
    </main>
  );
};

export default Blog;
