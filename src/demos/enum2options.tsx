
import React, { FC } from 'react'
import { Select, Form } from 'antd'
import 'antd/dist/antd.css'
import { enum2Options } from 'antd-utils'

// notice: Don't use Number as index of the Enum, or the ts-lint would throw error 
// (also numberic index will be filter out in enum2Options function)

enum ESelectOptions {
  option0 = 0,
  optionA = "a",
  optionTest = "test",
  // 0 = a , // sorry it's invalid
}

const options = enum2Options(ESelectOptions, "label", "value")

export const Enum2Options: FC = () => {

  return (
    <>
      <Form>
        <Form.Item name="name">
          <Select placeholder="请选择">
            {
              (options || []).map((item: any) => (
                <Select.Option key={item.value} value={item.value}>{item.label}</Select.Option>
              ))
            }
          </Select>
        </Form.Item>
      </Form>
    </>
  )
}