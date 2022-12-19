import logo from './images/Group.png';
import logos from './images/Group1915.png';
import eclipse from './images/Ellipse.png';
import group11 from './images/Group111.png';



import './App.css';

function App() {
  return (
    <div className="Apps">
       <div className="App">
        <img src={logo}/>
        <div children="nav">
        <img src={logos}/>
        <img src={group11}/>

       </div>
       {/* <div  className="menuside">

       </div> */}
       <div className="menu">
       <img src={eclipse}/>
       </div>
       <div>
        <div  className="menutext">
        Intrigued by beauty, fascinated by technology and fuelled with 
        an everlasting devotion to digital craftsmanship and meaningful 
        aesthetics.
        </div>
       </div>
      
       </div>
       

      
       
      
    </div>
  );
}

export default App;
