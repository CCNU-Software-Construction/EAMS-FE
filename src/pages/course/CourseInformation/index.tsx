import { ContainerOutlined, DesktopOutlined, PieChartOutlined } from '@ant-design/icons';
import { PageContainer, ProCard } from '@ant-design/pro-components';
import type { MenuProps } from 'antd';
import { Menu } from 'antd';

type MenuItem = Required<MenuProps>['items'][number];

import CourseNode from '@/pages/course/CourseInformation/Components/CourseNode';
import React, { useCallback } from 'react';
import {
  addEdge,
  Background,
  Controls,
  MiniMap,
  NodeResizer,
  NodeToolbar,
  Panel,
  ReactFlow,
  useEdgesState,
  useNodesState,
} from 'reactflow';
import 'reactflow/dist/style.css';

const initialNodes = [
  {
    id: '0',
    type: 'courseNode',
    position: { x: 400, y: 250 },
    data: {
      text: '操作系统原理',
      node: { left: 'source', right: 'source' },
      links: [
        { type: 'pdf', link: 'baidu.com', text: '《操作系统原理设计》实验.pdf' },
        { type: 'task', link: 'baidu.com', text: '实验报告.doc' },
      ],
    },
  },
  {
    id: '1',
    type: 'courseNode',
    position: { x: 100, y: 100 },
    data: {
      text: '第一章 操作系统概述',
      node: { left: '', right: 'target' },
      links: [{ type: 'pdf', link: 'baidu.com', text: '1_操作系统概述.pdf' }],
    },
  },
  {
    id: '2',
    type: 'courseNode',
    position: { x: 100, y: 250 },
    data: {
      text: '第二章 操作系统的硬件环境',
      node: { left: '', right: 'target' },
      links: [{ type: 'pdf', link: 'baidu.com', text: '2_硬件环境.pdf' }],
    },
  },
  {
    id: '3',
    type: 'courseNode',
    position: { x: 100, y: 400 },
    data: {
      text: '第三章 用户接口与作业管理',
      node: { left: '', right: 'target' },
      links: [
        { type: 'pdf', link: 'baidu.com', text: '3_用户接口与作业管理.pdf' },
        { type: 'task', link: 'baidu.com', text: '实验一的实验报告' },
      ],
    },
  },
  // 右边的三个节点
  {
    id: '4',
    type: 'courseNode',
    position: { x: 700, y: 100 },
    data: {
      text: '第四章 进程管理',
      node: { left: 'target', right: '' },
      links: [
        { type: 'pdf', link: 'baidu.com', text: '4_1_进程模型.pdf' },
        { type: 'pdf', link: 'baidu.com', text: '4_2_线程模型.pdf' },
        { type: 'pdf', link: 'baidu.com', text: '4_3_进程调度.pdf' },
        { type: 'pdf', link: 'baidu.com', text: '4_4_同步与互斥.pdf' },
        { type: 'pdf', link: 'baidu.com', text: '4_5_进程通信.pdf' },
        { type: 'task', link: 'baidu.com', text: '实验二的实验报告' },
      ],
    },
  },
  {
    id: '5',
    type: 'courseNode',
    position: { x: 700, y: 250 },
    data: {
      text: '第五章 存储管理',
      node: { left: 'target', right: '' },
      links: [
        { type: 'pdf', link: 'baidu.com', text: '5_1_基本存储管理方案.pdf' },
        { type: 'pdf', link: 'baidu.com', text: '5_2_虚拟存储管理.pdf' },
        { type: 'task', link: 'baidu.com', text: '实验三的实验报告' },
        { type: 'task', link: 'baidu.com', text: '实验四的实验报告' },
      ],
    },
  },
  {
    id: '6',
    type: 'courseNode',
    position: { x: 700, y: 400 },
    data: {
      text: '第六章 文件管理',
      node: { left: 'target', right: '' },
      links: [{ type: 'pdf', link: 'baidu.com', text: '6_文件管理.pdf' }],
    },
  },
];
// type CourseNode = {
//   id: string;
//   type: string;
//   position: { x: number; y: number };
//   data: {
//     text: string;
//     node: {
//       left: 'source' | 'target' | '';
//       right: 'source' | 'target' | '';
//     };
//     links: {
//       type: 'pdf' | 'doc' | 'task' | 'ppt';
//       link: string;
//       text: string;
//     }[];
//   };
// };
const initialEdges = [
  { id: 'e0-1', source: '0', target: '1', sourceHandle: 'left', targetHandle: 'right' },
  { id: 'e0-2', source: '0', target: '2', sourceHandle: 'left', targetHandle: 'right' },
  { id: 'e0-3', source: '0', target: '3', sourceHandle: 'left', targetHandle: 'right' },
  { id: 'e0-4', source: '0', target: '4', sourceHandle: 'right', targetHandle: 'left' },
  { id: 'e0-5', source: '0', target: '5', sourceHandle: 'right', targetHandle: 'left' },
  { id: 'e0-6', source: '0', target: '6', sourceHandle: 'right', targetHandle: 'left' },
];
// type Edge = {
//   id: string;
//   source: string;
//   target: string;
//   sourceHandle: 'left' | 'right';
//   targetHandle: 'left' | 'right';
// };
const nodeTypes = {
  courseNode: CourseNode,
};

