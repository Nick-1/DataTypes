'use strict';

const inc = obj => {
  obj.n += 1;
};
const obj = { n: 5 };

inc(obj);

module.exports = { inc };
