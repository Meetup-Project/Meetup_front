import React, { useState } from 'react'

function Meeting() {


  return (
    <div className='w-full h-screen flex flex-col items-center bg-white mx-auto p-4 sm:p-6 md:p-8' >

      {/*모임 이름 header*/}
      <div className="text-black">
        <span className='font-bold text-[1.75rem]'>모임 이름</span>
        <span className='text-[1.25rem]'>모임의 이름을 정해주세요</span>
      </div>
      {/*모임 이름 입력칸*/}
      <input type="text" placeholder="모임 이름" className="bg-graygray w-full h-12 rounded-[12px] px-4 py-3 placeholder:font-bold font-pretendard text-base sm:text-lg md:text-xl text-black" />
    </div>  
  )
}
export default Meeting