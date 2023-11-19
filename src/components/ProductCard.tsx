import { useMemo, useState } from 'react';
import { formatCurrency } from '../layout/MainLayout';
import useAppStore, { CartItem } from '../store/useAppStore';
import { AiOutlineMinus } from 'react-icons/ai';
import { BsPlus } from 'react-icons/bs';

const Modal = ({
  isOpen,
  onClose,
  children,
}: {
  isOpen: boolean;
  onClose: () => void;
  children: React.ReactNode;
}) => {
  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 bg-black bg-opacity-50 z-50 flex justify-center items-center ">
      <div className="bg-white p-4 rounded-lg shadow-md w-1/3 relative">
        <button
          onClick={onClose}
          className="absolute top-2 right-2 rounded-lg text-white hover:text-gray-900 bg-sky-500"
        >
          X
        </button>
        {children}
      </div>
    </div>
  );
};

const ProductCard = ({ product }: { product: CartItem }) => {
  const { addCartItem, cartItems, removeCartItem, addCount, removeCount } =
    useAppStore();

  const [modalOpen, setModalOpen] = useState(false);

  const isInCart = useMemo(
    () => cartItems.some((item) => item.name === product.name),
    [cartItems, product.name]
  );
  const modalProduct = isInCart
    ? cartItems.find((item) => item.name === product.name)
    : product;

  return (
    <>
      <div className="bg-slate-50 shadow-xl p-4 m-4 rounded-xl cursor-pointer ">
        <div className="w-full  flex justify-center">
          <img
            className="mb-4 object-contain h-80 w-80 flex items-center justify-center "
            src={`${product.image}`}
            alt={`product-${product.image}`}
          />
        </div>
        <h2 className="text-base  font-semibold text-black mb-2 uppercase font-sans text-left ">
          {product.name}
        </h2>
        <div className="w-full h-1 border-2 border-cyan-950 my-4" />
        <div className="flex items-center gap-4">
          <p className="text-[#144b84] mb-2 text-base font-bold">Talla</p>
          <div className="py-4 px-4 shadow-xl  border-2 w-min mb-2 rounded-lg ">
            <span className="text-[#144b84] font-bold ">{product.size}</span>
          </div>
        </div>

        <p className="text-black mb-2 text-xl font-extrabold text-left">
          <span className="text-black font-light ">$ </span>
          {formatCurrency(product.price)}{' '}
        </p>

        <button
          className={` my-4  w-full  ${
            isInCart
              ? 'bg-gradient-to-r from-red-700 to-red-900'
              : 'bg-gradient-to-r from-cyan-800 to-sky-600'
          }  text-white px-6 py-4 rounded-xl  font-bold p-8`}
          onClick={() => setModalOpen(true)}
        >
          {isInCart ? 'Agregado' : 'Agregar'}
        </button>
      </div>
      <Modal isOpen={modalOpen} onClose={() => setModalOpen(false)}>
        <div className="w-full  flex justify-center">
          <img
            className="rounded-full mb-4 object-contain h-80 w-80 flex items-center justify-center "
            src={`${product.image}`}
            alt={`product-${product.image}`}
          />
        </div>
        <div className="flex-col justify-center  md:justify-between md:items-center">
          <p className="font-bold text-black"> {modalProduct?.count || 0} </p>
          <div>
            <h3 className="font-extrabold text-black">{product.name}</h3>
            <p className="text-black">{product.brand}</p>
          </div>
          <p className="font-extrabold text-sm text-black">
            ${product.price.toFixed(2)}
          </p>
          <div className="flex justify-center gap-8 py-8 w-full n  ">
            <button
              className="bg-[#4180ab] text-red rounded-full p-4"
              onClick={() => {
                if (!isInCart) {
                  addCartItem(modalProduct!);
                } else {
                  addCount(modalProduct!);
                }
              }}
            >
              <BsPlus />
            </button>
            <button
              className="bg-[#4180ab] text-red rounded-full p-4"
              onClick={() => {
                if (!modalProduct?.count || modalProduct?.count === 1)
                  removeCartItem(product);
                else removeCount(product);
              }}
            >
              <AiOutlineMinus />
            </button>
          </div>
        </div>
      </Modal>
    </>
  );
};

export default ProductCard;
