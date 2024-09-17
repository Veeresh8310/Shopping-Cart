
import './App.css';
import AddItemForm from './components/AdditemForm';
import Cart from './components/Cart';
import { CartProvider } from './context/cartContext';

function App() {
  return (
    <CartProvider>
    <div className="App">
      <header>
      <h1>Shopping Cart App</h1>
      </header>
      <hr />
      <main>
        <AddItemForm />
        <Cart />
      </main>
    </div>
    </CartProvider>
  );
}

export default App;