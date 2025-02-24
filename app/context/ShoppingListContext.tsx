'use client';

import { Item } from '@/types';
import React, { createContext, useContext, useState, useEffect } from 'react';
import { fetchItems } from '../actions/shoppingListActions';

type ShoppingListContextType = {
  items: Item[];
  setItems: React.Dispatch<React.SetStateAction<Item[]>>;
};

const ShoppingListContext = createContext<ShoppingListContextType | undefined>(
  undefined,
);

export function ShoppingListProvider({
  children,
}: {
  children: React.ReactNode;
}) {
  const [items, setItems] = useState<Item[]>([]);

  useEffect(() => {
    fetchItems().then(setItems);
  }, []);

  return (
    <ShoppingListContext.Provider value={{ items, setItems }}>
      {children}
    </ShoppingListContext.Provider>
  );
}

export function useShoppingList() {
  const context = useContext(ShoppingListContext);
  if (context === undefined) {
    throw new Error(
      'useShoppingList must be used within a ShoppingListProvider',
    );
  }
  return context;
}
