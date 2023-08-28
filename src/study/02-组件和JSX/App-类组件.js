import logo from './logo.svg';
import './App.css';
import React from 'react'

function App() {

  // 类组件，注意首字符大写
  // 老版本-相当于 Vue2 的选项式 API
  // constructor 可以省略不写
  class ClassHello extends React.Component {
    constructor(props) {
      super(props);
    }

    render() {
      return <div>你好，这是类组件</div>
    }
  }

  return (
      <div>
        <ClassHello></ClassHello>
      </div>
  );
}

export default App;
