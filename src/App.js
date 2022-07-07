import CartItem from './components/carts/CartItem';
import From from './components/FromHandleByRedux/From';
import StateDataShow from './components/FromHandleByRedux/StateDataShow';
import Navbar from './components/navbar/Navbar';
import Store1 from './store1Redux';

function App() {

  return (
    <div className='container'>
      <StateDataShow />
      <From />
      <Navbar />
      <Store1 />
      <CartItem />
    </div>
  );
}

export default App;
