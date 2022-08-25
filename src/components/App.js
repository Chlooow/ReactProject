import { render } from "@testing-library/react";
import Banner from "./Banner";
import Header from "./Header";
import Cart from "./Cart";
import ShoppingList from "./ShoppingList";

function App() {
  return (<div> <Banner /> <Header /> <Cart /> <ShoppingList/> </div>);
};


export default App;