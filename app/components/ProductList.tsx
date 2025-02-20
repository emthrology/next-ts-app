"use client";

import { Item } from "@/types";
import { useShoppingList } from "../context/ShoppingListContext";
import { addItem } from "../actions/shoppingListActions";
import Link from "next/link";

export default function ProductList({ products }: { products: Item[] }) {
  const { items, setItems } = useShoppingList();


  const handleAddToCart = async (product: Item) => {
    const params = {
      item: {...product},
      validatePath: 'shoppingList'
    }
    const response = await addItem(params); // 서버 API를 호출하여 장바구니에 상품을 추가합니다
    alert(response.message);
    setItems([...items, product]); // context에 상품을 추가합니다
  };

  return (
    <>
      <ul>
        {products.map((product) => (
          <li key={product.id} className="flex flex-col max-w-[200px] border border-blue-300 p-4 m-2 rounded-lg ">
            <Link href={`products/${product.id}`}>{product.name}</Link>
            <p>{product.description}</p>
            <p>가격: {product.price.toLocaleString()}원</p>
            <button className="rounded-lg border border-black bg-blue-500 py-1 mt-1 text-white font-bold" onClick={() => handleAddToCart(product)}>장바구니에 추가</button>
          </li>
        ))}
      </ul>
    </>

  );
}
