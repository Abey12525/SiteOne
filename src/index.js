import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import * as serviceWorker from './serviceWorker';
import MultiCount from './components/multiCount';
import NavBar from './components/NavBar';
import './index.css';
import './NavBar.css';
import 'bootstrap/dist/css/bootstrap.css';

// const ChangeBackground = () =>{
//     const stylesObj = {background: "black"};
//     return(
//             <div style={stylesObj} className="container">
//                 <div>
//                     <MultiCount />
//                     <br />
//                     <MultiCount />
//                 </div>
//             </div>)
// };

ReactDOM.render(
                <React.Fragment>
                    <NavBar />
                    <MultiCount />
                    <br />
                    <MultiCount />
                </React.Fragment>
                , document.getElementById('root'));


// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
