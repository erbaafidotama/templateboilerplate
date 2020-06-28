/**
 *
 * Navbar
 *
 */

import React, { useState } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { Helmet } from 'react-helmet';
import { FormattedMessage } from 'react-intl';
import { createStructuredSelector } from 'reselect';
import { compose } from 'redux';
import { push } from 'react-router-redux';

import { useInjectSaga } from 'utils/injectSaga';
import { useInjectReducer } from 'utils/injectReducer';

import { Drawer, Button, Menu } from 'antd';
import {
  AppstoreOutlined,
  MailOutlined,
  SettingOutlined,
} from '@ant-design/icons';

import makeSelectNavbar from './selectors';
import reducer from './reducer';
import saga from './saga';
import messages from './messages';
import './styles.scss';

const { SubMenu } = Menu;

export function Navbar(props) {
  useInjectReducer({ key: 'navbar', reducer });
  useInjectSaga({ key: 'navbar', saga });

  const [current, setCurrent] = useState('mail');
  const [visible, setVisible] = useState(false);

  const showDrawer = () => {
    setVisible(true);
  };

  const onClose = () => {
    setVisible(false);
  };
  console.log(props);
  const routeChange = () => {
    const path = `costumer`;
    props.dispatch(push(path));
    setVisible(false);
  };

  return (
    <div>
      <Helmet>
        <title>Navbar</title>
        <meta name="description" content="Description of Navbar" />
      </Helmet>
      <div>
        <nav className="menuBar">
          <div className="logo">
            <a href="">logo</a>
          </div>
          <div className="menuCon">
            <Button className="barsMenu" type="primary" onClick={showDrawer}>
              <span className="barsBtn" />
            </Button>
            <Drawer
              // width={640}
              placement="left"
              closable={false}
              onClose={onClose}
              visible={visible}
            >
              <Menu
                // onClick={this.handleClick}
                style={{ width: 256 }}
                // defaultSelectedKeys={['1']}
                // defaultOpenKeys={['sub1']}
                mode="inline"
              >
                <SubMenu
                  key="sub2"
                  icon={<AppstoreOutlined />}
                  title="Master Data"
                >
                  <Menu.Item onClick={routeChange} key="5">
                    Costumer
                  </Menu.Item>
                  <Menu.Item key="6">Option 6</Menu.Item>
                  <SubMenu key="sub3" title="Submenu">
                    <Menu.Item key="7">Option 7</Menu.Item>
                    <Menu.Item key="8">Option 8</Menu.Item>
                  </SubMenu>
                </SubMenu>
                <SubMenu
                  key="sub1"
                  title={
                    <span>
                      <MailOutlined />
                      <span>Navigation One</span>
                    </span>
                  }
                >
                  <Menu.ItemGroup key="g1" title="Item 1">
                    <Menu.Item onClick={routeChange} key="1">
                      Costumer
                    </Menu.Item>
                    <Menu.Item key="2">Option 2</Menu.Item>
                  </Menu.ItemGroup>
                  <Menu.ItemGroup key="g2" title="Item 2">
                    <Menu.Item key="3">Option 3</Menu.Item>
                    <Menu.Item key="4">Option 4</Menu.Item>
                  </Menu.ItemGroup>
                </SubMenu>
                <SubMenu
                  key="sub4"
                  title={
                    <span>
                      <SettingOutlined />
                      <span>Navigation Three</span>
                    </span>
                  }
                >
                  <Menu.Item key="9">Option 9</Menu.Item>
                  <Menu.Item key="10">Option 10</Menu.Item>
                  <Menu.Item key="11">Option 11</Menu.Item>
                  <Menu.Item key="12">Option 12</Menu.Item>
                </SubMenu>
              </Menu>
            </Drawer>
          </div>
        </nav>
      </div>
    </div>
  );
}

Navbar.propTypes = {
  dispatch: PropTypes.func.isRequired,
};

const mapStateToProps = createStructuredSelector({
  navbar: makeSelectNavbar(),
});

function mapDispatchToProps(dispatch) {
  return {
    dispatch,
  };
}

const withConnect = connect(
  mapStateToProps,
  mapDispatchToProps,
);

export default compose(withConnect)(Navbar);
