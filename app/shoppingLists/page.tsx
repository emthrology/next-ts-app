// import AddItemForm from "../components/AddItemForm";
import { fetchItems } from '../actions/shoppingListActions';
import ShoppingList from '../components/ShoppingList';

export default async function Home() {
  const carts = await fetchItems();
  return (
    <main>
      <h1>쇼핑 목록</h1>
      {/* <AddItemForm /> */}
      <ShoppingList carts={carts} />
    </main>
  );
}
