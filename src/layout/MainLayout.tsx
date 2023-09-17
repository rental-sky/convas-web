import Header from '../components/Header';
import useAppStore from '../store/useAppStore';
import { useLocation, useNavigate } from 'react-router-dom';

export const formatCurrency = (number: number) => {
  // Formatear el número como una cadena en formato de moneda
  const formattedNumber = new Intl.NumberFormat('es-ES', {
    style: 'currency',
    currency: 'ARS', // Cambia 'EUR' al código de moneda deseado (por ejemplo, 'USD' para dólares)
  }).format(number);

  return formattedNumber;
};

const menuOptions = [
  {
    label: 'Catalogo',
    value: '/',
  },
  {
    label: 'Nosotros',
    value: '/about',
  },
  {
    label: 'Tablas',
    value: '/tables',
  },
  {
    label: 'Botas',
    value: '/boots',
  },
  {
    label: 'Cascos',
    value: '/helmets',
  },
  {
    label: 'Carrito',
    value: '/cart',
  },
];

const Layout = ({ children }: { children: React.ReactNode }) => {
  const { total, showMenu, setShowMenu } = useAppStore();
  const navigate = useNavigate();
  const location = useLocation();

  return (
    <div className="w-full bg-gradient-to-r from-sky-700 to-cyan-400 h-screen">
      <Header />

      <div
        className={`${
          showMenu ? 'hidden' : ''
        }  bg-gradient-to-r from-sky-700 to-cyan-400`}
      >
        {children}
      </div>

      {location.pathname === '/cart' || showMenu ? null : (
        <footer className="bg-gradient-to-r from-sky-400 to-cyan-800 p-2 text-white text-center sticky bottom-0 w-full rounded-t-3xl ">
          <div className="flex justify-between md:px-10 items-center py-2 ">
            <p className="font-medium text-xl ml-10">
              Total: {formatCurrency(total)}{' '}
            </p>

            <button
              className="bg-[#ffffff] rounded-2xl text-md"
              onClick={() => {
                navigate('/cart');
              }}
            >
              <p className="text-[#4180ab] text-lg">Reservar</p>
            </button>
          </div>

          <p>&copy; {new Date().getFullYear()} Covans. All rights reserved.</p>
        </footer>
      )}

      <div
        className={`${
          showMenu
            ? 'flex flex-col animate__animated animate__fadeInUp'
            : 'hidden'
        }`}
      >
        {menuOptions.map((item) => (
          <div
            key={item.value}
            onClick={() => {
              navigate(item.value);
              setShowMenu(false);
            }}
            className="flex flex-col  justify-center p-4 mx-4 "
          >
            <p className="text-white text-sm font-mono font-bold">
              {item.label}
            </p>
          </div>
        ))}
        <div className="p-8 gap-6 flex"></div>
      </div>
    </div>
  );
};

export { Layout };
