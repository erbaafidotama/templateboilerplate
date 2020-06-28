import axios from 'axios';

export function apiGetListCostumers(action) {
    console.log('AAAAA');
  const url = `http://dummy.restapiexample.com/api/v1/employees`;

  return new Promise(resolve => {
    axios
      .get(url, {
        params: {},
      })
      .then(response => {
        console.log(response);
        resolve(response);
      })
      .catch(error => {
        resolve(error.response);
      });
  });
}
