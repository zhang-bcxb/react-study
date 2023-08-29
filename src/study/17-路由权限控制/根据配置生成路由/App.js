// 引入路由规则
import routerArr from './router/routerArr'
import {Routes, Route} from 'react-router-dom'
import {createRoute} from './router/createRoute'

function App() {

  console.log(createRoute(routerArr))

  return <>
    <h1>App 组件</h1>

    <Routes>
      {/*{
        routerArr.map((item) => {
          return <Route key={item.path} path={item.path} Component={item.component}></Route>
        })
      }*/}

      {createRoute(routerArr)}
    </Routes>
  </>
}

export default App
