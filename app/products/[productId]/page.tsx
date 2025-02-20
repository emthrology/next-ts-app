import { Item } from "@/types";
import { notFound } from 'next/navigation';
import { fetchProducts } from '@/app/actions/productActions';
import ProductComponent from "@/app/components/ProductComponent";


export default async function ProductDetail({ params }: { params: { productId: string } }) {
  const { productId } = await params;
  const products: Item[] = await fetchProducts();
  const product = products.find(p => p.id === productId)!;
  if (!product) {
    notFound();
  }

  return (
    <>
      <ProductComponent product={product} />
    </>
  );
}
