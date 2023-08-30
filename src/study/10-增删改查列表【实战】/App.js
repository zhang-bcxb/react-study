import React from 'react';
import Order from "./data/data";
import Pop from './com/Pop'

let arr = [
  {text: '进行中', color: 'blue'},
  {text: '已完成', color: 'green'},
  {text: '已延期', color: 'red'}
]

class App extends React.PureComponent {

  state = {
    tableArr: [],
    searchInput: {
      dateVal: '',
      nameVal: '',
      statusVal: ''
    },
    // 是否显示弹窗
    popShow: false,
    // 弹窗标题
    popTitle: undefined,
    // 确认方法
    confirmFn: undefined,
    popForm: {
      date: '',
      name: '',
      status: ''
    }
  }

  // 挂载完成，发起请求
  componentDidMount() {
    // console.log(Order.find())
    this.getList({})
  }

  getList(params) {
    this.setState({
      tableArr: Order.find(params),
      popShow: false
    }, () => {
      console.log(this.state.tableArr)
    })
  }

  // 状态处理
  statusHandle(status) {
    // console.log(status)
    return <><span style={{
      color: arr[status].color
    }}>{arr[status].text}</span></>
  }

  // 搜索处理
  searchHandle() {
    console.log(this.state.searchInput)
    this.getList({
      date: this.state.searchInput.dateVal,
      name: this.state.searchInput.nameVal,
      status: this.state.searchInput.statusVal
    })
  }

  // 重置表单
  resetHandle() {
    this.setState({
      searchInput: {
        dateVal: '',
        nameVal: '',
        statusVal: ''
      }
    }, () => {
      // axios 是异步操作
      this.getList(this.state.searchInput)
    })
  }

  // 新增数据
  addFn() {
    console.log(this.state.popForm)
    new Order(Math.floor(Math.random() * 99999), this.state.popForm).save()
    this.getList()
  }

  // 修改数据
  editFn(order) {
    console.log(order)
    console.log(this.state.popForm)
    order.update(this.state.popForm)
    this.getList()
  }

  // 删除数据
  deleteFn(order) {
    order.delete()
    // splice 删除元素会造成页面不进行更新，
    // 解决方案一：过滤数组
    /*this.setState({
      tableArr: this.state.tableArr.filter(item => item != order)
    })*/
    // 解决方案二：展开数组
    this.setState({
      tableArr: [...Order.find({})]
    })
  }

  // 取消
  cancelFn() {
    this.setState({
      popForm: {
        date: '',
        name: '',
        status: ''
      },
      popShow: false
    })
  }

  render() {
    return <>
      <h1>
        <span>增删改查列表</span>
        <button onClick={() => {
          this.setState({
            popShow: true,
            popTitle: '新增订单',
            confirmFn: this.addFn.bind(this)
          })
        }}>新增
        </button>
      </h1>

      <div>
        <label>日期</label>
        <input value={this.state.searchInput.dateVal} type='text' onInput={(e) => {
          this.setState({
            searchInput: {...this.state.searchInput, dateVal: e.target.value}
          })
        }}/>
        <label>订单名</label>
        <input value={this.state.searchInput.nameVal} type='text' onInput={(e) => {
          this.setState({
            searchInput: {...this.state.searchInput, nameVal: e.target.value}
          })
        }}/>
        <label>订单状态</label>
        <select value={this.state.searchInput.statusVal} onChange={(e) => {
          this.setState({
            searchInput: {...this.state.searchInput, statusVal: e.target.value}
          })
        }}>
          {
            arr.map((item, index) => {
              return <option key={item.text} value={index}>{item.text}</option>
            })
          }
        </select>

        <button onClick={this.searchHandle.bind(this)}>搜索</button>
        <button onClick={this.resetHandle.bind(this)}>重置</button>
      </div>

      <table>
        <thead>
        <tr>
          <th>日期</th>
          <th>订单名</th>
          <th>订单状态</th>
          <th>操作</th>
        </tr>
        </thead>
        <tbody>
        {
          this.state.tableArr.map((item, index) => {
            return <tr key={item.id}>
              <td>{item.date}</td>
              <td>{item.name}</td>
              <td>{this.statusHandle(item.status)}</td>
              <td>
                <button onClick={this.deleteFn.bind(this, item)}>删除</button>
                <button onClick={() => {
                  this.setState({
                    popShow: true,
                    popTitle: '编辑订单',
                    confirmFn: this.editFn.bind(this, item),
                    popForm: item
                  })
                }}>编辑
                </button>
              </td>
            </tr>
          })
        }
        </tbody>
      </table>

      {
        this.state.popShow && <Pop
            confirm={this.state.confirmFn}
            cancel={this.cancelFn.bind(this)}
            title={this.state.popTitle}>
          <div>
            <div>
              <label>日期</label>
              <input type='text' value={this.state.popForm.date} onInput={(e) => {
                this.setState({
                  popForm: {...this.state.popForm, date: e.target.value}
                })
              }}/>
            </div>
            <div>
              <label>订单名称</label>
              <input type='text' value={this.state.popForm.name} onInput={(e) => {
                this.setState({
                  popForm: {...this.state.popForm, name: e.target.value}
                })
              }}/>
            </div>
            <div>
              <label>状态</label>
              <select value={this.state.popForm.status} onChange={(e) => {
                this.setState({
                  popForm: {...this.state.popForm, status: e.target.value}
                })
              }}>
                {
                  arr.map((item, index) => {
                    return <option key={item.text} value={index}>{item.text}</option>
                  })
                }
              </select>
            </div>
          </div>
        </Pop>
      }

    </>
  }
}

export default App
