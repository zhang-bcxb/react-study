import React, {useState} from "react";
import {getRoutes} from "../store/userInfo";
import {useDispatch} from "react-redux";
import {useNavigate} from 'react-router-dom'

function Login() {
  let [user, setUser] = useState('admin')
  let dispatch = useDispatch()
  let nav = useNavigate()

  let changeInput = (e) => {
    console.log(e.target.value)
    setUser(e.target.value)
  }

  return <div>
    <h1>【Login】</h1>
    <input type='radio' checked={user == 'admin'} id='admin' value='admin' name='user' onChange={changeInput}/>
    <label htmlFor='admin'>admin</label>

    <input type='radio' checked={user == 'vip'} id='vip' value='vip' name='user' onChange={changeInput}/>
    <label htmlFor='vip'>vip</label>

    <button onClick={() => {
      localStorage.setItem('user', user)
      dispatch(getRoutes(user))
      // 跳转页面
      nav('/page3')
    }}>登录
    </button>
  </div>
}

export default Login
