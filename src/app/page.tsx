import Image from "next/image";
import styles from "./page.module.scss";
import Link from "next/link";

export default function Home() {
  return (
    <main className={styles.main}>
      <h2 className={styles.name}>Borys Melnyk</h2>
      <h3 className={styles.jobTitle}>Software Engineer</h3>
      <div className={styles.description}>
        <p>
          I am a Full-Stack engineer with 5 years of professional development
          experience. Specialise in development with React, Next.js, and
          Express.JS. <br />
          Experienced in planning, developing and testing WebApps, Browser
          Extensions, and APIs.
        </p>
        <br />
        <p>My current tech stack is: </p>
        <ul>
          <li>React</li>
          <li>Next.JS</li>
          <li>Express.JS</li>
          <li>PostgreSQL / MongoDB / MySQL</li>
        </ul>
        <br />
        You can contact me at:{" "}
        <a href={"mailto:jobs@boryssey.com"}>jobs@boryssey.com</a>
        <br />
        <br />
        <p>
          You can read something I wrote in <Link href="/blog"> my blog</Link>
        </p>
        <br />
        <p>
          Or if you are interested in photography, you can check out my{" "}
          <Link href={"/gallery"}>gallery</Link>
        </p>
      </div>
    </main>
  );
}
