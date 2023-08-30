import React from "react";
import popStyle from './Pop.module.css'

class Pop extends React.PureComponent {


  // html内容-插槽，text内容-props
  render() {
    return <div className={popStyle.cover}>
      <div className={popStyle.content}>
        {/*<div className={popStyle.title}>{this.props.title || "默认标题"}</div>*/}
        <div className={popStyle.title}>{this.props.title}</div>

        <div>
          {this.props.children}
        </div>

        <div>
          {/*直接触发父组件中的方法*/}
          <button onClick={() => {
            this.props.confirm()
          }}>确定
          </button>
          <button onClick={() => {
            this.props.cancel()
          }}>取消
          </button>
        </div>
      </div>
    </div>
  }
}

Pop.defaultProps = {
  title: "默认标题"
}

export default Pop
