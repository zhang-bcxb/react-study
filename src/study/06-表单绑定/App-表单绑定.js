import React from 'react'

/**
 * 表单绑定基本思路
 * React中很多思路都是按原生的操作去做的，表单绑定也是如此
 * 原生表单获取表单输入值，我们可以通过监听input，change等事件，然后获取 e.target.value
 * 如果要设置表单的值，通常设置value属性，如果是选择框则是checked属性
 */
class App extends React.PureComponent {

  // 定义响应式数据
  state = {
    inputValue: '显示',
    checkboxArr: [
      {
        id: 'box-1',
        text: '苹果',
        checked: false
      },
      {
        id: 'box-2',
        text: '香蕉',
        checked: true
      },
      {
        id: 'box-3',
        text: '榴莲',
        checked: false
      }
    ]
  }

  inputHandle = (e) => {
    console.log(e.target.value)
    this.setState({
      inputValue: e.target.value
    })
  }

  changeHandle = (index, e) => {
    console.log(index)
    // console.log(e.target.value)
    // if (e.target.checked) {
    //   this.state.checkboxArr[index].checked = true
    // } else {
    //   this.state.checkboxArr[index].checked = false
    // }

    // 修改数据
    this.state.checkboxArr[index].checked = e.target.checked

    // 更新组件
    this.setState({
      checkboxArr: [...this.state.checkboxArr]
    }, () => {
      console.log(this.state.checkboxArr)
    })
  }

  render() {
    return <div>
      <h1>文本表单</h1>
      <h2>{this.state.inputValue}</h2>
      <input type='text'
             value={this.state.inputValue}
             onInput={this.inputHandle}/>

      <h1>多选表单</h1>
      {
        this.state.checkboxArr.map((item, index) => {
          return <div key={item.id}><input id={item.id} type='checkbox' name='choose'
                                           value={item.text}
                                           checked={item.checked}
                                           onChange={this.changeHandle.bind(this, index)}/>
            <label htmlFor={item.id}>{item.text}</label>
          </div>
        })
      }
    </div>
  }
}

export default App;
