"use client";

import React from "react";
import { useRouter } from "next/navigation";

function StartPage() {
  const router = useRouter();

  const gotoLogin = () => {
    router.push("/SignIn");
  }
  const gotoSignup = () => {
    router.push("/SignUp");
  }
  return(
    <div id="Contaiiner" className=" w-full h-full bg-white flex flex-col items-center font-pretendard">
      <div id="logoContianer" className="w-full pl-[0.6rem] pt-[0.6rem]">
        <img src="../logo.svg" alt="Logo" className="w-[3rem] h-[3rem]" />
      </div>
      <div id="titleContainer" className="flex flex-col items-center mt-[3vh] gap-[3vh] text-publicBlue">
        <span id="titleMent" className="text-[1.5rem] font-[400] font-jalan2">당신의 일정을 만들어보세요</span>
        <span id="title" className="text-[2.8rem] font-[400] font-jalan2">밋업</span>
      </div>

      <div id="characterContainer" className=" mt-[4vh] w-[15rem] h-[35vh] bg-graygray" />
      <div id="buttonContainer" className="mt-[8vh] flex flex-col gap-[3vh]">
        <button id="loginButton" onClick={gotoLogin} className="w-[12rem] h-[6vh] bg-blueblue rounded-[10px] text-white text-[1.25rem] font-[600] font-pretendard">로그인</button>
        <button id="signinButton" onClick={gotoSignup} className="w-[12rem] h-[6vh] border-2 border-solid border-publicBlue bg-white rounded-[10px] text-publicBlue text-[1.25rem] font-[600] font-pretendard">회원가입</button>
      </div>
    </div>
  )

}

export default StartPage;