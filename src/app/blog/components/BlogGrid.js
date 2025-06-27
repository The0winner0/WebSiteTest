import React from 'react';
import BlogPostCard from './BlogPostCard';

const BlogGrid = ({ posts }) => {
  return (
    <section className="elementor-section elementor-top-section elementor-element elementor-element-c27d9a4 elementor-section-boxed elementor-section-height-default elementor-section-height-default">
      <div className="elementor-container elementor-column-gap-default">
        <div className="elementor-column elementor-col-100 elementor-top-column elementor-element elementor-element-7c32bd2">
          <div className="elementor-widget-wrap elementor-element-populated">
            <div className="elementor-element elementor-element-473549c elementor-widget elementor-widget-bdt-post-grid">
              <div className="elementor-widget-container">
                <div id="bdt-post-grid-473549c" className="bdt-post-grid bdt-post-grid-skin-trosia">
                  <div className="bdt-grid bdt-grid-x-small">
                    {posts.map((post, index) => (
                       <BlogPostCard 
                         key={post.id} 
                         post={post} 
                         isFirstInRow={index % 2 === 0}
                       />
                    ))}
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default BlogGrid;