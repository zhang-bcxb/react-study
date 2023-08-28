import logo from './logo.svg';
import './App.css';

function App() {
  // 函数组件，注意首字符大写
  // 新版本的-相当于 Vue3 的组合式 API
  function FnHello() {
    return <div>你好，我是编程细胞</div>
  }

  return (
      <div>
        <FnHello></FnHello>
      </div>
  );
}

export default App;
