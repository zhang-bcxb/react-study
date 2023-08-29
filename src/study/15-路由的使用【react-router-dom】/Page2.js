import {Outlet, useNavigate} from 'react-router-dom'

function Page2() {
  let nav = useNavigate()
  return <div>
    <h1>【Page2】</h1>
    <button onClick={() => {
      // 直接跳转
      // nav("/page1")
      // 传递数据的跳转
      nav("/page3/123", {
        state: {
          data: '跳转携带的数据'
        }
      })
    }}>跳转到 Page3
    </button>

    {/*定义子路由显示的位置*/}
    <Outlet></Outlet>
  </div>
}

export default Page2
