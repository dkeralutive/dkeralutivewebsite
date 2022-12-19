import logo from './images/Group.png';
import logos from './images/Group1915.png';

import './App.css';

function App() {
  return (
    <div className="App">
      {/* <header className="App-header"> */}
       <div children="nav">
        <img src={logo}/>
       </div>
       <div children="nav">
        <img src={logos}/>
       </div>
       <div>

       </div>
      {/* </header> */}
    </div>
  );
}

export default App;
