import React, { FC, useEffect, useState } from 'react'
import 'antd/dist/antd.css'
import { getQueryString } from 'antd-utils'
import { Card } from 'antd'

// try change the querystring ?name=yourtexthere, and reload the page

export const GetQueryString: FC = () => {
  const [name, setName] = useState<string | null>(null);
  useEffect(() => {
    // console.log(getQueryString('name'))
    // 必须放在 useEffect 里（componentDidMount）
    // 否则 gatsby 的 React SSR 会报错
    setName(getQueryString('name'));
  }, []);
  return (
    <Card>
      {`name: ${name}`}
    </Card>
  )
}