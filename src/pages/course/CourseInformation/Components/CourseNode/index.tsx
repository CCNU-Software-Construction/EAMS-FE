import { Card, Tooltip } from 'antd';
import { Handle, NodeProps, Position } from 'reactflow';

export type CourseData = {
  text: string;
  node: { left: 'source' | 'target' | ''; right: 'source' | 'target' | '' };
  links: { type: 'pdf' | 'doc' | 'task' | 'ppt'; link: string; text: string }[];
};
export default function CourseNode(props: NodeProps<CourseData>) {
  return (
    <Card
      title={props.data?.text ?? ''}
      bordered={false}
      size="small"
      style={{ width: 200 }}
      bodyStyle={{ background: '#EEF6EE' }}
      headStyle={{ background: '#EEF6EE' }}
    >
      <div style={{ display: 'flex', flexWrap: 'wrap' }}>
        {props.data?.links.map((link) => {
          // 根据类型选择图标
          let color = '';
          if (link.type === 'pdf') {
            color = '#C54442';
          } else if (link.type === 'doc') {
            color = '#7392AF';
          } else if (link.type === 'task') {
            color = '#A4D9CC';
          } else if (link.type === 'ppt') {
            color = '#FF8F6B';
          }
          // 返回带有图标和类型的链接
          return (
            <a href={link.link} target="_blank" rel="noreferrer" key={link.text}>
              {/*{icon} {link.text}*/}
              <Tooltip title={link.text}>
                <div
                  style={{
                    backgroundColor: color,
                    color: 'white',
                    padding: '0 5px',
                    margin: '5px',
                    width: 'min-content',
                  }}
                >
                  {link.type.toUpperCase()}
                </div>
              </Tooltip>
            </a>
          );
        })}
      </div>
      {props.data?.node.left === '' ? (
        ''
      ) : (
        <Handle type={props.data?.node.left} id="left" position={Position.Left} />
      )}
      {props.data?.node.right === '' ? (
        ''
      ) : (
        <Handle type={props.data?.node.right} id="right" position={Position.Right} />
      )}
    </Card>
  );
}
