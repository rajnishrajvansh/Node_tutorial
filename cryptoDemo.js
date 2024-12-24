import crypto from 'crypto';

// const hash=crypto.createHash('sha256');
// const name="Aajnish Kumar Singh"
// hash.update(name);
// console.log(hash.digest('hex'));

// crypto.randomBytes(20,(err,buff)=>{
//     if(err) throw err;
//     console.log(buff.toString('hex'));
    
// })

//createCipheriv & createDecipheriv

const algoriths='aes-256-cbc';
const key=crypto.randomBytes(32);
const iv=crypto.randomBytes(16);

const cipher=crypto.createCipheriv(algoriths,key,iv);
let encrypted=cipher.update('Hello,this is a not the secret message','utf8','hex');
encrypted+=cipher.final('hex');
console.log(encrypted);

const decipher=crypto.createDecipheriv(algoriths,key,iv);
let decrypted=decipher.update(encrypted,'hex','utf8');
decrypted+=decipher.final('utf8');
console.log(decrypted);
