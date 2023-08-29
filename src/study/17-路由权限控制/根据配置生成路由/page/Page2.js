import {Outlet} from 'react-router-dom'

function Page2() {
  return <div>
    <h1>【Page2】</h1>

    {/*定义子路由显示的位置*/}
    <Outlet></Outlet>
  </div>
}

export default Page2
