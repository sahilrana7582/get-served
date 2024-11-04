// components/Cart.js
'use client';
import React, { useEffect, useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { addToCart } from '@/store/slices/Cart';
import { CardWithForm } from './Card';
import { TableDemo } from './Tabledemo';
import {
  Table,
  TableBody,
  TableCaption,
  TableCell,
  TableFooter,
  TableHead,
  TableHeader,
  TableRow,
} from '@/components/ui/table';
import { LinearProgress } from '@mui/material';
import { ScrollArea } from '@/components/ui/scroll-area';
import { Separator } from '@/components/ui/separator';

const Cart = () => {
  const [loader, setLoader] = useState(true);
  const items = useSelector((state) => state?.cart.cartItems);
  const totalQuantity = useSelector((state) => state?.cart?.quantity);
  const dispatch = useDispatch();
  useEffect(() => {
    setLoader((prev) => !prev);
  }, []);

  return (
    <div className="w-full h-screen min-h-screen p-10 overflow-auto">
      <Table className="max-h-[500px]">
        <TableHeader>
          <TableRow>
            <TableHead className="w-[150px]">Image</TableHead>
            <TableHead>Dish Name</TableHead>
            <TableHead>Serving</TableHead>
            <TableHead className="text-left">Ratings</TableHead>
            <TableHead className="text-left">Prep Time</TableHead>
            <TableHead className="text-left">Price $</TableHead>
            <TableHead className="text-left"></TableHead>
          </TableRow>
        </TableHeader>
        {loader ? (
          <LinearProgress />
        ) : (
          <TableBody>
            {items.map((item) => (
              <TableDemo data={item} key={item.id} />
            ))}
          </TableBody>
        )}
      </Table>
      <Separator />
    </div>
  );
};

export default Cart;
