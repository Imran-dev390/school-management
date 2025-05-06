import React from 'react'

const Admin = ({admin}) => {
  return (
    <div>
      <h1 className='text-2xl font-semibold '>Hello Admin {admin.username}</h1>
    </div>
  )
}

export default Admin
