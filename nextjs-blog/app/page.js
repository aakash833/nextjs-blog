import Link from "next/link";

export default function HomePage() {
  return (
    <div
      className="container"
      style={{ padding: "2rem 1rem", textAlign: "center" }}
    >
      <h1>Welcome to the Blog</h1>
      <p>Discover amazing articles and insights.</p>
      <Link
        href="/blog/the-ultimate-guide-to-full-body-workouts"
        className="btn btn--primary"
      >
        Read Featured Article
      </Link>
    </div>
  );
}
