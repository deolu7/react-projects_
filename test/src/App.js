import logo from './logo.svg';
import adam from "./adam-jaime-YeH5EIRFCIs-unsplash.jpg";
import './App.css';

function App() {
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

export default App;
