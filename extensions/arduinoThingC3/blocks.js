/* eslint-disable func-style */
/* eslint-disable max-len */
/* eslint-disable require-jsdoc */
function registerBlocks (Blockly) {
    const color = '#FF3399';
    const secondaryColour = '#C71585';

    Blockly.Blocks.thing_init = {
        init: function () {
            this.jsonInit({
                message0: Blockly.Msg.THING_INIT,
                colour: '#5d3beb',
                extensions: ['shape_statement']
            });
        }
    };
    Blockly.Blocks.thing_setMotor = {
        init: function () {
            this.jsonInit({
                message0: Blockly.Msg.THING_SET_MOTOR,
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
                colour: '#2e7ee4',
                extensions: ['shape_statement']
            });
        }
    };
    Blockly.Blocks.thing_buzzer = {
        init: function () {
            this.jsonInit({
                message0: Blockly.Msg.THING_BUZZER,
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
                colour: "#dc356f",
                extensions: ['shape_statement']
            });
        }
    };
    Blockly.Blocks.thing_setLed = {
        init: function () {
            this.jsonInit({
                message0: Blockly.Msg.THING_SET_LED,
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
                colour: '#884db0',
                extensions: ['shape_statement']
            });
        }
    };


    return Blockly
}

exports = registerBlocks;
