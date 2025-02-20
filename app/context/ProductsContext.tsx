"use client";

import { Item } from "@/types";
import React, { createContext, useContext, useState, useEffect } from "react";
import { fetchProducts } from "../actions/productActions";


type ProductsContextType = {
  items: Item[];
  setItems: React.Dispatch<React.SetStateAction<Item[]>>;
};

const ProductsContext = createContext<ProductsContextType | undefined>(undefined);

export function ProductsProvider({ children }: { children: React.ReactNode }) {
  const [items, setItems] = useState<Item[]>([]);

  useEffect(() => {
    fetchProducts().then(setItems);
  }, []);

  return (
    <ProductsContext.Provider value={{ items, setItems }}>
      {children}
    </ProductsContext.Provider>
  );
}

export function useProducts() {
  const context = useContext(ProductsContext);
  if (context === undefined) {
    throw new Error("useProducts must be used within a ProductsProvider");
  }
  return context;
}