const crypto = require('crypto');

const access_token_encrypt_key = crypto.randomBytes(32).toString('hex');
const access_token_encrypt_iv = crypto.randomBytes(16).toString('hex');

const refresh_token_encrypt_key = crypto.randomBytes(32).toString('hex');
const refresh_token_encrypt_iv = crypto.randomBytes(16).toString('hex');

console.log('access_token_encrypt_key ', access_token_encrypt_key);
console.log('access_token_encrypt_iv', access_token_encrypt_iv);
console.log('refresh_token_encrypt_key ', refresh_token_encrypt_key);
console.log('refresh_token_encrypt_iv ', refresh_token_encrypt_iv);
