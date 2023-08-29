import React from 'react'
import {useState, useMemo, useCallback} from 'react'

// 如果是类组件，直接继承 PureComponent
// 如果是函数组件，使用 React.memo 进行包裹
function Son(props) {
  // 父组件数据更新，导致子组件更新
  console.log('子组件渲染')
  return <>
    <h1>子组件</h1>
  </>
}

let MemoSon = React.memo(Son)

function App() {

  let [num, setNum] = useState(0)

  // 引用类型 =》是否相等 =》内存地址
  // 更新 num =》App 组件更新 =》重新执行 App 方法 =》重新创建 obj 和 testFn =》props 改变
  // 解决：数据使用 useMemo 包裹，方法使用 useCallback 包裹
  let obj = useMemo(() => {
    return {
      num: 1
    }
  }, [])

  let testFn = useCallback(function () {
    console.log("测试方法")
  }, [])

  // 相当于 render 函数
  return <>
    <h1>App 组件</h1>
    <h2>父组件数据更新：{num}</h2>
    <MemoSon obj={obj} testFn={testFn}></MemoSon>
    <button onClick={() => {
      setNum(++num)
    }}>更新父组件数据
    </button>
  </>
}

export default App;
