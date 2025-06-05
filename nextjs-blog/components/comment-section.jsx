"use client";

import { useState } from "react";
import Image from "next/image";
import "./comment-section.css";

export default function CommentsSection({ comments, isLoading, onAddComment }) {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    comment: "",
  });
  const [rating, setRating] = useState(0);
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (!formData.name || !formData.email || !formData.comment || !rating) {
      alert("Please fill all fields and select a rating.");
      return;
    }

    setIsSubmitting(true);

    setTimeout(() => {
      onAddComment({
        ...formData,
        rating,
      });

      setFormData({ name: "", email: "", comment: "" });
      setRating(0);
      setIsSubmitting(false);
    }, 1500);
  };

  const renderStars = (rating, interactive = false) => {
    const stars = [];
    for (let i = 1; i <= 5; i++) {
      stars.push(
        <span
          key={i}
          className={`star ${i <= rating ? "star--filled" : "star--empty"} ${
            interactive ? "star--interactive" : ""
          }`}
          onClick={interactive ? () => setRating(i) : undefined}
        >
          ★
        </span>
      );
    }
    return stars;
  };

  const renderEmojis = () => {
    const emojis = ["😡", "😞", "😐", "😊", "😍"];
    return emojis.map((emoji, index) => (
      <button
        key={index}
        type="button"
        className={`emoji-btn ${
          rating === index + 1 ? "emoji-btn--active" : ""
        }`}
        onClick={() => setRating(index + 1)}
      >
        {emoji}
      </button>
    ));
  };

  if (isLoading) {
    return (
      <section className="comments-section">
        <div className="comments-loading">
          <div className="loading-skeleton">
            <div className="skeleton-avatar"></div>
            <div className="skeleton-content">
              <div className="skeleton-line skeleton-line--short"></div>
              <div className="skeleton-line"></div>
              <div className="skeleton-line skeleton-line--medium"></div>
            </div>
          </div>
          <div className="loading-skeleton">
            <div className="skeleton-avatar"></div>
            <div className="skeleton-content">
              <div className="skeleton-line skeleton-line--short"></div>
              <div className="skeleton-line"></div>
              <div className="skeleton-line skeleton-line--medium"></div>
            </div>
          </div>
        </div>
      </section>
    );
  }

  return (
    <section className="comments-section">
      {/* Comments List */}
      <div className="comments-list">
        <h2 className="comments-title">{comments.length} Comments</h2>

        {comments.map((comment) => (
          <article key={comment.id} className="comment">
            <Image
              src={comment.author.avatar || "/placeholder.svg"}
              alt={comment.author.name}
              width={40}
              height={40}
              className="comment__avatar"
            />
            <div className="comment__content">
              <div className="comment__header">
                <h3 className="comment__author">{comment.author.name}</h3>
                <div className="comment__rating">
                  {renderStars(comment.rating)}
                  <span className="comment__rating-value">
                    ({comment.rating}.0)
                  </span>
                </div>
              </div>
              <time className="comment__date">{comment.date}</time>
              <p className="comment__text">{comment.content}</p>
            </div>
          </article>
        ))}
      </div>

      {/* Add Comment Form */}
      <div className="add-comment">
        <h2 className="add-comment__title">Add A Comment</h2>

        <form onSubmit={handleSubmit} className="comment-form">
          <div className="form-row">
            <div>
              <div className="form-group">
                <label htmlFor="name" className="form-label">
                  Name
                </label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  value={formData.name}
                  onChange={handleInputChange}
                  className="form-input"
                  required
                />
              </div>
              <div className="form-group">
                <label htmlFor="email" className="form-label">
                  Email
                </label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  value={formData.email}
                  onChange={handleInputChange}
                  className="form-input"
                  required
                />
              </div>
            </div>

            <div className="form-group">
              <label htmlFor="comment" className="form-label">
                Comment
              </label>
              <textarea
                id="comment"
                name="comment"
                value={formData.comment}
                onChange={handleInputChange}
                className="form-textarea"
                required
              />
            </div>
          </div>

          {/* Rating Section */}
          <div className="rating-section">
            <h3 className="rating-section__title">
              Rate The Usefulness Of The Article
            </h3>
            <div className="rating-options">
              <div className="emoji-rating">{renderEmojis()}</div>
              <div className="form-actions">
                <button
                  type="submit"
                  className="comment-section__button"
                  disabled={isSubmitting}
                >
                  {isSubmitting ? "Sending..." : "Send"}
                </button>
              </div>
            </div>
          </div>
        </form>
      </div>
    </section>
  );
}
