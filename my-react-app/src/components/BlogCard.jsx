
+3
-1

import '../Card.css';

const AVATAR_FEMALE = `${import.meta.env.BASE_URL}assets/images/avatar-femail.png`;

export default function BlogCard({ image, category, title, description, author }) {
  return (
    <article className="card" role="article">
      <div className="card__image-wrap">
        <img className="card__image" src={image} alt={title} loading="lazy" />
      </div>

      <div className="card__content">
        <span className="card__category">{category}</span>
        <p className="card__desc">Опубліковано: 6 листопада</p>
        <h3 className="card__title">{title}</h3> 

        <p className="card__desc">{description}</p>

        <div className="card__author">
          <img className="avatar" src={AVATAR_FEMALE} alt={author} loading="lazy" />
          <div className="author__box">
            <span className="author__name">{author}</span>
          </div>
        </div>
      </div>
    </article>
  );
}
