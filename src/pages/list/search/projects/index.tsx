import {
  Button,
  Card,
  Col,
  Form,
  Input,
  List,
  Modal,
  Row,
  Select,
  Space,
  Typography,
  message,
} from 'antd';
import moment from 'moment';
import type { FC } from 'react';
import { useRequest } from 'umi';
import AvatarList from './components/AvatarList';
import StandardFormRow from './components/StandardFormRow';
import TagSelect from './components/TagSelect';
import type { ListItemDataType } from './data.d';
import { queryFakeList } from './service';
import styles from './style.less';
import { useState } from 'react';
import { flatMap } from 'lodash';

const { Option } = Select;
const FormItem = Form.Item;
const { Paragraph } = Typography;

const getKey = (id: string, index: number) => `${id}-${index}`;

const Projects: FC = () => {
  const { data, loading, run } = useRequest((values: any) => {
    console.log('form data', values);
    return queryFakeList({
      count: 8,
    });
  });

  const list = data?.list || [];

  const cardList = list && (
    <List<ListItemDataType>
      rowKey="id"
      loading={loading}
      grid={{
        gutter: 16,
        xs: 1,
        sm: 2,
        md: 3,
        lg: 3,
        xl: 4,
        xxl: 4,
      }}
      dataSource={list}
      renderItem={(item) => (
        <List.Item>
          <Card className={styles.card} hoverable cover={<img alt={item.title} src={item.cover} />}>
            <Card.Meta
              title={<a>{item.title}</a>}
              description={
                <Paragraph className={styles.item} ellipsis={{ rows: 2 }}>
                  {item.subDescription}
                </Paragraph>
              }
            />
            <div className={styles.cardItemContent}>
              <span style={{ color: '#333', fontSize: 16 }}>学生人数：{item.count}</span>
              <div className={styles.avatarList}>
                {/* <AvatarList size="small">
                  {item.members.map((member, i) => (
                    <AvatarList.Item
                      key={getKey(item.id, i)}
                      src={member.avatar}
                      tips={member.name}
                    />
                  ))}
                </AvatarList> */}
                <Button type="primary" style={{ backgroundColor: '#1c91ee' }}>
                  详情
                </Button>
              </div>
            </div>
          </Card>
        </List.Item>
      )}
    />
  );

  const formItemLayout = {
    wrapperCol: {
      xs: { span: 24 },
      sm: { span: 16 },
    },
  };

  const [isModalOpen, setIsModalOpen] = useState(false);
  const [name, setName] = useState('');
  const [time, setTime] = useState('');
  const [dept, setDept] = useState('');
  const [academy, setAcademy] = useState('计算机学院');
  const [classroom, setClassroom] = useState('');
  const [description, setDescription] = useState('');
  const [tAccount, setTAccount] = useState('');

  const handleOk = () => {
    if (!name || !time || !dept || !academy || !classroom || !description || !tAccount) {
      message.warning('请将信息填写完整！');
      return;
    }

    setIsModalOpen(false);
    // let data: API.AddCourseParams = {
    //   name: name,
    //   time: time,
    //   dept: dept,
    //   academy: academy,
    //   classroom: classroom,
    //   description: description,
    //   t_account: tAccount,
    // };

    // if (token) {
    //   addCourse(data, token).then((res) => {
    //     if (res.status === 100) {
    //       message.success('添加成功！');
    //       updateCourses();
    //       closeMoal();
    //     } else {
    //       message.error('添加课程失败，请重试！');
    //     }
    //   });
    // }
  };

  const handleCancel = () => {
    setIsModalOpen(false);
  };

  return (
    <div className={styles.coverCardList}>
      <Card bordered={false}>
        <Form
          layout="inline"
          onValuesChange={(_, values) => {
            // 表单项变化时请求数据
            // 模拟查询表单生效
            run(values);
          }}
        >
          {/* <StandardFormRow title="课程类型" block style={{ paddingBottom: 11 }}>
            <FormItem name="category">
              <TagSelect expandable>
                <TagSelect.Option value="cat2">通识选修课</TagSelect.Option>
                <TagSelect.Option value="cat3">通识核心课</TagSelect.Option>
                <TagSelect.Option value="cat4">专业主干课</TagSelect.Option>
                <TagSelect.Option value="cat5">个性发展课</TagSelect.Option>
                <TagSelect.Option value="cat6">专业必修课</TagSelect.Option>
                <TagSelect.Option value="cat7">专业选修课</TagSelect.Option>
                <TagSelect.Option value="cat8">通识必修课</TagSelect.Option>
              </TagSelect>
            </FormItem>
          </StandardFormRow> */}
          <StandardFormRow>
            <Row gutter={24}>
              <Col lg={6} md={6} sm={6} xs={6}>
                <FormItem {...formItemLayout} label="年级" name="author">
                  <Select placeholder="不限" style={{ maxWidth: 200, width: '100%' }}>
                    <Option value="lisa">王昭君</Option>
                  </Select>
                </FormItem>
              </Col>
              <Col lg={6} md={6} sm={6} xs={6}>
                <FormItem {...formItemLayout} label="专业" name="rate">
                  <Select placeholder="不限" style={{ maxWidth: 200, width: '100%' }}>
                    <Option value="good">优秀</Option>
                    <Option value="normal">普通</Option>
                  </Select>
                </FormItem>
              </Col>
              <Col lg={6} md={6} sm={6} xs={6}>
                <FormItem {...formItemLayout} label="老师" name="author">
                  <Select placeholder="不限" style={{ maxWidth: 200, width: '100%' }}>
                    <Option value="lisa">王昭君</Option>
                  </Select>
                </FormItem>
              </Col>
              <Col lg={6} md={6} sm={6} xs={6}>
                <FormItem {...formItemLayout} label="学生" name="rate">
                  <Select placeholder="不限" style={{ maxWidth: 200, width: '100%' }}>
                    <Option value="good">优秀</Option>
                    <Option value="normal">普通</Option>
                  </Select>
                </FormItem>
              </Col>
            </Row>
          </StandardFormRow>
          <StandardFormRow>
            <Row
              style={{
                margin: '0px 16px',
              }}
            >
              <Button type="primary" onClick={() => setIsModalOpen(true)}>
                新增
              </Button>
            </Row>
          </StandardFormRow>
        </Form>
      </Card>
      <div className={styles.cardList}>{cardList}</div>
      <Modal title="课程信息" open={isModalOpen} onOk={handleOk} onCancel={handleCancel}>
        <div
          style={{
            display: 'flex',
            flexDirection: 'column',
            gap: '16px',
            padding: '16px',
          }}
        >
          <Space>
            <span>课程名称:</span>
            <Input
              onChange={(e) => {
                setName(e.target.value);
              }}
              value={name}
              style={{ width: 240 }}
              placeholder="请输入课程名称"
              allowClear
            />
          </Space>
          <Space>
            <span>教师工号:</span>
            <Input
              onChange={(e) => {
                setTAccount(e.target.value);
              }}
              value={tAccount}
              style={{ width: 240 }}
              placeholder="请输入教师工号"
              allowClear
            />
          </Space>
          <Space>
            <span>上课时间:</span>
            <Input
              onChange={(e) => {
                setTime(e.target.value);
              }}
              value={time}
              style={{ width: 240 }}
              placeholder="请输入上课时间"
              allowClear
            />
          </Space>
          <Space>
            <span>上课教室:</span>
            <Input
              onChange={(e) => {
                setClassroom(e.target.value);
              }}
              value={classroom}
              style={{ width: 240 }}
              placeholder="请输入上课教室"
              allowClear
            />
          </Space>
          <Space>
            <span>所属学院:</span>
            <Select
              style={{ width: 240 }}
              onChange={(value) => {
                setAcademy(value);
              }}
              value={academy}
              // options={academyData}
            />
          </Space>
          <Space>
            <span>所属专业:</span>
            <Input
              onChange={(e) => {
                setDept(e.target.value);
              }}
              value={dept}
              style={{ width: 240 }}
              placeholder="请输入所属专业"
              allowClear
            />
          </Space>
          <Space>
            <span>课程描述:</span>
            <Input.TextArea
              onChange={(e) => {
                setDescription(e.target.value);
              }}
              value={description}
              style={{ width: 240 }}
              placeholder="请输入课程描述"
              allowClear
            />
          </Space>
        </div>
      </Modal>
    </div>
  );
};

export default Projects;
