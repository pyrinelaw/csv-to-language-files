## csv-to-language-files

csv 文件转换为多个 language 文件

### 使用示例

web.csv 文件示例
```
示例或说明,key,zh-Hans,en
确认动作,action.confirm,确认,confirm
取消动作,action.cancel,取消,cancel
```

```javascript
const path = require('path');
const csvToLanguageFiles = require('../src/index.js');

csvToLanguageFiles(
    path.join(__dirname, './web.csv'),
    {
        outputDir: __dirname,
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

```

### 参数说明
调用 csvToLanguageFiles(file, option)：

参数     | 类型 | 是否必传 | 默认值 | 说明
-------- | --- | --- | --- | ---
file | String | 是 | undefined | csv 文件绝对路径
option | Object | 否 | undefined | 写入选项

写入选项 option：

参数     | 类型 | 是否必传 | 默认值 | 说明
-------- | --- | --- | --- | ---
outputDir | String | 是 | undefined | 输出目录
fileType | String | 否 | js | 如果是 js 文件，可直接引用，json、txt 以及任意类型均可
ignoreColumns | Array | 否 | [] | 忽略的列
keyColumn | Number | 否 | 0 | 语言 key 标识列
fold | Boolean | 否 | true | 对象中包含对象时是否折叠输出
