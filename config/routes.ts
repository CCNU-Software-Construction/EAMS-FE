export default [
  { path: '/user', layout: false, routes: [{ path: '/user/login', component: './User/Login' }] },
  { path: '/welcome', name: '欢迎', icon: 'smile', component: './Welcome' },
  {
    path: '/admin',
    icon: 'crown',
    access: 'canAdmin',
    name: '管理页',
    routes: [
      { path: '/admin', redirect: '/admin/sub-page' },
      { path: '/admin/sub-page', name: '二级页', component: './Admin' },
    ],
  },
  {
    path: '/course',
    icon: 'crown',
    name: '课程页',
    routes: [
      { path: '/course', redirect: '/course/edit' },
      {
        path: '/course/CourseInformation',
        name: '课程信息',
        component: './course/CourseInformation',
      },
      {
        path: '/course/detail',
        name: '课程详情',
        component: './course/Detail',
      },
    ],
  },
  {
    path: '/grade',
    icon: 'crown',
    name: '成绩页',
    routes: [
      { path: '/grade', redirect: '/grade/rank' },
      {
        path: '/grade/rank',
        name: '成绩比对',
        component: './Grade/Rank',
      },
    ],
  },
  {
    path: '/account',
    icon: 'crown',
    name: '个人页',
    routes: [
      { path: '/account', redirect: '/account/course/table' },
      { path: '/account/course/table', name: '个人课表', component: './Account/CourseTable' },
      { path: '/account/setting', name: '个人设置', component: './Account/Setting' },
    ],
  },
  { icon: 'table', path: '/list', component: './TableList' },
  { path: '/', redirect: '/welcome' },
  { path: '*', layout: false, component: './404' },
];
