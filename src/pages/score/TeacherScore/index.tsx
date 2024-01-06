import React, {useCallback, useEffect, useMemo, useState} from 'react';
import type {ColumnsType, TableProps} from 'antd/es/table';
import {Button, message, Modal, Select, Table} from 'antd';
import type {FilterValue, SorterResult} from 'antd/es/table/interface';
import {ModalForm, PageContainer, ProFormText, ProFormUploadButton} from "@ant-design/pro-components";


type Score = {
  id: number;
  year: string;
  term: string;
  name: string;
  nature: string;
  credit: number;
  score: number;
  stuName: string;
  stuNum: string;
};

// 定义课程数据的数组
const scoreList: Score[] = [
  {
    id: 1,
    year: '2021-2022',
    term: '第一学期',
    name: '高等数学',
    nature: '专业主干课',
    credit: 6,
    score: 85,
    stuName: '张三',
    stuNum: '2021001',
  },
  {
    id: 2,
    year: '2021-2022',
    term: '第一学期',
    name: '线性代数',
    nature: '专业主干课',
    credit: 3,
    score: 90,
    stuName: '李四',
    stuNum: '2021002',
  },
  {
    id: 3,
    year: '2022-2023',
    term: '第二学期',
    name: 'Java语言程序设计',
    nature: '个性发展课',
    credit: 2,
    score: 95,
    stuName: '王五',
    stuNum: '2021003',
  },
  {
    id: 4,
    year: '2021-2022',
    term: '第二学期',
    name: '数据结构',
    nature: '专业主干课',
    credit: 4,
    score: 88,
    stuName: '赵六',
    stuNum: '2021004',
  },
  {
    id: 5,
    year: '2022-2023',
    term: '第一学期',
    name: '数据库原理',
    nature: '专业主干课',
    credit: 3,
    score: 92,
    stuName: '钱七',
    stuNum: '2021005',
  },
  {
    id: 6,
    year: '2022-2023',
    term: '第二学期',
    name: '计算机网络',
    nature: '专业主干课',
    credit: 3,
    score: 89,
    stuName: '孙八',
    stuNum: '2021006',
  },
  {
    id: 7,
    year: '2021-2022',
    term: '第一学期',
    name: '操作系统',
    nature: '专业主干课',
    credit: 4,
    score: 91,
    stuName: '周九',
    stuNum: '2021007',
  },
  {
    id: 8,
    year: '2021-2022',
    term: '第二学期',
    name: '人工智能',
    nature: '专业主干课',
    credit: 3,
    score: 93,
    stuName: '吴十',
    stuNum: '2021008',
  },
  {
    id: 9,
    year: '2022-2023',
    term: '第一学期',
    name: '机器学习',
    nature: '专业主干课',
    credit: 4,
    score: 87,
    stuName: '郑十一',
    stuNum: '2021009',
  },
  {
    id: 10,
    year: '2022-2023',
    term: '第二学期',
    name: '软件工程',
    nature: '专业主干课',
    credit: 4,
    score: 94,
    stuName: '王十二',
    stuNum: '2021010',
  },
  {
    id: 31,
    year: '2021-2022',
    term: '第一学期',
    name: '计算机组成原理',
    nature: '专业主干课',
    credit: 4,
    score: 85,
    stuName: '刘十三',
    stuNum: '2021011',
  },
  {
    id: 32,
    year: '2021-2022',
    term: '第一学期',
    name: '数据结构',
    nature: '专业主干课',
    credit: 3,
    score: 90,
    stuName: '陈十四',
    stuNum: '2021012',
  },
  {
    id: 33,
    year: '2022-2023',
    term: '第二学期',
    name: '数据库原理',
    nature: '专业主干课',
    credit: 2,
    score: 95,
    stuName: '杨十五',
    stuNum: '2021013',
  },
  {
    id: 34,
    year: '2021-2022',
    term: '第二学期',
    name: '操作系统',
    nature: '专业主干课',
    credit: 4,
    score: 88,
    stuName: '黄十六',
    stuNum: '2021014',
  },
  {
    id: 35,
    year: '2022-2023',
    term: '第一学期',
    name: '计算机网络',
    nature: '专业主干课',
    credit: 3,
    score: 92,
    stuName: '吕十七',
    stuNum: '2021015',
  },
  {
    id: 36,
    year: '2022-2023',
    term: '第二学期',
    name: '软件工程',
    nature: '专业主干课',
    credit: 4,
    score: 89,
    stuName: '徐十八',
    stuNum: '2021016',
  },
  {
    id: 37,
    year: '2021-2022',
    term: '第一学期',
    name: '算法设计与分析',
    nature: '专业主干课',
    credit: 4,
    score: 91,
    stuName: '朱十九',
    stuNum: '2021017',
  },
  {
    id: 38,
    year: '2021-2022',
    term: '第二学期',
    name: '人工智能',
    nature: '专业主干课',
    credit: 3,
    score: 93,
    stuName: '何二十',
    stuNum: '2021018',
  },
  {
    id: 39,
    year: '2022-2023',
    term: '第一学期',
    name: '机器学习',
    nature: '专业主干课',
    credit: 4,
    score: 87,
    stuName: '曹二十一',
    stuNum: '2021019',
  },
  {
    id: 40,
    year: '2022-2023',
    term: '第二学期',
    name: '计算机图形学',
    nature: '专业主干课',
    credit: 4,
    score: 94,
    stuName: '许二十二',
    stuNum: '2021020',
  },
];

