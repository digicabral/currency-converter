function multipleExist(arr, values) {
    return values.every(value => {
      return arr.includes(value);
    });
  }
module.exports.multipleExist = multipleExist;