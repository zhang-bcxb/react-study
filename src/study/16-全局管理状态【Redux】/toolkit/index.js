import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
// 引入路由
import {BrowserRouter, HashRouter} from 'react-router-dom'

import {Provider} from 'react-redux'
// import store from './store/index'
import store from './store/toolkit'

/*import store from './store'
// 修改之后会自动触发该监听，代价会非常大
store.subscribe(() => {
  // 重新渲染页面
  root.render(
      <App/>
  );
})*/

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
    <Provider store={store}>
      <App/>
    </Provider>

    /*<HashRouter>
      <App/>
    </HashRouter>*/

    /*<React.StrictMode>
      <App />
    </React.StrictMode>*/
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
