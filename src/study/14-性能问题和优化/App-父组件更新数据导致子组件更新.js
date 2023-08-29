import React from 'react'
import {useState, useMemo} from 'react'

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

  // 相当于 render 函数
  return <>
    <h1>App 组件</h1>
    <h2>父组件数据更新：{num}</h2>

    <button onClick={() => {
      setNum(++num)
    }}>更新父组件数据
    </button>
    <MemoSon></MemoSon>
  </>
}

export default App;
