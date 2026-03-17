// src/index.js

function sum(a, b) {
  return a + b;
}

// CommonJS экспорт, чтобы UMD-сборка работала
module.exports = {
  sum
};