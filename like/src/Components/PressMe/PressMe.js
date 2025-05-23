import { useState } from "react";
import "./PressMe.css";

function PressMe(props) {
 const [likes, setLikes] = useState(0);
 const handleOnClick = () => {setLikes(likes + 1);
 };

 return (
  <div className = "likes">
   <button onClick={handleOnClick}>Press Me</button>
   <div>{likes}</div>
  </div>
 );
}

export default PressMe;