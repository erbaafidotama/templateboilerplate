/**
 *
 * TableAntd
 *
 */

import React from 'react';
// import PropTypes from 'prop-types';
// import styled from 'styled-components';

import { Table } from 'antd';

import { FormattedMessage } from 'react-intl';
import messages from './messages';

function TableAntd(props) {
  console.log(props);
  return (
    <div>
      <Table
        loading={props.showLoading}
        small
        dataSource={props.data}
        columns={props.column}
      />
    </div>
  );
}

TableAntd.propTypes = {};

export default TableAntd;
