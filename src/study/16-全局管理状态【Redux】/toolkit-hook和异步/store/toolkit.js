import {createSlice, configureStore, createAsyncThunk} from "@reduxjs/toolkit";

// 解决异步问题
// 第一个参数：参数名称，自定义
// 第二个参数：具体异步操作
export let changeNumThunk = createAsyncThunk('numSlice/changeNum', async (params) => {
  // 不能直接进行异步操作，需要进行额外的处理
  return await new Promise((resolve) => {
    console.log(params)
    setTimeout(() => {
      resolve(999)
    }, 1000)
  })
})

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

// 异步问题
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
  },
  // 额外的行为，可以是方法，也可以是对象
  /*extraReducers: (chunk) => {
    chunk
        // 请求中
        .addCase(changeNumThunk.pending, () => {
          console.log('pending')
        })
        // 请求成功
        .addCase(changeNumThunk.fulfilled, (state, action) => {
          console.log('fulfilled')
          state.num = action.payload
        })
        }*/
  extraReducers: {
    [changeNumThunk.pending]: () => {
      console.log('pending')
    },
    [changeNumThunk.fulfilled]: (state, action) => {
      console.log('fulfilled')
      state.num = action.payload
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
