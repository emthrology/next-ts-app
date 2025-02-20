import ProductList from '@/app/components/ProductList';
import { fetchProducts } from '@/app/actions/productActions';

export default async function ProductsPage() {
  console.log('productsPage:', 'fetchProducts');
  const products = await fetchProducts();

  return (
    <main>
      <h1>상품 목록</h1>
      <ProductList products={products} />
    </main>
  );
}
