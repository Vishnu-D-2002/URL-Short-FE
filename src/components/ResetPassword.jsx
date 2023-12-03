import React, { useState } from 'react'

function ResetPassword() {

    const [newPassword, setNewPassword] = useState('');

  return (
      <div>
      
          <h1>Enter the New Password to reset the Password </h1>

          <form>
              <label>New Password : </label>
              <input 
                  type='password'
                  placeholder='New Password'
                  value={newPassword}
                  onChange={e=>setNewPassword(e.target.value)}
              />
          </form>
      </div>
  )
}

export default ResetPassword