import React from 'react';
import Spacer from './Spacer';
import PageHeading from '../../components/PageHeading';

const BlogHeader = ({ title }) => {
  return (
    <section className="elementor-section elementor-top-section elementor-element elementor-element-3a1a21b elementor-section-boxed elementor-section-height-default elementor-section-height-default">
      <div className="elementor-container elementor-column-gap-default">
        <div className="elementor-column elementor-col-100 elementor-top-column elementor-element elementor-element-fa3b2d8">
          <div className="elementor-widget-wrap-blog elementor-element-populated">
            
            <div className="elementor-element elementor-element-905eeca elementor-widget__width-auto elementor-widget elementor-widget-text-editor animated fadeInUp">
              <div className="elementor-widget-container">
                <PageHeading title="Blog"/>
              </div>
            </div>
            
            <Spacer />

            <div className="elementor-element elementor-element-88b6bfc animated-slow elementor-widget elementor-widget-heading animated fadeInUp">
              <div className="elementor-widget-container">
                <h1 className="elementor-heading-title elementor-size-default">{title}</h1>
              </div>
            </div>
            
            <Spacer />

          </div>
        </div>
      </div>
    </section>
  );
};

export default BlogHeader;