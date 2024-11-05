'use client';
import { Input } from '@/components/ui/input';
import { Menubar, MenubarMenu, MenubarTrigger } from '@radix-ui/react-menubar';
import React, { useEffect, useMemo, useRef, useState } from 'react';
import Menu, { MenubarDemo, NavigationMenuDemo, SelectDemo } from './Menu';
import { useDispatch, useSelector } from 'react-redux';
import { Button } from '@/components/ui/button';
import { useForm } from 'react-hook-form';
import { setCartItems } from '@/store/slices/Cart';
const Filter = () => {
  const [searchQuery, setSearchQuery] = useState('');
  const [resetSearch, setReset] = useState(false);
  const data = useSelector((state) => state.cart.items);
  const dispatch = useDispatch();
  const oldDataRef = useRef();
  if (data.length == 30) {
    oldDataRef.current = data;
  }

  const { handleSubmit, reset, register } = useForm();

  const handleFilter = (formData) => {
    setSearchQuery(formData.search); // Set the searchQuery from form data
  };

  // Use useMemo to memoize filtered results
  const filteredData = useMemo(() => {
    if (!searchQuery) return data; // Return all data if search query is empty
    return data.filter(
      (item) =>
        item.name.toLowerCase().includes(searchQuery.toLowerCase()) || // Search by name
        item.ingredients.some(
          (ingredient) =>
            ingredient.toLowerCase().includes(searchQuery.toLowerCase()) // Search through ingredients
        )
    );
  }, [searchQuery, data]); // Depend on searchQuery and data

  useEffect(() => {
    if (filteredData.length) {
      dispatch(setCartItems(filteredData));
    }
  }, [dispatch, searchQuery]);

  useEffect(() => {
    dispatch(setCartItems(oldDataRef.current));
  }, [dispatch, resetSearch]);



  const handleOldData = () => {
    setReset(!resetSearch);
    reset();
  };

  return (
    <div className="flex flex-col gap-4">
      <div className="flex w-full items-center space-x-2">
        <form
          className="flex w-full gap-2"
          onSubmit={handleSubmit(handleFilter)} // Pass only the form data
        >
          <Input type="text" placeholder="Search..." {...register('search')} />
          <Button type="submit" variant="outline">
            Search
          </Button>
          <Button onClick={handleOldData}>Reset</Button>
        </form>
      </div>

      <div className="flex justify-between mx-2">
        <h4 className="text-xl font-semibold">All Foods</h4>
        {/* Replace with appropriate component */}
        <SelectDemo />
      </div>

      {/* Optionally display filtered results */}
      {/* <ul>
        {filteredData.map((item, index) => (
          <li key={index}>{item.name}</li>
        ))}
      </ul> */}
    </div>
  );
};

export default Filter;
