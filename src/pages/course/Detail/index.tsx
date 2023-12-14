import { history } from '@umijs/max';
import { Button, Card, Col, Flex, message, Modal, Row, Typography } from 'antd';
import React, { useState } from 'react';

const cardStyle: React.CSSProperties = {
  width: '100%',
};

const cardContentStyle: React.CSSProperties = {
  width: '100%',
  height: '300px',
  overflowY: 'hidden',
};

const imgStyle: React.CSSProperties = {
  display: 'block',
  width: '30%',
};

const fontStyle1: React.CSSProperties = {
  fontSize: '20px',
  fontWeight: 'bold',
};

const fontStyle2: React.CSSProperties = {
  fontSize: '20px',
};

const classStyle1: React.CSSProperties = {
  fontSize: '20px',
  padding: '10px',
  margin: '5px',
  textAlign: 'center',
  backgroundColor: '#cecece',
  borderRadius: '12px',
  cursor: 'pointer',
};

const classStyle2: React.CSSProperties = {
  fontSize: '20px',
  padding: '10px',
  margin: '5px',
  textAlign: 'center',
  backgroundColor: 'rgb(240 47 32)',
  color: '#fff',
  borderRadius: '12px',
  cursor: 'pointer',
};

const classStyle3: React.CSSProperties = {
  fontSize: '20px',
  padding: '10px',
  margin: '5px',
  textAlign: 'center',
  backgroundColor: 'skyblue',
  color: '#fff',
  borderRadius: '12px',
  cursor: 'pointer',
};

type ModalProps = {
  isModalOpen: boolean;
  closeModal: () => void;
};

type ClassType = {
  id: number;
  name: string;
  select: boolean;
};

function generateRandomBoolean() {
  return Math.random() < 0.5;
}

function generateRandomClassData() {
  const classData: ClassType[] = [];
  const classNames = [
    'n201',
    'n115',
    'n327',
    'n102',
    'n220',
    'n401',
    'n312',
    'n205',
    'n118',
    'n330',
    'n222',
    'n403',
    'n313',
    'n208',
    'n121',
    'n333',
    'n225',
    'n406',
    'n316',
    'n211',
    'n124',
    'n336',
    'n228',
    'n409',
    'n319',
    'n214',
    'n127',
    'n339',
    'n231',
    'n412',
  ];

  for (let i = 1; i <= 30; i++) {
    const randomIndex = Math.floor(Math.random() * classNames.length);
    const randomName = classNames[randomIndex];
    const randomSelect = generateRandomBoolean();

    const classItem: ClassType = {
      id: i,
      name: randomName,
      select: randomSelect,
    };

    classData.push(classItem);
  }

  return classData;
}

const ChangeClassModal: React.FC<ModalProps> = (props: ModalProps) => {
  const { isModalOpen, closeModal } = props;
  const [classData] = useState<ClassType[]>(generateRandomClassData());
  const [selectedClass, setSelectedClass] = useState<ClassType>({
    id: 0,
    name: '',
    select: false,
  });

  const onOk = () => {
    if (selectedClass.id !== 0) {
      message.success('申请更换教室成功！');
    }
    closeModal();
  };

  const handleClick = (item: ClassType) => {
    if (item.select) {
      message.error('该教室在使用中，请重新选择！');
    } else {
      const newItem = { ...item, select: true };
      setSelectedClass(newItem);
    }
  };

  return (
    <>
      <Modal open={isModalOpen} onOk={onOk} onCancel={closeModal} width={1000}>
        <Card title="更换教室">
          <Row gutter={[16, 16]}>
            {classData.map((item) => (
              <Col
                key={item.id}
                style={
                  selectedClass.id === item.id
                    ? classStyle3
                    : item.select
                    ? classStyle2
                    : classStyle1
                }
                onClick={() => handleClick(item)}
                span={3}
              >
                {item.name}
              </Col>
            ))}
          </Row>
        </Card>
      </Modal>
    </>
  );
};

