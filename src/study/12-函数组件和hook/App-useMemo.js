import React from 'react'

import {useState, useEffect, useMemo} from 'react'

function App() {

  // state 使用
  // 第一项为数据，第二项为修改数据的方法
  let [msg, setMsg] = useState('hello')
  let [arr, setArr] = useState([1, 2, 3])

  // 第一个参数：回调函数【必传】
  // 第二个参数：空数组 或者 放某个数据
  // 监听修改的数据，才会在变化的时候重新进行运算
  let all = useMemo(() => {
    let all = 0
    arr.forEach(item => {
      all += item
    })

    return all
  }, [arr])

  // 第一个参数：回调函数【必传】
  // 第二个参数：空数组 或者 放某个数据
  // useEffect 监听某个数据，开始就会执行【Vue 不会】
  useEffect(() => {
    console.log('useEffect')
  }, [msg])

  // 相当于 render 函数
  return <>
    <h1>App 组件</h1>
    <h2>{msg}</h2>
    <h3>{all}</h3>
    <button onClick={() => {
      setMsg("修改数据")
      setArr([...arr, 4])
    }}>修改数据
    </button>
  </>
}

export default App;
