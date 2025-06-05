"use client";

import { useState, useEffect, lazy, Suspense } from "react";
import Image from "next/image";
import Link from "next/link";
import {
  fetchComments,
  relatedArticles,
  tourGuides,
  sidebarArticles,
} from "@/lib/blog-data";
import Sidebar from "./sidebar";
import "./blog-post.css";
import CommentsSection from "./comment-section";

export default function BlogPost({ post }) {
  const [comments, setComments] = useState([]);
  const [isLoadingComments, setIsLoadingComments] = useState(true);

  useEffect(() => {
    const loadComments = async () => {
      try {
        const fetchedComments = await fetchComments();
        setComments(fetchedComments);
      } catch (error) {
        console.error("Failed to load comments:", error);
      } finally {
        setIsLoadingComments(false);
      }
    };

    loadComments();
  }, []);

  const handleAddComment = (newComment) => {
    setComments((prev) => [
      ...prev,
      {
        id: Date.now().toString(),
        author: {
          name: newComment.name,
          avatar: "/images/placeholder-cover.jpg",
        },
        date: new Date().toLocaleDateString("en-US", {
          day: "2-digit",
          month: "short",
          year: "numeric",
        }),
        rating: newComment.rating,
        content: newComment.comment,
      },
    ]);
  };

  return (
    <div className="blog-post">
      {/* Header */}
      <header className="blog-post__header">
        <div className="container">
          <nav className="breadcrumb">
            <Link href="/">HOME</Link>
            <span className="breadcrumb__separator">/</span>
            <Link href="/articles">ARTICLES</Link>
            <span className="breadcrumb__separator">/</span>
          </nav>

          <h1 className="blog-post__title">{post.title}</h1>
        </div>
      </header>

      {/* Hero Image */}
      <div className="blog-post__hero">
        <Image
          src={post.heroImage || "/placeholder.svg"}
          alt={post.title}
          width={1200}
          height={500}
          className="blog-post__hero-image"
          priority
        />
      </div>

      {/* Main Content */}
      <div className="container">
        <div className="blog-post__layout">
          <main className="blog-post__main">
            <div>
              {/* Author Info */}
              <div className="blog-post__meta">
                <div className="author-info">
                  <Image
                    src={post.author.avatar || "/placeholder.svg"}
                    alt={post.author.name}
                    width={40}
                    height={40}
                    className="author-info__avatar"
                  />
                  <span className="author-info__name">{post.author.name}</span>
                </div>
                <div className="blog-post__date">{post.date}</div>
              </div>

              {/* Content */}
              <div className="blog-post__content">
                {post.content.split("\n\n").map((paragraph, index) => {
                  if (
                    paragraph
                      .trim()
                      .startsWith("With over a decade of experience")
                  ) {
                    return (
                      <blockquote key={index} className="blog-post__quote">
                        {paragraph.trim()}
                      </blockquote>
                    );
                  }
                  return <p key={index}>{paragraph.trim()}</p>;
                })}
              </div>
            </div>
          </main>

          {/* Sidebar */}
          <Sidebar articles={sidebarArticles} tourGuides={tourGuides} />
        </div>
        <div>
          {/* About Author */}
          <section className="about-author">
            <h2 className="about-author__title">About Alex Carter</h2>
            <div className="about-author__content">
              <Image
                src="/images/placeholder-cover.jpg"
                alt="Alex Carter"
                width={80}
                height={80}
                className="about-author__avatar"
              />
              <p className="about-author__bio">
                With over a decade of experience in the fitness industry, Alex
                specializes in strength training and functional fitness.
                Certified by NASM and known for his motivational style, Alex
                designs workout programs that are both challenging and
                achievable. His passion lies in helping clients build strength
                and confidence through personalized training routines. Outside
                the gym, Alex is an avid runner and enjoys outdoor adventures.
              </p>
            </div>
          </section>

          {/* Navigation */}
          <nav className="blog-post__navigation">
            <div>
              <Link href="#" className="btn btn--secondary">
                <span>←</span>
                <div>
                  <div className="nav-label">Previous</div>
                </div>
              </Link>
              <div className="nav-title mt-1">
                5 Tips for Better Cardio Sessions
              </div>
            </div>
            <div className="nav-right">
              <Link href="#" className="btn btn--secondary">
                <div>
                  <div className="nav-label">Next</div>
                </div>
                <span>→</span>
              </Link>
              <div className="nav-title mt-1">
                Meal Prep Basics for Gym Enthusiasts
              </div>
            </div>
          </nav>

          {/* Comments Section */}
          <CommentsSection
            comments={comments}
            isLoading={isLoadingComments}
            onAddComment={handleAddComment}
          />

          {/* Related Articles */}
          <section className="related-articles">
            <h2 className="related-articles__title">Related articles</h2>
            <div className="related-articles__grid">
              {relatedArticles.map((article, index) => (
                <article key={index} className="related-article">
                  <Image
                    src={article.image || "/placeholder.svg"}
                    alt={article.title}
                    width={300}
                    height={200}
                    className="related-article__image"
                  />
                  <div className="related-article__content">
                    <h3 className="related-article__title">{article.title}</h3>
                    <p className="related-article__excerpt">
                      {article.excerpt}
                    </p>
                    <div className="related-article__author">
                      By {article.author}
                    </div>
                  </div>
                </article>
              ))}
            </div>
          </section>
        </div>
      </div>
    </div>
  );
}
