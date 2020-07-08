import React, { FC, useEffect, useState } from 'react'
import 'antd/dist/antd.css'
import { handleVisibilityChange } from 'antd-utils'
import { Card } from 'antd'


/*
 * 页面离开后，再次进入时触发回调函数
 * 应用场景：列表页新开页面编辑新增，返回后自动刷新列表
 * handlePageshow(() => setSearch({ ...(search || {}) }))
 * @param callback () => void
 */

export const HandleVisibilityChange: FC = () => {
  useEffect(() => {
    handleVisibilityChange(() => document.title = '咦，我又好了(⊙o⊙)…', () => document.title = '页面又崩溃啦ε=(´ο｀*)))唉')
  }, []);
  return (
    <Card>
      切换下 tab 看看 title~
    </Card>
  )
}