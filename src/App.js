import './App.css';
import Logo from "./girl.png";
function App() {
  return (
    <div className='Calculator'>
      <span className="nav">Sandra Rosa Antony</span>
      <div className="main">
      <img src= {Logo} className='girl' alt="logo" />
      <div className="content">
      <span className="Heading">
            Calculator
          </span>
      </div>
      </div>
    </div>
  );
}

export default App;
