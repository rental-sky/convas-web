import { useState } from 'react';
import { Layout, formatCurrency } from '../layout/MainLayout';
import useAppStore, { CartItem } from '../store/useAppStore';
import {
  AiOutlineShopping,
  AiFillDelete,
  AiOutlineMinus,
} from 'react-icons/ai';
import { BsPlus } from 'react-icons/bs';

const PHONE = '5491137629311';

const generateWhatsAppMessage = (
  cartItems: CartItem[],
  contactInfo: {
    name: string;
    address: string;
    date: string;
    time: string;
    phone: string;
    height?: string;
    weight?: string;
  },
  total: number
) => {
  // Generar el mensaje inicial con los detalles del pedido
  let message = `¡Hola! Mi pedido es:\n\n`;

  cartItems.forEach((item, index) => {
    message += `Articulo ${index + 1}:
Nombre: ${item.name}
Marca: ${item.brand}
Precio: ${item.price.toFixed(2)} ARS
Cantidad: ${item.count || 1}\n\n`;
  });

  // Agregar la información de contacto
  message += `Información de contacto:
Nombre: ${contactInfo.name}
Dirección: ${contactInfo.address}
Fecha: ${contactInfo.date}
Hora: ${contactInfo.time}
Teléfono: ${contactInfo.phone}`;

  message += `\n\nTotal: ${formatCurrency(total)}\n\n`;

  // Codificar el mensaje para que sea una URL válida para WhatsApp
  message = encodeURIComponent(message);

  // Crear la URL para abrir WhatsApp con el mensaje
  const whatsappURL = `https://api.whatsapp.com/send?phone=${PHONE}&text=${message}`;

  return whatsappURL;
};

const Cart = () => {
  const { cartItems, addCount, removeCount, removeCartItem, total } =
    useAppStore();

  const [formData, setFormData] = useState({
    name: '',
    address: '',
    date: '',
    time: '',
    phone: '',
    height: '',
    weight: '',
  });

  const { name, address, date, time, phone } = formData;

  const isFormValid =
    name && address && date && time && phone && cartItems.length > 0;

  const handleInputChange = (e: { target: { name: any; value: any } }) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = (e: { preventDefault: () => void }) => {
    e.preventDefault();
    const url = generateWhatsAppMessage(cartItems, formData, total);
    window.open(url, '_blank');
  };

  return (
    <Layout>
      <div className="md:flex justify-center mt-10">
        <div className="w-screen h-full p-8  md:w-1/2 ">
          <h2 className="text-xl font-semibold mb-4">Lista de articulos</h2>
          <ul>
            {cartItems.map((product, index) => (
              <li key={index} className="mb-4 border-2 rounded-xl p-4 ">
                <div className="flex-col justify-center  md:flex md:flex-row md:justify-between md:items-center">
                  <AiOutlineShopping className="hidden md:flex  text-4xl" />
                  <p className="font-bold"> {product?.count || 1} </p>
                  <div>
                    <h3 className="font-extrabold">{product.name}</h3>
                    <p>{product.brand}</p>
                  </div>
                  <p className="font-extrabold text-sm">
                    ${product.price.toFixed(2)}
                  </p>
                  <div className="flex justify-between  mt-4 md:mt-0  md:justify-end gap-2 ">
                    <button
                      className="bg-[#4180ab] text-red rounded-full p-2"
                      onClick={() => {
                        addCount(product);
                      }}
                    >
                      <BsPlus />
                    </button>
                    <button
                      className="bg-[#4180ab] text-red rounded-full p-2"
                      onClick={() => {
                        if (!product?.count || product?.count === 1)
                          removeCartItem(product);
                        else removeCount(product);
                      }}
                    >
                      <AiOutlineMinus />
                    </button>
                    <button
                      className="bg-[#4180ab] text-red rounded-full p-2"
                      onClick={() => {
                        removeCartItem(product);
                      }}
                    >
                      <AiFillDelete />
                    </button>
                  </div>
                </div>
              </li>
            ))}
          </ul>
        </div>

        {/* Columna del formulario */}
        <div className="w-screen p-8  md:w-1/2  ">
          <form onSubmit={handleSubmit}>
            <div className="mb-4 flex flex-col">
              <label htmlFor="name" className="mb-2">
                Nombre y Apellido
              </label>
              <input
                type="text"
                id="name"
                name="name"
                value={name}
                onChange={handleInputChange}
                className="w-full p-2 border-2 rounded bg-[#8ab3cf] text-white"
              />
            </div>
            <div className="mb-4">
              <label htmlFor="address" className="mb-2">
                Dirección
              </label>
              <input
                type="text"
                id="address"
                name="address"
                value={address}
                onChange={handleInputChange}
                className="w-full p-2 border-2 rounded bg-[#8ab3cf] text-white"
              />
            </div>
            <div className="mb-4">
              <label htmlFor="date" className="mb-2">
                Fecha
              </label>
              <input
                type="date"
                id="date"
                name="date"
                value={date}
                onChange={handleInputChange}
                className="w-full p-2 border-2 rounded bg-[#8ab3cf] text-white"
              />
            </div>
            <div className="mb-4">
              <label htmlFor="time" className="mb-2">
                Hora
              </label>
              <input
                type="time"
                id="time"
                name="time"
                value={time}
                onChange={handleInputChange}
                className="w-full p-2 border-2 rounded bg-[#8ab3cf] text-white"
              />
            </div>
            <div className="mb-4">
              <label htmlFor="phone" className="mb-2">
                Número de Teléfono{' '}
              </label>
              <input
                type="tel"
                id="phone"
                name="phone"
                value={phone}
                onChange={handleInputChange}
                className="w-full p-2 border-2 rounded bg-[#8ab3cf] text-white"
              />
            </div>

            <div className="mb-4">
              <label htmlFor="height" className="mb-2">
                Altura
              </label>
              <input
                type="number"
                id="height"
                name="height"
                value={formData.height}
                onChange={handleInputChange}
                className="w-full p-2 border-2 rounded bg-[#8ab3cf] text-white"
              />
            </div>

            <div className="mb-4">
              <label htmlFor="weight" className="mb-2">
                Peso
              </label>
              <input
                type="number"
                id="weight"
                name="weight"
                value={formData.weight}
                onChange={handleInputChange}
                className="w-full p-2 border-2 rounded bg-[#8ab3cf] text-white"
              />
            </div>

            <p className="text-lg font-extrabold  mb-4 mt-4 border-4  rounded-md p-3">
              Total: {formatCurrency(total)}{' '}
            </p>
            <button
              type="submit"
              disabled={!isFormValid}
              className="bg-[#4180ab] w-full  text-white py-2 px-4 rounded hover:bg-blue-600 disabled:bg-slate-400"
            >
              Enviar
            </button>
          </form>
        </div>
      </div>
    </Layout>
  );
};

export default Cart;
