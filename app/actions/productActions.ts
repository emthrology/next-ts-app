"use server";
import fs from 'fs';
import path from 'path';
import { revalidatePath } from "next/cache";

const dbPath = path.join(process.cwd(), 'db/db.json');

async function readDatabase() {
  const data = await fs.promises.readFile(dbPath, 'utf-8');
  return JSON.parse(data);
}

//TODO 실제 서버가 생기면 이코드로 바꿔야함
// export async function fetchProducts() {
//   const response = await fetch('https://api.example.com/products', {
//     method: 'GET',
//     headers: {
//       'Content-Type': 'application/json',
//       // 필요한 경우 인증 헤더 추가
//       // 'Authorization': `Bearer ${token}`
//     },
//   });

//   if (!response.ok) {
//     throw new Error('Failed to fetch products');
//   }

//   const products = await response.json();
//   return products;
// }

export async function fetchProducts() {
  // 여기서 데이터베이스에서 아이템 목록을 가져오는 로직을 구현합니다.
  //3초 딜레이 준 후 데이터 반환
  await new Promise((resolve) => setTimeout(resolve, 3000));
  const db = await readDatabase();
  return db.products;
  // // 예시를 위해 하드코딩된 데이터를 반환합니다.
  // return [
  //   { id: '1', name: '상품 1', price: 1000, description: '상품 1 설명' },
  //   { id: '2', name: '상품 2', price: 2000, description: '상품 2 설명' },
  //   { id: '3', name: '상품 3', price: 3000, description: '상품 3 설명' },
  // ];
}