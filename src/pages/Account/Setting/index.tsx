import { PageContainer } from '@ant-design/pro-components';
import '@umijs/max';
import { Flex, Input, Space, Typography } from 'antd';
import React from 'react';
import './index.less';
const { Text } = Typography;

const AccountSetting: React.FC = () => {
  return (
    <PageContainer>
      <div>
        <Flex vertical gap={16}>
          <Space>
            <Text>姓名</Text>
            <Input width={200} />
          </Space>
          <Space>
            <Text>学号</Text>
            <Input />
          </Space>
          <Space>
            <Text>证件</Text>
            <Input />
          </Space>
          <Space>
            <Text>年级</Text>
            <Input />
          </Space>
          <Space>
            <Text>学院</Text>
            <Input />
          </Space>
          <Space>
            <Text>专业</Text>
            <Input />
          </Space>
          <Space>
            <Text>学院</Text>
            <Input />
          </Space>
        </Flex>
      </div>
    </PageContainer>
  );
};
export default AccountSetting;
