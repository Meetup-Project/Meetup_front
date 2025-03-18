'use client'
import React from 'react'
import { useRouter } from 'next/navigation'

function Start() {
  const router = useRouter();

  function goToSignIn() {
    router.push('./SignIn');
  }

  function goToSignUP() {
    router.push('./SignUp');
  }
  
  return (
    <div className="w-full max-w-[430px] min-w-[320px] h-screen flex flex-col items-center bg-white mx-auto px-4 sm:px-6 md:px-8">
      {/* 로고 */}
      <div className='w-full flex h-auto ml-[3vw] sm:ml-[2vw] md:ml-0'>
        <img className="w-[14vw] h-[7vh] sm:w-[12vw] md:w-[10vw]" src='./logo.svg' alt="logo" />
      </div>

      {/* 소개 문구 */}
      <div className='flex flex-col items-center text-blueblue mt-[8vw] gap-[7  vw] sm:gap-[8vw] md:gap-[6vw]'>
        <span className='text-[6vw] sm:text-[5vw] md:text-[4vw] font-extrabold font-pretendard'>당신의 일정을 만들어보세요</span>
        <span className="text-[10vw] sm:text-[8vw] md:text-[6vw] font-extrabold font-pretendard">밋업</span>
      </div>

      {/* 캐릭터 이미지 영역 */}
      <div className='bg-graygray w-[50vw] h-[30vh] sm:w-[45vw] sm:h-[25vh] md:w-[40vw] md:h-[20vh] max-w-[600px] max-h-[300px] z-10 overflow-visible mt-[5vw]'></div>
      
      {/* 로그인 버튼 */}
      <div className='bg-blueblue flex justify-center items-center w-[50vw] h-[6vh] sm:w-[45vw] sm:h-[5.5vh] md:w-[40vw] md:h-[5vh] rounded-[15px] mt-[5vh] cursor-pointer' onClick={goToSignIn}>
        <span className='font-pretendard text-white text-[5vw] sm:text-[4vw] md:text-[3vw] font-bold'>로그인</span>
      </div>
      
      {/* 회원가입 버튼 */}
      <div className='border-2 border-blueblue flex justify-center items-center w-[50vw] h-[6vh] sm:w-[45vw] sm:h-[5.5vh] md:w-[40vw] md:h-[5vh] rounded-[15px] mt-[3vh] cursor-pointer' onClick={goToSignUP}>
        <span className='font-pretendard text-blueblue text-[5vw] sm:text-[4vw] md:text-[3vw] font-bold'>회원가입</span>
      </div>
    </div>
  );
}

export default Start;
