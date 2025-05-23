function ProfileCard(props) {
 return ( 
  <div>
   <div>{props.name}</div>
   <div>{props.age}</div>
   <div>{props.hobby}</div>
  </div>
 );
}

export default ProfileCard;