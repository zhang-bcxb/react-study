// 引入路由规则
import startRouterArr from './router/routerArr'
import {Routes, Route} from 'react-router-dom'
import {createRoute} from './router/createRoute'
import {useSelector} from "react-redux";

function App() {

  // 获取新数组
  let userRoute = useSelector((state) => {
    // console.log(state)
    return state.userInfo.userRoute
  })

  console.log(createRoute(userRoute.concat(startRouterArr)))

  return <>
    <h1>App 组件</h1>

    <Routes>
      {/*{
        routerArr.map((item) => {
          return <Route key={item.path} path={item.path} Component={item.component}></Route>
        })
      }*/}

      {createRoute(userRoute.concat(startRouterArr))}
    </Routes>
  </>
}

export default App
