const pem = require('pem');

module.exports = (cb) => {
  const opts = {
    selfSigned: true,
    days: 1
  }

  pem.createCertificate(opts, (err, keys) => {
    if(err) {
      return cb(err);
    }
    const privateKey = keys.serviceKey;
    const publicKey = keys.certificate;


    console.log('Private:');

    console.log(privateKey);

    console.log('\nPublic:');

    console.log(publicKey);

    cb(null, privateKey, publicKey);
  });
}

