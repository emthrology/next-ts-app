import React from 'react';
import { ShoppingListProvider } from '../context/ShoppingListContext';
import { ProductsProvider } from '../context/ProductsContext';
export default function CombinedProvider({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <ShoppingListProvider>
      <ProductsProvider>{children}</ProductsProvider>
    </ShoppingListProvider>
  );
}
