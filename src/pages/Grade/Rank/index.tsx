import { Area, Bullet, Column } from '@ant-design/charts';
import { Card, Col, Row } from 'antd';

import { Table } from 'antd';
import type { ColumnsType } from 'antd/es/table';
import Title from 'antd/es/typography/Title';
import React from 'react';

interface DataType1 {
  key: string;
  date: string;
  amount: number;
  grade: number;
}

const yearGradeColumns: ColumnsType<DataType1> = [
  {
    title: '年份',
    dataIndex: 'date',
    key: 'name',
  },
  {
    title: '人数',
    dataIndex: 'amount',
    key: 'amount',
  },
  {
    title: '平均分',
    dataIndex: 'grade',
    key: 'grade',
  },
];

const yearGradeData: DataType1[] = [
  {
    key: '1',
    date: '2017',
    grade: 89,
    amount: 181,
  },
  {
    key: '2',
    date: '2018',
    grade: 91,
    amount: 178,
  },
  {
    key: '3',
    date: '2019',
    grade: 81,
    amount: 176,
  },
  {
    key: '4',
    date: '2020',
    grade: 90,
    amount: 186,
  },
  {
    key: '5',
    date: '2021',
    grade: 85,
    amount: 195,
  },
  {
    key: '6',
    date: '2022',
    grade: 83,
    amount: 188,
  },
  {
    key: '7',
    date: '2023',
    grade: 86,
    amount: 186,
  },
];

const YearGradeTable: React.FC = () => (
  <Table columns={yearGradeColumns} pagination={{ pageSize: 4 }} dataSource={yearGradeData} />
);

const DemoArea = () => {
  const config = {
    data: yearGradeData,
    padding: 'auto',
    xField: 'date',
    yField: 'grade',
    xAxis: {
      // type: 'timeCat',
      tickCount: 7,
    },
    color: 'rgb(139,93,238)',
    style: {
      width: '100%',
      height: '300px',
    },
    smooth: true,
  };

  // @ts-ignore
  return <Area {...config} />;
};

interface DataType2 {
  key: string;
  name: string;
  amount: number;
  grade: number;
}

const classGradeColumns: ColumnsType<DataType2> = [
  {
    title: '班级',
    dataIndex: 'name',
    key: 'name',
  },
  {
    title: '人数',
    dataIndex: 'amount',
    key: 'amount',
  },
  {
    title: '平均分',
    dataIndex: 'grade',
    key: 'grade',
  },
];

const classGradeData: DataType2[] = [
  {
    key: '1',
    name: '1班',
    amount: 35,
    grade: 78,
  },
  {
    key: '2',
    name: '2班',
    amount: 36,
    grade: 82,
  },
  {
    key: '3',
    name: '3班',
    amount: 35,
    grade: 71,
  },
  {
    key: '4',
    name: '4班',
    amount: 36,
    grade: 85,
  },
  {
    key: '5',
    name: '5班',
    amount: 34,
    grade: 75,
  },
  {
    key: '6',
    name: '6班',
    amount: 38,
    grade: 89,
  },
];

const DemoColumn = () => {
  const config = {
    data: classGradeData,
    xField: 'name',
    yField: 'grade',
    label: {
      // 可手动配置 label 数据标签位置
      position: 'middle',
      // 'top', 'bottom', 'middle',
      // 配置样式
      style: {
        fill: '#FFFFFF',
        opacity: 0.6,
      },
    },
    xAxis: {
      label: {
        autoHide: true,
        autoRotate: false,
      },
    },
    meta: {
      type: {
        alias: '班级',
      },
      grade: {
        alias: '平均成绩',
      },
    },
    style: {
      width: '100%',
      height: '300px',
    },
    color: 'rgb(86,125,235)',
  };
  // @ts-ignore
  return <Column {...config} />;
};

const ClassGradeTable: React.FC = () => (
  <Table columns={classGradeColumns} pagination={{ pageSize: 4 }} dataSource={classGradeData} />
);

const DemoBullet = () => {
  const data = [
    {
      title: '',
      ranges: [100],
      measures: [80],
      target: 85,
    },
  ];
  // @ts-ignore
  const config = {
    data,
    measureField: 'measures',
    rangeField: 'ranges',
    targetField: 'target',
    xField: 'title',
    color: {
      range: '#f0efff',
      measure: '#52c41a',
      target: '#3D76DD',
    },
    xAxis: {
      line: null,
    },
    yAxis: {
      // @ts-ignore
      tickMethod: ({ max }) => {
        const interval = Math.ceil(max / 5); // 自定义刻度 ticks

        return [0, interval, interval * 2, interval * 3, interval * 4, max];
      },
    },
    // 自定义 legend
    style: {
      width: '100%',
      height: '48px',
    },
  };
  return <Bullet {...config} />;
};

const Rank: React.FC = () => {
  return (
    <>
      <Row gutter={[16, 16]}>
        <Col span={4}>
          <Card title="课程名称">
            <Title level={3}>软件构造</Title>
          </Card>
        </Col>
        <Col span={4}>
          <Card title="平均成绩">
            <Title level={3}>86</Title>
          </Card>
        </Col>
        <Col span={4}>
          <Card title="考试人数">
            <Title level={3}>196</Title>
          </Card>
        </Col>
        <Col span={12}>
          <Card title="及格率">
            <DemoBullet />
          </Card>
        </Col>
        <Col span={16}>
          <Card title="历年平均成绩">
            <DemoArea />
          </Card>
        </Col>
        <Col span={8}>
          <Card
            style={{
              height: '100%',
            }}
          >
            <YearGradeTable />
          </Card>
        </Col>
        <Col span={8}>
          <Card
            style={{
              height: '100%',
            }}
          >
            <ClassGradeTable />
          </Card>
        </Col>
        <Col span={16}>
          <Card title="各班成绩对比">
            <DemoColumn />
          </Card>
        </Col>
      </Row>
      <Row gutter={8}></Row>
    </>
  );
};

export default Rank;
