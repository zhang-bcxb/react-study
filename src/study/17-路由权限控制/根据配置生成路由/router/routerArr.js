// 引入组件
import Page1 from '../page/Page1'
import Page2 from '../page/Page2'
import Page3 from '../page/Page3'

import Page2Son1 from '../page/Page2Son1'
import Page2Son2 from '../page/Page2Son2'

export default [
  {
    // 跳转路径
    path: "/page1",
    // 组件位置
    component: Page1
  },
  {
    // 跳转路径
    path: "/page2",
    // 组件位置
    component: Page2,
    children: [
      {
        // 跳转路径
        path: "son1",
        // 组件位置
        component: Page2Son1
      },
      {
        // 跳转路径
        path: "son2",
        // 组件位置
        component: Page2Son2
      }
    ]
  },
  {
    // 跳转路径
    path: "/page3",
    // 组件位置
    component: Page3
  }
]
