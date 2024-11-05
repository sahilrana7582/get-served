'use client';
import * as React from 'react';
import Button from '@mui/joy/Button';

import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from '@/components/ui/card';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { CheckboxDemo } from './Checkbox';
import { useDispatch, useSelector } from 'react-redux';
import { clearCart } from '@/store/slices/Cart';
import { Alert, Typography } from '@mui/joy';
import { IconButton } from '@mui/material';
import { CheckCircledIcon } from '@radix-ui/react-icons';
import Link from 'next/link';

export function Checkout() {
  const cartData = useSelector((state) => state.cart.cartItems);
  const [payState, setPayState] = React.useState(false);
  const dispatch = useDispatch();
  const orderData = useSelector((state) => state.cart.orders);
  const handleClick = () => {
    setPayState((payState) => !payState);
    setTimeout(() => {
      if (cartData.length) {
        dispatch(clearCart());
        setPayState((payState) => !payState);
      }
    }, 1000);
  };
  return (
    <Card className="w-[700px] h-fit">
      <CardHeader>
        <CardTitle className="flex justify-center text-2xl">Checkout</CardTitle>
      </CardHeader>
      <CardContent>
        <form>
          <div className="grid w-full items-center gap-4">
            <div className="flex flex-col space-y-1.5">
              <Label htmlFor="username">First Name</Label>
              <Input id="username" placeholder="First Name" />
            </div>
            <div className="flex flex-col space-y-1.5">
              <Label htmlFor="username">Last Name</Label>
              <Input id="username" placeholder="Last Name" />
            </div>
            <div className="flex flex-col space-y-1.5">
              <Label htmlFor="username">Card Number</Label>
              <Input id="username" placeholder="1234-1234-1234" />
            </div>
            <div className="flex flex-col space-y-1.5">
              <Label htmlFor="password">CVV</Label>
              <Input id="password" placeholder="***" />
            </div>
          </div>
        </form>
      </CardContent>
      <CardFooter className=" flex flex-col gap-2">
        <Button
          className="w-full"
          color="neutral"
          loading={payState && true}
          onClick={() => handleClick()}
        >
          Make Payment
        </Button>
        {orderData.length > 0 ? (
          <Alert
            key={1}
            className="w-full"
            sx={{ alignItems: 'flex ' }}
            startDecorator={<CheckCircledIcon width={35} height={35} />}
            variant="soft"
            color="success"
            endDecorator={
              <IconButton variant="soft" color="success"></IconButton>
            }
          >
            <div>
              <div className="font-semibold text-base">Payment</div>
              <Typography level="body-sm" fontSize={15}>
                See Your Order!{' '}
                <Link
                  href="/orders"
                  className="text-green-950 hover:text-blue-500"
                >
                  Here
                </Link>
              </Typography>
            </div>
          </Alert>
        ) : null}

        <div className="flex justify-between  w-full">
          <CheckboxDemo type="I accept all term&policies." />
        </div>
      </CardFooter>
    </Card>
  );
}
