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
    <div className="bg-white shadow-lg p-2 m-4 rounded-xl cursor-pointer">
      <h2 className="text-xl font-semibold text-[#144b84] mb-2">
        {product.name}
      </h2>
      <p className="text-[#144b84] mb-2">${product.price} por dia</p>
      <img
        className=" rounded-lg mb-4 object-contain h-48 w-96 "
        src={`/${product.image}`}
        alt={`product-${product.image}`}
      />
      <p className="text-[#144b84] mb-2">Marca: {product.brand}</p>
      <p className="text-[#144b84] mb-2">
        Disponible: {product.available ? 'Si' : 'No'}
      </p>
      <p className="text-[#144b84] mb-2">
        Talla: {product.size }
      </p>
      <button
        className={`m-8  ${
          isInCart ? 'bg-red-400' : 'bg-blue-400'
        }  text-white px-4 py-2 rounded-lg w-8/12`}
        onClick={handleClick}
      >
        {isInCart ? 'Quitar' : 'Agregar'}
      </button>
    </div>
  );
};

export default ProductCard;
