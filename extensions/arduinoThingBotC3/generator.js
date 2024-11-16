/* eslint-disable */

function registerGenerators(Blockly) {

    function mapValue(value, fromLow, fromHigh, toLow, toHigh) {
        return (value - fromLow) * (toHigh - toLow) / (fromHigh - fromLow) + toLow;
    };

    Blockly.Arduino.thingBotC3_init = function () {
        Blockly.Arduino.includes_.thingBot_pwmInit = `#include <Wire.h>\n#include <Adafruit_PWMServoDriver.h>\n`
        Blockly.Arduino.definitions_['define_M1_A'] = '#define M1_A 4';
        Blockly.Arduino.definitions_['define_M1_B'] = '#define M1_B 5';
        Blockly.Arduino.definitions_['define_M2_A'] = '#define M2_A 7';
        Blockly.Arduino.definitions_['define_M2_B'] = '#define M2_B 6';
        Blockly.Arduino.definitions_['define_M3_A'] = '#define M3_A 1';
        Blockly.Arduino.definitions_['define_M3_B'] = '#define M3_B 0';
        Blockly.Arduino.definitions_['define_M4_A'] = '#define M4_A 2';
        Blockly.Arduino.definitions_['define_M4_B'] = '#define M4_B 3';

        Blockly.Arduino.definitions_['define_SERVO_1'] = '#define SERVO_1 12';
        Blockly.Arduino.definitions_['define_SERVO_2'] = '#define SERVO_2 11';
        Blockly.Arduino.definitions_['define_SERVO_3'] = '#define SERVO_3 10';
        Blockly.Arduino.definitions_['define_SERVO_4'] = '#define SERVO_4 9';
        Blockly.Arduino.definitions_['define_SERVO_5'] = '#define SERVO_5 8';

        Blockly.Arduino.definitions_['define_buzzer_pin'] = '#define BUZZER 14';
        Blockly.Arduino.definitions_['define_LED_1_pin'] = '#define LED_1 13';
        Blockly.Arduino.definitions_['define_LED_2_pin'] = '#define LED_2 15';

        Blockly.Arduino.definitions_.thing_motorInit = `Adafruit_PWMServoDriver pwm = Adafruit_PWMServoDriver();\n`;

        return 'pwm.begin();\npwm.setOscillatorFrequency(27000000);\npwm.setPWMFreq(50);\n';
    };

    Blockly.Arduino.thingBotC3_setMotor = function (block) {
        const motor = block.getFieldValue('MOTOR');
        const speed = Blockly.Arduino.valueToCode(block, 'SPEED', Blockly.Arduino.ORDER_ATOMIC);
        const direction = block.getFieldValue('DIRECTION');

        mappedSpeed = parseInt(mapValue(speed, 0, 100, 0, 4095));

        if (direction == 'forward') {
            return `pwm.setPWM(M${motor}_A, 0, 0);\npwm.setPWM(M${motor}_B, 0, ${mappedSpeed});\n`;
        } else {
            return `pwm.setPWM(M${motor}_A, 0, ${mappedSpeed});\npwm.setPWM(M${motor}_B, 0, 0);\n`;
        }
    };

    Blockly.Arduino.thingBotC3_setServo = function (block) {
        const servo = block.getFieldValue('SERVO');
        const pulse = Blockly.Arduino.valueToCode(block, 'PULSE', Blockly.Arduino.ORDER_ATOMIC);
        return `pwm.setPWM(SERVO_${servo}, 0, ${pulse});\n`;
    };

    Blockly.Arduino.thingBotC3_buzzer = function (block) {
        const sound = Blockly.Arduino.valueToCode(block, 'SOUND', Blockly.Arduino.ORDER_ATOMIC);

        mappedSound = parseInt(mapValue(sound, 0, 100, 0, 4095));

        return `pwm.setPin(BUZZER, 0, ${mappedSound});\n`;
    };

    Blockly.Arduino.thingBotC3_setLed = function (block) {
        const led = block.getFieldValue('LED');
        const brightness = Blockly.Arduino.valueToCode(block, 'BRIGHTNESS', Blockly.Arduino.ORDER_ATOMIC);

        mappedBrightness = parseInt(mapValue(brightness, 0, 100, 0, 4095));
        
        return `pwm.setPin(${led}, ${mappedBrightness}, true);\n`;
    };

    return Blockly;
}

exports = registerGenerators;
