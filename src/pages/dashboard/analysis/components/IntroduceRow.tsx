import {InfoCircleOutlined} from '@ant-design/icons';
import {TinyArea, TinyColumn, Progress} from '@ant-design/charts';
import {Col, Row, Space, Tooltip} from 'antd';

import numeral from 'numeral';
import {ChartCard, Field} from './Charts';
import type {DataItem} from '../data.d';
import Trend from './Trend';
import Yuan from '../utils/Yuan';
import styles from '../style.less';
import Field1 from "@/pages/dashboard/analysis/components/Charts/Field1";

const topColResponsiveProps = {
  xs: 24,
  sm: 12,
  md: 12,
  lg: 12,
  xl: 6,
  style: {marginBottom: 24},
};

const IntroduceRow = ({loading, visitData}: { loading: boolean; visitData: DataItem[] }) => (
  <Row gutter={24}>
    <Col {...topColResponsiveProps}>
      <ChartCard
        bordered={false}
        title="年级（班级）总人数（鉴权没写）"
        action={
          <Tooltip title="指标说明">
            <InfoCircleOutlined/>
          </Tooltip>
        }
        loading={loading}
        total={() => /*<Yuan>*/<p>189人</p>/*</Yuan>*/}
        footer={<Field1 label="转出" value={`20人`} label1="转入" value1={`30人`}/>}
        contentHeight={46}
      >
        {/*<Trend flag="up" style={{marginRight: 16}}>*/}
        <Space>

          <span className={styles.trendText}>男生：100人</span>

          {/*</Trend>*/}
          {/*<Trend flag="down">*/}


          <span className={styles.trendText}>女生：89人</span>
        </Space>
        {/*</Trend>*/}
      </ChartCard>
    </Col>

    <Col {...topColResponsiveProps}>
      <ChartCard
        bordered={false}
        loading={loading}
        title="访问量"
        action={
          <Tooltip title="指标说明">
            <InfoCircleOutlined/>
          </Tooltip>
        }
        total={numeral(8846).format('0,0')}
        footer={<Field label="日访问量" value={numeral(1234).format('0,0')}/>}
        contentHeight={46}
      >
        <TinyArea
          color="#975FE4"
          xField="x"
          height={46}
          forceFit
          yField="y"
          smooth
          data={visitData}
        />
      </ChartCard>
    </Col>
    <Col {...topColResponsiveProps}>
      <ChartCard
        bordered={false}
        loading={loading}
        title="课程平均成绩"
        action={
          <Tooltip title="指标说明">
            <InfoCircleOutlined/>
          </Tooltip>
        }
        total={numeral(6560).format('0,0')}
        footer={<Field label="及格率" value="60%"/>}
        contentHeight={46}
      >
        <TinyColumn xField="x" height={46} forceFit yField="y" data={visitData}/>
      </ChartCard>
    </Col>
    <Col {...topColResponsiveProps}>
      <ChartCard
        loading={loading}
        bordered={false}
        title="及格率"
        action={
          <Tooltip title="指标说明">
            <InfoCircleOutlined/>
          </Tooltip>
        }
        total="78%"
        footer={
          <div style={{whiteSpace: 'nowrap', overflow: 'hidden'}}>
            <Trend flag="up" style={{marginRight: 16}}>
              年同比
              <span className={styles.trendText}>12%</span>
            </Trend>
            <Trend flag="down">
              学期同比
              <span className={styles.trendText}>11%</span>
            </Trend>
          </div>
        }
        contentHeight={46}
      >
        <Progress
          height={46}
          percent={0.78}
          color="#13C2C2"
          forceFit
          size={8}
          marker={[
            {
              value: 0.8,
              style: {
                stroke: '#13C2C2',
              },
            },
          ]}
        />
      </ChartCard>
    </Col>
  </Row>
);

export default IntroduceRow;
