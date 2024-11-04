'use client';
import React from 'react';
import Cart from '../component/Cart';
import { Separator } from '@/components/ui/separator';
import { Checkout, DialogDemo } from '../component/Checkout';
import { LoginCard } from '../component/Logincard';
import { useSelector } from 'react-redux';

const page = () => {
  const cartData = useSelector((state) => state.cart.cartItems);
  return (
    <div className="flex min-h-screen p-10">
      <div className="w-1/2 max-h-[450px] px-6 mb-10">
        <Cart />
        <Separator />
        <h1 className="text-2xl flex font-semibold justify-between">
          Total <span>${cartData.length * 100}</span>
        </h1>
      </div>
      <div className="border-l flex justify-center w-1/2 h-screen items-center">
        <Checkout />
      </div>
    </div>
  );
};

export default page;
