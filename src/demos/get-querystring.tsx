import React, { FC, useEffect } from 'react'
import 'antd/dist/antd.css'
import { getQueryString } from 'antd-utils'
import { Card } from 'antd'

// try change the querystring ?name=yourtexthere, and reload the page

export const GetQueryString: FC = () => {
  let name = null;
  useEffect(() => {
    name = getQueryString('name');
  }, [])
  
  return (
    <Card>
      {`name: ${name}`}
    </Card>
  )
}