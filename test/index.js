const path = require('path');
const csvToLanguageFiles = require('../src/index.js');

csvToLanguageFiles(
    path.join(__dirname, './web.csv'),
    {
        outputDir: path.join(__dirname, './output'),
        fileType: 'js',
        ignoreColumns: [0],
        keyColumn: 1,
        fold: true
    }
).then(resp => {
    console.warn(resp);
    console.warn('全部写入完成了');
}).catch(error => {
    console.warn(error);
    console.warn('全部写入失败了');
});


// console.warn('test');

