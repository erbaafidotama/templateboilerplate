/**
 *
 * Costumer
 *
 */

import React, { useState, useEffect } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { Helmet } from 'react-helmet';
import { FormattedMessage } from 'react-intl';
import { createStructuredSelector } from 'reselect';
import { compose } from 'redux';

import { useInjectSaga } from 'utils/injectSaga';
import { useInjectReducer } from 'utils/injectReducer';

import Table from 'components/TableAntd/Loadable';

import { makeSelectGetListCostumers, makeSelectCostumer } from './selectors';
import reducer from './reducer';
import saga from './saga';
import messages from './messages';

import { actGetListCostumers } from './actions';

import { componentDidMount, componentDidUpdate } from '../../utils/lifeCycle';

export function Costumer(props) {
  useInjectReducer({ key: 'costumer', reducer });
  useInjectSaga({ key: 'costumer', saga });

  const [isLoading, setIsLoading] = useState(true);

  componentDidMount(() => {
    props.doGetListCostumers();
  });

  // componentDidUpdate(() => {
  //   if (
  //     props.dataListCostumers &&
  //     props.dataListCostumers.status &&
  //     !isLoading
  //   ) {
  //     if (
  //       props.dataListCostumers.status >= 200 &&
  //       props.dataListCostumers.status <= 300
  //     ) {
  //       setIsLoading(false);
  //     }
  //   }
  // });

  useEffect(() => {
    console.log('OOOO', props.dataListCostumers, !isLoading);
    if (
      props.dataListCostumers &&
      props.dataListCostumers.status &&
      isLoading
    ) {
      if (
        props.dataListCostumers.status >= 200 &&
        props.dataListCostumers.status <= 300
      ) {
        setIsLoading(false);
      }
    }
  });

  const columns = [
    {
      title: 'Name',
      dataIndex: 'employee_name',
      key: 'employee_name',
    },
    {
      title: 'Age',
      dataIndex: 'employee_age',
      key: 'employee_age',
    },
    {
      title: 'Salary',
      dataIndex: 'employee_salary',
      key: 'employee_salary',
    },
  ];
  console.log(props);
  console.log(
    props.dataListCostumers.data && props.dataListCostumers.data.data,
  );

  return (
    <div>
      <Helmet>
        <title>Costumer</title>
        <meta name="description" content="Description of Costumer" />
      </Helmet>
      {/* <FormattedMessage {...messages.header} /> */}
      <Table
        showLoading={isLoading}
        data={props.dataListCostumers.data && props.dataListCostumers.data.data}
        column={columns}
      />
    </div>
  );
}

Costumer.propTypes = {
  dispatch: PropTypes.func.isRequired,
};

const mapStateToProps = createStructuredSelector({
  costumer: makeSelectCostumer(),
  // initialValues: makeSelectCostumer(),
  dataListCostumers: makeSelectGetListCostumers(),
});

function mapDispatchToProps(dispatch) {
  return {
    dispatch,
    doGetListCostumers: e => dispatch(actGetListCostumers(e)),
  };
}

const withConnect = connect(
  mapStateToProps,
  mapDispatchToProps,
);

export default compose(withConnect)(Costumer);
