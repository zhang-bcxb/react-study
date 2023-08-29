import React from 'react'
import './App.css'
import {Routes, Route, NavLink, Link, Navigate} from 'react-router-dom'

// 导入组件
// import Page1 from './Page1'
import Page2 from './Page2'
import Page3 from './Page3'
import Page2Son1 from './Page2Son1'
import Page2Son2 from './Page2Son2'

import {lazy, Suspense} from 'react'

// 懒加载
let LazyPage1 = lazy(() => {
  return import('./Page1')
})

function App() {

  let _token = localStorage.getItem('token')

  // 相当于 render 函数
  return <>
    <h1>跳转链接</h1>
    <NavLink to='/page1'>page1</NavLink>
    <NavLink to='/page2'>page2</NavLink>
    <NavLink to='/page3/123'>page3</NavLink>
    <h1>App 组件</h1>
    <Suspense fallback={<h2>加载中</h2>}>
      {/*react v5（Switch） 和 react v6（Routes）是有很大区别的*/}
      {/*Routes 组件只能放 Route 组件*/}
      <Routes>
        {/*react v5 只有 component*/}
        {/*<Route path='/page1' element={<Page1></Page1>}></Route>*/}
        {/*在不登录的情况下，重定向到 Page2*/}
        {/*<Route path='/page1' element={_token ? <Page1></Page1> : <Navigate to='/page2'></Navigate>}></Route>*/}
        {/*在不登录的情况下，直接不生成*/}
        {/*{_token ? <Route path='/page1' element={<Page1></Page1>}></Route> : ''}*/}
        {/*异步路由*/}

        <Route path='/page1' element={<LazyPage1></LazyPage1>}></Route>
        <Route path='/page2' Component={Page2}>
          {/*注意这里path不要加斜杠*/}
          <Route path='son1' Component={Page2Son1}></Route>
          <Route path='son2' Component={Page2Son2}></Route>
        </Route>
        <Route path='/page3/:id' Component={Page3}></Route>
      </Routes>
    </Suspense>
  </>
}

export default App;
