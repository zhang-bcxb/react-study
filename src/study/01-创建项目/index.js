import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';

// index.js 类似 main.js，把项目挂载到指定的 Dom 节点
// <React.StrictMode> 表示 React 的严格模式，项目上线会自动去掉
// react-dom 的作用：把一个 react 组件从一个真正的 dom 里面卸载或者渲染真正的 dom
const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
    <React.StrictMode>
      <App/>
    </React.StrictMode>
);

// 两秒之后卸载
setTimeout(() => {
  root.unmount()
}, 2000)

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
