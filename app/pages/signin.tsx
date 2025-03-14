'use client';

import React, { useState } from 'react';
import { useRouter } from 'next/navigation';
import axios from 'axios';

function SignIn() {
  const router = useRouter();
  const [EmailValue, SetEmailValue] = useState('');
  const [PasswordValue, SetPasswordValue] = useState('');
  const [ErrorMessage, setErrorMessage] = useState('');

  function goBack() {
    router.back();
  }

  const handleLogin = async () => {
    try {
      const response = await axios.post(
        `${process.env.NEXT_PUBLIC_API_URL}/auth/login`,
        {
          email: EmailValue,
          password: PasswordValue,
        }
      );
  
      console.log('로그인 성공:', response.data);
      
      if (response.data.token) {
        localStorage.setItem('token', response.data.token);
      }
  
      router.push('/SStart');
    } catch (error) {
      console.error('로그인 실패:', error);
      setErrorMessage('❌ 로그인 정보가 올바르지 않습니다.');
    }
  };

  const handleGoogleLogin = () => {
    window.location.href = `${process.env.NEXT_PUBLIC_API_URL}/oauth2/authorize/google`;
  };

  const handleKakaoLogin = () => {
    window.location.href = `${process.env.NEXT_PUBLIC_API_URL}/oauth2/authorize/kakao`;
  };

  const handleNaverLogin = () => {
    window.location.href = `${process.env.NEXT_PUBLIC_API_URL}/oauth2/authorize/naver`;
  };
  
  return (
    <>
    <div className='w-full h-screen flex flex-col items-center bg-white mx-auto p-4 sm:p-6 md:p-8'>

    {/* 맨위 탑바 */}
    <div className='flex items-center justify-between w-full max-w-md'>
      <span className='text-black font-pretendard font-extrabold text-2xl sm:text-2xl md:text-3xl'>로그인</span>
      <button onClick={goBack} className='rounded-lg bg-bluegray w-10 h-10 flex justify-center items-center'>
        <img src='/arrow-right-sm.svg' alt='뒤로가기' />
      </button>
    </div>

    {/*메인 입력칸  */}
    <div className='flex flex-col gap-4 sm:gap-6 mt-8 w-full max-w-md items-center'>
      <input value={EmailValue} onChange={(e) => SetEmailValue(e.target.value)} placeholder='이메일' type='text'
      className="bg-graygray w-full h-12 rounded-[12px] px-4 py-3 placeholder:font-bold font-pretendard text-base sm:text-lg md:text-xl text-black" />
      <input value={PasswordValue} onChange={(e) => SetPasswordValue(e.target.value)} placeholder='비밀번호' type='password'
      className="bg-graygray w-full h-12 rounded-[12px] px-4 py-3 placeholder:font-bold font-pretendard text-base sm:text-lg md:text-xl text-black" />
      {ErrorMessage && <p className='text-red-500 font-bold'>{ErrorMessage}</p>}
    </div>

    {/*가운데 분리선*/}
    <div className='flex items-center gap-2 w-full max-w-md mt-5'>
      <div className='flex-1 border-t border-gray-300'></div>
      <span className='text-gray-400 font-semibold text-sm'>or</span>
      <div className='flex-1 border-t border-gray-300'></div>
    </div>
  
    {/*Oauth 부분*/}
    <div className='w-full max-w-md flex flex-col gap-5 mt-5'>
      <button onClick={handleGoogleLogin} className='border-2 border-gray-400 rounded-full w-full h-12 text-gray-700 font-semibold flex items-center justify-center gap-2'>
        <img src="/google-icon.svg" alt="Google" className="w-5 h-5" /> Google 로그인
      </button>
      <button onClick={handleKakaoLogin} className='w-full h-12 rounded-lg bg-[#FEE500] text-[#000000] font-semibold flex items-center justify-center gap-2'>
        <img src="/kakao-icon.svg" alt="Kakao" className="w-5 h-5" /> 카카오 로그인
      </button>
      <button onClick={handleNaverLogin} className='w-full h-12 rounded-md bg-[#03C75A] text-white font-semibold flex items-center justify-center gap-2'>
        <img src="/naver-icon.svg" alt="Naver" className="w-5 h-5" />네이버 로그인
      </button>
    </div>
  
    {/*넘어가는 버튼*/}
    <div className='flex justify-end w-full mt-auto'>
      <button onClick={handleLogin} className='rounded-lg bg-blue-500 w-12 h-12 flex justify-center items-center'>
        <img src='/arrow-left-sm.svg' alt='로그인' />
      </button>
    </div>
</div>
</>
  );
}

export default SignIn;
