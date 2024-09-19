/* eslint-disable */

function registerGenerators(Blockly) {

    function mapValue(value, fromLow, fromHigh, toLow, toHigh) {
        return (value - fromLow) * (toHigh - toLow) / (fromHigh - fromLow) + toLow;
    };

    function defineMotorsPin() {
        Blockly.Arduino.definitions_['define_motor_1'] = `#define MOTOR_1_A 2\n#define MOTOR_1_B 10`;
        Blockly.Arduino.definitions_['define_motor_2'] = `#define MOTOR_2_A 6\n#define MOTOR_2_B 5`;
        Blockly.Arduino.definitions_['define_motor_3'] = `#define MOTOR_3_A 4\n#define MOTOR_3_B 5`;
        Blockly.Arduino.definitions_['define_motor_4'] = `#define MOTOR_4_A 0\n#define MOTOR_4_B 1\n`;

        Blockly.Arduino.definitions_['define_motor_1_channel_a'] = `#define MOTOR_1_A_CHANNEL 0`;
        Blockly.Arduino.definitions_['define_motor_1_channel_b'] = `#define MOTOR_1_B_CHANNEL 1`;
        Blockly.Arduino.definitions_['define_motor_2_channel_a'] = `#define MOTOR_2_A_CHANNEL 2`;
        Blockly.Arduino.definitions_['define_motor_2_channel_b'] = `#define MOTOR_2_B_CHANNEL 3\n`;
    };

    function defineServosPin() {
        Blockly.Arduino.definitions_['define_servo_1'] = `#define SERVO_1 2`;
        Blockly.Arduino.definitions_['define_servo_2'] = `#define SERVO_2 3`;
        Blockly.Arduino.definitions_['define_servo_3'] = `#define SERVO_3 13`;
        Blockly.Arduino.definitions_['define_servo_4'] = `#define SERVO_4 14`;
        Blockly.Arduino.definitions_['define_servo_5'] = `#define SERVO_5 15\n`;
    };

    Blockly.Arduino.thingBotC3_motorInit = function () {
        defineMotorsPin();
        Blockly.Arduino.includes_.thingBotC3_motorInit = `#include <Wire.h>\n#include <Adafruit_PWMServoDriver.h>`
        Blockly.Arduino.definitions_.thingBotC3_motorInit = `Adafruit_PWMServoDriver pwm = Adafruit_PWMServoDriver();\n`;
        return `pwm.begin();\npwm.setOscillatorFrequency(27000000);\npwm.setPWMFreq(50);\n\nledcAttachChannel(MOTOR_1_A, 5000, 8, MOTOR_1_A_CHANNEL);\nledcAttachChannel(MOTOR_1_B, 5000, 8, MOTOR_1_B_CHANNEL);\nledcAttachChannel(MOTOR_2_A, 5000, 8, MOTOR_2_A_CHANNEL);\nledcAttachChannel(MOTOR_2_B, 5000, 8, MOTOR_2_B_CHANNEL);\n`;
    };

    Blockly.Arduino.thingBotC3_setMotor = function (block) {
        const motor = block.getFieldValue('MOTOR');
        const direction = block.getFieldValue('DIRECTION');
        const speed = Blockly.Arduino.valueToCode(block, 'SPEED', Blockly.Arduino.ORDER_ATOMIC);
        if (motor == '1' || motor == '2') {
            mappedSpeed = parseInt(mapValue(speed, 0, 4096, 0, 255));
            if (direction == 'forward') {
                return `ledcWriteChannel(MOTOR_${motor}_A_CHANNEL, ${mappedSpeed});\nledcWriteChannel(MOTOR_${motor}_B_CHANNEL, 0);\n`;
            }
            return `ledcWriteChannel(MOTOR_${motor}_A_CHANNEL, 0);\nledcWriteChannel(MOTOR_${motor}_B_CHANNEL, ${mappedSpeed});\n`;
        }
        mappedSpeed = parseInt(mapValue(speed, 0, 4096, 0, 4096));
        if (direction == 'forward') {
            return `pwm.setPWM(MOTOR_${motor}_A, 0, ${mappedSpeed});\npwm.setPWM(MOTOR_${motor}_B, 0, 0);\n`;
        }
        return `pwm.setPWM(MOTOR_${motor}_A, 0, 0);\npwm.setPWM(MOTOR_${motor}_B, 0, ${mappedSpeed});\n`;
    };

    Blockly.Arduino.thingBotC3_setServo = function (block) {
        const servo = block.getFieldValue('SERVO');
        const pulse = Blockly.Arduino.valueToCode(block, 'PULSE', Blockly.Arduino.ORDER_ATOMIC);
        defineServosPin();
        return `pwm.setPWM(SERVO_${servo}, 0, ${pulse});\n`;
    }

    return Blockly;
}

exports = registerGenerators;
