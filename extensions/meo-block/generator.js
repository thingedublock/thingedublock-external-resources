/* eslint-disable func-style */
/* eslint-disable max-len */
/* eslint-disable require-jsdoc */
function registerGenerators (Blockly) {

    // Blockly.Arduino.meo_init = function () {
    //     Blockly.Arduino.includes_.meo_init = `#include "MeoConnect.h"\n#include "MeoMessage.h"`
    //     Blockly.Arduino.definitions_.meo_init = `MeoConnect meo_con = MeoConnect();\nMeoMessage meo_me = MeoMessage();\n`;

    //     return `Serial.begin(115200);\n\n`;
    // };

    Blockly.Arduino.meo_wificonfig = function (block) {
        const ssid = Blockly.Arduino.valueToCode(block, 'SSID', Blockly.Arduino.ORDER_ATOMIC);
        const password = Blockly.Arduino.valueToCode(block, 'PASSWORD', Blockly.Arduino.ORDER_ATOMIC);
        return `meo_con.setWifiConfig(${ssid}, ${password});\n`;
    };
    Blockly.Arduino.meo_mqttconfig = function (block) {
        const server = Blockly.Arduino.valueToCode(block, 'SERVER', Blockly.Arduino.ORDER_ATOMIC);
        const port = Blockly.Arduino.valueToCode(block, 'PORT', Blockly.Arduino.ORDER_ATOMIC);
        return `meo_con.setMqttConfig(${server},  ${port});\n`;
    };
    Blockly.Arduino.meo_finalconfig = function () {
        Blockly.Arduino.includes_.meo_init = `#include "MeoConnect.h"\n#include "MeoMessage.h"`
        Blockly.Arduino.definitions_.meo_init = `MeoConnect meo_con = MeoConnect();\nMeoMessage meo_me = MeoMessage();\n`;
        
        return `Serial.begin(115200);\n\nmeo_con.initConfig();\n\n`;
    };
    Blockly.Arduino.meo_checkwifi = function () {
        return [`meo_con.client.connected()`, Blockly.Arduino.ORDER_ATOMIC];
    };
    Blockly.Arduino.meo_wifireconnect = function () {
        return `meo_con.reconnect();\n\n`;
    };
    Blockly.Arduino.meo_mqttpublish = function (block) {
        const message = Blockly.Arduino.valueToCode(block, 'MESSAGE', Blockly.Arduino.ORDER_ATOMIC);
        const topic = Blockly.Arduino.valueToCode(block, 'TOPIC', Blockly.Arduino.ORDER_ATOMIC);
        return `meo_me.textMessageSetter(${message});\nmeo_con.pubMessageToTopic(meo_me.messageStorage, ${topic});\nmeo_me.reset();\nmeo_con.client.loop();\n`;
    };

    return Blockly;
}

exports = registerGenerators;
