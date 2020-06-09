
import React, { FC, useState } from 'react'
import { Select, Table, Form } from 'antd'
import { ColumnProps } from 'antd/lib/table'
import 'antd/dist/antd.css'
import { transformTable, pasteTags } from 'antd-utils'
import Button from 'antd/lib/button';
import { useForm } from 'antd/lib/form/util'

enum ETableType {
  old = 0,
  new
}

export const TransformTable: FC = () => {
  const oldColumns: ColumnProps<any>[] =
    [
      {
        title: '姓名',
        dataIndex: 'name',
        key: 'name',
      },
      {
        title: '年龄',
        dataIndex: 'age',
        key: 'age',
      },
      {
        title: '住址',
        dataIndex: 'address',
        key: 'address',
      },
    ];
  const oldData: any[] =
    [
      {
        key: '1',
        name: '胡彦斌',
        age: 32,
        address: '西湖区湖底公园1号',
      },
      {
        key: '2',
        name: '胡彦祖',
        age: 42,
        address: '西湖区湖底公园1号',
      },
    ];
  const [form] = useForm();
  const { newColumns, newData } = transformTable(oldColumns, oldData);
  const [tableType, setTableType] = useState(ETableType.old)
  const [columns, setColumns] = useState(oldColumns);
  const [data, setData] = useState(oldData);

  const isOldType = (tableType === ETableType.old);
  return (
    <>
      <Form form={form}>
        <Form.Item name="name">
          <Select
            mode="tags"
            onChange={(value: string[]) => pasteTags(value, form, "name")} />
        </Form.Item>
      </Form>
    </>
  )
}