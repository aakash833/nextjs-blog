import { notFound } from "next/navigation";
import BlogPost from "@/components/blog-post";
import { getBlogPost, getAllBlogSlugs } from "@/lib/blog-data";

// For static site generation
export async function generateStaticParams() {
  const slugs = await getAllBlogSlugs(); // add await if it's async
  return slugs.map((slug) => ({ slug }));
}

export default async function BlogPage({ params }) {
  const post = await getBlogPost(params.slug);

  if (!post) {
    notFound();
  }

  return <BlogPost post={post} />;
}
