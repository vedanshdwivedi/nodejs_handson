const { writeFileSync, writeFile } = require('fs')

for (let index = 0; index < 100000; index++) {
    writeFileSync('./big_file.txt', `This is random string : ${index} \n`, {flag: 'a'});
    
}