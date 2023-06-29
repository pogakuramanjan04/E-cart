import logo from './logo.svg';
import './App.css';
import { useState } from "react";

function App() {
  const [c, sc] = useState(true);

  function r(){
    sc(false)
    console.log("shdb")


  }
  return (
    <>
    {/* {c?<h1>ksjdn</h1>} */}
    { c ? 
    
    <>
    <div className="i1">
    <h1>Registration Form</h1>
     <div>
     
    
     <p>E-Mail</p>
     <input id="myInput" type="text" />
     </div>


     <div>
     <p>First Name</p>
     <input id="myInput" type="text" />
     </div>

     <div>
     <p>Second Name</p>
     <input id="myInput" type="text" />
     </div>
     
     <div>
     <p> Create Password</p>
     <input id="myInput" type="text" />
     </div>
     
     <div>
     <p> Conform Password</p>
     <input id="myInput" type="text" />
     </div>

     <button className="b"> Create Account</button>

     <p>Already ave an account ? <span className="s" onClick={r}>Login</span> </p>
     



    </div>
    
    </> 
    
    : 
    <>
    
    
    
   
    <div className="i1">
    <h1>login Form</h1>
      
    
     {/* <div>

     <p>E-Mail</p>
     <input id="myInput" type="text" />
     </div>
 */}

     {/* <div>

     <p>First Name</p>
     <input id="myInput" type="text" />
     </div> */}

     <div>
     <p>Enter Email</p>
     <input id="myInput" type="text" />
     </div>
     
     {/* <div>
     <p> Create Password</p>
     <input id="myInput" type="text" />
     </div> */}


     <div>
     <p> Conform Password</p>
     <input id="myInput" type="text" />
     </div>

     <button className="b"> Submit</button>

     <p>click Here to submit ? <span className="s" onClick={r}></span> </p>
     



    </div>
    
    
    
    
    </> }
  
    {/* <div className="i1">
    <h1>Registration Form</h1>
      
    
     <div>

     <p>E-Mail</p>
     <input id="myInput" type="text" />
     </div>


     <div>

     <p>First Name</p>
     <input id="myInput" type="text" />
     </div>

     <div>
     <p>Second Name</p>
     <input id="myInput" type="text" />
     </div>
     
     <div>
     <p> Create Password</p>
     <input id="myInput" type="text" />
     </div>
     <div>
     <p> Conform Password</p>
     <input id="myInput" type="text" />
     </div>

     <button className="b"> Create Account</button>

     <p>Already ave an account ? <span className="s" onClick={r}>Login</span> </p>
     



    </div> */}




    </>

  );
}

export default App;
