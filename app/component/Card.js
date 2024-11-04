'use client';
import * as React from 'react';

import { Button } from '@/components/ui/button';
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
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from '@/components/ui/select';
import Image from 'next/image';
import Filter from './Filter';
import { useDispatch } from 'react-redux';
import { addToCart } from '@/store/slices/Cart';
import { Alert, CircularProgress, LinearProgress } from '@mui/material';

export function CardWithForm({ data }) {
  const [alert, setAlert] = React.useState(false);
  const dispatch = useDispatch();
  const handleAddToCart = () => {
    setAlert((alert) => !alert);
    setTimeout(() => {
      dispatch(addToCart(data));

      setTimeout(() => {
        setAlert((alert) => !alert);
      }, 1500);
    }, 1000);
  };
  return (
    <>
      <Card className="w-[300px] p-2">
        <CardContent>
          <Image
            src={data?.image}
            width={100}
            height={100}
            alt="recipe"
            className="w-full h-full"
          />
        </CardContent>
        <CardFooter className="flex flex-col justify-start gap-2 ">
          <CardTitle className="flex justify-start w-full">
            {data?.name}
          </CardTitle>
          <div className="border-b w-full"></div>
          <CardDescription className="flex text-justify flex-col">
            <span className="text-base font-semibold">Ingredients: </span>
            {data?.ingredients?.slice(0, 4).join(', ')}
          </CardDescription>
          <CardDescription className="flex justify-start w-full">
            <span className="text-base font-semibold">
              Ingredients:{data?.prepTimeMinutes}{' '}
            </span>
          </CardDescription>
          <CardDescription className="flex justify-start w-full">
            <span className="text-base font-semibold">
              Prep. Time: {data?.cookTimeMinutes}min{' '}
            </span>
          </CardDescription>
          <CardDescription className="flex justify-start w-full">
            <span className="text-base font-semibold">
              Ratings: {data?.rating}/5 ({data?.reviewCount}){' '}
            </span>
          </CardDescription>
          <CardDescription className="flex justify-start w-full">
            <span className="text-base font-semibold">
              Tags: {data?.tags.join(', ')}
            </span>
          </CardDescription>
        </CardFooter>
        <CardFooter className="flex flex-col gap-2 items-end">
          <Button className="w-full" onClick={handleAddToCart}>
            {alert ? '....' : 'Add to cart'}
          </Button>
          {alert ? (
            <Alert severity="success" className="w-full">
              Added to cart.
            </Alert>
          ) : null}
        </CardFooter>
      </Card>
    </>
  );
}
