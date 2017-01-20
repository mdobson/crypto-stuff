const createKeys = require('./create');
const jwt = require('jsonwebtoken');

createKeys((err, privateKey, publicKey) => {
  console.log('sign token');

  jwt.sign({foo: 'bar'}, privateKey, { algorithm: 'RS256' }, (err, token) => {
    if(err) {
      return console.log(err);
    }
    

    console.log('Here is your self signed token: ', token);

    const opts = {
      algorithms: ['RS256'],
      ignoreExpiration: false,
      audience: undefined,
      issuer: undefined
    }

    jwt.verify(token, publicKey, opts, (err, decodedToken) => {
      if(err) {
        return console.log(err);
      }

      console.log('Decoded token: ', decodedToken);
    });
  });

});
