import { ClusterOutlined, ContactsOutlined, HomeOutlined } from '@ant-design/icons';
import { PageContainer } from '@ant-design/pro-components';
import '@umijs/max';
import { Card, Col, Row } from 'antd';
import React from 'react';
import './index.less';

const gridStyle: React.CSSProperties = {
  width: '14.2%',
  minWidth: '120px',
  textAlign: 'center',
};

const MonStyle: React.CSSProperties = {
  width: '100%',
  borderRadius: '12px',
  textAlign: 'center',
  color: '#fff',
  padding: '8px',
  backgroundColor: 'rgb(86,125,235)',
};

const TueStyle: React.CSSProperties = {
  width: '100%',
  borderRadius: '12px',
  textAlign: 'center',
  color: '#fff',
  padding: '8px',
  backgroundColor: 'rgb(116,203,246)',
};

const WedStyle: React.CSSProperties = {
  width: '100%',
  borderRadius: '12px',
  textAlign: 'center',
  color: '#fff',
  padding: '8px',
  backgroundColor: 'rgb(139,93,238)',
};

const ThuStyle: React.CSSProperties = {
  width: '100%',
  borderRadius: '12px',
  textAlign: 'center',
  color: '#fff',
  padding: '8px',
  backgroundColor: 'rgb(244,212,107)',
};

const FriStyle: React.CSSProperties = {
  width: '100%',
  borderRadius: '12px',
  textAlign: 'center',
  color: '#fff',
  padding: '8px',
  backgroundColor: 'rgb(230,114,105)',
};

// const courseList = [
//   [
//     { name: '人机交互', teacher: '刘华咏', class: 'n52' },
//     { name: '软件需求分析与建模', teacher: '李蓉', class: 'n213' },
//     { name: '云计算技术及应用', teacher: '莫然', class: 'n520' },
//     { name: '', teacher: '', class: '' },
//     { name: '', teacher: '', class: '' },
//     { name: '', teacher: '', class: '' },
//     { name: '', teacher: '', class: '' },
//   ],
// ];

