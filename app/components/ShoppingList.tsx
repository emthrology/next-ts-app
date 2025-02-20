"use client";

import { Item } from "@/types";
import { useShoppingList } from "../context/ShoppingListContext";
import { removeItem } from "../actions/shoppingListActions";


export default function ShoppingList({ carts } : { carts: Item[] }) {
  const { items, setItems } = useShoppingList();

  const handleRemove = async (id: string) => {
    await removeItem(id); // 서버 API를 호출하여 장바구니에서 상품을 제거합니다
    setItems(items.filter(item => item.id !== id)); // context에서 상품을 제거합니다
  };

  return (
    <ul>
      {carts.map((item) => (
        <li key={item.id}>
          {item.name}
          <button onClick={() => handleRemove(item.id)}>삭제</button>
        </li>
      ))}
    </ul>
  );
}
