import React from 'react';
import { notification, Button } from 'antd';
import { SmileOutlined } from '@ant-design/icons';
import Link from 'next/link';

const cartNotification = () => {
  const key = `open${Date.now()}`;
  const btn = (
    <Link href="/cart">
      <Button
        type="primary"
        size="small"
        onClick={() => notification.close(key)}
      >
        Ir al carrito
      </Button>
    </Link>
  );

  notification.open({
    message: 'Añadido al carrito',
    description: 'El producto ha sido añadido al carrito de compras.',
    icon: <SmileOutlined style={{ color: '#108ee9' }} />,
    top: 50,
    duration: 2,
    btn,
    key,
  });
};

export default cartNotification;
