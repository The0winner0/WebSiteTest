import React from 'react';

const BlogPostCard = ({ post, isFirstInRow }) => {
  // The original HTML had specific classes for the first column in a row.
  const columnClasses = `bdt-width-1-1 bdt-width-1-2@s bdt-width-1-2@m ${isFirstInRow ? 'bdt-first-column' : ''}`;

  return (
    <div className={columnClasses}>
      <div className="bdt-post-grid-item bdt-transition-toggle bdt-position-relative">
        <div className="bdt-post-grid-img-wrap bdt-overflow-hidden">
          <a
            href={post.link}
            className="bdt-transition-scale-up bdt-background-cover bdt-transition-opaque bdt-flex"
            title={post.title}
            style={{ backgroundImage: `url(${post.imageUrl})` }}
          >
            {/* This anchor tag is used for the background image, content is empty */}
          </a>
        </div>
        <div className="bdt-custom-overlay bdt-position-cover"></div>
        <div className="bdt-post-grid-desc bdt-position-bottom">
          <div className="bdt-position-medium">
            <h2 className="bdt-post-grid-title">
              <a href={post.link} className="bdt-post-grid-link" title={post.title}>
                {post.title}
              </a>
            </h2>
            <div className="bdt-post-grid-meta bdt-subnav bdt-flex-inline bdt-flex-middle bdt-margin-small-top">
              <span className="bdt-post-grid-author">
                <a href={post.authorLink}>{post.author}</a>
              </span>
              <span className="bdt-post-grid-date">{post.date}</span>
              <div className="bdt-post-grid-comments bdt-inline-block">
                <span>
                  <i className="ep-icon-bubble" aria-hidden="true"></i> {post.comments}
                </span>
              </div>
            </div>
            <div className="bdt-transition-slide-bottom"></div>
          </div>
        </div>
        <div className="bdt-post-grid-category bdt-position-small bdt-position-top-left">
          <a href={post.categoryLink}>{post.category}</a>
        </div>
      </div>
    </div>
  );
};

export default BlogPostCard;