import {useIntl} from 'umi';
import {GithubOutlined} from '@ant-design/icons';
import {DefaultFooter} from '@ant-design/pro-layout';

const Footer: React.FC = () => {
  const intl = useIntl();
  const defaultMessage = intl.formatMessage({
    id: 'app.copyright.produced',
    defaultMessage: '木犀团队出品',
  });

  const currentYear = new Date().getFullYear();

  return (
    <DefaultFooter
      copyright={`${currentYear} ${defaultMessage}`}
      links={[
        {
          key: 'CCNU',
          title: '华中师范大学',
          href: 'https://www.ccnu.edu.cn/',
          blankTarget: true,
        },
        {
          key: 'github',
          title: <GithubOutlined/>,
          href: 'https://github.com/ant-design/ant-design-pro',
          blankTarget: true,
        },
        {
          key: 'MuXi',
          title: '木犀团队',
          href: 'https://muxi-tech.xyz/',
          blankTarget: true,
        },
      ]}
    />
  );
};

export default Footer;
