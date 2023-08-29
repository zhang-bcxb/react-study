import {createSlice, createAsyncThunk} from "@reduxjs/toolkit";
import adminRouteArr from "../router/user/adminRouteArr";
import vipRouteArr from "../router/user/vipRouteArr";

// 解决异步问题
// 第一个参数：参数名称，自定义
// 第二个参数：具体异步操作
export let getRoutes = createAsyncThunk('getRoutes', async (user) => {
  // 不能直接进行异步操作，需要进行额外的处理
  return await new Promise((resolve) => {
    console.log(user)
    setTimeout(() => {
      let routes = user == 'admin' ? adminRouteArr : vipRouteArr
      localStorage.setItem('userRoute', JSON.stringify(routes))
      resolve(routes)
    }, 100)
  })
})

let _localUserRoute = localStorage.getItem("userRoute")
console.log(_localUserRoute)

// 创建切片
const userSlice = createSlice({
  name: 'userInfo',
  // 初始化数据
  initialState: {
    // userRoute: []
    userRoute: JSON.parse(_localUserRoute || "[]")
  },
  // 行为
  reducers: {
    changeRoute(state, action) {
      state.userRoute = action.payload
    }
  },
  extraReducers(chunk) {
    chunk
        // 请求中
        .addCase(getRoutes.pending, () => {
          console.log('pending')
        })
        // 请求成功
        .addCase(getRoutes.fulfilled, (state, action) => {
          console.log('fulfilled')
          state.userRoute = action.payload
          // console.log(state.userRoute)
        })
  }
})

export const {changeRoute} = userSlice.actions
export default userSlice.reducer
