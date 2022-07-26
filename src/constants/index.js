import { Tag } from 'antd';
import {
  UserOutlined,
  TableOutlined
} from '@ant-design/icons';

export const MENU_ITEMS = [
  {
    key: 'about',
    icon: <UserOutlined />,
    label: 'About',
  },
  {
    key: 'list',
    icon: <TableOutlined />,
    label: 'List',
  }
];

export const TABLE_COLUMNS = [
  {
    title: 'First Name',
    dataIndex: 'first_name',
    key: 'first_name',
    render: (text) => <a>{text}</a>,
  },
  {
    title: 'Last Name',
    dataIndex: 'last_name',
    key: 'last_name',
  },
  {
    title: 'Position',
    key: 'position',
    dataIndex: 'position',
    render: (value) => value || 'N/A'

  },
  {
    title: 'Team',
    key: 'city',
    dataIndex: 'city'
  },
  {
    title: 'Conference',
    key: 'conference',
    dataIndex: 'conference',
    render: (value) => <Tag color={value === 'West' ? '#41A63D' : '#F83F3F'}>{value}</Tag>
  },
  {
    title: 'Division',
    key: 'division',
    dataIndex: 'division'
  }
];