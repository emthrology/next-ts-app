import Link from 'next/link';
import { ShoppingListProvider } from "./context/ShoppingListContext";

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body>
        <ShoppingListProvider>
          <nav>
            <Link href="/products">상품 목록</Link>
            <Link href="/shoppingLists">장바구니</Link>
          </nav>
          {children}
        </ShoppingListProvider>
      </body>
    </html>
  );
}
