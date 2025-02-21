import React, { useState } from 'react';
import { useRouter } from 'next/navigation';
import axios from 'axios';

function Signup() {
  const router = useRouter();
  const [NameValue, SetNameValue] = useState('');
  const [PasswordValue, SetPasswordValue] = useState('');
  const [ConfirmPasswordValue, SetConfirmPasswordValue] = useState('');
  const [EmailValue, SetEmailValue] = useState('');
  const [ErrorMessage, setErrorMessage] = useState('');

  const goBack = async () => {
    router.back();
  };

  const handleSubmit = async (e: React.MouseEvent<HTMLButtonElement>) => {
    e.preventDefault();

    // 비밀번호 확인
    if (PasswordValue !== ConfirmPasswordValue) {
      setErrorMessage('비밀번호가 일치하지 않습니다.');
      return;
    }

    localStorage.setItem('Name', NameValue);
    localStorage.setItem('Password', PasswordValue);
    localStorage.setItem('Email', EmailValue);

    // DTO 객체 생성
    const dto = {
      email: EmailValue,
      password: PasswordValue,
      name: NameValue,
    };

    try {
      const response = await axios.post('/api/signup', dto);
      console.log('회원가입 성공:', response.data);
      router.push('/SignIn'); // 회원가입 후 로그인 페이지로 이동
    } catch (error) {
      console.error('회원가입 실패:', error);
      setErrorMessage('회원가입에 실패했습니다.');
    }
  };

  return (
    <div id='background' className='bg-white flex flex-col items-center p-[10vw]'>
      <div id='topDiv' className=' flex items-center justify-betweens w-full'>
        <span id='signupText' className='font-pretendard font-extrabold text-[6vw]'>회원가입</span>
        <div id='backbutton' onClick={goBack} className='rounded-[8px] bg-bluegray w-[9vw] h-[4.7vh] flex justify-center items-center'>
          <img id='backimg' src='/arrow-right-sm.svg' alt='arrow-right' />
        </div>
      </div>

      <div id='contentDiv' className='flex flex-col gap-[5vh] mt-[10vh] w-full items-center'>
        <input id='name' value={NameValue} onChange={(e) => SetNameValue(e.target.value)} placeholder='이름' type='text'
          className='bg-graygray w-[80vw] h-[8vh] rounded-[12px] p-[5vw] placeholder:font-bold font-pretendard '/>
        <input id='password1' value={PasswordValue} onChange={(e) => SetPasswordValue(e.target.value)} placeholder='비밀번호' type='password'
          className='bg-graygray w-[80vw] h-[8vh] rounded-[12px] p-[5vw] placeholder:font-bold font-pretendard'/>
        <input id='password2' value={ConfirmPasswordValue} onChange={(e) => SetConfirmPasswordValue(e.target.value)} placeholder='비밀번호 확인' type='password'
          className='bg-graygray w-[80vw] h-[8vh] rounded-[12px] p-[5vw] placeholder:font-bold font-pretendard'/>
        {ErrorMessage && <p className='text-red-500 font-bold ]'>{ErrorMessage}</p>}
        <input id='email' value={EmailValue} onChange={(e) => SetEmailValue(e.target.value)} placeholder='이메일' type='email'
          className='bg-graygray w-[80vw] h-[8vh] rounded-[12px] p-[5vw] placeholder:font-bold font-pretendard'/>
      </div>
      
      <div id='bottomDiv' className='flex flex-row-reverse w-full mt-[20vh]'>
        <button onClick={handleSubmit}
          className='rounded-[8px] bg-blueblue w-[12vw] h-[6vh] flex justify-center items-center'>
          <img id='submit arrow' src='/arrow-left-sm.svg' alt='회원가입' />
        </button>
      </div>
    </div>
  );
}

export default Signup;
