export default async function payloadAdaptor(arg1, arg2) {
  return Promise.resolve({
    isBase64Encoded: false,
    body: `${arg1} ${arg2}!`,
  });
}
