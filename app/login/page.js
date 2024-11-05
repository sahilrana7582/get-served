import React from 'react';
import { LoginCard } from '../component/Logincard';
import { Button } from '@/components/ui/button';
import { Label } from '@/components/ui/label';
import { Checkbox } from '../component/Checkbox';
import { SignedOut, SignIn, SignInButton } from '@clerk/nextjs';
import { ClerkProvider } from '@clerk/nextjs';
import Link from 'next/link';

const page = () => {
  return (
    <div className="flex flex-col sm:flex-row justify-center items-center w-full h-screen p-4 ">
      <div className="w-full sm:w-1/2 h-1/2 sm:h-screen flex items-center justify-center p-4">
        <Button className="w-24 sm:w-20">
          <SignInButton forceRedirectUrl="/" />
        </Button>
      </div>
      <div className="w-full sm:w-1/2 h-1/2 sm:h-screen bg-black flex flex-col items-center justify-center gap-4 sm:gap-6 p-4">
        <div className="flex flex-col justify-center items-center gap-1 sm:gap-2">
          <h2 className="text-white text-3xl sm:text-5xl font-bold text-center">
            Welcome to Login
          </h2>
          <span className="text-white text-sm sm:text-base font-semibold text-center">
            Do not have an account?
          </span>
        </div>

        <Link href={'/'}>
          <Button variant="outline" className="w-full sm:w-auto">
            Continue As Guest
          </Button>
        </Link>
      </div>
    </div>
  );
};

export default page;
