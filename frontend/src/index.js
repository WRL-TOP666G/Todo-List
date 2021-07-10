import React from 'react';
import ReactDOM from 'react-dom';
import 'bootstrap/dist/css/bootstrap.min.css';   
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
//import * as serviceWorker from './serviceWorker';

ReactDOM.render(<App />, document.getElementById('root'));
// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
//serviceWorker.unregister();

window.onload = function(){
	setTimeout(function(){
	var loader = document.getElementsByClassName("loader")[0];
	loader.className="loader fadeout" ;//使用渐隐的方法淡出loading page
	setTimeout(function(){loader.style.display="none"},2000)
	},2000)
}
