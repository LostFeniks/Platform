// src/index.js

function info() {
  const m = new Map();
  m.set('name', 'ajs');
  m.set('version', '1.0.0');
  return m;
}

// CommonJS экспорт для корректной сборки UMD
module.exports = {
  info
};
