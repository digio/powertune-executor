module.exports = function payloadAdaptor(arg1, arg2) {
  return {
    isBase64Encoded: false,
    body: `${arg1} ${arg2}!`,
  };
};
