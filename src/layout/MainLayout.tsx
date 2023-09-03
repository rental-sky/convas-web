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

const Layout = ({ children }: { children: React.ReactNode }) => {
  const { total } = useAppStore();
  const navigate = useNavigate();
  const location = useLocation();
  console.log(location.pathname);

  return (
    <div className=" bg-[#8ab3cf] w-screen h-full">
      <Header />

      {children}

      {location.pathname === '/cart' ? null : (
        <footer className="bg-[#4180ab] p-2 text-white text-center sticky bottom-0 w-full rounded-t-3xl ">
          <div className="flex justify-between px-10 items-center py-2 ">
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
    </div>
  );
};

export { Layout };
