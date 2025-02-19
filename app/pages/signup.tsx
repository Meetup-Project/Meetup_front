import React from 'react'
import { useRouter } from 'next/navigation'


function signup() {
  const router = useRouter()

  function goBack() {
    router.back();
  }
  return (
    <div id='background' className=' bg-white flex flex-col items-center p-[10vw]'>
        <div id='topDiv' className=' flex items-center justify-between w-full'>
            <span id='signupText' className='font-pretendard font-extrabold text-[6vw]'>회원가입</span>
            <div id='backbutton' onClick={goBack} className=' rounded-[8px] bg-bluegray w-[9vw] h-[4.7vh] flex justify-center items-center'></div>
        </div>
        <div id='contentDiv' className='flex flex-col gap-[10vh] mt-[10vh] w-full items-center'>
          <input id='name' placeholder='이름' type='string'></input>
          <input id='password' placeholder='비밀번호' type='password'></input>
          <input id='passwordcheck' placeholder="비밀번호 확인" type='password'></input>
          <input id='email' placeholder='이메일' type='email'></input>
        </div>
        <div id='bottomDiv' className="">
          <div id='subbmit button'></div>
        </div>
    </div>
  )
}

export default signup