const CourseList: React.FC = () => (
  <>
    <Card title="课表">
      <Card.Grid style={gridStyle}>周一</Card.Grid>
      <Card.Grid style={gridStyle}>周二</Card.Grid>
      <Card.Grid style={gridStyle}>周三</Card.Grid>
      <Card.Grid style={gridStyle}>周四</Card.Grid>
      <Card.Grid style={gridStyle}>周五</Card.Grid>
      <Card.Grid style={gridStyle}>周六</Card.Grid>
      <Card.Grid style={gridStyle}>周日</Card.Grid>
    </Card>
    <Card>
      <Card.Grid style={gridStyle}>
        <div style={MonStyle}>
          <p>人机交互的软件工程方法</p>
          <p>n520</p>
          <p>刘华咏</p>
        </div>
      </Card.Grid>
      <Card.Grid style={gridStyle}>
        <div style={TueStyle}>
          <p>软件需求分析与建模</p>
          <p>n213</p>
          <p>李蓉</p>
        </div>
      </Card.Grid>
      <Card.Grid style={gridStyle}>
        <div style={WedStyle}>
          <p>云计算技术及应用</p>
          <p>n520</p>
          <p>莫然</p>
        </div>
      </Card.Grid>
      <Card.Grid style={gridStyle}></Card.Grid>
      <Card.Grid style={gridStyle}></Card.Grid>
      <Card.Grid style={gridStyle}></Card.Grid>
      <Card.Grid style={gridStyle}></Card.Grid>
    </Card>
    <Card>
      <Card.Grid style={gridStyle}></Card.Grid>
      <Card.Grid style={gridStyle}></Card.Grid>
      <Card.Grid style={gridStyle}>
        <div style={WedStyle}>
          <p>Web程序设计</p>
          <p>n108</p>
          <p>赵素芬</p>
        </div>
      </Card.Grid>
      <Card.Grid style={gridStyle}>
        <div style={ThuStyle}>
          <p>现代信息技术与应用</p>
          <p>n201</p>
          <p>高劲松</p>
        </div>
      </Card.Grid>
      <Card.Grid style={gridStyle}>
        <div></div>
      </Card.Grid>
      <Card.Grid style={gridStyle}></Card.Grid>
      <Card.Grid style={gridStyle}></Card.Grid>
    </Card>
    <Card>
      <Card.Grid style={gridStyle}>
        <div style={MonStyle}>
          <p>软件构造</p>
          <p>n108</p>
          <p>李增扬</p>
        </div>
      </Card.Grid>
      <Card.Grid style={gridStyle}>
        <div style={TueStyle}>
          <p>信息检索技术</p>
          <p>n320</p>
          <p>张茂元</p>
        </div>
      </Card.Grid>
      <Card.Grid style={gridStyle}>
        <div style={WedStyle}>
          <p>软件需求分析与建模</p>
          <p>n524</p>
          <p>李蓉</p>
        </div>
      </Card.Grid>
      <Card.Grid style={gridStyle}>
        <div style={ThuStyle}>
          <p>软件构造</p>
          <p>n520</p>
          <p>李增扬</p>
        </div>
      </Card.Grid>
      <Card.Grid style={gridStyle}>
        <div style={FriStyle}>
          <p>形势与政策</p>
          <p>n201</p>
          <p>董明月</p>
        </div>
      </Card.Grid>
      <Card.Grid style={gridStyle}></Card.Grid>
      <Card.Grid style={gridStyle}></Card.Grid>
    </Card>
    <Card>
      <Card.Grid style={gridStyle}>
        <div style={MonStyle}>
          <p>打开音乐之门（通核）</p>
          <p>7301</p>
          <p>曹冠玉</p>
        </div>
      </Card.Grid>
      <Card.Grid style={gridStyle}>
        <div style={TueStyle}>
          <p>Web程序设计</p>
          <p>n108</p>
          <p>赵素芬</p>
        </div>
      </Card.Grid>
      <Card.Grid style={gridStyle}>
        <div style={WedStyle}>
          <p>操作系统原理</p>
          <p>n113</p>
          <p>朱瑄</p>
        </div>
      </Card.Grid>
      <Card.Grid style={gridStyle}></Card.Grid>
      <Card.Grid style={gridStyle}></Card.Grid>
      <Card.Grid style={gridStyle}></Card.Grid>
      <Card.Grid style={gridStyle}></Card.Grid>
    </Card>
    <Card>
      <Card.Grid style={gridStyle}></Card.Grid>
      <Card.Grid style={gridStyle}></Card.Grid>
      <Card.Grid style={gridStyle}></Card.Grid>
      <Card.Grid style={gridStyle}></Card.Grid>
      <Card.Grid style={gridStyle}></Card.Grid>
      <Card.Grid style={gridStyle}></Card.Grid>
      <Card.Grid style={gridStyle}></Card.Grid>
    </Card>
    <Card>
      <Card.Grid style={gridStyle}></Card.Grid>
      <Card.Grid style={gridStyle}></Card.Grid>
      <Card.Grid style={gridStyle}></Card.Grid>
      <Card.Grid style={gridStyle}>
        <div style={ThuStyle}>
          <p>数据新闻</p>
          <p>8215</p>
          <p>方飞</p>
        </div>
      </Card.Grid>
      <Card.Grid style={gridStyle}></Card.Grid>
      <Card.Grid style={gridStyle}></Card.Grid>
      <Card.Grid style={gridStyle}></Card.Grid>
    </Card>
  </>
);

const AccountCenter: React.FC = () => {
  return (
    <PageContainer
      style={{
        overflowX: 'scroll',
      }}
    >
      <Row gutter={24}>
        <Col lg={5} md={24}>
          <Card bordered={false}>
            <div className="avatarHolder">
              <img
                src="https://gw.alipayobjects.com/zos/antfincdn/XAosXuNZyF/BiazfanxmamNRoxxVxka.png"
                alt=""
              />
              <div className={'name'}>{'吴梓煌'}</div>
              <div>{'海纳百川，有容乃大'}</div>
            </div>
            <div className={'detail'}>
              <p>
                <ContactsOutlined
                  style={{
                    marginRight: 8,
                  }}
                />
                {'2021级'}
              </p>
              <p>
                <ContactsOutlined
                  style={{
                    marginRight: 8,
                  }}
                />
                {'男'}
              </p>
              <p>
                <ContactsOutlined
                  style={{
                    marginRight: 8,
                  }}
                />
                {'2021214115'}
              </p>
              <p>
                <ContactsOutlined
                  style={{
                    marginRight: 8,
                  }}
                />
                {'软件工程'}
              </p>
              <p>
                <ClusterOutlined
                  style={{
                    marginRight: 8,
                  }}
                />
                {'计算机学院'}
              </p>
              <p>
                <HomeOutlined
                  style={{
                    marginRight: 8,
                  }}
                />
                {'湖北省武汉市'}
              </p>
            </div>
          </Card>
        </Col>
        <Col lg={17} md={24}>
          <Card
            bordered={false}
            style={{
              minWidth: '960px',
            }}
          >
            <CourseList />
          </Card>
        </Col>
      </Row>
    </PageContainer>
  );
};
export default AccountCenter;
