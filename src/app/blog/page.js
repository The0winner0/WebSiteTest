import React from 'react';
import BlogHeader from './components/BlogHeader';
import BlogGrid from './components/BlogGrid';
import '../Css/Blog.css';
// In a real application, this data would come from a CMS or API.
const blogPostsData = [
  {
    id: 1,
    title: 'Real-Time Location Tracking in Healthcare: Enhancing Efficiency & Patient Care',
    link: 'https://atollsolutions.com/real-time-location-tracking-in-healthcare-enhancing-efficiency-patient-care/',
    imageUrl: 'https://i0.wp.com/atollsolutions.com/wp-content/uploads/2025/03/Real-Time-Location-Tracking-in-Healthcare_-Enhancing-Efficiency-Patient-Care.png?fit=1920%2C1080&ssl=1',
    author: 'Atoll Solutions',
    authorLink: 'https://atollsolutions.com/author/ajay-s/',
    date: 'March 31, 2025',
    comments: 0,
    category: 'Industry',
    categoryLink: 'https://atollsolutions.com/category/industry/',
  },
  {
    id: 2,
    title: 'Location Tracking in Logistics with Kinesis RTLS',
    link: 'https://atollsolutions.com/location-tracking-in-logistics-with-kinesis-rtls/',
    imageUrl: 'https://i0.wp.com/atollsolutions.com/wp-content/uploads/2025/03/RTLS-%E2%80%93-Asset-Location-Tracking-in-Logistics.png?fit=1920%2C1080&ssl=1',
    author: 'Atoll Solutions',
    authorLink: 'https://atollsolutions.com/author/ajay-s/',
    date: 'March 7, 2025',
    comments: 0,
    category: 'Industry',
    categoryLink: 'https://atollsolutions.com/category/industry/',
  },
    {
    id: 3,
    title: 'RTLS for Asset Tracking to Reduce Costs & Improve Operations in Tech Labs',
    link: 'https://atollsolutions.com/asset-tracking-reduce-costs-improve-operations-in-tech-labs/',
    imageUrl: 'https://i0.wp.com/atollsolutions.com/wp-content/uploads/2025/02/RTLS-for-Asset-Tracking-to-Reduce-Costs-Improve-Operations-in-Tech-Labs-1.webp?fit=1920%2C1080&ssl=1',
    author: 'Atoll Solutions',
    authorLink: 'https://atollsolutions.com/author/ajay-s/',
    date: 'February 21, 2025',
    comments: 0,
    category: 'Industry',
    categoryLink: 'https://atollsolutions.com/category/industry/',
  },
  {
    id: 4,
    title: 'Unveiling Our New Brand Identity',
    link: 'https://atollsolutions.com/unveiling-our-new-brand-identity/',
    imageUrl: 'https://i0.wp.com/atollsolutions.com/wp-content/uploads/2024/03/Slide-16_9-11.png?fit=1920%2C1080&ssl=1',
    author: 'Atoll Solutions',
    authorLink: 'https://atollsolutions.com/author/ajay-s/',
    date: 'March 11, 2024',
    comments: 1,
    category: 'Brands',
    categoryLink: 'https://atollsolutions.com/category/brands/',
  },
  // ... Add all other post objects here following the same structure
];


const BlogPage = () => {
  return (
    <div id="content" className="uicore-content blog-page-main">
      <div id="primary" className="content-area">
        <div data-elementor-type="uicore-tb" data-elementor-id="67" className="elementor elementor-67">
          
          <BlogHeader 
            breadcrumb="Blog"
            title="Insights from our experts & news from the industry"
          />
          
          <BlogGrid posts={blogPostsData} />

        </div>
      </div>
    </div>
  );
};

export default BlogPage;