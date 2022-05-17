import CartItem from './components/carts/CartItem';
import Navbar from './components/navbar/Navbar';
import Store1Redux from './store1Redux';

function App() {

  return (
    <div className='container'>
      {/* <FirstRedux /> */}
      <Navbar />
      <Store1Redux />
      <CartItem />
    </div>
  );
}

export default App;
