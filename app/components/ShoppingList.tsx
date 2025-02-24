"use client";

import { Item } from "@/types";
import { useShoppingList } from "../context/ShoppingListContext";
import { removeItem } from "../actions/shoppingListActions";
import { useMemo } from "react";
import Button from "./Button";


export default function ShoppingList({ carts } : { carts: Item[] }) {
  const { items, setItems } = useShoppingList();

  const totalPrice = useMemo(() => {
    return items.reduce((acc, item) => acc + item.price, 0);
  }, [items]).toLocaleString();

  const handleRemove = async (id: string) => {
    await removeItem(id); // 서버 API를 호출하여 장바구니에서 상품을 제거합니다
    setItems(items.filter(item => item.id !== id)); // context에서 상품을 제거합니다
  };

  return (
    <>
      <ul>
        {carts.map((item) => (
          <li key={item.id} >
            <div className="flex flex-col max-w-[200px] border border-blue-300 p-4 m-2 rounded-lg ">
              <span>{item.name}</span>
              <span>{item.quantity ?? 1}개</span>
              <span>{item.price * (item.quantity ?? 1)}원</span>
              {/* <button className="rounded-lg border border-black bg-red-500 py-1 mt-1 text-white font-bold" onClick={() => handleRemove(item.id)}>삭제</button> */}
              <Button 
                label='삭제'
                variant="danger"
                onClick={() => handleRemove(item.id)}
              />
            </div>

          </li>
        ))}
      </ul>
      <p>총 가격: {totalPrice}원</p>
    </>
  );

}
