'use client';
import React from 'react';
import Cart from '../component/Cart';
import { Separator } from '@/components/ui/separator';
import { Checkout, DialogDemo } from '../component/Checkout';
import { LoginCard } from '../component/Logincard';
import { useSelector } from 'react-redux';

const Page = () => {
  const cartData = useSelector((state) => state.cart.cartItems);
  return (
    <div className="flex min-h-screen lg:p-10 py-10 flex-col lg:flex-row">
      <div className="w-full max-h-[450px] px-6 mb-10 lg:w-1/2">
        <Cart />
      </div>
      <div className="border-t relative mt-10 flex justify-center p-10  w-full lg:w-1/2 lg:border-l h-fit items-center lg:h-screen">
        <Checkout />
      </div>
    </div>
  );
};

export default Page;
