import React from 'react';

const Article = (props) => {
  return (
    <div className="my-quote">
      <h3><a href={props.article.url}>{props.article.title}</a></h3>
      <div className="meta">
        <span className="author">{props.article.author}</span>
        <span className="genre">{props.article.source.name}</span>
      </div>
    </div>
  );
}

export default Article;
