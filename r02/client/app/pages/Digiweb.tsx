import * as React from 'react'
import { NanohaSan } from 'images'
import Header from '../Header'
import SideMenu from '../SideMenu'
import UpdateInfoArea from '../UpdateInfoArea'

const Component: React.FC<{}> = () => {
  return (
    <div className="topPage">
      <Header />
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
      <UpdateInfoArea />
    </div>
  )
}

export default Component
