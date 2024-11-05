'use client';
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
import Image from 'next/image';
import { IoTrashBin } from 'react-icons/io5';
import { removeFromCart } from '@/store/slices/Cart';
import { useDispatch } from 'react-redux';
import { useState } from 'react';
import { CircularProgress } from '@mui/material';

export function Order({ data }) {
  const [loader, setLoader] = useState(false);
  const dispatch = useDispatch();

  const handleRemoveCart = () => {
    setLoader((loader) => !loader);
    setTimeout(() => {
      dispatch(removeFromCart(data));
    }, 1000);
  };
  return (
    <TableRow key={data.id} className="border-2 border-red-600">
      <TableCell className="font-medium">
        <div>
          <Image src={data.image} width={70} height={70} alt="recipe"></Image>
        </div>
      </TableCell>

      <TableCell className="font-medium">{data.name}</TableCell>
      <TableCell className="hidden sm:table-cell">{data.servings}</TableCell>
      <TableCell className="hidden sm:table-cell">
        {data.prepTimeMinutes}
      </TableCell>
      <TableCell className="hidden sm:table-cell">{data.rating}</TableCell>
      <TableCell>$ 100</TableCell>
      <TableCell>
        {loader ? (
          <CircularProgress color="error" size={25} />
        ) : (
          <IoTrashBin
            color="red"
            className="hover:cursor-pointer"
            size="2em"
            onClick={handleRemoveCart}
          />
        )}
      </TableCell>
    </TableRow>
  );
}