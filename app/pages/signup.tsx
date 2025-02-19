import React from 'react'

function signup() {
  return (
    <div id='background' className=' bg-white flex flex-col items-center'>
        <div id='topDiv' className=' flex items-center justify-between w-[80vw]'>
            <span id='signupText'>회원가입</span>
            <div id='backbutton' className=' rounded-[8px] bg-bluegray w-[38px] h-[38px]'></div>
        </div>
        <div id='contentDiv' className='flex flex-col gap-[10vh] mt-[10vh] w-[80vw] items-center'>
          <input id='name' placeholder='이름' type='string'></input>
          <input id='password' placeholder='비밀번호' type='password'></input>
          <input id='passwordcheck' placeholder="비밀번호 확인" type='password'></input>
          <input id='email' placeholder='이메일' type='email'></input>
        </div>
        <div id='bottomDiv'>
          <div id='subbmit button'></div>
        </div>
    </div>
  )
}

export default signup