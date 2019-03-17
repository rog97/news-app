import React from 'react';
import Article from './Article';

const List = (props) => {
  console.log(props.apiData);
  return (
    <div className="quotelist">
      {
        props.apiData.map( (article, index) => {
          return <Article article={article} key={index}/>
        })
      }
      </div>
  );
}

export default List;
