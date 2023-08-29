import {Route} from 'react-router-dom'

export function createRoute(routerArr) {
  return routerArr.map((item) => {
    /*if (item.children && item.children.length > 0) {
      return <Route key={item.path} path={item.path} Component={item.component}>{createRoute(item.children)}</Route>
    } else {
      return <Route key={item.path} path={item.path} Component={item.component}></Route>
    }*/

    return <Route key={item.path} path={item.path} Component={item.component}>
      {
        (item.children && item.children.length > 0) ? createRoute(item.children) : ''
      }
    </Route>
  })
}
