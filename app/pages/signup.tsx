import React, { useState } from 'react';
import { useRouter } from 'next/navigation';
import axios from 'axios';

function Signup() {
  const router = useRouter();
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');
  const [email, setEmail] = useState('');
  const [errorMessage, setErrorMessage] = useState('');

  const goBack = () => {
    router.back();
  };

  const handleSubmit = async (e: React.MouseEvent<HTMLButtonElement>) => {
    e.preventDefault();

    // 비밀번호 확인
    if (password !== confirmPassword) {
      setErrorMessage('비밀번호가 일치하지 않습니다.');
      return;
    }

    const dto = {
      email, 
      password, 
      username,
    };

    try {
      const response = await axios.post(
        `${process.env.NEXT_PUBLIC_API_URL}/auth/signup`,
        dto,
        { withCredentials: true } 
      );

      console.log('회원가입 성공:', response.data);
      router.push('/SignIn');
    } catch (error: any) {
      console.error('회원가입 실패:', error);

      if (error.response) {
        setErrorMessage(error.response.data.message || '회원가입에 실패했습니다.');
      } else {
        setErrorMessage('네트워크 오류. 다시 시도해주세요.');
      }
    }
  };

  return (
    <div id="background" className="bg-white flex flex-col items-center p-[10vw]">
      <div id="topDiv" className="flex items-center justify-between w-full">
        <span id="signupText" className="font-pretendard font-extrabold text-[6vw]">회원가입</span>
        <div id="backbutton" onClick={goBack} className="rounded-[8px] bg-bluegray w-[9vw] h-[4.7vh] flex justify-center items-center cursor-pointer">
          <img id="backimg" src="/arrow-right-sm.svg" alt="arrow-right" />
        </div>
      </div>

      <div id="contentDiv" className="flex flex-col gap-[5vh] mt-[10vh] w-full items-center">
        <input id="name" value={username} onChange={(e) => setUsername(e.target.value)} placeholder="이름" type="text"
          className="bg-graygray w-[80vw] h-[8vh] rounded-[12px] p-[5vw] placeholder:font-bold font-pretendard" />
        <input id="password1" value={password}
          onChange={(e) => setPassword(e.target.value)} placeholder="비밀번호" type="password"
          className="bg-graygray w-[80vw] h-[8vh] rounded-[12px] p-[5vw] placeholder:font-bold font-pretendard" />
        <input id="password2" value={confirmPassword} onChange={(e) => setConfirmPassword(e.target.value)} placeholder="비밀번호 확인" type="password"
          className="bg-graygray w-[80vw] h-[8vh] rounded-[12px] p-[5vw] placeholder:font-bold font-pretendard" />
        {errorMessage && <p className="text-red-500 font-bold">{errorMessage}</p>}
        <input id="email" value={email} onChange={(e) => setEmail(e.target.value)} placeholder="이메일" type="email"
          className="bg-graygray w-[80vw] h-[8vh] rounded-[12px] p-[5vw] placeholder:font-bold font-pretendard"/>
      </div>

      <div id="bottomDiv" className="flex flex-row-reverse w-full mt-[20vh]">
        <button onClick={handleSubmit} className="rounded-[8px] bg-blueblue w-[12vw] h-[6vh] flex justify-center items-center">
          <img id="submit-arrow" src="/arrow-left-sm.svg" alt="회원가입" />
        </button>
      </div>
    </div>
  );
}

export default Signup;