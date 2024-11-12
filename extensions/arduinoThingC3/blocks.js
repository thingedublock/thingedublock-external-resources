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
                        name: 'DIRECTION',
                        options: [
                            ['forward', 'forward'],
                            ['backward', 'backward'],
                            ['left', 'left'],
                            ['right', 'right'],
                            ['stop', 'stop']
                        ]
                    },
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
                        name: 'SOUND'
                    },
                ],
                colour: "#dc356f",
                extensions: ['shape_statement']
            });
        }
    };
    Blockly.Blocks.thing_stopBuzzer = {
        init: function () {
            this.jsonInit({
                message0: Blockly.Msg.THING_STOP_BUZZER,
                colour: '#dc356f',
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
                            ['left', 'left_led'],
                            ['right', 'right_led'],
                        ]
                    },
                    {
                        type: 'field_dropdown',
                        name: 'STATE',
                        options: [
                            ['on', 'on'],
                            ['off', 'off']
                        ]
                    },
                    
                ],
                colour: '#884db0',
                extensions: ['shape_statement']
            });
        }
    };


    return Blockly
}

exports = registerBlocks;
