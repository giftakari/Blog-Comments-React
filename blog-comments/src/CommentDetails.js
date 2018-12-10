import React from 'react';



const CommentDetails = (props) =>{

return(
<div className="comment">
   <a href="/" className="avatar">
     <img alt="avatar" src={props.avatar} />
   </a>
   <div className="content">
      <a href="/" className="author">
       {props.author}
       </a>
       <div className="matadata">
         <span className="date">{props.timeOfPost}</span>
       </div>
       <div className="text">{props.post}</div>
   </div>
  </div>

  
  );
}

export default CommentDetails;