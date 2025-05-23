import './ProfileCard.css';

function ProfileCard(props) {
 return ( 
  <div className="card">
   <div>{props.name}</div>
   <div>{props.age}</div>
   <div>{props.hobby}</div>
  </div>
 );
}

export default ProfileCard;