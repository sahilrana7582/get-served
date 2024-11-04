'use client';
import React, { useEffect, useState } from 'react';
import { CardWithForm } from './Card';
import Filter from './Filter';
import { useDispatch, useSelector } from 'react-redux';
import { setCartItems } from '@/store/slices/Cart';
import { Button, CircularProgress, LinearProgress } from '@mui/material';
import { FaXTwitter } from 'react-icons/fa6';
import { ScrollArea } from '@/components/ui/scroll-area';

const Home = ({ data }) => {
  const [loading, setLoading] = useState(true);
  const dispatch = useDispatch();
  const recipes = useSelector((state) => state.cart.items);
  useEffect(() => {
    dispatch(setCartItems(data.recipes));
    setTimeout(() => {
      setLoading(!loading);
    }, 1000);
  }, []);

  return (
    <div className="p-4  min-h-screen">
      <div className="flex justify-center">
        {' '}
        <Button
          variant="outlined"
          color="white"
          startIcon={<FaXTwitter />}
          href="https://x.com/sahilranatwt"
          target="_blank"
        >
          | Made by Sahil
        </Button>
      </div>
      <div className="m-4">
        <Filter />
      </div>
      <div className="border-b w-full m-4"></div>
      {loading ? (
        <LinearProgress className="w-full" color="inherit" />
      ) : (
        <ScrollArea className="max-h-screen w-full  overflow-y-auto">
          <div className="flex flex-wrap justify-evenly gap-4">
            {recipes.map((dataItem, ind) => (
              <CardWithForm data={dataItem} key={ind} />
            ))}
          </div>
        </ScrollArea>
      )}
    </div>
  );
};

export default Home;
