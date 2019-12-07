import React from 'react'
import SideMenu from '../SideMenu'
import NanohaSan from './nanoha_san.svg'

export default () => {
  return (
    <div style={{ position: 'relative' }}>
      <NanohaSan width="100%" height="auto" />
      <div
        style={{
          position: 'absolute',
          top: 0,
          left: 0,
          zIndex: 999,
          width: 1000,
        }}
      >
        <SideMenu />
      </div>
    </div>
  )
}
