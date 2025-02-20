import React, { useState } from 'react'
import { useRouter } from 'next/navigation'
import axios from 'axios';


function signup() {
  const router = useRouter()
  const  [ userData, setUserData ] = useState("");
  const goBack = async() => {
    router.back();
  }
  const handleSubmit = async () => {

  }

  return (
    <div id='background' className=' bg-white flex flex-col items-center p-[10vw]'>
        <div id='topDiv' className=' flex items-center justify-between w-full'>
            <span id='signupText' className='font-pretendard font-extrabold text-[6vw]'>회원가입</span>
            <div id='backbutton' onClick={goBack} className=' rounded-[8px] bg-bluegray w-[9vw] h-[4.7vh] flex justify-center items-center'>
              <img id="backimg" src="/arrow-right-sm.svg" alt="arrow-right" />
            </div>
        </div>
        <div id='contentDiv' className='flex flex-col gap-[5vh] mt-[10vh] w-full items-center'>
          <input id='name' placeholder='이름' type='string' className=' bg-graygray w-[80vw] h-[8vh] rounded-[12px] p-[5vw] placeholder: font-bold font-pretendard'></input>
          <input id='password' placeholder='비밀번호' type='password' className=' bg-graygray w-[80vw] h-[8vh] rounded-[12px] p-[5vw] placeholder: font-bold font-pretendard'></input>
          <input id='passwordcheck' placeholder="비밀번호 확인" type='password' className=' bg-graygray w-[80vw] h-[8vh] rounded-[12px] p-[5vw] placeholder: font-bold font-pretendard'></input>
          <input id='email' placeholder='이메일' type='email' className=' bg-graygray w-[80vw] h-[8vh] rounded-[12px] p-[5vw] placeholder: font-bold font-pretendard'></input>
        </div>
        <div id='bottomDiv' className="flex flex-row-reverse w-full mt-[20vh]">
          <div id='subbmit button' className=' rounded-[8px] bg-blueblue w-[12vw] h-[6vh] flex justify-center items-center'>
            <img id='submit arrow' src="/arrow-left-sm.svg" alt='tlqkf'></img>
          </div>
        </div>
    </div>
  )
}

export default signup