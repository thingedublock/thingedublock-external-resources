/* eslint-disable */

function registerBlocks(Blockly) {
    const color = '#000080';
    const secondaryColor = '#FF4D6A';

    Blockly.Blocks.thingBotC3_motorInit = {
        init: function () {
            this.jsonInit({
                message0: Blockly.Msg.THINGBOTC3_MOTOR_INIT,
                colour: color,
                secondaryColour: secondaryColor,
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
                colour: '#FF0000',
                extensions: ['shape_statement']
            });
        }
    };

    return Blockly;
}

exports = registerBlocks;
