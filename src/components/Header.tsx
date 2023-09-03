import { AiOutlineShoppingCart } from 'react-icons/ai';
import { Link } from 'react-router-dom';

const Header = () => {
  return (
    <header className="flex justify-between p-6 px-10">
      <Link to="/" className="flex justify-center items-center gap-2 ">
        <img
          className="rounded-full "
          style={{ width: '40px', height: '40px' }}
          src={'/covans.jpg'}
          alt={'logo'}
        />
        <h1 className="text-lg font-bold  font-sans cursor-pointer">Covans</h1>
      </Link>
      <div className="flex gap-6">
        <p className="cursor-pointer text-lg">
          <Link to="/">Catalogo</Link>
        </p>
        <p className="cursor-pointer text-lg">
          <Link to="/about">Nosotros</Link>
        </p>
      </div>

      <div className="cursor-pointer">
        <Link to="/cart">
          <AiOutlineShoppingCart className=" text-3xl" />
        </Link>
      </div>
    </header>
  );
};

export default Header;
