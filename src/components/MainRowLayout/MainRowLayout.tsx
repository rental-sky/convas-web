import React from 'react';
import { Layout, Row, Typography } from 'antd';

const { Text, Title, Paragraph } = Typography;

interface MainRowLayoutProps {
  children: React.ReactNode;
  rowClassName?: string;
  seeMore?: () => void;
}

const MainRowLayout: React.FC<MainRowLayoutProps> = ({
  children,
  rowClassName,
  seeMore,
}) => {
  return (
    <Layout className="boxed-width">
      {seeMore ? (
        <Row justify="end">
          <a onClick={seeMore}>
            <Text
              style={{
                fontFamily: 'monospace',
                display: 'flex',
                fontSize: '1em',
                textAlign: 'end',
                paddingBottom: '1rem',
                color: '#1890ff',
              }}
            >
              Ver Todos
            </Text>
          </a>
        </Row>
      ) : null}

      <Row className={rowClassName} gutter={[24, 24]}>
        {children}
      </Row>
    </Layout>
  );
};

export default MainRowLayout;
