import React, { Component } from 'react';
import ReactDOM from 'react-dom/client';
import {Navbar,Footer} from './Components/Layout'


function App(){
  return(
    <>
    <Navbar/>
  <div>
  <h2>Welcome to My Website</h2>
  <hr/>
  <p>
    This is my first website and 
    It is a single page application.<br/>
    This is a function component.
  </p>
</div>
<Footer/>
</>
  )
}

class CApp extends Component{
  render(){
    return(
      <div>
      <h2>Welcome to My Website</h2>
      <hr/>
      <p>
        This is my first website and 
        It is a single page application.<br/>
        This is a class component.
      </p>
    </div>
      )
  }
}

let content = (
<div>
  <h2>Welcome to My Website</h2>
  <hr/>
  <p>
    This is my first website and 
    It is a single page application.
  </p>
</div>
)
const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    {/* {content} */}
    <App />
    {/* <CApp /> */}
  </React.StrictMode>
);
