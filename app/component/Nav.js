import { Button } from '@/components/ui/button';
import { SignedIn, UserButton, UserProfile } from '@clerk/nextjs';
import Image from 'next/image';
import Link from 'next/link';
import React from 'react';
import { PiShoppingCartSimpleFill } from 'react-icons/pi';
import { useSelector } from 'react-redux';

const Nav = () => {
  const cartQuantity = useSelector((state) => state.cart.cartItems);
  return (
    <div className="flex justify-between p-2 shadow-md">
      <div>
        <Image
          src="https://www.shutterstock.com/image-vector/spoon-fork-icon-isolated-on-600nw-2479711923.jpg"
          alt="logo"
          width={70}
          height={70}
        />{' '}
      </div>
      <div className="flex items-center gap-6 px-10">
        <Link
          href="/"
          className="text-base font-semibold hover:underline hover:cursor-pointer"
        >
          Home
        </Link>
        <Link
          href="/orders"
          className="text-base font-semibold hover:underline hover:cursor-pointer"
        >
          Order
        </Link>

        <Link href="/cart" className="relative inline-block">
          {/* Cart Icon */}
          <PiShoppingCartSimpleFill className="w-9 h-8" />

          {/* Quantity Badge */}
          {cartQuantity.length == 0 ? null : (
            <span className="absolute top-0 right-0 transform translate-x-1/2 -translate-y-1/2 bg-red-500 text-white text-xs font-bold rounded-full h-5 w-5 flex items-center justify-center">
              {cartQuantity.length}
            </span>
          )}
        </Link>
        <UserButton />
      </div>
    </div>
  );
};

export default Nav;
