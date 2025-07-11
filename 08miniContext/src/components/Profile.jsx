import React from 'react'
import UserContext from '../context/UserContext'

function Profile() {
  const {user} = React.useContext(UserContext)
  if (!user) {
    return <h1>Please log in to see your profile.</h1>
  }
  return (
    <div>Profile : {user.username}
      <h1>More component</h1>

    </div>
  )
}

export default Profile