import React, { useState } from 'react';
import { Card, Modal, Radio } from 'antd';
import CheckoutList from './CheckoutList';

import useProductStore, { Product } from '../../../store/productStore';
import { RadioChangeEvent } from 'antd/lib/radio';
import useCartStore from '../../../store/cartStore';
import { getCartItemCount } from '../../../helpers';
import { CartContext } from '../../../contexts';

interface CheckoutSummaryProps {
  visible: boolean;
  hideModal: () => void;
}

const generateWhatsAppMessage = (
  cartItems: Product[],
  paymentMethod: string,
  items: any,
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

  cartItems.map((product) => {
    const { id, price } = product;

    const product_id = `${id}`;
    const totalItemCount = getCartItemCount(items, product_id);

    const subtotal = parseFloat(price.replace(/,/g, '')) * totalItemCount;

    // Agregar los productos al mensaje
    message += `*${product.name}*\n`;
    message += `Cantidad: ${totalItemCount}\n`;
    message += `Subtotal: ${subtotal}\n\n`;

    // Codificar el mensaje para que sea una URL válida para WhatsApp
  });

  // Agregar los detalles del contacto al mensaje
  message += `*Datos de contacto*\n`;
  message += `Nombre: ${contactInfo.name}\n`;
  message += `Dirección: ${contactInfo.address}\n`;
  message += `Fecha: ${contactInfo.date}\n`;
  message += `Hora: ${contactInfo.time}\n`;
  message += `Teléfono: ${contactInfo.phone}\n\n`;

  message += `*Método de pago:* ${paymentMethod}\n\n`;
  message += `\n\nTotal: ${total}\n\n`;

  // Codificar el mensaje para que sea una URL válida para WhatsApp
  message = encodeURIComponent(message);

  // Crear la URL para abrir WhatsApp con el mensaje
  const whatsappURL = `https://api.whatsapp.com/send?phone=${541151528465}&text=${message}`;

  return whatsappURL;
};

const optionsWithDisabled = [
  {
    label: 'Efectivo',
    value: 'efectivo',
  },
  {
    label: 'Transferencia',
    value: 'Transferencia',
  },
  {
    label: 'Pago con tarjeta',
    value: 'online',
    disabled: true,
  },
];

const CheckoutSummary: React.FC<CheckoutSummaryProps> = ({
  visible,
  hideModal,
}) => {
  const { cartProducts } = useProductStore();
  const [] = useCartStore((s) => [s.items]);
  const { items } = useCartStore();
  const { totalPrice } = React.useContext(CartContext);

  const [paymentMethod, setPaymentMethod] = useState('efectivo');

  const onOk = () => {
    const url = generateWhatsAppMessage(
      cartProducts,
      paymentMethod,
      items,
      {
        name: 'name',
        address: 'address',
        date: 'date',
        time: 'time',
        phone: 'phone',
      },
      totalPrice
    );
    window.open(url, '_blank');
    hideModal();
  };

  const onChange4 = (p: RadioChangeEvent) => {
    setPaymentMethod(p.target.value);
  };

  return (
    <Modal
      title="Checkout Summary"
      visible={visible}
      onOk={onOk}
      onCancel={hideModal}
      closable={false}
      width={750}
    >
      <CheckoutList products={cartProducts} />
      <Card>
        <Radio.Group
          options={optionsWithDisabled}
          onChange={onChange4}
          value={paymentMethod}
          buttonStyle="solid"
        />
      </Card>
    </Modal>
  );
};

export default CheckoutSummary;
