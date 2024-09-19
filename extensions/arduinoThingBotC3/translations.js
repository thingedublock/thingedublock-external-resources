/* eslint-disable */

function getInterfaceTranslations() {
  return {
    "en": {
      "arduinoThingBotC3.name": "Arduino ThingBot C3",
      "arduinoThingBotC3.description": "The open-source Arduino code for Cobot is developed and shared non-profit by Maker Việt, with the support of ThingEdu"
    },
  };
}

function registerScratchExtensionTranslations() {
  return {};
}

function registerBlocksMessages(Blockly) {
  Object.assign(Blockly.ScratchMsgs.locales["en"], {
    "THINGBOTC3_CATEGORY": "ThingBot",
    "THINGBOTC3_MOTOR_INIT": "init motor-servo controller",
    "THINGBOTC3_SET_MOTOR": "set motor %1 go %2 at speed %3",
    "THINGBOTC3_SET_SERVO": "set servo %1 to pulse %2",
  });

  return Blockly;
}

if (typeof module !== 'undefined') {
  module.exports = { getInterfaceTranslations };
}
exports = registerScratchExtensionTranslations;
exports = registerBlocksMessages;
