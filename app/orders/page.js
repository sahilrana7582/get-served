'use client';
import { Button } from '@/components/ui/button';
import { ScrollArea } from '@/components/ui/scroll-area';
import Link from 'next/link';
import React, { useEffect } from 'react';
import { useSelector } from 'react-redux';
import { AlertDemo } from '../component/Alert';
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
import { TableDemo } from '../component/Tabledemo';
import { Order } from '../component/Order';

const Page = () => {
  const items = useSelector((state) => state.cart.orders);

  return (
    <div className="h-screen w-screen flex flex-col p-6">
      {items.length == 0 ? (
        <AlertDemo
          data={
            'No orders found! Treat yourself to something delicious—check out our menu and place your first order!'
          }
        />
      ) : (
        <ScrollArea>
          <Table className="max-h-[500px]">
            <TableBody>
              {items.map((item) => (
                <Order data={item} key={item.id} />
              ))}
            </TableBody>
          </Table>
        </ScrollArea>
      )}
    </div>
  );
};

export default Page;
