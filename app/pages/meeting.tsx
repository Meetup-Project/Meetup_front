import React, { useState } from 'react'

function Meeting() {


  return (
    <div className='pt-[3.1rem] pl-[2.3rem] pr-[2.2rem] pb-[2.1rem] font-[pretendard] w-full h-screen flex flex-col bg-white gap-[2.1rem]' >

      {/*모임 이름 header*/}
      <div>
        <div className="text-black flex gap-3 items-center">
          <span className='font-bold text-[1.8rem]'>모임 이름</span>
          <span className='text-[1.25rem] text-tgray'>모임의 이름을 정해주세요</span>
        </div>
        {/*모임 이름 입력칸*/}
        <div className=' mt-[1.4rem]'>
          <input type="text" placeholder="모임 이름"
          className="bg-graygray w-full h-12 rounded-[0.7rem] pl-3 placeholder:font-bold font-pretendard text-base sm:text-lg md:text-xl text-black" />
        </div>
      </div>
      {/*시간 설정 */}
      <div>
        {/*시간 설정 헤더 */}
        <div className="text-black flex gap-3 items-center">
          <span className='font-bold text-[1.8rem]'>시간</span>
          <span className="text-[1.25rem] text-tgray">설정할 시간의 범위를 설정해 주세요</span>
        </div>
        {/*시간 설정 선택*/}
      </div>
    </div>  
  )
}
export default Meeting