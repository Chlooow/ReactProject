import { render } from "@testing-library/react";
import Banner from "./Banner";
import Header from "./Header";
import logo from '../assets/flag-400.png'
import Cart from "./Cart";
import ShoppingList from "./ShoppingList";
import CareScale from "./CareScale";

function App() {
  return (
  <div> <Banner>
  <img src={logo} alt='La maison jungle' className='lmj-logo' />
  <Header /></Banner>  <Cart /> <ShoppingList/> <CareScale/> </div>);
};


export default App;