import React from 'react';

const Story = (props) => {
  return (
    <figure 
      className="story" 
      data-viewed={(props.viewed) ? 'viewed' : ''} 
      onClick={props.onClick}
    >
      <div className="img">
        <img src={props.img} alt={props.title} />
      </div>
      <figcaption>{props.title}</figcaption>
    </figure>
  );
};

export default Story;