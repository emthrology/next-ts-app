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
    <ul>
      {products.map((product) => (
        <li key={product.id}>
          <Link href={`products/${product.id}`}>{product.name}</Link>
          <p>{product.description}</p>
          <p>가격: {product.price}원</p>
          <button onClick={() => handleAddToCart(product)}>장바구니에 추가</button>
        </li>
      ))}
    </ul>
  );
}
