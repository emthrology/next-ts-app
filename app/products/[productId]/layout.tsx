import Link from 'next/link';
import { ProductsProvider } from '../../context/ProductsContext';

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <div>
      <ProductsProvider>{children}</ProductsProvider>
    </div>
  );
}
