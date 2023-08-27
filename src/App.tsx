import './App.css';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import Home from './screens/Home';
import About from './screens/About';
import Cart from './screens/Cart';
import Helmets from './screens/Helmets';
import Tables from './screens/Tables';
import Goggles from './screens/Goggles';
import Boots from './screens/Boots';

// const calculateTotal = (cartItems) => {
//   return cartItems.reduce((total, item) => total + item.price, 0);
// };

const router = createBrowserRouter([
  {
    path: '/',
    element: <Home />,
  },
  {
    path: '/about',
    element: <About />,
  },
  {
    path: '/cart',
    element: <Cart />,
  },
  // begin routes of products
  {
    path: '/helmets',
    element: <Helmets />,
  },
  {
    path: '/tables',
    element: <Tables />,
  },
  {
    path: '/goggles',
    element: <Goggles />,
  },
  {
    path: '/boots',
    element: <Boots />,
  },
  // end of products
  {
    path: '*',
    element: <div>Not Found</div>,
  },
]);

function App() {
  return <RouterProvider router={router} />;
}

export default App;
