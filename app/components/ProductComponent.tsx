"use client";

import { Item } from '@/types'
import { addItem } from "@/app/actions/shoppingListActions";


export default function ProductComponent({ product }: { product: Item }) {
  const handleClick = async (product: Item) => {
    const param = {
      item: {...product},
      validatePath: ''
    }
    // 장바구니에 추가하는 로직을 구현합니다
    const response = await addItem(param);
    alert(response.message);
  };
  return (
    <div>
      <h1>{product.name}</h1>
      <p>가격: ₩{product.price}</p>
      <p>{product.description}</p>
      <button onClick={() => handleClick(product)}>장바구니에 추가</button>
    </div>
  )
}
