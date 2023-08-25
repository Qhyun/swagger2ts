const fs = require('fs');

const params = [...process.argv];
params.splice(0, 2);

const typeObj = {
  integer: 'number',
  int32: 'number',
  number: 'number',
  string: 'string'
}

function readAndWriteFile() {
  let jsonData;
  const subClsArr = []

  function writeFile(clsName = params[0]) {
    const writePath = `./output/${clsName}.ts`;
    const findData = jsonData[clsName].properties;
    const lines = [];
    const imports = [];

    fs.writeFileSync(writePath, '');

    lines.push(`export class ${clsName} {\r\n`);

    for (const key of Object.keys(findData)) {
      const tmpObj = findData[key];

      lines.push(`    /**\r\n`);
      lines.push(`     * ${tmpObj.description}\r\n`);
      lines.push(`     */\r\n`);
      lines.push(`    ${key}?: ${getTypeName(tmpObj, imports)};\r\n`);
      lines.push();
    }

    for (const subImp of imports) {
      fs.appendFileSync(writePath, subImp);
    }

    fs.appendFileSync(writePath, `\r\n`)

    for (const subLine of lines) {
      fs.appendFileSync(writePath, subLine);
    }

    fs.appendFileSync(writePath, `}`)
  }

  function getTypeName(obj, imps) {
    let type = typeObj[obj.type];
    if (!type) {
      if (obj.type == 'array') {
        const subType = obj.items['$ref'].replace(/^(.*)\/([a-zA-Z0-9]+)$/, '$2')
        type = `Array<${subType}>`;
        if (!subClsArr.includes(subType)) {
          imps.push(`import { ${subType} } from './${subType}';\r\n`)
          writeFile(subType)
          subClsArr.push(subType)
        }
      } else {
        type = obj['$ref'].replace(/^(.*)\/([a-zA-Z0-9]+)$/, '$2')
        if (!subClsArr.includes(type)) {
          imps.push(`import { ${type} } from './${type}';\r\n`)
          writeFile(type)
          subClsArr.push(type)
        }
      }
    }
  
    return type
  }

  fs.readFile('./data/swagger.json', { encoding: 'utf-8' }, (err, data) => {
    if (err) {
      console.log(err);
      return;
    }
    jsonData = JSON.parse(data)['definitions'];
    writeFile();
  })
}

// function getLastObjName(orgName) {
//   const lastIndex = orgName.lastIndexOf('/')
//   if (lastIndex == -1) {
//     return ""
//   }else {
//     return orgName.substring(lastIndex + 1);
//   }
// }

readAndWriteFile()