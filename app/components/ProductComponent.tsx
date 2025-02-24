'use client';

import { Item } from '@/types';
import { addItem } from '@/app/actions/shoppingListActions';
import Button from './Button';

export default function ProductComponent({ product }: { product: Item }) {
  const handleClick = async (product: Item) => {
    const param = {
      item: { ...product },
      validatePath: '',
    };
    // 장바구니에 추가하는 로직을 구현합니다
    const response = await addItem(param);
    alert(response.message);
  };
  return (
    <div className="flex flex-col max-w-[200px] border border-blue-300 p-4 m-2 rounded-lg">
      <h1>{product.name}</h1>
      <p>{product.description}</p>
      <p>가격: ₩{product.price}</p>
      {/* <button onClick={() => handleClick(product)}>장바구니에 추가</button> */}
      <Button
        label="장바구니에 추가"
        variant="primary"
        onClick={() => handleClick(product)}
      />
    </div>
  );
}
