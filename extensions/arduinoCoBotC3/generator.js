/* eslint-disable func-style */
/* eslint-disable max-len */
/* eslint-disable require-jsdoc */
/* esline-disable dot-notation */

function registerGenerators(Blockly) {

    Blockly.Arduino.coBotC3_pwmInit = function () {
        Blockly.Arduino.includes_.coBotC3_pwmInit = `#include <Wire.h>\n#include <Adafruit_TCS34725.h>`
        Blockly.Arduino.definitions_.coBotC3_pwmInit = `#define W_LED_ON 20\n#define IR_LED_ON 21\n`;
        return `Serial.begin(115200);\n\npinMode(W_LED_ON,OUTPUT);\npinMode(IR_LED_ON,OUTPUT);\n\ndigitalWrite(W_LED_ON, 0);\ndigitalWrite(IR_LED_ON, 1);\n\n`;
    };
    Blockly.Arduino.coBotC3_motorInit = function () {
        Blockly.Arduino.definitions_['define_left_motor_pin_a'] = '#define PWM_PIN_L_A 2';
        Blockly.Arduino.definitions_['define_left_motor_pin_b'] = '#define PWM_PIN_L_B 10';
        Blockly.Arduino.definitions_['define_right_motor_pin_a'] = '#define PWM_PIN_R_A 6';
        Blockly.Arduino.definitions_['define_right_motor_pin_b'] = '#define PWM_PIN_R_B 5';


        Blockly.Arduino.definitions_['define_channel_1'] = `#define left_motor_channel_a 0`;
        Blockly.Arduino.definitions_['define_channel_2'] = `#define left_motor_channel_b 1`;
        Blockly.Arduino.definitions_['define_channel_3'] = `#define right_motor_channel_a 2`;
        Blockly.Arduino.definitions_['define_channel_4'] = `#define right_motor_channel_b 3\n`;
        Blockly.Arduino.definitions_['define_speed'] = `uint8_t vspeed = 100;\nuint8_t tspeed = 100;\n`;
        Blockly.Arduino.definitions_['define_speed_after'] = `uint8_t vspeed_l = vspeed;\nuint8_t tspeed_l = tspeed;\nuint8_t vspeed_r = vspeed * 1.1;\nuint8_t tspeed_r = tspeed * 1.1;\n`;
        return `ledcAttachChannel(PWM_PIN_L_A, 5000, 8, left_motor_channel_a);\nledcAttachChannel(PWM_PIN_L_B, 5000, 8, left_motor_channel_b);\nledcAttachChannel(PWM_PIN_R_A, 5000, 8, right_motor_channel_a);\nledcAttachChannel(PWM_PIN_R_B, 5000, 8, right_motor_channel_b);\n\n`;
    };
    Blockly.Arduino.coBotC3_setMotor = function (block) {
        const direction = block.getFieldValue('DIRECTION');
        if (direction == 'forward') {
            return `ledcWriteChannel(left_motor_channel_a, vspeed_l);\nledcWriteChannel(left_motor_channel_b, 0);\nledcWriteChannel(right_motor_channel_a, vspeed_r);\nledcWriteChannel(right_motor_channel_b, 0);\n`;
        }
        if (direction == 'backward') {
            return `ledcWriteChannel(left_motor_channel_a, 0);\nledcWriteChannel(left_motor_channel_b, vspeed_l);\nledcWriteChannel(right_motor_channel_a, 0);\nledcWriteChannel(right_motor_channel_b, vspeed_r);\n`;
        }
        if (direction == 'left') {
            return `ledcWriteChannel(left_motor_channel_a, 0);\nledcWriteChannel(left_motor_channel_b, tspeed_l);\nledcWriteChannel(right_motor_channel_a, tspeed_r);\nledcWriteChannel(right_motor_channel_b, 0);\n`;
        }
        if (direction == 'right') {
            return `ledcWriteChannel(left_motor_channel_a, tspeed_l);\nledcWriteChannel(left_motor_channel_b, 0);\nledcWriteChannel(right_motor_channel_a, 0);\nledcWriteChannel(right_motor_channel_b, tspeed_r);\n`;
        }
        if (direction == 'stop') {
            return `ledcWriteChannel(left_motor_channel_a, 0);\nledcWriteChannel(left_motor_channel_b, 0);\nledcWriteChannel(right_motor_channel_a, 0);\nledcWriteChannel(right_motor_channel_b, 0);\n`;
        }
    };
    Blockly.Arduino.coBotC3_lineSensorInit = function () {
        Blockly.Arduino.definitions_['define_threshold'] = `#define threshold 2000\n`;
        Blockly.Arduino.definitions_['define_lineSensor_1'] = `#define SENSOR_1_PIN 4`;
        Blockly.Arduino.definitions_['define_lineSensor_2'] = `#define SENSOR_2_PIN 3`;
        Blockly.Arduino.definitions_['define_lineSensor_3'] = `#define SENSOR_3_PIN 1`;
        Blockly.Arduino.definitions_['define_lineSensor_4'] = `#define SENSOR_4_PIN 0`;
        return `\n`;
    };
    Blockly.Arduino.coBotC3_lineSensorState = function () {
        return `analogRead(SENSOR_1_PIN);\nanalogRead(SENSOR_2_PIN);\nanalogRead(SENSOR_3_PIN);\nanalogRead(SENSOR_4_PIN);\n\nuint8_t sensor_array = 0;\nsensor_array += (sensor_1_state <= threshold);\nsensor_array<<=1;\nsensor_array += (sensor_2_state <= threshold);\nsensor_array<<=1;\nsensor_array += (sensor_3_state <= threshold);\nsensor_array<<=1;\nsensor_array += (sensor_4_state <= threshold);\n`;
    };
    Blockly.Arduino.coBotC3_lineSensorValue = function () {
        return [`sensor_array`, Blockly.Arduino.ORDER_ATOMIC];
    };
    return Blockly;
}

exports = registerGenerators;
