const crypto = require('crypto');
const fs = require('fs');

const genKey = (cb) => {
  const byteLength = 256;
  var hash = crypto.createHash('sha256');
  hash.update(Date.now().toString());
  crypto.randomBytes(byteLength, function(err, buf) {
    if(err) { return cb(err); }

    hash.update(buf);
    hash.update(Date.now().toString());
    cb(null, hash.digest('hex'));
  });
}

genKey((err, key) => {
  if(err) {
    return console.log(err);
  }

  fs.writeFileSync('key.key', key);
});
