/* eslint-disable */

function registerGenerators(Blockly) {

    function mapValue(value, inMin, inMax, outMin, outMax) {
        return (value - inMin) * (outMax - outMin) / (inMax - inMin) + outMin;
    };

    function defineMotorsPin() {
        Blockly.Arduino.definitions_['define_motor_1'] = `#define MOTOR_1_A 8\n#define MOTOR_1_B 9`;
        Blockly.Arduino.definitions_['define_motor_2'] = `#define MOTOR_2_A 10\n#define MOTOR_2_B 11`;
        Blockly.Arduino.definitions_['define_motor_3'] = `#define MOTOR_3_A 12\n#define MOTOR_3_B 13`;
        Blockly.Arduino.definitions_['define_motor_4'] = `#define MOTOR_4_A 14\n#define MOTOR_4_B 15\n`;
    };

    function defineServosPin() {
        Blockly.Arduino.definitions_['define_servo_1'] = `#define SERVO_1 2`;
        Blockly.Arduino.definitions_['define_servo_2'] = `#define SERVO_2 3`;
        Blockly.Arduino.definitions_['define_servo_3'] = `#define SERVO_3 4`;
        Blockly.Arduino.definitions_['define_servo_4'] = `#define SERVO_4 5`;
        Blockly.Arduino.definitions_['define_servo_5'] = `#define SERVO_5 6`;
        Blockly.Arduino.definitions_['define_servo_6'] = `#define SERVO_6 7\n`;
    }

    Blockly.Arduino.viaBanhMi_pwmInit = function() {
        Blockly.Arduino.includes_.viaBanhMi_pwmInit = `#include <Adafruit_PWMServoDriver.h>`;
        Blockly.Arduino.definitions_.viaBanhMi_pwmInit = `Adafruit_PWMServoDriver pwm = Adafruit_PWMServoDriver();\n`;
        return `pwm.begin();\npwm.setOscillatorFrequency(27000000);\npwm.setPWMFreq(50);\n`;
    };

    Blockly.Arduino.viaBanhMi_setMotor = function(block) {
        const motor = block.getFieldValue('MOTOR');
        const speed = Blockly.Arduino.valueToCode(block, 'SPEED', Blockly.Arduino.ORDER_ATOMIC);
        const direction = block.getFieldValue('DIRECTION');
        defineMotorsPin();
        if (direction == 'forward') {
            return `pwm.setPWM(MOTOR_${motor}_A, 0, 0);\npwm.setPWM(MOTOR_${motor}_B, 0, ${speed});\n`;
        } else {
            return `pwm.setPWM(MOTOR_${motor}_A, 0, ${speed});\npwm.setPWM(MOTOR_${motor}_B, 0, 0);\n`;
        }
    };

    Blockly.Arduino.viaBanhMi_setServo = function(block) {
        const servo = block.getFieldValue('SERVO');
        const angle = Blockly.Arduino.valueToCode(block, 'ANGLE', Blockly.Arduino.ORDER_ATOMIC);
        defineServosPin();
        const pulse = mapValue(angle, 0, 180, 150, 600);
        return `pwm.setPWM(SERVO_${servo}, 0, ${pulse});\n`;
    };

    Blockly.Arduino.viaBanhMi_initMPU = function(block) {
        const ar = block.getFieldValue('AR');
        const gr = block.getFieldValue('GR');
        const fb = block.getFieldValue('FB');

        Blockly.Arduino.includes_.viaBanhMi_initMPU = `#include <Adafruit_MPU6050.h>\n#include <Adafruit_Sensor.h>\n#include <Wire.h>`;
        Blockly.Arduino.definitions_.viaBanhMi_initMPU = `Adafruit_MPU6050 mpu6050;\nsensors_event_t mpu_a, mpu_g, mpu_temp;\n`;
        return `mpu6050.begin(0x69);\nmpu6050.setAccelerometerRange(${ar});\nmpu6050.setGyroRange(${gr});\nmpu6050.setFilterBandwidth(${fb});\n`;
    };

    Blockly.Arduino.viaBanhMi_mpuReadData = function() {
        return `mpu6050.getEvent(&mpu_a, &mpu_g, &mpu_temp);\n`;
    }

    Blockly.Arduino.viaBanhMi_mpuAcceleration = function (block) {
        const axis = block.getFieldValue('AXIS');
        return [`mpu_a.acceleration.${axis}`, Blockly.Arduino.ORDER_ATOMIC];
    }

    Blockly.Arduino.viaBanhMi_mpuGyro = function(block) {
        const axis = block.getFieldValue('AXIS');
        return [`mpu_g.gyro.${axis}`, Blockly.Arduino.ORDER_ATOMIC];
    }

    Blockly.Arduino.viaBanhMi_mpuTemperature = function() {
        return [`mpu_temp.temperature`, Blockly.Arduino.ORDER_ATOMIC];
    }

    return Blockly;
}

exports = registerGenerators;
