import {legacy_createStore as createStore, combineReducers} from 'redux'

// 新建一个方法，就是创建一个仓库
function msgReducer(state = {msg: 'hello'}, action) {

  // 具体修改数据的行为
  switch (action.type) {
    case 'changeMsg':
      state.msg = action.msg
      // 最后一定要 return state，并且展开解除引用
      return {...state}
    case 'resetMsg':
      state.msg = 'hello'
      // 最后一定要 return state，并且展开解除引用
      return {...state}
    default:
      return state
  }
}

// 新增一个仓库
function numReducer(state = {num: 0}, action) {
  // 具体修改数据的行为
  switch (action.type) {
    case 'addNum':
      state.num += 1
      // 最后一定要 return state，并且展开解除引用
      return {...state}
    default:
      return state
  }
}

// redux 分模块写法
let reducer = combineReducers({
  msgReducer,
  numReducer
})
let store = createStore(reducer)
export default store
