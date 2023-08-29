import {Route} from 'react-router-dom'
import routerMap from "./routerMap";

export function createRoute(routerArr) {
  return routerArr.map((item) => {
    /*if (item.children && item.children.length > 0) {
      return <Route key={item.path} path={item.path} Component={item.component}>{createRoute(item.children)}</Route>
    } else {
      return <Route key={item.path} path={item.path} Component={item.component}></Route>
    }*/

    return <Route key={item.path} path={item.path} Component={routerMap[item.component] || routerMap[item.el]}>
      {
        (item.children && item.children.length > 0) ? createRoute(item.children) : ''
      }
    </Route>
  })
}
