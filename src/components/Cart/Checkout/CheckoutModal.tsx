import React, { useState } from 'react';
import {
  Card,
  Modal,
  Radio,
  Typography,
  Input,
  notification,
  Space,
} from 'antd';
import CheckoutList from './CheckoutList';

import useProductStore, { Product } from '../../../store/productStore';
import { RadioChangeEvent } from 'antd/lib/radio';
import useCartStore from '../../../store/cartStore';
import { getCartItemCount } from '../../../helpers';
import { CartContext } from '../../../contexts';

import {
  UserOutlined,
  HomeOutlined,
  PhoneOutlined,
  CalendarOutlined,
} from '@ant-design/icons';
import TextArea from 'antd/lib/input/TextArea';

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
    comments?: string;
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

  // Agregar los comentarios al mensaje
  if (contactInfo.comments) {
    message += `*Comentarios*\n`;
    message += `${contactInfo.comments}\n\n`;
  }

  message += `*Método de pago:* ${paymentMethod}\n\n`;
  message += `\n\nTotal: ${total}\n\n`;

  // Codificar el mensaje para que sea una URL válida para WhatsApp
  message = encodeURIComponent(message);

  // Crear la URL para abrir WhatsApp con el mensaje
  const whatsappURL = `https://api.whatsapp.com/send?phone=${5492901403225}&text=${message}`;

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

  const [formData, setformData] = useState({
    name: '',
    address: '',
    date: '',
    time: '',
    phone: '',
    comments: '',
  });

  const onOk = () => {
    if (
      !formData.name ||
      !formData.address ||
      !formData.date ||
      !formData.time ||
      !formData.phone
    ) {
      notification.error({ message: 'Por favor completa todos los campos' });
      return;
    }

    const url = generateWhatsAppMessage(
      cartProducts,
      paymentMethod,
      items,
      {
        ...formData,
      },
      totalPrice
    );
    window.open(url, '_blank');
    hideModal();
  };

  const onSelectPaymentMethod = (p: RadioChangeEvent) => {
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

      <Radio.Group onChange={onSelectPaymentMethod} value={paymentMethod}>
        <Space direction="vertical">
          {optionsWithDisabled.map((option) => (
            <Radio
              key={option.value}
              value={option.value}
              disabled={option.disabled}
            >
              {option.label}
              {option.value === 'online' && option.disabled && (
                <Input style={{ width: 100, marginLeft: 10 }} />
              )}
            </Radio>
          ))}
        </Space>
      </Radio.Group>
      <Card>
        <Typography.Text>Datos de entrega</Typography.Text>

        <Input
          size="small"
          placeholder="Direccion"
          prefix={<HomeOutlined />}
          onChange={(e) => {
            setformData({ ...formData, address: e.target.value });
          }}
        />
        <div style={{ height: 10 }}></div>
        <Input
          size="small"
          placeholder="Persona a recibir"
          prefix={<UserOutlined />}
          onChange={(e) => {
            setformData({ ...formData, name: e.target.value });
          }}
        />
        <div style={{ height: 10 }}></div>
        <Input
          size="small"
          placeholder="Numero de contacto"
          prefix={<PhoneOutlined />}
          onChange={(e) => {
            setformData({ ...formData, phone: e.target.value });
          }}
        />
        <div style={{ height: 10 }}></div>
        <Typography.Text>Fecha y hora de entrega</Typography.Text>
        <Input
          size="small"
          type="date"
          prefix={<CalendarOutlined />}
          onChange={(e) => {
            setformData({ ...formData, date: e.target.value });
          }}
        />
        <div style={{ height: 10 }}></div>
        <Input
          size="small"
          type="time"
          prefix={<CalendarOutlined />}
          onChange={(e) => {
            setformData({ ...formData, time: e.target.value });
          }}
        />
        <div style={{ height: 10 }}></div>
        <TextArea
          rows={4}
          placeholder={`Si llevaste tabla comentanos pie usas Izquierdo o derecho y tu altura. \nSi son varias personas, comenta el pie y altura de cada uno.`}
          maxLength={6}
          onChange={(e) => {
            setformData({ ...formData, comments: e.target.value });
          }}
        />
      </Card>
    </Modal>
  );
};

export default CheckoutSummary;
