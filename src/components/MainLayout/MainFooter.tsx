import { Layout, Row, Typography } from 'antd';
import {
  WhatsAppOutlined,
  MailOutlined,
  PhoneOutlined,
} from '@ant-design/icons';

const { Footer } = Layout;

const MainFooter = () => {
  return (
    <Footer
      style={{
        position: 'sticky',
        bottom: 0,
      }}
    >
      <Row justify="space-between" align="middle">
        <div>Covans ©2024</div>
        <Row gutter={[8, 8]}>
          <a
            href="mailto:covansrental@gmail.com"
            target="_blank"
            style={{ marginRight: 20 }}
          >
            <MailOutlined style={{ fontSize: 32 }} />
          </a>

          <a
            href="tel:+5492901403225"
            target="_blank"
            style={{ marginRight: 20 }}
          >
            <PhoneOutlined style={{ fontSize: 32 }} />
          </a>
          <a
            href="https://wa.me/5492901403225"
            target="_blank"
            style={{ marginRight: 20 }}
          >
            <WhatsAppOutlined style={{ fontSize: 32, color: 'green' }} />
          </a>
        </Row>
      </Row>
    </Footer>
  );
};

export default MainFooter;
