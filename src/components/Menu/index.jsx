import { Menu } from 'antd';
import React from 'react';
import { MENU_ITEMS } from '../../constants';

const MenuNavigation = ({ setValues, values }) => {
  const { selectedMenuItem } = values;
  return (
    <Menu
      style={{ height: '100%', width: '250px' }}
      selectedKeys={selectedMenuItem}
      mode="inline"
      theme="dark"
      items={MENU_ITEMS}
      onSelect={({ key }) => setValues({ ...values, selectedMenuItem: [key] })}
    />
  );
};

export default MenuNavigation;