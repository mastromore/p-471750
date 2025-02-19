import React from "react";
import { Logo } from "@/components/common/Logo";
import { LoginForm } from "@/components/auth/LoginForm";

const Index = () => {
  return (
    <main className="min-h-screen flex items-center justify-center bg-white">
      <div className="relative flex max-w-[480px] w-full flex-col overflow-hidden items-center text-black font-light text-center mx-auto px-[25px] py-[104px]">
        <Logo />

        <div className="mt-6 space-y-2">
          <h2 className="text-2xl font-medium leading-none">Welcome to SGCM</h2>
          <p className="text-xl leading-[1.1]">Log in to your dashboard</p>
        </div>

        <div className="mt-6">
          <LoginForm />
        </div>
      </div>
    </main>
  );
};

export default Index;
