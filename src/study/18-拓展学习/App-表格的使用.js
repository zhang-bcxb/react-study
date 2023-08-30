import React from 'react';
import {Button, Table} from 'antd';
import {useMemo} from "react";

// 组件文档：https://ant-design.antgroup.com/components/overview-cn/
function App() {
  const data = [
    {
      id: '1',
      name: '张三',
      status: 0
    },
    {
      id: '2',
      name: '张三',
      status: 1
    },
    {
      id: '3',
      name: '张三',
      status: 0
    },
  ];

  let columns = useMemo(() => {
    return [
      {
        title: '名字',
        dataIndex: 'name',
        render: (text) => <h3>{text}</h3>,
      },
      {
        title: '状态',
        dataIndex: 'status',
        render: (text) => {
          return <>
            {
              text == 0 ? <span>在线</span> : <span>离线</span>
            }
          </>
        }
      },
      {
        title: '操作',
        render: (row) => {
          console.log(row)
          return <>
            <Button type="primary">修改</Button>
            <Button>删除</Button>
          </>
        }
      }
    ]
  }, [])

  return <>
    <h1>App 组件</h1>
    <Button type="primary">Primary Button</Button>
    <Table columns={columns} dataSource={data} rowKey='id'/>
  </>
}

export default App