const TeacherScore = () => {
  const [reviewTable, setReviewTable] = useState(scoreList);
  useEffect(() => {
    setReviewTable(scoreList);
  }, [scoreList]);

  // 缓存过滤器
  const stuNumFilters = useMemo(() => {
    // 对reviewTable中的stuNum进行去重和映射操作
    return (
      reviewTable &&
      [...new Set(reviewTable.map((r) => r.stuNum))].map((stuNum) => ({
        text: stuNum,
        value: stuNum,
      }))
    );
  }, [reviewTable]);
  const stuNameFilters = useMemo(() => {
    // 对reviewTable中的stuName进行去重和映射操作
    return (
      reviewTable &&
      [...new Set(reviewTable.map((r) => r.stuName))].map((stuName) => ({
        text: stuName,
        value: stuName,
      }))
    );
  }, [reviewTable]);
  const yearFilters = useMemo(() => {
    // 对reviewTable中的year进行去重和映射操作
    return (
      reviewTable &&
      [...new Set(reviewTable.map((r) => r.year))].map((year) => ({
        text: year,
        value: year,
      }))
    );
  }, [reviewTable]);
  const termFilters = useMemo(() => {
    // 对reviewTable中的term进行去重和映射操作
    return (
      reviewTable &&
      [...new Set(reviewTable.map((r) => r.term))].map((term) => ({
        text: term,
        value: term,
      }))
    );
  }, [reviewTable]);
  const nameFilters = useMemo(() => {
    // 对reviewTable中的name进行去重和映射操作
    return (
      reviewTable &&
      [...new Set(reviewTable.map((r) => r.name))].map((name) => ({
        text: name,
        value: name,
      }))
    );
  }, [reviewTable]);
  const natureFilters = useMemo(() => {
    // 对reviewTable中的nature进行去重和映射操作
    return (
      reviewTable &&
      [...new Set(reviewTable.map((r) => r.nature))].map((nature) => ({
        text: nature,
        value: nature,
      }))
    );
  }, [reviewTable]);
  const creditFilters = useMemo(() => {
    // 对reviewTable中的credit进行去重和映射操作
    return (
      reviewTable &&
      [...new Set(reviewTable.map((r) => r.credit))].map((credit) => ({
        text: credit,
        value: credit,
      }))
    );
  }, [reviewTable]);
  const scoreFilters = useMemo(() => {
    // 对reviewTable中的score进行去重和映射操作
    return (
      reviewTable &&
      [...new Set(reviewTable.map((r) => r.score))].map((score) => ({
        text: score,
        value: score,
      }))
    );
  }, [reviewTable]);


  // 切换组别时清空筛选和排序和页数
  const [filter, setFilter] = useState<Record<string, FilterValue | null>>({});
  const [sorted, setSorted] = useState<SorterResult<Score>>({});
  const [currentPage, setCurrentPage] = useState(1);
  const handleChange: TableProps<Score>['onChange'] = (
    pagination,
    filters,
    sorter,
  ) => {
    setFilter(filters);
    setSorted(sorter as SorterResult<Score>);
    setCurrentPage(pagination.current as number);
  };
  useEffect(() => {
    setFilter({});
    setSorted({});
    setCurrentPage(1);
  }, [scoreList]);

  const columns: ColumnsType<Score> = [
    {
      title: '学号',
      dataIndex: 'stuNum',
      key: 'stuNum',
      filters: stuNumFilters,
      filteredValue: filter.stuNum || null,
      onFilter: (value, record) => record.stuNum.indexOf(value as string) === 0,
      sorter: (a, b) => a.stuNum.localeCompare(b.stuNum, 'zh-CN'),
      sortOrder: sorted.columnKey === 'stuNum' ? sorted.order : null,
    },
    {
      title: '姓名',
      dataIndex: 'stuName',
      key: 'stuName',
      filters: stuNameFilters,
      filteredValue: filter.stuName || null,
      onFilter: (value, record) => record.stuName.indexOf(value as string) === 0,
      sorter: (a, b) => a.stuName.localeCompare(b.stuName, 'zh-CN'),
      sortOrder: sorted.columnKey === 'stuName' ? sorted.order : null,
    },
    {
      title: '学年',
      dataIndex: 'year',
      key: 'year',
      filters: yearFilters,
      filteredValue: filter.year || null,
      onFilter: (value, record) => record.year.indexOf(value as string) === 0,
      sorter: (a, b) => a.year.localeCompare(b.year, 'zh-CN'),
      sortOrder: sorted.columnKey === 'year' ? sorted.order : null,
    },
    {
      title: '学期',
      dataIndex: 'term',
      key: 'term',
      filters: termFilters,
      filteredValue: filter.term || null,
      onFilter: (value, record) => record.term.indexOf(value as string) === 0,
      filterSearch: true,
      sorter: (a, b) => Number(a.term) - Number(b.term),
      sortOrder: sorted.columnKey === 'term' ? sorted.order : null,
    },
    {
      title: '课程名称',
      dataIndex: 'name',
      key: 'name',
      filters: nameFilters,
      filteredValue: filter.name || null,
      onFilter: (value, record) => record.name.indexOf(value as string) === 0,
      filterSearch: true,
      sorter: (a, b) => a.name.localeCompare(b.name, 'zh-CN'),
      sortOrder: sorted.columnKey === 'name' ? sorted.order : null,
    },
    {
      title: '课程性质',
      dataIndex: 'nature',
      key: 'nature',
      filters: natureFilters,
      filteredValue: filter.nature || null,
      onFilter: (value, record) => record.nature.indexOf(value as string) === 0,
      filterSearch: true,
      sorter: (a, b) => a.nature.localeCompare(b.nature, 'zh-CN'),
      sortOrder: sorted.columnKey === 'nature' ? sorted.order : null,
    },
    {
      title: '学分',
      dataIndex: 'credit',
      key: 'credit',
      filters: creditFilters,
      filteredValue: filter.credit || null,
      onFilter: (value, record) => record.credit === value,
      filterSearch: true,
      sorter: (a, b) => a.credit - b.credit,
      sortOrder: sorted.columnKey === 'credit' ? sorted.order : null,
    },
    {
      title: '成绩',
      dataIndex: 'score',
      key: 'score',
      filters: scoreFilters,
      filteredValue: filter.score || null,
      onFilter: (value, record) => record.score === value,
      filterSearch: true,
      sorter: (a, b) => a.score - b.score,
      sortOrder: sorted.columnKey === 'score' ? sorted.order : null,
    },
    {
      title: '录入成绩',
      dataIndex: 'id',
      key: 'id',
      render: () => (
        <ModalForm<{
          name: string;
          company: string;
        }>
          width={400}
          title="录入分数"
          trigger={
            <Button type="primary">
              录入分数
            </Button>
          }
          // form={form}
          autoFocusFirstInput
          modalProps={{
            destroyOnClose: true,
            onCancel: () => console.log('run'),
          }}
          submitTimeout={2000}
          onFinish={async () => {

            message.success('提交成功');
            return true;
          }}
        >
          <ProFormText
            width="md"
            name="name"
            label="分数"
            // tooltip="最长为 24 位"
            placeholder="请输入分数"
          />
        </ModalForm>
      ),
    },
  ];

  const [isModalOpen, setIsModalOpen] = useState(false);

  const showModal = () => {
    setIsModalOpen(!isModalOpen);
  };
  const handleOk = () => {

    setIsModalOpen(false);
    window.location.href = 'https://static.muxixyz.com/%E6%88%90%E7%BB%A9%E5%AF%BC%E5%87%BA%E5%8D%95.xls'
    message.success('导出成功');
  };

  return (
    <PageContainer
      ghost
      header={{
        title: '查看学生成绩',
        extra: [
          <Button key="1" type="primary" onClick={showModal}>
            导出
          </Button>,
          <Modal key="2" title="导出" open={isModalOpen} onCancel={showModal} onOk={handleOk}>
            <p>是否导出成绩表</p>
          </Modal>
        ],
      }}


    >
      <Table
        bordered={true}
        // loading={loading}
        columns={columns}
        dataSource={reviewTable}
        onChange={handleChange}
        pagination={{
          position: ['bottomCenter'],
          pageSize: 10,
          showSizeChanger: false,
          current: currentPage,
        }}
        rowKey={(r) => r.id}
      />
    </PageContainer>
  );
};

export default TeacherScore;
