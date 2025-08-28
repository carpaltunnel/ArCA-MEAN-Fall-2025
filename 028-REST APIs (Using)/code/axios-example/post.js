import axios from 'axios';

const requestBody = {
  test: true,
  name: 'Testing McTesterson',
  occupation: 'Developer',
};

try {
  const response = await axios.post('http://httpbin.org/post', requestBody);
  console.log(`Status Code : ${response.status}\nData :\n ${JSON.stringify(response.data, null, 2)}`);
} catch (ex) {
  console.error(ex);
}