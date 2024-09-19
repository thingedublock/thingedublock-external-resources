/* eslint-disable func-style */
/* eslint-disable max-len */
/* eslint-disable require-jsdoc */
function registerBlocks(Blockly) {
    const color = '#000080';
    const secondaryColor = '#FF4D6A';

    Blockly.Blocks.viaBanhMi_pwmInit = {
        init: function () {
            this.jsonInit({
                message0: Blockly.Msg.VIABANHMI_PWM_INIT,
                colour: color,
                secondaryColour: secondaryColor,
                extensions: ['shape_statement']
            });
        }
    };

    Blockly.Blocks.viaBanhMi_setMotor = {
        init: function () {
            this.jsonInit({
                message0: Blockly.Msg.VIABANHMI_SET_MOTOR,
                args0: [
                    {
                        type: 'field_dropdown',
                        name: 'MOTOR',
                        options: [
                            ['1', '1'],
                            ['2', '2'],
                            ['3', '3'],
                            ['4', '4']
                        ]
                    },
                    {
                        type: 'field_dropdown',
                        name: 'DIRECTION',
                        options: [
                            ['forward', 'forward'],
                            ['backward', 'backward']
                        ]
                    },
                    {
                        type: 'input_value',
                        name: 'SPEED',
                        min: 0,
                        max: 4096,
                        precision: 1,
                        check: 'Number'
                    }
                ],
                colour: '#FF0000',
                extensions: ['shape_statement']
            });
        }
    };

    Blockly.Blocks.viaBanhMi_setServo = {
        init: function () {
            this.jsonInit({
                message0: Blockly.Msg.VIABANHMI_SET_SERVO,
                args0: [
                    {
                        type: 'field_dropdown',
                        name: 'SERVO',
                        options: [
                            ['1', '1'],
                            ['2', '2'],
                            ['3', '3'],
                            ['4', '4'],
                            ['5', '5'],
                            ['6', '6']
                        ]
                    },
                    {
                        type: 'input_value',
                        name: 'ANGLE',
                        min: 0,
                        max: 180,
                        precision: 1,
                        check: 'Number'
                    }
                ],
                colour: '#FF0000',
                extensions: ['shape_statement']
            });
        }
    };

    Blockly.Blocks.viaBanhMi_initMPU = {
        init: function () {
            this.jsonInit({
                message0: Blockly.Msg.VIABANHMI_INIT_MPU,
                args0: [
                    {
                        type: 'field_dropdown',
                        name: 'AR',
                        options: [
                            ['2G', 'MPU6050_RANGE_2_G'],
                            ['4G', 'MPU6050_RANGE_4_G'],
                            ['8G', 'MPU6050_RANGE_8_G'],
                            ['16G', 'MPU6050_RANGE_16_G']
                        ]
                    },
                    {
                        type: 'field_dropdown',
                        name: 'GR',
                        options: [
                            ['250°/s', 'MPU6050_RANGE_250_DEG'],
                            ['500°/s', 'MPU6050_RANGE_500_DEG'],
                            ['1000°/s', 'MPU6050_RANGE_1000_DEG'],
                            ['2000°/s', 'MPU6050_RANGE_2000_DEG']
                        ]
                    },
                    {
                        type: 'field_dropdown',
                        name: 'FB',
                        options: [
                            ['260Hz', 'MPU6050_BAND_260_HZ'],
                            ['184Hz', 'MPU6050_BAND_184_HZ'],
                            ['94Hz', 'MPU6050_BAND_94_HZ'],
                            ['44Hz', 'MPU6050_BAND_44_HZ'],
                            ['21Hz', 'MPU6050_BAND_21_HZ'],
                            ['10Hz', 'MPU6050_BAND_10_HZ'],
                            ['5Hz', 'MPU6050_BAND_5_HZ']
                        ]
                    }
                ],
                colour: '#0066CC',
                extensions: ['shape_statement']
            });
        }
    };

    Blockly.Blocks.viaBanhMi_mpuReadData = {
        init: function () {
            this.jsonInit({
                message0: Blockly.Msg.VIABANHMI_MPU_READ_DATA,
                colour: '#0066CC',
                extensions: ['shape_statement']
            });
        }
    };

    Blockly.Blocks.viaBanhMi_mpuAcceleration = {
        init: function() {
            this.jsonInit({
                message0: Blockly.Msg.VIABANHMI_ACCEL,
                args0: [
                    {
                        type: 'field_dropdown',
                        name: 'AXIS',
                        options: [
                            ['x', 'x'],
                            ['y', 'y'],
                            ['z', 'z']
                        ]
                    }
                ],
                colour: '#0066CC',
                extensions: ['output_number']
            });
        }
    };

    Blockly.Blocks.viaBanhMi_mpuGyro = {
        init: function() {
            this.jsonInit({
                message0: Blockly.Msg.VIABANHMI_GYRO,
                args0: [
                    {
                        type: 'field_dropdown',
                        name: 'AXIS',
                        options: [
                            ['x', 'x'],
                            ['y', 'y'],
                            ['z', 'z']
                        ]
                    }
                ],
                colour: '#0066CC',
                extensions: ['output_number']
            });
        }
    };

    Blockly.Blocks.viaBanhMi_mpuTemperature = {
        init: function() {
            this.jsonInit({
                message0: Blockly.Msg.VIABANHMI_TEMP,
                colour: '#0066CC',
                extensions: ['output_number']
            });
        }
    };

    return Blockly;
}

exports = registerBlocks;
