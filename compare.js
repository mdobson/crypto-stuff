const request = require('request');
const yaml = require('js-yaml');
const fs = require('fs');

const keyUri = process.env.EDGEMICRO_PUBLIC_KEY_URL;
const configPath = process.env.EDGEMICRO_CONFIG_PATH;

var yamlDoc = yaml.safeLoad(fs.readFileSync(configPath, 'utf8'));
var key = yamlDoc.oauth.public_key;

request(keyUri, (err, res, body) => {
  console.log('yaml key');
  console.log(key);

  console.log('API key');
  console.log(body);

  console.log('I wonder if they are equal');
  console.log(key == body);
});

