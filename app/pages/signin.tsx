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
      
      // JWT 토큰을 로컬 스토리지에 저장
      if (response.data.token) {
        localStorage.setItem('token', response.data.token);
      }
  
      router.push('/SStart'); // 로그인 성공 후 메인 페이지로 이동
    } catch (error) {
      console.error('로그인 실패:', error);
      setErrorMessage('❌ 로그인 정보가 올바르지 않습니다.');
    }
  };
  return (
    <div id='background' className='bg-white flex flex-col items-center p-[10vw]'>
      <div id='topDiv' className='flex items-center justify-between w-full'>
        <span id='signupText' className='font-pretendard font-extrabold text-[6vw]'>로그인</span>
        <div id='backbutton' onClick={goBack} className='rounded-[8px] bg-bluegray w-[9vw] h-[4.7vh] flex justify-center items-center'>
          <img id='backimg' src='/arrow-right-sm.svg' alt='arr  ow-right' />
        </div>
      </div>

      <div id='contentDiv' className='flex flex-col gap-[5vh] mt-[4vh] w-full items-center'>
        <input id='email' value={EmailValue} onChange={(e) => SetEmailValue(e.target.value)} placeholder='이메일' type='text'
          className='bg-graygray w-[80vw] h-[8vh] rounded-[12px] p-[5vw] placeholder:font-bold font-pretendard'/>
        <input id='password' value={PasswordValue} onChange={(e) => SetPasswordValue(e.target.value)} placeholder='비밀번호' type='password'
          className='bg-graygray w-[80vw] h-[8vh] rounded-[12px] p-[5vw] placeholder:font-bold font-pretendard'/>
        {ErrorMessage && <p className='text-red-500 font-bold'>{ErrorMessage}</p>}
      </div>

      <div id='divideline' className='flex items-center gap-2 w-full mt-[10vh]'>
        <div className='flex-1 border-t border-gray-300'></div>
        <span className='text-gray-400 font-semibold text-sm'>or</span>
        <div className='flex-1 border-t border-gray-300'></div>
      </div>

      <div id='OauthDiv' className='w-[60vw] flex flex-col gap-[4vh] mt-[5vh]'>
        <button id='google' className='border-2 border-googlebord rounded-[9999px] w-full h-[6vh]'>
          Google 로그인
        </button>
        <button id='kakao' className='w-full h-[6vh] rounded-[12px] bg-kakaobg'>
          카카오 로그인
        </button>
        <button id='naver' className='w-full h-[6vh] rounded-[4px] bg-naverbg'>
          네이버 로그인
        </button>W
      </div>

      <div id='bottomDiv' className='flex flex-row-reverse w-full mt-[10vh]'>
        <button onClick={handleLogin} className='rounded-[8px] bg-blueblue w-[12vw] h-[6vh] flex justify-center items-center'>
          <img id='submit arrow' src='/arrow-left-sm.svg' alt='로그인' />
        </button>
      </div>
    </div>
  );
}

export default SignIn;
