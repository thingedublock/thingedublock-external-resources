// This file was automatically generated. Do not modify.
/* eslint-disable func-style */
/* eslint-disable require-jsdoc */
/* eslint-disable quotes */
/* eslint-disable quote-props */
/* eslint-disable dot-notation */
/* eslint-disable max-len */
function getInterfaceTranslations () {
    return {
        "en": {
            "thingC3_block.name": "ThingC3 Block",
            "thingC3_block.description": "ThingC3 Module",
        }
    }
    ;
}

function registerScratchExtensionTranslations () {
    return {};
}

function registerBlocksMessages (Blockly) {
    Object.assign(Blockly.ScratchMsgs.locales["en"],
        {
            "THING_CATEGORY": "THING Block",
            "THING_INIT": "init board",
            "THING_SET_MOTOR": "set motor %1",
            "THING_BUZZER": "set buzzer %1",
            "THING_STOP_BUZZER": "stop buzzer",
            "THING_SET_LED": "set led %1 %2"
        }
    );
    return Blockly;
}

if (typeof module !== 'undefined') {
    module.exports = {getInterfaceTranslations};
}
exports = registerScratchExtensionTranslations;
exports = registerBlocksMessages;
