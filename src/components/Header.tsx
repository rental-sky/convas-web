import { AiOutlineShoppingCart } from 'react-icons/ai';

const Header = ({
  setFilter,
}: {
  setFilter: React.Dispatch<
    React.SetStateAction<'tables' | 'boots' | 'goggles' | 'helmets' | undefined>
  >;
}) => {
  return (
    <header className="flex justify-between p-6 px-10">
      <h1
        className="text-2xl font-bold text-[#144b84] font-sans cursor-pointer"
        onClick={() => {
          setFilter(undefined);
        }}
      >
        Covans
      </h1>
      <div className="flex gap-6">
        <p
          className="text-[#144b84] cursor-pointer "
          onClick={() => {
            setFilter(undefined);
          }}
        >
          Catalogo
        </p>
        <p className="text-[#144b84] cursor-pointer">Nosotros</p>
        <p className="text-[#144b84] cursor-pointer">Contacto</p>
      </div>

      <div className="cursor-pointer">
        <AiOutlineShoppingCart className="text-[#144b84] text-3xl" />
      </div>
    </header>
  );
};

export default Header;
