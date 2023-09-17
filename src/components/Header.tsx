import { AiOutlineShoppingCart } from 'react-icons/ai';
import { Link } from 'react-router-dom';

import { TiThMenuOutline } from 'react-icons/ti';
import useAppStore from '../store/useAppStore';

const Header = () => {
  const { setShowMenu, showMenu } = useAppStore();

  return (
    <header className="flex justify-between p-6 px-10 bg-gradient-to-r from-sky-700 to-cyan-500">
      <Link to="/" className="flex justify-center items-center gap-2 ">
        <img
          className="rounded-full "
          style={{ width: '40px', height: '40px' }}
          src={'/covans.jpg'}
          alt={'logo'}
        />
        <h1 className="text-lg font-bold  font-sans cursor-pointer">Covans</h1>
      </Link>

      <div className="hidden md:flex gap-6">
        <p className="cursor-pointer text-lg">
          <Link to="/">Catalogo</Link>
        </p>
        <p className="cursor-pointer text-lg">
          <Link to="/about">Nosotros</Link>
        </p>
      </div>

      <div className="hidden md:flex cursor-pointer">
        <Link to="/cart">
          <AiOutlineShoppingCart className=" text-3xl" />
        </Link>
      </div>

      <div className="flex md:hidden items-center ">
        <div
          className="bg-white border rounded-3xl  p-2  shadow-lg flex  h-max "
          onClick={() => setShowMenu(!showMenu)}
        >
          <TiThMenuOutline size={26} color="black" />
        </div>
      </div>
    </header>
  );
};

export default Header;