const CourseInformation = () => {
  function getItem(
    label: React.ReactNode,
    key: React.Key,
    icon?: React.ReactNode,
    children?: MenuItem[],
    type?: 'group',
  ): MenuItem {
    return {
      key,
      icon,
      children,
      label,
      type,
    } as MenuItem;
  }

  const items: MenuItem[] = [
    getItem('Option 1', '1', <PieChartOutlined />),
    getItem('Option 2', '2', <DesktopOutlined />),
    getItem('Option 3', '3', <ContainerOutlined />),
  ];

  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  const [nodes, setNodes, onNodesChange] = useNodesState(initialNodes);
  const [edges, setEdges, onEdgesChange] = useEdgesState(initialEdges);

  const onConnect = useCallback((params) => setEdges((eds) => addEdge(params, eds)), [setEdges]);

  return (
    <PageContainer
      ghost
      header={{
        title: '页面标题',
        breadcrumb: {
          items: [
            {
              path: '',
              title: '一级页面',
            },
            {
              path: '',
              title: '二级页面',
            },
            {
              path: '',
              title: '当前页面',
            },
          ],
        },
      }}
      // content={
      //   <Descriptions column={2} style={{marginBlockEnd: -16}}>
      //     <Descriptions.Item label="创建人">曲丽丽</Descriptions.Item>
      //     <Descriptions.Item label="关联表单">
      //       <a>421421</a>
      //     </Descriptions.Item>
      //     <Descriptions.Item label="创建时间">2017-01-10</Descriptions.Item>
      //     <Descriptions.Item label="单据备注">
      //       浙江省杭州市西湖区工专路
      //     </Descriptions.Item>
      //   </Descriptions>
      // }
    >
      <ProCard direction="column" ghost gutter={[0, 16]}>
        <ProCard gutter={16} ghost style={{ height: '65vh' }}>
          <ProCard colSpan={4} style={{ height: '65vh' }}>
            <Menu
              defaultSelectedKeys={['1']}
              defaultOpenKeys={['sub1']}
              mode="inline"
              // inlineCollapsed={collapsed}
              items={items}
            />
          </ProCard>
          <ProCard colSpan={20} style={{ width: '100%', height: '65vh' }}>
            <div style={{ width: '100%', height: '100%' }}>
              <ReactFlow
                nodes={nodes}
                edges={edges}
                onNodesChange={onNodesChange}
                onEdgesChange={onEdgesChange}
                onConnect={onConnect}
                nodeTypes={nodeTypes}
              >
                <Controls />
                <MiniMap />
                <Background variant="dots" gap={12} size={1} />
                <Panel />
                <NodeToolbar />
                <NodeResizer />
              </ReactFlow>
            </div>
          </ProCard>
        </ProCard>
      </ProCard>
    </PageContainer>
  );
};

export default CourseInformation;