const CourseDetail: React.FC = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);

  const openModal = () => {
    setIsModalOpen(true);
  };

  const closeModal = () => {
    setIsModalOpen(false);
  };

  return (
    <>
      <Flex
        vertical
        gap={30}
        align="center"
        style={{
          width: '100%',
        }}
      >
        <Flex
          vertical
          align="center"
          style={{
            width: '80%',
          }}
        >
          <Card hoverable style={cardStyle} bodyStyle={{ padding: 0, overflow: 'hidden' }}>
            <Flex gap={16}>
              <img
                alt="avatar"
                src="https://gw.alipayobjects.com/zos/rmsportal/uMfMFlvUuceEyPpotzlq.png"
                style={imgStyle}
              />
              <Flex vertical style={{ padding: 8, width: '70%' }}>
                <Typography.Title level={2}>软件构造</Typography.Title>
                <Flex vertical gap={8} style={{ padding: 8, width: '100%', height: '80%' }}>
                  <Flex gap={16}>
                    <div style={fontStyle1}>任课老师</div>
                    <div style={fontStyle2}>张三</div>
                  </Flex>
                  <Flex gap={16}>
                    <div style={fontStyle1}>上课时间</div>
                    <div style={fontStyle2}>2023年8月29日 </div>
                    <div style={fontStyle2}>~ </div>
                    <div style={fontStyle2}>2024年1月10日 </div>
                  </Flex>
                  <Flex gap={16}>
                    <div style={fontStyle1}>人数</div>
                    <div style={fontStyle2}>56</div>
                  </Flex>
                </Flex>
                <Flex justify="flex-end" gap={16} style={{ padding: 8, width: '100%' }}>
                  <Button
                    type="primary"
                    onClick={() => {
                      history.push('/grade/rank');
                    }}
                  >
                    查看成绩
                  </Button>
                  <Button type="primary" onClick={openModal}>
                    更换教室
                  </Button>
                </Flex>
              </Flex>
            </Flex>
          </Card>
        </Flex>
        <Flex
          vertical
          align="center"
          style={{
            width: '80%',
          }}
        >
          <Card
            hoverable
            style={cardContentStyle}
            bodyStyle={{ padding: 16, overflow: 'hidden' }}
            title="教师介绍"
          >
            <Typography.Text
              style={{
                fontSize: '20px',
                lineHeight: '1.5',
              }}
            >
              张三教授在软件构造领域有着丰富的教学经验，他通过深入浅出的讲解和富有启发性的案例分析，能够将复杂的概念和原理以通俗易懂的方式传达给学生。他注重理论与实践的结合，鼓励学生积极参与课堂讨论和实践项目，培养学生的问题解决和团队合作能力。
              作为一位资深的软件工程师，张三教授在软件构造领域有着丰富的实践经验。他曾参与多个大型软件项目的开发和管理，并在其中担任重要角色。这使得他能够将课堂教学与实际工作紧密结合，为学生提供真实世界的案例和实践指导。
              张三教授还积极参与软件构造领域的研究和创新。他在国际期刊和会议上发表了多篇高水平的论文，涉及软件设计原则、设计模式、软件质量保证等方面的研究成果。他的研究工作为课程内容的更新和改进提供了有力支持，使学生能够获得最新的知识和技能。
            </Typography.Text>
          </Card>
        </Flex>
        <Flex
          vertical
          align="center"
          style={{
            width: '80%',
          }}
        >
          <Card
            hoverable
            style={cardContentStyle}
            bodyStyle={{ padding: 16, overflow: 'hidden' }}
            title="课程概况"
          >
            <Typography.Text
              style={{
                fontSize: '20px',
                lineHeight: '1.5',
              }}
            >
              软件构造基础知识：介绍软件构造的基本概念、原则和方法，包括需求分析、系统设计、模块化、接口设计等。学生将了解软件构造在软件开发过程中的重要性和作用。面向对象设计与编程：探讨面向对象的设计原则和设计模式，如单例模式、工厂模式、观察者模式等。学生将学会如何应用面向对象的思维方式进行软件设计和编程。软件构造工具和技术：介绍常用的软件构造工具和技术，如版本控制系统、集成开发环境、自动化构建工具等。学生将学会使用这些工具和技术提高软件开发效率和质量。软件测试与质量保证：讲解软件测试的基本原理和方法，包括单元测试、集成测试、系统测试等。学生将了解如何编写有效的测试用例和进行软件质量保证。软件项目管理与团队合作：介绍软件项目管理的基本概念和方法，包括需求管理、进度管理、风险管理等。学生将了解如何协调和组织团队进行软件开发，并学会解决项目管理中的常见问题。实践项目：通过实践项目，学生将运用所学知识和技能进行软件构造实践。
            </Typography.Text>
          </Card>
        </Flex>
        <Flex
          vertical
          align="center"
          style={{
            width: '80%',
          }}
        >
          <Card
            hoverable
            style={cardContentStyle}
            bodyStyle={{ padding: 16, overflow: 'hidden' }}
            title="教学计划"
          >
            <Typography.Text
              style={{
                fontSize: '20px',
                lineHeight: '1.5',
              }}
            >
              第1周：课程介绍和软件构造基础 介绍课程目标、教学方法和评估方式
              讲解软件构造的基本概念、原则和方法 引导学生思考软件构造的重要性和作用
              第2周：面向对象设计与编程 探讨面向对象的设计原则和设计模式
              学习如何应用面向对象的思维方式进行软件设计和编程 实践案例分析和小组讨论
              第3周：软件构造工具和技术
              介绍常用的软件构造工具和技术，如版本控制系统、集成开发环境、自动化构建工具等
              演示和实践使用这些工具和技术 学生进行实践项目的环境搭建和配置
              第4周：软件测试与质量保证 讲解软件测试的基本原理和方法
              学习如何编写有效的测试用例和进行软件质量保证 实践项目中的测试策略和测试计划制定
              第5周：软件项目管理与团队合作 介绍软件项目管理的基本概念和方法
              学习需求管理、进度管理、风险管理等技巧 实践项目中的团队合作和协调管理
              第6周：实践项目开始 学生组成小组，开始实践项目 进行项目需求分析和系统设计
              分工合作，制定项目计划和任务分配 第7周至第12周：实践项目开发和演进
              学生按照项目计划进行软件构造和编码 定期进行项目进展报告和代码审查
              解决项目中的技术问题和团队合作挑战 第13周：实践项目总结和展示
              小组提交最终的项目成果和报告 学生进行项目展示和经验总结
              教师进行评估和反馈，提供个人成长建议 课程评估方式： 实践项目成果和报告评估
              课堂参与和讨论表现评估 中期和期末考试评估 个人和团队合作能力评估
            </Typography.Text>
          </Card>
        </Flex>
      </Flex>
      {isModalOpen && <ChangeClassModal isModalOpen={isModalOpen} closeModal={closeModal} />}
    </>
  );
};

export default CourseDetail;
