import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import './assets/scss/base.scss';
import App from './App';
import * as serviceWorker from './serviceWorker';

// import MultiCount from './components/multiCount';
// import NavBar from './components/NavBar';

// import './NavBar.css';

// import 'bootstrap/dist/css/bootstrap.css';

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

ReactDOM.render(<App />, document.getElementById('root'));

// <React.Fragment>
//     <NavBar />
//     <MultiCount />
//     <br />
//     <MultiCount />
// </React.Fragment>


// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
