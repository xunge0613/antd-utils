
import React, { FC, useState } from 'react'
import { Table, Button } from 'antd'
import 'antd/dist/antd.css'
import { ColumnProps } from 'antd/lib/table'
import  calcRowspanToMerge from 'antd-utils/src/table/calc-rowspan-to-merge'

interface IListItem {
  id: string,
  name: string,
  category: string
} 

export const CalcRowspanToMerge: FC = () => {
  const [data, setData] = useState<IListItem[]>([])
  // 遍历一次获取 rowSpanMapping
  const [rowSpanMapping, setRowSpanMapping] = useState<number[]>([])

  function handleAddRow (category: string) {
    // 插入新数据
    const newRow: IListItem = {
      id: Math.random() + '',
      name: 'name' + Math.random(),
      category
    }
    setData([...[...data, newRow]])
    // console.log([...[...data, newRow]])

    // 指定 propName 为 `category`，计算数组中重复项id，并生成 mapping
    setRowSpanMapping([...calcRowspanToMerge([...[...data, newRow]], 'category')])
  }

  // 删除
  function handleRemoveRow (index: number) {
    let tempData = data;
    (tempData || []).splice(index, 1);
    setData([...tempData]);
    setRowSpanMapping([...calcRowspanToMerge(tempData, 'category')])
  }

  /**
   * 合并单元格
   * 根据 index 查询 calcRowSpanMapping 确认 rowSpan
   * @param record
   * @param index
   */
  const renderMergedCell = (children: string | JSX.Element, index: number) => {
    const obj = {
      children,
      // 通过 props 标记是否要进行行列合并
      props: {
        rowSpan: rowSpanMapping[index],
      },
    }
    // console.log(obj)
    return obj
  }

  const columns : ColumnProps<IListItem>[] = [
    {
      title: 'id',
      dataIndex: 'id',
    },
    {
      title: 'category',
      dataIndex: 'category',
      render: (_: string, record: IListItem, index: number) => {
        return renderMergedCell(_, index)
      }
    },
    {
      title: 'name',
      dataIndex: 'name', 
    },
    {
      title: 'category',
      dataIndex: 'category',
      render: (_: string, record: IListItem, index: number) => {
        return (<Button onClick={() => handleRemoveRow(index)}>Remove</Button>)
      }
    },

  ]

  return (
    <>
      <Button onClick={() => handleAddRow("category1")}>add category 1</Button>
      <Button onClick={() => handleAddRow("category2")} style={{marginLeft: 20}}>add category 2</Button>
      <Button onClick={() => handleAddRow("category3")} style={{marginLeft: 20}}>add category 3</Button>
      <br /><br />
      <Table
        rowKey="id"
        dataSource={data}
        columns={columns}
        pagination={false}
       />
    </>
  )
}