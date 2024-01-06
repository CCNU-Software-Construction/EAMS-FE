import {FolderOutlined} from '@ant-design/icons';
import {ModalForm, PageContainer, ProCard, ProFormText, ProFormUploadButton} from '@ant-design/pro-components';
import {Button, MenuProps, message, Modal} from 'antd';
import {Menu} from 'antd';

type MenuItem = Required<MenuProps>['items'][number];

import CourseNode, {CourseData} from '@/pages/course/EditCourseInformation/Components/CourseNode';
import React, {useCallback, useState} from 'react';
import {
  addEdge,
  Background,
  Controls,
  MiniMap,
  NodeProps,
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
    position: {x: 400, y: 250},
    data: {
      text: '操作系统原理',
      node: {left: 'source', right: 'source'},
      links: [
        {
          type: 'pdf',
          link: 'https://vip.ow365.cn/?i=29353&ssl=1&furl=https://oss.ai-augmented.com/oss-ccnu/jx/5893631503958605119/6283627415218480232?OSSAccessKeyId=LTAIOOB8tIOg2Q4O&Expires=1702473084736&Signature=rd9KUWPLwmXUr7NmvOVbgjTrUJY%3D&response-content-disposition=filename=%226283627415218480232_6283627415218480232.pdf%22;filename*=utf-8%27%276283627415218480232_6283627415218480232.pdf&response-content-type=application/pdf',
          text: '《操作系统原理设计》实验.pdf'
        },
        {
          type: 'doc',
          link: 'https://vip.ow365.cn/?i=29353&ssl=1&furl=https://oss.ai-augmented.com/oss-ccnu/jx/5893631503958605119/6284861299562130736?OSSAccessKeyId=LTAIOOB8tIOg2Q4O&Expires=1702473101303&Signature=Rv0KNCW%2FXWG5hE0fb1wMyTzKOXg%3D&response-content-disposition=filename=%226284861299562130736_6284861299562130736.doc%22;filename*=utf-8%27%276284861299562130736_6284861299562130736.doc&response-content-type=application/msword',
          text: '实验报告.doc'
        },
      ],
    },
  },
  {
    id: '1',
    type: 'courseNode',
    position: {x: 100, y: 100},
    data: {
      text: '第一章 操作系统概述',
      node: {left: '', right: 'target'},
      links: [{
        type: 'pdf',
        link: 'https://vip.ow365.cn/?i=29353&ssl=1&furl=https://oss.ai-augmented.com/oss-ccnu/jx/5893631503958605119/6268942635294059523?OSSAccessKeyId=LTAIOOB8tIOg2Q4O&Expires=1702472712885&Signature=2o%2Fy90hHMKH5XmX%2FJZ%2Fdm%2B1MTYo%3D&response-content-disposition=filename=%226268943286174502892_6268943286174502892.pdf%22;filename*=utf-8%27%276268943286174502892_6268943286174502892.pdf&response-content-type=application/pdf',
        text: '1_操作系统概述.pdf'
      }],
    },
  },
  {
    id: '2',
    type: 'courseNode',
    position: {x: 100, y: 250},
    data: {
      text: '第二章 操作系统的硬件环境',
      node: {left: '', right: 'target'},
      links: [{
        type: 'pdf',
        link: 'https://vip.ow365.cn/?i=29353&ssl=1&furl=https://oss.ai-augmented.com/oss-ccnu/jx/5893631503958605119/6272876566942874684?OSSAccessKeyId=LTAIOOB8tIOg2Q4O&Expires=1702472787800&Signature=KIQLlOsBeuEUUxlVnqUf2sDQHSk%3D&response-content-disposition=filename=%226272876566942874684_6272876566942874684.pdf%22;filename*=utf-8%27%276272876566942874684_6272876566942874684.pdf&response-content-type=application/pdf',
        text: '2_硬件环境.pdf'
      }],
    },
  },
  {
    id: '3',
    type: 'courseNode',
    position: {x: 100, y: 400},
    data: {
      text: '第三章 用户接口与作业管理',
      node: {left: '', right: 'target'},
      links: [
        {
          type: 'pdf',
          link: 'https://vip.ow365.cn/?i=29353&ssl=1&furl=https://oss.ai-augmented.com/oss-ccnu/jx/5893631503958605119/6279075753749413655?OSSAccessKeyId=LTAIOOB8tIOg2Q4O&Expires=1702472805734&Signature=i%2Bf7P7Q6G%2BdkIQr%2BMazDCLfcSv8%3D&response-content-disposition=filename=%226279075753749413655_6279075753749413655.pdf%22;filename*=utf-8%27%276279075753749413655_6279075753749413655.pdf&response-content-type=application/pdf',
          text: '3_用户接口与作业管理.pdf'
        },
        {type: 'task', link: 'baidu.com', text: '实验一的实验报告'},
      ],
    },
  },
  // 右边的三个节点
  {
    id: '4',
    type: 'courseNode',
    position: {x: 700, y: 100},
    data: {
      text: '第四章 进程管理',
      node: {left: 'target', right: ''},
      links: [
        {
          type: 'pdf',
          link: 'https://vip.ow365.cn/?i=29353&ssl=1&furl=https://oss.ai-augmented.com/oss-ccnu/jx/5893631503958605119/6291414566039505968?OSSAccessKeyId=LTAIOOB8tIOg2Q4O&Expires=1702472838754&Signature=zdDx89zJZux0vE82ULSV3RhQiNg%3D&response-content-disposition=filename=%226291414566039505968_6291414566039505968.pdf%22;filename*=utf-8%27%276291414566039505968_6291414566039505968.pdf&response-content-type=application/pdf',
          text: '4_1_进程模型.pdf'
        },
        {
          type: 'pdf',
          link: 'https://vip.ow365.cn/?i=29353&ssl=1&furl=https://oss.ai-augmented.com/oss-ccnu/jx/5893631503958605119/6297938635010370595?OSSAccessKeyId=LTAIOOB8tIOg2Q4O&Expires=1702472898930&Signature=oNNFVbRxr%2FXi8ggfx3yhIJq6oXM%3D&response-content-disposition=filename=%226297938635010370595_6297938635010370595.pdf%22;filename*=utf-8%27%276297938635010370595_6297938635010370595.pdf&response-content-type=application/pdf',
          text: '4_2_线程模型.pdf'
        },
        {
          type: 'pdf',
          link: 'https://vip.ow365.cn/?i=29353&ssl=1&furl=https://oss.ai-augmented.com/oss-ccnu/jx/5893631503958605119/6303138570739697102?OSSAccessKeyId=LTAIOOB8tIOg2Q4O&Expires=1702472914977&Signature=j5A6uYX853rxhyCbTGnBodZmaxQ%3D&response-content-disposition=filename=%226303138570739697102_6303138570739697102.pdf%22;filename*=utf-8%27%276303138570739697102_6303138570739697102.pdf&response-content-type=application/pdf',
          text: '4_3_进程调度.pdf'
        },
        {
          type: 'pdf',
          link: 'https://vip.ow365.cn/?i=29353&ssl=1&furl=https://oss.ai-augmented.com/oss-ccnu/jx/5893631503958605119/6305802258521040624?OSSAccessKeyId=LTAIOOB8tIOg2Q4O&Expires=1702472932118&Signature=9S719GmOAS6iAPWwiO8ZIHhrdkQ%3D&response-content-disposition=filename=%226305802258521040624_6305802258521040624.pdf%22;filename*=utf-8%27%276305802258521040624_6305802258521040624.pdf&response-content-type=application/pdf',
          text: '4_4_同步与互斥.pdf'
        },
        {
          type: 'pdf',
          link: 'https://vip.ow365.cn/?i=29353&ssl=1&furl=https://oss.ai-augmented.com/oss-ccnu/jx/5893631503958605119/6308252530929361932?OSSAccessKeyId=LTAIOOB8tIOg2Q4O&Expires=1702472947224&Signature=tm%2FC81vXoOiF7ExzR4fy%2BL6zvUo%3D&response-content-disposition=filename=%226308252530929361932_6308252530929361932.pdf%22;filename*=utf-8%27%276308252530929361932_6308252530929361932.pdf&response-content-type=application/pdf',
          text: '4_5_进程通信.pdf'
        },
        {type: 'task', link: 'baidu.com', text: '实验二的实验报告'},
      ],
    },
  },
  {
    id: '5',
    type: 'courseNode',
    position: {x: 700, y: 250},
    data: {
      text: '第五章 存储管理',
      node: {left: 'target', right: ''},
      links: [
        {
          type: 'pdf',
          link: 'https://vip.ow365.cn/?i=29353&ssl=1&furl=https://oss.ai-augmented.com/oss-ccnu/jx/5893631503958605119/6317426102520251950?OSSAccessKeyId=LTAIOOB8tIOg2Q4O&Expires=1702472962843&Signature=1XjxAY0pqeOzGNWiS4MJnt2%2F2Xk%3D&response-content-disposition=filename=%226317426102520251950_6317426102520251950.pdf%22;filename*=utf-8%27%276317426102520251950_6317426102520251950.pdf&response-content-type=application/pdf',
          text: '5_1_基本存储管理方案.pdf'
        },
        {
          type: 'pdf',
          link: 'https://vip.ow365.cn/?i=29353&ssl=1&furl=https://oss.ai-augmented.com/oss-ccnu/jx/5893631503958605119/6325845707072789680?OSSAccessKeyId=LTAIOOB8tIOg2Q4O&Expires=1702472977223&Signature=UlxCau8AmoaMzJqMvI3L1sXOMes%3D&response-content-disposition=filename=%226325845707072789680_6325845707072789680.pdf%22;filename*=utf-8%27%276325845707072789680_6325845707072789680.pdf&response-content-type=application/pdf',
          text: '5_2_虚拟存储管理.pdf'
        },
        {type: 'task', link: 'baidu.com', text: '实验三的实验报告'},
        {type: 'task', link: 'baidu.com', text: '实验四的实验报告'},
      ],
    },
  },
  // {
  //   id: '6',
  //   type: 'courseNode',
  //   position: {x: 700, y: 400},
  //   data: {
  //     text: '第六章 文件管理',
  //     node: {left: 'target', right: ''},
  //     links: [{
  //       type: 'pdf',
  //       link: 'https://vip.ow365.cn/?i=29353&ssl=1&furl=https://oss.ai-augmented.com/oss-ccnu/jx/5893631503958605119/6329450395370313692?OSSAccessKeyId=LTAIOOB8tIOg2Q4O&Expires=1702472992862&Signature=Yv8cbCG%2FRvK3tDMepONBn4E8%2Fz8%3D&response-content-disposition=filename=%226329450395370313692_6329450395370313692.pdf%22;filename*=utf-8%27%276329450395370313692_6329450395370313692.pdf&response-content-type=application/pdf',
  //       text: '6_文件管理.pdf'
  //     }],
  //   },
  // },
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
  {id: 'e0-1', source: '0', target: '1', sourceHandle: 'left', targetHandle: 'right'},
  {id: 'e0-2', source: '0', target: '2', sourceHandle: 'left', targetHandle: 'right'},
  {id: 'e0-3', source: '0', target: '3', sourceHandle: 'left', targetHandle: 'right'},
  {id: 'e0-4', source: '0', target: '4', sourceHandle: 'right', targetHandle: 'left'},
  {id: 'e0-5', source: '0', target: '5', sourceHandle: 'right', targetHandle: 'left'},
  // {id: 'e0-6', source: '0', target: '6', sourceHandle: 'right', targetHandle: 'left'},
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
  const [nodes, setNodes, onNodesChange] = useNodesState(initialNodes);
  const [edges, setEdges, onEdgesChange] = useEdgesState(initialEdges);

  const onConnect = useCallback((params) => setEdges((eds) => addEdge(params, eds)), [setEdges]);


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
    getItem('第一章 操作系统概述', '1', <FolderOutlined/>),
    getItem('第二章 操作系统的硬件环境', '2', <FolderOutlined/>),
    getItem('第三章 用户接口与作业管理', '3', <FolderOutlined/>),
    getItem('第四章 进程管理', '4', <FolderOutlined/>),
    getItem('第五章 存储管理', '5', <FolderOutlined/>),
    getItem('第六章 文件管理', '6', <FolderOutlined/>),
  ];


  return (
    <PageContainer
      ghost
      header={{
        title: '操作系统',
      }}
    >
      <ProCard direction="column" ghost gutter={[0, 16]}>
        <ProCard gutter={16} ghost style={{height: '65vh'}}>
          <ProCard colSpan={3} style={{height: '65vh'}}>
            <ModalForm<{
              name: string;
              company: string;
            }>
              title="新建节点"
              trigger={
                <Button type="primary">
                  新建节点
                </Button>
              }
              // form={form}
              autoFocusFirstInput
              modalProps={{
                destroyOnClose: true,
                onCancel: () => console.log('run'),
              }}
              submitTimeout={2000}
              onFinish={async (values) => {
                await new Promise((resolve) => {
                  setTimeout(() => {
                    setNodes((node) => [...node,
                      {
                        id: '6',
                        type: 'courseNode',
                        position: {x: 900, y: 400},
                        data: {
                          text: '第六章 文件管理',
                          node: {left: 'target', right: ''},
                          links: [{
                            type: 'pdf',
                            link: 'https://vip.ow365.cn/?i=29353&ssl=1&furl=https://oss.ai-augmented.com/oss-ccnu/jx/5893631503958605119/6329450395370313692?OSSAccessKeyId=LTAIOOB8tIOg2Q4O&Expires=1702472992862&Signature=Yv8cbCG%2FRvK3tDMepONBn4E8%2Fz8%3D&response-content-disposition=filename=%226329450395370313692_6329450395370313692.pdf%22;filename*=utf-8%27%276329450395370313692_6329450395370313692.pdf&response-content-type=application/pdf',
                            text: '6_文件管理.pdf'
                          }],
                        },
                      },
                    ])
                    resolve(true);
                  }, 500);
                });
                console.log(values.name);
                message.success('提交成功');
                return true;
              }}
            >
              <ProFormText
                width="md"
                name="name"
                label="节点名称"
                // tooltip="最长为 24 位"
                placeholder="请输入名称"
              />
              <ProFormUploadButton
                name="上传文件"
                label="Upload"
                max={9}
                fieldProps={{
                  name: 'file',
                }}
                // action="/upload.do"
              />
            </ModalForm>
          </ProCard>
          <ProCard colSpan={21} style={{width: '100%', height: '65vh'}}>
            <div style={{width: '100%', height: '100%'}}>
              <ReactFlow
                nodes={nodes}
                edges={edges}
                onNodesChange={onNodesChange}
                onEdgesChange={onEdgesChange}
                onConnect={onConnect}
                nodeTypes={nodeTypes}
              >
                <Controls/>
                <MiniMap/>
                <Background variant="dots" gap={12} size={1}/>
                <Panel/>
                <NodeToolbar/>
                <NodeResizer/>
              </ReactFlow>
            </div>
          </ProCard>
        </ProCard>
      </ProCard>
    </PageContainer>
  );
};

export default CourseInformation;
