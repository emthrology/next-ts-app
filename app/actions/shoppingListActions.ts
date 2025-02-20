"use server";
import fs from 'fs';
import path from 'path';
import { revalidatePath } from "next/cache";

const dbPath = path.join(process.cwd(), 'db/db.json');

async function readDatabase() {
  const data = await fs.promises.readFile(dbPath, 'utf-8');
  return JSON.parse(data);
}
async function writeDatabase(data: any) {
  await fs.promises.writeFile(dbPath, JSON.stringify(data, null, 4), 'utf-8');
}

//TODO 실제 서버가 생기면 이코드로 바꿔야함
// export async function addItem(item: { id: string; name: string; price: number; description: string }) {
//   const response = await fetch('https://api.example.com/cart/add', {
//     method: 'POST',
//     headers: {
//       'Content-Type': 'application/json',
//       // 필요한 경우 인증 헤더 추가
//     },
//     body: JSON.stringify(item),
//   });

//   if (!response.ok) {
//     throw new Error('Failed to add item to cart');
//   }

//   const updatedCart = await response.json();
//   revalidatePath('/shopping-list');
//   return updatedCart;
// }
interface Item {
  id: string;
  name: string;
  price: number;
  description: string;
}

export async function addItem({ item, validatePath }: { item: Item, validatePath: string }) {
  // 여기서 데이터베이스에 아이템을 추가하는 로직을 구현합니다.
  // 데이터베이스 읽기
  const db = await readDatabase();
  
  //shoppingList에 중복된 id가 있으면 추가하지 않음
  if (db.shoppingList.some((i: { id: string; }) => i.id === item.id)) {
    const res = {
      success: false,
      message: "이미 추가된 상품입니다.",
    }
    return res;
  }

  // 새로운 아이템 추가
  db.shoppingList.push(item);
  
  // 데이터베이스에 다시 쓰기
  await writeDatabase(db);

  // 데이터가 변경되었으므로 페이지를 재검증합니다.
  /*
  revalidatePath([라우트 주소]):서버 사이드에서 실행됩니다.
  클라이언트에서는 router.replace(router.asPath)와 같은 맥락의 역할을 합니다.

  서버 액션, 라우트 핸들러, API 라우트 등에서 사용됩니다

  서버의 데이터 캐시를 무효화합니다.

  지정된 경로와 관련된 캐시된 데이터를 재검증합니다.

  다음 페이지 방문 시 새로운 데이터를 가져옵니다

  서버 사이드 데이터 변경 후 캐시를 무효화할 때 사용합니다.

  웹훅이나 서버 액션에서 데이터 업데이트 후 캐시를 갱신할 때 적합합니다
  */
  revalidatePath(`/${validatePath}`);
  const res = {
    success: true,
    message: "상품이 추가되었습니다.",
  }
  console.log(res, 111)
  return res;
}

export async function removeItem(id: string) {
  // 여기서 데이터베이스에서 아이템을 제거하는 로직을 구현합니다.
  // 데이터베이스 읽기
  const db = await readDatabase();
  
  // id에 해당하는 아이템 제거
  db.shoppingList = db.shoppingList.filter((item: { id: string; }) => item.id !== id);

  // 데이터베이스에 다시 쓰기
  await writeDatabase(db);
  
  revalidatePath("/");
}

export async function fetchItems() {
  // 여기서 데이터베이스에서 아이템 목록을 가져오는 로직을 구현합니다.
  await new Promise((resolve) => setTimeout(resolve, 2000));
  // 데이터베이스 읽기
  const db = await readDatabase();
  return db.shoppingList;
}
  // // 예시를 위해 하드코딩된 데이터를 반환합니다.
  // return [
  //   { id: "1", name: "우유", price: 1000, description: "우유 설명" },
  //   { id: "2", name: "빵", price: 2000, description: "빵 설명" },
  //   { id: "3", name: "계란", price: 3000, description: "계란 설명" },
  // ];

