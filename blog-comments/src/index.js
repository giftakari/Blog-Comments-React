import React from 'react';
import ReactDOM from 'react-dom';
import faker from 'faker';
import CommentDetails from './CommentDetails';
import ApprovalCard from './ApprocardCard';

const App = () =>{
return (
<div className="ui container comments" >
<ApprovalCard/>
 <CommentDetails author ="Sam" timeOfPost="Today at 8:56pm"
  post ="Its not easy but not impossible" avatar ={faker.image.avatar()}
 />
 <CommentDetails author = "Alexander Isa" timeOfPost="Yesterday at 5:56pm" post avatar ={faker.image.avatar()}
 />
 <CommentDetails author = "Jenifer Appiah" timeOfPost ="Today at 5:50am"
   post ="Lets build the bond ,lets grow together" avatar ={faker.image.avatar()}
 />

</div>

);

};
ReactDOM.render(<App />, document.querySelector('#root'));