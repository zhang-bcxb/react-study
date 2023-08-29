import {createSlice, configureStore} from "@reduxjs/toolkit";

// 创建切片
let msgSlice = createSlice({
  // 切片名称
  name: 'msgSlice',
  // 初始化数据
  initialState: {
    msg: 'hello'
  },
  // 修改数据的行为
  reducers: {
    changeMsg(state, action) {
      state.msg = action.payload
    }
  }
})

// 创建第二个切片
let numSlice = createSlice({
  // 切片名称
  name: 'numSlice',
  // 初始化数据
  initialState: {
    num: 0
  },
  // 修改数据的行为
  reducers: {
    addNum(state, action) {
      state.num += 1
    }
  }
})

// 暴露方法
export const {changeMsg} = msgSlice.actions
export const {addNum} = numSlice.actions

// 整合切片
let store = configureStore({
  reducer: {
    msgReducer: msgSlice.reducer,
    numReducer: numSlice.reducer
  }
})

export default store
