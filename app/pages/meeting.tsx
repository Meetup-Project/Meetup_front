import React from 'react'

function meeting() {
  return (
    <>
    {/*백그라운드 설정*/}
    <div className='w-full max-w-[430px] min-w-[320px] min-h-screen flex flex-col items-center bg-white mx-auto p-[10vw]' >
        {/*모임 이름*/}
        <div>
            <span>모임 이름</span>
            <span>모임의 이름을 정해주세요</span>
        </div>
        {/*모임 이름 입력*/}
        <input placeholder='모임 이름'></input>
        {/*날짜*/}
        <div>
            <span>날짜</span>
            <span>설정할 날짜의 범위를 설정해주세요 </span>
        </div>
        {/*캘린더 아마 이자리에 캘린더 컴포넌트 들어갈듯*/}
        {/*초대*/}
        <div>
            <span>초대링크</span>
            <span>초대용 url을 복사하세요</span>
        </div>
        {/*초대링크*/}
        <div></div>
        {/*다음 버튼*/}
    </div>
    </>
  )
}

export default meeting