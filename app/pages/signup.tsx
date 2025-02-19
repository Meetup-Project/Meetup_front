import React from 'react'

function signup() {
  return (
    <div id='background'>
        <div id='topDiv'>
            <span id='signupText'>회원가입</span>
            <div id='backbutton'></div>
        </div>
        <div id='contentDiv'>
          <input id='name'></input>
          <input id='password'></input>
          <input id='passwordcheck'></input>
          <input id='email'></input>
        </div>
    </div>
  )
}

export default signup