import './App.css';
import Logo from "./girl.png";
function App() {
  const createDigits=()=>{
    const digits=[];
    for(let i=1;i<10;i++){
      digits.push(
        <button key={i}>{i}</button>
      )
    }
    return digits;
  }
  return (
    <div className='Calculator1'>
      <span className="nav">Sandra Rosa Antony</span>
      <div className="main">
        <img src={Logo} className='girl' alt="logo" />
        <div className="content">
          <span className="Heading">
            Calculator
          </span>
        
        <div className="calculator">
          <div className="display">
            <span>(0)</span>0
          </div>
          <div className="operators">
            <button>/</button>
            <button>*</button>
            <button>+</button>
            <button>-</button>

            <button>DEL</button>
          </div>
          <div className="digits">
            {createDigits()}
            <button>0</button>
            <button>.</button>
            <button>=</button>
          </div>
        </div>
        </div>
      </div>
    </div>
  );
}

export default App;
