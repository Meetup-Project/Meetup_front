import React from 'react'


function start() {
  return (
    <>
    <div id="background" className=" w-full flex flex-col items-center bg-white">
      <div id="logodiv" className=' w-full flex h-auto ml-[3vw]'>
        <img id='logo' className=" w-[14vw] h-[7vh]" src='./logo.svg'></img>
      </div>

      <div id='introduceDiv' className=' flex flex-col items-center text-blueblue mt-[8vw] gap-[10vw]'>
        <span id='introducecontent' className=' text-[6vw] font-extrabold'>당신의 일정을 만들어보세요</span>
        <span id='introducename' className=" text-[10vw] font-extrabold">밋업</span>
      </div>

      <div id='characterDiv' className=' bg-graygray w-[50vw] h-[30vh] z-10 overflow-visible mt-[8vw]'></div>
      <div id='SignInDiv' className='bg-blueblue flex justify-center items-center w-[30vw] h-[5vh] rounded-[15px]'></div>
      <div id='SignUpDiv' className=''></div>
    </div>
    </>
  )
}

export default start