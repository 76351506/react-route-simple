import React from 'react';
import ReactDOM from 'react-dom';

// import './mock';
import App from 'view/App';
import * as serviceWorker from './serviceWorker';
// 自定义一个订阅发布器 完成同级组件的通讯
// import EventHub from 'common/js/eventbus';

//使用第三方的events 库
import EventEmitter from "events";
window.EventHub = new EventEmitter();


ReactDOM.render(<App />, document.getElementById('root'));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: http://bit.ly/CRA-PWA
serviceWorker.unregister();