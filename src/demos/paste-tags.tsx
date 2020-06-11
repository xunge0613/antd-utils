
// Try input 'a,b,c,1,2,3,a'
// or Paste with 'a,b,c,1,2,3,a'

import React, { FC } from 'react'
import { Select, Form } from 'antd'
import 'antd/dist/antd.css'
import { pasteTags } from 'antd-utils'
import { useForm } from 'antd/lib/form/util'

export const PasteTags: FC = () => {
  const [form] = useForm();
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