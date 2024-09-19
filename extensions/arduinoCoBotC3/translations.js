// This file was automatically generated. Do not modify.
/* eslint-disable func-style */
/* eslint-disable require-jsdoc */
/* eslint-disable quotes */
/* eslint-disable quote-props */
/* eslint-disable dot-notation */
/* eslint-disable max-len */
function getInterfaceTranslations() {
  return {
    "en": {
      "arduinoCoBotC3.name": "Arduino CoBotC3",
      "arduinoCoBotC3.description": "The open-source Arduino code for Cobot is developed and shared non-profit by Maker Việt, with the support of ThingEdu"
    },
  };
}

function registerScratchExtensionTranslations() {
  return {};
}

function registerBlocksMessages(Blockly) {
  Object.assign(Blockly.ScratchMsgs.locales["en"], {
    "COBOTC3_CATEGORY": "CoBot v1",
    "COBOTC3_PWM_INIT": "init cobot",
    "COBOTC3_MOTOR_INIT": "init motor",
    "COBOTC3_SET_MOTOR": "set motor %1",
    "COBOTC3_LINE_SENSOR_INIT": "init line sensor",
    "COBOTC3_LINE_SENSOR_STATE": "get line sensor value",
    "COBOTC3_LINE_SENSOR_VALUE": "read line sensor value",
  });

  return Blockly;
}

if (typeof module !== 'undefined') {
  module.exports = { getInterfaceTranslations };
}
exports = registerScratchExtensionTranslations;
exports = registerBlocksMessages;
