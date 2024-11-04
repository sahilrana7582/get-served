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
    <div className="flex justify-center items-center w-screen h-screen">
      <div className="h-screen w-1/2 flex items-center justify-center">
        <Button className="w-20">
          <SignInButton forceRedirectUrl="/" />
        </Button>
      </div>
      <div className="h-screen bg-black w-1/2 flex flex-col items-center justify-center gap-6">
        <div className="flex flex-col justify-center items-center gap-2">
          <h2 className="text-white text-5xl font-bold">
            Welcome to Login
            <br />
          </h2>
          <span className="text-white text-base font-semibold">
            Don't have account
          </span>
        </div>

        <Link href={'/'}>
          <Button variant="outline">Continue As Guest</Button>
        </Link>
      </div>
    </div>
  );
};

export default page;
