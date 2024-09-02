import Link from "next/link";
import styles from "./articleListItem.module.scss";
import { DateTime } from "ts-luxon";
import Image from "next/image";
import VerticalDivider from "../VerticalDivider";

const ArticleListItem = ({
  title,
  readingTime,
  publishedAt,
  subtitle,
  slug,
  preview,
}: {
  title: string;
  subtitle: string;
  readingTime: string;
  publishedAt: string;
  slug: string;
  preview:
    | null
    | undefined
    | {
        imageURL: string;
        width: number;
        height: number;
        blurDataURL: string | undefined;
      };
}) => {
  return (
    <article className={styles.container}>
      <header>
        <h2>
          <Link href={`/blog/${slug}`}>{title}</Link>
        </h2>
      </header>
      <div className={styles.articleInfoContainer}>
        <time dateTime={publishedAt}>
          {DateTime.fromISO(publishedAt).toFormat("DD")}
        </time>
        <VerticalDivider height="12px" opacity={0.2} />
        <span>{readingTime}</span>
      </div>
      <Link href={`/blog/${slug}`}>
        <p>{subtitle}</p>
        {preview && (
          <div className={styles.previewContainer}>
            <Image
              className={styles.articlePreview}
              alt={title}
              src={preview.imageURL}
              placeholder={"blurDataURL" in preview ? "blur" : undefined}
              blurDataURL={preview.blurDataURL}
              fill
              sizes="100vw"
            />
          </div>
        )}
      </Link>
    </article>
  );
};

export default ArticleListItem;
