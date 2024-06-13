import React from 'react';
import BlogPost from './blogPost';
import Footer from './footer';

const Blog = () => {
  const blogPosts = [
    {
      title: "Discover Elegance: Inside Prishan's Botique",
      date: "June 13, 2024",
      content: "Welcome to Prishan's Botique, where style meets sophistication. Nestled in the heart of Nakuru, our boutique offers a curated selection of unique and fashionable items that cater to every taste and occasion..."
    },
    {
      title: "Summer Collection Launch",
      date: "May 20, 2024",
      content: "We are excited to introduce our summer collection! Featuring light fabrics, vibrant colors, and exclusive designs, this collection is perfect for the warm weather and sunny days..."
    },,
    {
      title: "Sustainable Fashion: Our Commitment",
      date: "April 5, 2024",
      content: "At Prishan's Botique, we believe in fashion with a conscience. Discover how our sustainable practices and eco-friendly materials make a positive impact on the environment and our community..."
    },
    {
      title: "Meet the Designer: Pritt",
      date: "March 15, 2024",
      content: "Get to know Pritt, the creative mind behind our unique collections. Learn about their inspiration, design process, and vision for the future of fashion..."
    },
    {
      title: "Top 5 Must-Have Accessories for Spring",
      date: "February 28, 2024",
      content: "Spring is here, and it’s time to update your accessory game! Check out our top picks for must-have accessories that will elevate your style this season..."
    },
    {
      title: "Customer Spotlight: Style Stories",
      date: "January 10, 2024",
      content: "We love to celebrate our customers! Read about their unique style stories and how they incorporate pieces from Prishan's Botique into their everyday wardrobe..."
    },
    {
      title: "How to Style a Little Black Dress",
      date: "December 22, 2023",
      content: "The little black dress is a timeless staple. Discover our tips and tricks for styling it in various ways for different occasions..."
    },
    {
      title: "Holiday Gift Guide: Perfect Presents from Prishan's Botique",
      date: "November 30, 2023",
      content: "The holiday season is upon us! Find the perfect gifts for your loved ones with our curated holiday gift guide..."
    },
    {
      title: "Behind the Scenes: Creating Our Winter Collection",
      date: "October 25, 2023",
      content: "Take a peek behind the scenes and see how our winter collection comes to life. From initial sketches to the final product, follow our journey..."
    },
    {
      title: "Fashion Trends to Watch in 2024",
      date: "September 15, 2023",
      content: "Stay ahead of the curve with our forecast of the top fashion trends for 2024. See what’s hot and how to incorporate these trends into your wardrobe..."
    },
    {
      title: "The Ultimate Guide to Fall Fashion",
      date: "August 10, 2023",
      content: "Fall is around the corner! Prepare your wardrobe with our ultimate guide to fall fashion, including layering tips, must-have pieces, and more..."
    },
    {
      title: "How to Transition Your Wardrobe from Summer to Fall",
      date: "July 5, 2023",
      content: "Transitioning your wardrobe from summer to fall can be tricky. Here are our top tips for making a seamless switch while staying stylish and comfortable..."
    },
    {
      title: "Spotlight on Local Artisans: Handcrafted Jewelry",
      date: "June 1, 2023",
      content: "We’re proud to showcase the work of local artisans. Learn more about the inspiration and craftsmanship behind our exclusive handcrafted jewelry collection..."
    },
    {
      title: "Travel in Style: Fashion Tips for Your Next Vacation",
      date: "May 10, 2023",
      content: "Planning a vacation? Discover our top fashion tips to travel in style, from packing essentials to versatile outfits for any destination..."
    },
    {
      title: "The Evolution of Prishan's Botique: A Look Back",
      date: "April 20, 2023",
      content: "Join us as we take a look back at the evolution of Prishan's Botique. From our humble beginnings to becoming a fashion destination, it’s been an incredible journey..."
    },
    {
      title: "Exclusive Interview: Shan on Fashion and Trends",
      date: "March 15, 2023",
      content: "We sat down with fashion influencer Shan to discuss their take on current trends, personal style, and tips for staying ahead of the fashion curve..."
    },
    // To add more blog posts as needed
  ];
  
  return (
    <div className="full">
      <div className="blog blogW">
        <h1 className='h'>Our Blog <img src="\images\blog.avif" alt="logo " className="logo b-rad"/></h1>
        {blogPosts.map((post, index) => (
          <BlogPost key={index} title={post.title} date={post.date} content={post.content} />
        ))}
     </div>
     <Footer />
    </div>
    
  );
};

export default Blog;
