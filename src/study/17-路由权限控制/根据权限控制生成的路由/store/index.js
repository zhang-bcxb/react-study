import {configureStore} from "@reduxjs/toolkit";
import userInfo from "./userInfo";

// 整合切片
let store = configureStore({
  reducer: {
    userInfo
  }
})

export default store
