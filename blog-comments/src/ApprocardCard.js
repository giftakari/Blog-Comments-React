import React from 'react';

const ApprovalCard = () =>{
return(
  <div className= "ui card">
   <div className="content" >Are you sure </div>
     <div className ="extra content">
       <div className="ui buttons" >
         <div className="ui basic green button">Approved</div>
         <div className="ui basic red button">Reject</div>
         
      </div>
   </div>
  </div>
  )
}

export default ApprovalCard;