const request = require('request');

const uri = process.env.EDGEMICRO_VAULTS_URI;

request({
  uri: uri,
  method: 'GET',
  auth: {
    username: process.env.EDGEMICRO_USERNAME,
    password: process.env.EDGEMICRO_PASSWORD
  }
}, (err, res, body) => {
  if(err) {
    return console.log(err);
  }

  console.log(body);
});
