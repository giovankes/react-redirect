const bson = require('bson');

function _getNextObjectSize(buffer) {
  return buffer[0] | (buffer[1] << 8) | (buffer[2] << 16) | (buffer[3] << 24)
}

function deserialize(buffer, options) {
  let _buffer = buffer;
  let _result = [];

  while(_buffer.length > 0) {
    let nextSize = _getNextObjectSize(_buffer);
    if(_buffer.length < nextSize) {
      throw new Error("Corrupted BSON file: the last object is incomplete");
    }
    else if (_buffer[nextSize -  1] !== 0){
      throw new Error(`Corruptes BSON file: the ${_result.length + 1}-th object does not end with 0.`);
    }

    let obj = bson.deserialize(_buffer, {
      ...options,
      allowObjectSmallerThanBufferSize: true,
      promoteBuffers:true
    })
    _result.push(obj);
    _buffer = _buffer.slice(nextSize);
  }
  return _result;
}

module.exports = deserialize;
