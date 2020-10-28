import React from 'react';
import { Menu} from 'antd'; 
import SubMenu from 'antd/lib/menu/SubMenu';
const MenuItemGroup = Menu.ItemGroup;

function LeftMenu() {
    return (
        <Menu mode="horizontal">
        <Menu.Item key="mail">
            <h3 className="headerpagetext">Home</h3>
            </Menu.Item>
            <SubMenu title={<h3 className="headerpagetext">Boards</h3>}>
            <MenuItemGroup title="Item 1">
                <Menu.Item key="setting:1">Option 1</Menu.Item>
                <Menu.Item key="setting:2">Option 2</Menu.Item>
            </MenuItemGroup>
            <MenuItemGroup title="Item 2">
                <Menu.Item key="setting:3">Option 3</Menu.Item>
                <Menu.Item key="setting:4">Option 4</Menu.Item>
            </MenuItemGroup>
            </SubMenu>
            <Menu.Item key="alipay">
            <h3 className="headerpagetext">About Us</h3>
        </Menu.Item>
      </Menu>
    )
}

export default LeftMenu
