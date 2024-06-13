import React from 'react';

const BlogPost = ({ title, date, content }) => {
  return (
    <article className="blog-post back">
      <h2>{title}</h2>
      <p className="date">{date}</p>
      <p>{content}</p>
    </article>
  );
};

export default BlogPost;
