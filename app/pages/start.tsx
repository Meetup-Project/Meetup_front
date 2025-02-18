import React from 'react'


function start() {
  return (
    <>
    <div id="background" className=" w-full flex flex-col items-center bg-white">
      <div id="logodiv" className=' w-full flex h-auto ml-[3vw]'>
        <img id='logo' className=" w-[14vw] h-[7vh]" src='./logo.svg'></img>
      </div>

      <div id='introduceDiv' className=' flex flex-col items-center text-blueblue mt-[8vw] gap-[10vw]'>
        <span id='introducecontent' className=' text-[6vw] font-extrabold font-pretendard'>당신의 일정을 만들어보세요</span>
        <span id='introducename' className=" text-[10vw] font-extrabold font-pretendard">밋업</span>
      </div>

      <div id='characterDiv' className=' bg-graygray w-[70vw] h-[40vh] z-10 overflow-visible mt-[8vw]'></div>
      <div id='SignInDiv' className='bg-blueblue flex justify-center items-center w-[50vw] h-[6vh] rounded-[15px] mt-[5vh]'>
        <span id='signinText' className=' font-pretendard text-white text-[5vw] font-bold'>로그인</span>
      </div>
      <div id='SignUpDiv' className=' border-2 border-blueblue flex justify-center items-center w-[50vw] h-[6vh] rounded-[15px] mt-[5vh]'>
        <span id='signupText' className=' font-pretendard text-blueblue text-[5vw] font-bold'>회원가입</span>
      </div>
    </div>
    </>
  )
}

export default start