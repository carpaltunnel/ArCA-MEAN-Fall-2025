import axios  from 'axios';

const response = await axios.get('http://httpbin.org/get');
console.log(`Status Code : ${response.status}\nData :\n ${JSON.stringify(response.data, null, 2)}`);