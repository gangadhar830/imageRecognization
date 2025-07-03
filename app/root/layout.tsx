import React from 'react'
import Sidebar from '../Components/Sidebar'

const Layout = ({children}: {children: React.ReactNode}) => {
  return (
    <div >
      <div>
        <Sidebar />
      </div>
      <div>
        {children}
      </div>
    </div>
  )
}

export default Layout