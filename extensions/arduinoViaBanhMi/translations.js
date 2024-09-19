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
      "arduinoViaBanhMi.name": "Arduino VIA - BanhMi",
      "arduinoViaBanhMi.description": "Arduino VIA - BanhMi is a robot that can be controlled by Scratch."
    },
  };
}

function registerScratchExtensionTranslations() {
  return {};
}

function registerBlocksMessages(Blockly) {
  Object.assign(Blockly.ScratchMsgs.locales["en"], {
    "VIABANHMI_CATEGORY": "VIA - Banh Mi",
    "VIABANHMI_PWM_INIT": "init PWM on VIA BanhMi",
    "VIABANHMI_SET_MOTOR": "set motor %1 go %2 at speed %3",
    "VIABANHMI_SET_SERVO": "set servo %1 to angle %2",
    "VIABANHMI_INIT_MPU": "init MPU accelerometer range %1 gyro range %2 bandwidth %3",
    "VIABANHMI_MPU_READ_DATA": "mpu read data",
    "VIABANHMI_ACCEL": "mpu %1 axis acceleration (m/s^2)",
    "VIABANHMI_GYRO": "mpu %1 axis rotation (°/s)",
    "VIABANHMI_TEMP": "mpu temperature (°C)",
  });

  return Blockly;
}

if (typeof module !== 'undefined') {
  module.exports = { getInterfaceTranslations };
}
exports = registerScratchExtensionTranslations;
exports = registerBlocksMessages;
