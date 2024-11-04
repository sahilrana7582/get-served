'use client';
import React, { useEffect, useState } from 'react';

import {
  Select,
  SelectContent,
  SelectGroup,
  SelectItem,
  SelectLabel,
  SelectTrigger,
  SelectValue,
} from '@/components/ui/select';
import { Button } from '@/components/ui/button';
import { useDispatch, useSelector } from 'react-redux';
import { setCartItems } from '@/store/slices/Cart';

export function SelectDemo() {
  const [sortValue, setSortValue] = useState('all');
  const [render, setRender] = useState(true);
  let data = useSelector((state) => state.cart.items);
  const copyOldData = [...data];
  const dispatch = useDispatch();

  const handleChange = (value) => {
    setSortValue(value);
  };

  useEffect(() => {
    const newData = sortRecipeBy(data, sortValue);
    if (sortValue !== 'all') {
      dispatch(setCartItems(newData));
    } else {
      dispatch(setCartItems(copyOldData));
    }
    setSortValue(sortValue);
  }, [sortValue, dispatch]);

  function sortRecipeBy(array, key) {
    const mutableArray = [...array]; // Make a copy to avoid direct mutation

    return mutableArray.sort((a, b) => {
      if (typeof a[key] === 'string' && typeof b[key] === 'string') {
        return a[key].localeCompare(b[key]);
      } else if (typeof a[key] === 'number' && typeof b[key] === 'number') {
        return a[key] - b[key]; // For numeric sorting
      }

      console.warn(
        `Unsupported types for sorting: ${typeof a[key]}, ${typeof b[key]}`
      );
      return 0; // No sorting if types are not supported
    });
  }

  return (
    <div>
      <div className="flex gap-4">
        <Select onValueChange={handleChange}>
          <SelectTrigger className="w-fit">
            <SelectValue placeholder="Sort By" />
          </SelectTrigger>
          <SelectContent>
            <SelectGroup>
              <SelectItem value="rating">By Rating</SelectItem>
              <SelectItem value="name">By Name</SelectItem>
              <SelectItem value="prepTimeMinutes">By Prep-Time</SelectItem>
              <SelectItem value="reviewCount">By Total Reviews</SelectItem>
            </SelectGroup>
          </SelectContent>
        </Select>
      </div>
    </div>
  );
}
