import "./Card.css";
import adam from "/Imgs/adam-jaime-YeH5EIRFCIs-unsplash.jpg";

function Card() {
 return (
  <div className="card">
   <div className="image-container">
    <img src={adam} alt="adam" />
   </div>

   <div className="card-styling">
    <p className="sub-section">pizza</p>
    <h1>EuroGyro</h1>
    <p>107 S Depeyster St Kent, OH 44240</p>
    <p className="reviews">
     <span className="stars">
      <i className="fas fa-star"></i>
      <i className="fas fa-star"></i>
      <i className="fas fa-star"></i>
      <i className="fas fa-star"></i>
      <i className="fas fa-star-half-alt"></i>
     </span>
     90 Reviews
    </p>
   </div>
  </div>
 );
}

export default Card;