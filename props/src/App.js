import ProfileCard from "./Components/ProfileCard/ProfileCard.js";
import './App.css';

function App() {
  return (
    <>
    <div className="App">
      <ProfileCard name="Joy" age="10" hobby="drawing" />
    </div>

    <div className="App">
      <ProfileCard name="Lolade" age="30" hobby="dancing" />
    </div>

    <div className="App">
      <ProfileCard name="Seun" age="25" hobby="photography" />
    </div>

    <div className="App">
      <ProfileCard name="Seye" age="20" hobby="cinematography" />
    </div>

    <div className="App">
      <ProfileCard name="Linda" age="15" hobby="videography" />
    </div>
    </>
  );
}

export default App;