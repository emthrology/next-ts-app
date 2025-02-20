import Link from 'next/link';
import './globals.css';
import { ShoppingListProvider } from "./context/ShoppingListContext";

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body className='p-4'>
        <ShoppingListProvider>
          <nav>
            <Link href="/products" className='mr-2 text-gray-400 hover:text-blue-700'>상품 목록</Link>
            <Link href="/shoppingLists" className='mr-2 text-gray-400 hover:text-blue-700'>장바구니</Link>
          </nav>
          <hr />
          {children}
        </ShoppingListProvider>
      </body>
    </html>
  );
}
