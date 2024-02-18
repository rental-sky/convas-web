import React from 'react';
import Link from 'next/link';
import { Layout, Row, Col, Badge } from 'antd';
import { ShoppingCartOutlined } from '@ant-design/icons';

import './MainNav.less';
import useCartStore from '../../../store/cartStore';

const { Header } = Layout;

const MainNav = () => {
  const { totalItems } = useCartStore();

  return (
    <Header className="main-nav">
      <Row justify="space-between">
        <Col span={2}>
          <div className="left-nav-items">
            <Link href="/">
              <img
                src="/images/logo.png"
                alt="logo"
                style={{
                  width: 64,
                  height: 64,
                  cursor: 'pointer',
                }}
              />
            </Link>
          </div>
        </Col>
        <Col span={2} style={{ textAlign: 'right' }}>
          <Link href="/cart">
            <div>
              <Badge
                count={totalItems}
                style={{
                  backgroundColor: '#fff',
                  color: '#999',
                  boxShadow: '0 0 0 1px #d9d9d9 inset',
                }}
              >
                <ShoppingCartOutlined
                  style={{ fontSize: 25, cursor: 'pointer' }}
                />
              </Badge>
            </div>
          </Link>
        </Col>
      </Row>
    </Header>
  );
};

export default MainNav;
