const csvToJson = require('convert-csv-to-json');

const Product = require('../modal/Product');
function getJsonFromCsv(filepath) {
  return csvToJson.fieldDelimiter('$$,').getJsonFromCsv(filepath);
}
// const productsObj = getJsonFromCsv('src/CSV/Menu.csv');
const productsObj = getJsonFromCsv(process.cwd() + '/src/CSV/Menu.csv');

Product.sync({ force: true }).then(() => {
  Product.bulkCreate(productsObj);
});
