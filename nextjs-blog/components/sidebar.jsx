import Image from "next/image";
import "./sidebar.css";

export default function Sidebar({ articles, tourGuides }) {
  const renderStars = (rating) => {
    const stars = [];
    const fullStars = Math.floor(rating);
    const hasHalfStar = rating % 1 !== 0;

    for (let i = 0; i < fullStars; i++) {
      stars.push(
        <span key={i} className="star star--filled">
          ★
        </span>
      );
    }

    if (hasHalfStar) {
      stars.push(
        <span key="half" className="star star--half">
          ★
        </span>
      );
    }

    const emptyStars = 5 - Math.ceil(rating);
    for (let i = 0; i < emptyStars; i++) {
      stars.push(
        <span key={`empty-${i}`} className="star star--empty">
          ★
        </span>
      );
    }

    return stars;
  };

  return (
    <aside className="sidebar">
      {/* Related Articles */}
      <section className="sidebar-section">
        <div className="sidebar-section__title">Explore more</div>
        {articles.map((article, index) => (
          <article key={index} className="sidebar-article">
            <Image
              src={article.image || "/placeholder.svg"}
              alt={article.title}
              width={150}
              height={100}
              className="sidebar-article__image"
            />
            <div className="sidebar-article__content">
              <div className="sidebar-article__meta">
                <span className="sidebar-article__category">
                  {article.category}
                </span>
                <span className="sidebar-article__date">{article.date}</span>
              </div>
              <h3 className="sidebar-article__title">{article.title}</h3>
            </div>
          </article>
        ))}
      </section>

      {/* Tour Guides */}
      <section className="sidebar-section">
        <h2 className="sidebar-section__title">Tour Guides</h2>
        <div className="tour-guides">
          {tourGuides.map((guide, index) => (
            <div key={index} className="tour-guide">
              <Image
                src={guide.avatar || "/placeholder.svg"}
                alt={guide.name}
                width={40}
                height={40}
                className="tour-guide__avatar"
              />
              <div className="tour-guide__info">
                <h3 className="tour-guide__name">{guide.name}</h3>
                <p className="tour-guide__location">⚲ {guide.location}</p>
                <div className="tour-guide__rating">
                  <div className="stars">{renderStars(guide.rating)}</div>
                  <span className="rating-value">({guide.rating})</span>
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>
    </aside>
  );
}
