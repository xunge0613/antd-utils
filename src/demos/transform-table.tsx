
import React, { FC, useState } from 'react'
import Table, { ColumnProps } from 'antd/lib/table'
import 'antd/dist/antd.css'
import transformTable from '../utils/transform-table';
import Button from 'antd/lib/button';

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
  const { newColumns, newData } = transformTable(oldColumns, oldData);
  const [tableType, setTableType] = useState(ETableType.old)
  const [columns, setColumns] = useState(oldColumns);
  const [data, setData] = useState(oldData);

  const isOldType = (tableType === ETableType.old);
  return (
    <>
      <Button
        type="primary"
        onClick={() => {
          setColumns(isOldType ? newColumns : oldColumns);
          setData(isOldType ? newData : oldData);
          setTableType(Number(!tableType));
        }}>{isOldType ? '行转列' : '列转行'}</Button>
      <br /><br />
      <Table
        showHeader={isOldType}
        dataSource={data}
        columns={columns}
      />
    </>
  )
}
