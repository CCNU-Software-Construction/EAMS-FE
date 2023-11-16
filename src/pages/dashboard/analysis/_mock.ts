import moment from 'moment';
import type {Request, Response} from 'express';
import type {AnalysisData, RadarData, DataItem} from './data.d';

// mock data
const visitData: DataItem[] = [];
const beginDay = new Date().getTime();

const fakeY = [7, 5, 4, 2, 4, 7, 5, 6, 5, 9, 6, 3, 1, 5, 3, 6, 5];
for (let i = 0; i < fakeY.length; i += 1) {
  visitData.push({
    x: moment(new Date(beginDay + 1000 * 60 * 60 * 24 * i)).format('YYYY-MM-DD'),
    y: fakeY[i],
  });
}

const visitData2 = [];
const fakeY2 = [1, 6, 4, 8, 3, 7, 2];
for (let i = 0; i < fakeY2.length; i += 1) {
  visitData2.push({
    x: moment(new Date(beginDay + 1000 * 60 * 60 * 24 * i)).format('YYYY-MM-DD'),
    y: fakeY2[i],
  });
}

const salesData = [];
for (let i = 0; i < 12; i += 1) {
  salesData.push({
    x: `${i + 1}月`,
    y: Math.floor(Math.random() * 1000) + 200,
  });
}
const searchData = [];
for (let i = 0; i < 50; i += 1) {
  searchData.push({
    index: i + 1,
    keyword: `学号-${i}`,
    count: Math.floor(Math.random() * 1000),
    range: Math.floor(Math.random() * 100),
    status: Math.floor((Math.random() * 10) % 2),
  });
}
const salesTypeData = [
  {
    x: '专业主干课',
    y: 4544,
  },
  {
    x: '个性发展课',
    y: 3321,
  },
  {
    x: '通识核心课',
    y: 3113,
  },
  {
    x: '通识选修课',
    y: 2341,
  },
  {
    x: '专业选修课',
    y: 1231,
  },
  {
    x: '其他',
    y: 1231,
  },
];

const salesTypeDataOnline = [
  {
    x: '专业主干课',
    y: 4544,
  },
  {
    x: '个性发展课',
    y: 3321,
  },
  {
    x: '通识核心课',
    y: 3113,
  },
  {
    x: '通识选修课',
    y: 2341,
  },
  {
    x: '专业选修课',
    y: 1231,
  },
  {
    x: '其他',
    y: 1231,
  },
];

const salesTypeDataOffline = [
  {
    x: '专业主干课',
    y: 4544,
  },
  {
    x: '个性发展课',
    y: 3321,
  },
  {
    x: '通识核心课',
    y: 3113,
  },
  {
    x: '通识选修课',
    y: 2341,
  },
  {
    x: '专业选修课',
    y: 1231,
  },
  {
    x: '其他',
    y: 1231,
  },
];

const offlineData = [];
offlineData.push({
  name: `全年级`,
  cvr: Math.ceil(Math.random() * 9) / 10,
});
for (let i = 1; i < 7; i += 1) {
  offlineData.push({
    name: `210${i}班`,
    cvr: Math.ceil(Math.random() * 9) / 10,
  });
}
offlineData.push({
  name: `基地班`,
  cvr: Math.ceil(Math.random() * 9) / 10,
});
const offlineChartData = {}; // 创建一个空对象
for (let i = offlineData.length - 1; i >= 0; i--) { // 遍历offlineData数组
  const name = offlineData[i].name; // 获取每个元素的name属性
  offlineChartData[name] = []; // 在对象中创建一个以name为键的空数组
  for (let j = 1; j < 20; j += 1) { // 遍历20期
    const date = `第${j}期`;
    let completionRate = Math.floor(Math.random() * (100 - 50 + 1) + 50);
    if (i === 0 && j === 19) { // 如果是全年级
      let sum = 0; // 计算各个班级的完成率之和
      for (let k = 1; k < offlineData.length; k++) {
        sum += offlineData[k].cvr * 100;
      }
      completionRate = Math.round(sum / (offlineData.length - 1)); // 计算平均值并四舍五入
    }
    offlineData[i].cvr = Number((completionRate / 100).toFixed(2));
    offlineChartData[name].push({ // 向数组中添加数据
      date,
      type: '完成率',
      value: completionRate,
    });
    offlineChartData[name].push({
      date,
      type: '未完成率',
      value: 100 - completionRate,
    });
  }
}

const radarOriginData = [
  {
    name: '个人',
    ref: 10,
    koubei: 8,
    output: 4,
    contribute: 5,
    hot: 7,
  },
  {
    name: '团队',
    ref: 3,
    koubei: 9,
    output: 6,
    contribute: 3,
    hot: 1,
  },
  {
    name: '部门',
    ref: 4,
    koubei: 1,
    output: 6,
    contribute: 5,
    hot: 7,
  },
];

const radarData: RadarData[] = [];
const radarTitleMap = {
  ref: '引用',
  koubei: '口碑',
  output: '产量',
  contribute: '贡献',
  hot: '热度',
};
radarOriginData.forEach((item) => {
  Object.keys(item).forEach((key) => {
    if (key !== 'name') {
      radarData.push({
        name: item.name,
        label: radarTitleMap[key],
        value: item[key],
      });
    }
  });
});

const getFakeChartData: AnalysisData = {
  visitData,
  visitData2,
  salesData,
  searchData,
  offlineData,
  offlineChartData,
  salesTypeData,
  salesTypeDataOnline,
  salesTypeDataOffline,
  radarData,
};

const fakeChartData = (_: Request, res: Response) => {
  return res.json({
    data: getFakeChartData,
  });
};

export default {
  'GET  /api/fake_analysis_chart_data': fakeChartData,
};
