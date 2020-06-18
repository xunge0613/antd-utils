import React, { FC, useEffect, useState } from 'react'
import 'antd/dist/antd.css'
import { getQueryString } from 'antd-utils'
import { Card } from 'antd'

// try change the querystring ?name=yourtexthere, and reload the page

export const GetQueryString: FC = () => {
  const [name, setName] = useState<string | null>(null);
  useEffect(() => {
    setName(getQueryString('name'));
  }, [])
  
  return (
    <Card>
      {`name: ${name}`}
    </Card>
  )
}