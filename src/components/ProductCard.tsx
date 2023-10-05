import { formatCurrency } from '../layout/MainLayout';
import useAppStore, { CartItem } from '../store/useAppStore';

const ProductCard = ({ product }: { product: CartItem }) => {
  const { addCartItem, cartItems, removeCartItem } = useAppStore();

  const isInCart = cartItems.some((item) => item.name === product.name);

  const handleClick = () => {
    if (isInCart) removeCartItem(product);
    else addCartItem(product);
  };

  console.log(product);

  return (
    <div className="bg-slate-50 shadow-xl p-2 m-4 rounded-xl cursor-pointer">
      <img
        className="rounded-full mb-4 object-contain h-56 w-80 flex items-center justify-center  bg-slate-50"
        src={`/${product.image}`}
        alt={`product-${product.image}`}
      />
      <h2 className="text-base font-semibold text-black mb-2 uppercase font-sans ">
        {product.name}
      </h2>
      {/* <p className="text-[#144b84] mb-2 font-semibold">
        Disponible:{' '}
        <span className="text-[#144b84] mb-2 font-light">
          {product.available ? 'Si' : 'No'}
        </span>
      </p> */}
      <p className="text-[#144b84] mb-2 font-semibold">
        Talla:{' '}
        <span className="text-[#144b84] mb-2 font-light">{product.size}</span>
      </p>

      <p className="text-[#144b84] mb-2 text-xl font-extrabold">
        ${formatCurrency(product.price)}{' '}
      </p>
      {/* <p className="text-[#144b84] mb-2 capitalize">Marca: {product.brand}</p> */}

      <button
        className={`m-8   ${
          isInCart
            ? 'bg-gradient-to-r from-red-700 to-red-900'
            : 'bg-gradient-to-r from-cyan-800 to-sky-600'
        }  text-white px-6 py-4 rounded-xl w-8/12 font-bold p-8`}
        onClick={handleClick}
      >
        {isInCart ? 'Quitar' : 'Agregar'}
      </button>
    </div>
  );
};

export default ProductCard;
