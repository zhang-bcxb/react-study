// Hook 的方式只能用于 toolkit，也只能用于函数组件
import {useSelector, useDispatch} from 'react-redux'
import {addNum, changeNumThunk} from "./store/toolkit";

function App() {

  // 使用 state
  let num = useSelector((state) => {
    // console.log(state)
    return state.numReducer.num
  })

  // 修改 state
  let dispatch = useDispatch()

  return <>
    <h1>App 组件</h1>
    <h2>{num}</h2>
    <button onClick={() => {
      // 方式一
      /*dispatch({
        type: "numSlice/addNum"
      })*/

      // 方式二
      dispatch(addNum())
    }}>增加
    </button>

    <button onClick={() => {
      dispatch(changeNumThunk(123))
    }}>异步修改
    </button>
  </>
}

export default App
