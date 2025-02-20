'use client'
import React from 'react'
import { useRouter } from 'next/navigation'

function signin() {
  const router = useRouter();

  function goBack(){
    router.back();
  }

  return (
    <>
    <div id='background' className=' bg-white flex flex-col items-center p-[10vw]'>
      <div id='topDiv' className=' flex items-center justify-between w-full'>
              <span id='signupText' className='font-pretendard font-extrabold text-[6vw]'>로그인</span>
              <div id='backbutton' onClick={goBack} className=' rounded-[8px] bg-bluegray w-[9vw] h-[4.7vh] flex justify-center items-center'>
                <img id="backimg" src="/arrow-right-sm.svg" alt="arrow-right" />
              </div>
      </div>
      <div id='contentDiv' className='flex flex-col gap-[5vh] mt-[4vh] w-full items-center'>
        <input id='name' placeholder='이름' type='string' className=' bg-graygray w-[80vw] h-[8vh] rounded-[12px] p-[5vw] placeholder: font-bold font-pretendard'></input>
        <input id='password' placeholder='비밀번호' type='password' className=' bg-graygray w-[80vw] h-[8vh] rounded-[12px] p-[5vw] placeholder: font-bold font-pretendard'></input>
      </div>
      <div id='divideline' className="flex items-center gap-2 w-full mt-[10vh]">
        <div className="flex-1 border-t border-gray-300"></div>
        <span className="text-gray-400 font-semibold text-sm">or</span>
        <div className="flex-1 border-t border-gray-300"></div>
      </div>
      <div id='OauthDiv'>
        
      </div>
      <div id='bottomDiv' className="flex flex-row-reverse w-full mt-[20vh]">
          <div id='subbmit button' className=' rounded-[8px] bg-blueblue w-[12vw] h-[6vh] flex justify-center items-center'>
            <img id='submit arrow' src="/arrow-left-sm.svg" alt='tlqkf'></img>
          </div>
        </div>
    </div>
    </>
  )
}

export default signin