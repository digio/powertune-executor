import { processTuneConfig } from './ptx.js';
import fs from 'node:fs';

describe('PowerTune Executor', () => {
  describe('processTuneConfig()', () => {
    it('should process the payload property when it is an object', async () => {
      const context = {
        configFile: getFixtureConfigPath('payloadObject.json'),
      };
      const expectedPayload = getFixturePayload('p1.json'); // <--  The config refers to this payload

      const { tuneConfig } = await processTuneConfig(context);
      expect(tuneConfig.payload).toEqual(expectedPayload);
    });

    it('should process the payload property when it is an array', async () => {
      const context = {
        configFile: getFixtureConfigPath('payloadArray.json'),
      };
      const expectedPayload1 = getFixturePayload('p1.json'); // <--  The config refers to this payload
      const expectedPayload2 = getFixturePayload('p2.json'); // <--  The config refers to this payload

      const { tuneConfig } = await processTuneConfig(context);
      expect(tuneConfig.payload[0].payload).toEqual(expectedPayload1);
      expect(tuneConfig.payload[1].payload).toEqual(expectedPayload2);
    });

    it('should process the payload property when it is an array and includes a CJS function', async () => {
      const context = {
        configFile: getFixtureConfigPath('payloadCJSFunction.json'),
      };

      const { tuneConfig } = await processTuneConfig(context);
      expect(tuneConfig.payload[0].payload).toEqual({
        isBase64Encoded: false,
        body: 'Hello World CJS!',
      });
    });

    it('should process the payload property when it is an object and includes an ESM function', async () => {
      const context = {
        configFile: getFixtureConfigPath('payloadESMFunction.json'),
      };

      const { tuneConfig } = await processTuneConfig(context);
      expect(tuneConfig.payload).toEqual({
        isBase64Encoded: false,
        body: 'Hello World ESM!',
      });
    });
  });
});

function getFixtureConfigPath(fileName) {
  return `./examples/configs/${fileName}`;
}

function getFixturePayload(fileName) {
  return JSON.parse(fs.readFileSync(`./examples/payloads/${fileName}`).toString());
}
