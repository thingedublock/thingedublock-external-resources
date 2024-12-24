/* eslint-disable */

function registerBlocks(Blockly) {
    const color = '#009933';
    const actuatorColor = '#cc0000';
    const electronicColor = '#6600ff';

    Blockly.Blocks.thingBotC3_init = {
        init: function () {
            this.jsonInit({
                message0: Blockly.Msg.THINGBOTC3_INIT,
                colour: color,
                extensions: ['shape_statement']
            });
        }
    };

    Blockly.Blocks.thingBotC3_setMotor = {
        init: function () {
            this.jsonInit({
                message0: Blockly.Msg.THINGBOTC3_SET_MOTOR,
                args0: [
                    {
                        type: 'field_dropdown',
                        name: 'MOTOR',
                        options: [
                            ['M1', '1'],
                            ['M2', '2'],
                            ['M3', '3'],
                            ['M4', '4'],
                        ]
                    },
                    {
                        type: 'field_dropdown',
                        name: 'DIRECTION',
                        options: [
                            ['forward', 'forward'],
                            ['backward', 'backward'],
                        ]
                    },
                    {
                        type: 'input_value',
                        name: 'SPEED',
                        min: 0,
                        max: 100,
                        precision: 1,
                        check: 'Number'
                    }
                ],
                colour: actuatorColor,
                extensions: ['shape_statement'],
            });
        }
    };

    Blockly.Blocks.thingBotC3_setServo = {
        init: function () {
            this.jsonInit({
                message0: Blockly.Msg.THINGBOTC3_SET_SERVO,
                args0: [
                    {
                        type: 'field_dropdown',
                        name: 'SERVO',
                        options: [
                            ['S1', '1'],
                            ['S2', '2'],
                            ['S3', '3'],
                            ['S4', '4'],
                            ['S5', '5'],
                        ]
                    },
                    {
                        type: 'input_value',
                        name: 'PULSE',
                        min: 0,
                        max: 4000,
                        precision: 1,
                        check: 'Number'
                    }
                ],
                colour: actuatorColor,
                extensions: ['shape_statement']
            });
        }
    };

    Blockly.Blocks.thingBotC3_buzzer = {
        init: function () {
            this.jsonInit({
                message0: Blockly.Msg.THINGBOTC3_BUZZER,
                args0: [
                    {
                        type: 'input_value',
                        name: 'SOUND',
                        min: 0,
                        max: 4096,
                        precision: 1,
                        check: 'Number'
                    },
                ],
                colour: electronicColor,
                extensions: ['shape_statement']
            });
        }
    };

    Blockly.Blocks.thingBotC3_setLed = {
        init: function () {
            this.jsonInit({
                message0: Blockly.Msg.THINGBOTC3_SET_LED,
                args0: [
                    {
                        type: 'field_dropdown',
                        name: 'LED',
                        options: [
                            ['1', 'LED_1'],
                            ['2', 'LED_2'],
                        ]
                    },
                    {
                        type: 'input_value',
                        name: 'BRIGHTNESS',
                        min: 0,
                        max: 4096,
                        precision: 1,
                        check: 'Number'
                    }

                ],
                colour: electronicColor,
                extensions: ['shape_statement']
            });
        }
    };

    Blockly.Blocks.thingBotC3_initPS2 = {
        init: function () {
            this.jsonInit({
                message0: Blockly.Msg.THINGBOTC3_INIT_PS2,
                colour: '#FF3399', // PS2 Lib color
                extensions: ['shape_statement']
            });
        }
    };

    Blockly.Blocks.thingBotC3_switch = {
        init: function () {
            this.jsonInit({
                message0: Blockly.Msg.THINGBOTC3_SWITCH,
                colour: electronicColor,
                extensions: ['output_boolean']
            });
        }
    };

    return Blockly;
}

exports = registerBlocks;
