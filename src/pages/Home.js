import React from "react";
import { Link } from "react-router-dom";
import Register from "./Register";
const Home = () => {
    return (
      
        localStorage.getItem("loggedIn") ? 
        <div >
          {/* <div class="text-right">
          <Link to ='./challenge'>
          <img src="cha.jpg" alt="HTML tutorial" width="200" height="200" float= 'right'></img>
          </Link></div> */}
         <div class =" inline-block;">
          <br></br>
          
        <h1 style={{ color: "white" }} align="center" >Welcome to Pro Time!</h1>
        <br></br>
<br></br>

<h1 style={{ color: "white" }} align="center" >اقوى المنافسات الرياضات الالكترونيه على منصة برو تايم</h1>
{/*<Link to ='./Register'>
<button  className='btn btn-primary w-100'>
          Register
        </button>
        </Link>*/}
        </div>
        <br></br>
        <br></br>
          <br></br>
          <br></br>
          <br></br>
        <div >
          <Link to ='/src/pages/League.js'>
         
          </Link></div>
          <div >
          <Link to ='./challenge'>
         
          </Link></div>
          <div className='container text-center'>
          <Link to ='./challenges'>
          

          </Link></div>
          
        </div>
        :
        <div class =" inline-block;">
          <br></br>
          <br></br>
        <h1 style={{ color: "white" }} align="center" >Welcome to Pro Time!</h1>
        <br></br>
<br></br>
<br></br>
<h1 style={{ color: "white" }} align="center" >اقوى المنافسات الرياضات الالكترونيه على منصة برو تايم</h1>
<br></br>
<br></br>
<Link to ='./Register'>
<button  className='btn btn-primary w-100'>
          سجل الان
        </button>
        </Link>
        
        </div>
        



    

    );
}

export default Home;