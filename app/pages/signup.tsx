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
    <div className="w-full max-w-[430px] min-w-[320px] min-h-screen flex flex-col items-center bg-white mx-auto p-[10vw]">
      {/*맨위 탑바 */}
      <div className='flex items-center justify-between w-full'>
        <span className=' text-black font-pretendard font-extrabold text-3xl md:text-2xl'>회원가입</span>
        <button onClick={goBack} className='rounded-lg bg-bluegray w-10 h-10 flex justify-center items-center'>
          <img src='/arrow-right-sm.svg' alt='뒤로가기' />
        </button>
      </div>

      {/* 인적사항 입력 */}
      <div className="flex flex-col gap-[5vh] mt-[5vh] w-full items-center">
        <input value={username} onChange={(e) => setUsername(e.target.value)} placeholder="이름" type="text"
          className="bg-graygray w-[80vw] h-[8vh] rounded-[12px] p-[5vw] placeholder:font-bold font-pretendard text-xl" />
        <input value={password} onChange={(e) => setPassword(e.target.value)} placeholder="비밀번호" type="password"
          className="bg-graygray w-[80vw] h-[8vh] rounded-[12px] p-[5vw] placeholder:font-bold font-pretendard text-xl" />
        <input value={confirmPassword} onChange={(e) => setConfirmPassword(e.target.value)} placeholder="비밀번호 확인" type="password"
          className="bg-graygray w-[80vw] h-[8vh] rounded-[12px] p-[5vw] placeholder:font-bold font-pretendard text-xl" />
        <input value={email} onChange={(e) => setEmail(e.target.value)} placeholder="이메일" type="email"
          className="bg-graygray w-[80vw] h-[8vh] rounded-[12px] p-[5vw] placeholder:font-bold font-pretendard text-xl"/>
      </div>

      {/* 밑에 부분 */}
      <div className='flex justify-end w-full max-w-md mt-[10vh]'>
        <button onClick={handleSubmit } className='rounded-lg bg-blue-500 w-12 h-12 flex justify-center items-center'>
          <img src='/arrow-left-sm.svg' alt='로그인' />
        </button>
      </div>
    </div>
  );
}

export default Signup;