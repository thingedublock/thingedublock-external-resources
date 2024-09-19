/* eslint-disable func-style */
/* eslint-disable max-len */
/* eslint-disable require-jsdoc */
function registerBlocks(Blockly) {
    const color = '#000080';
    const secondaryColor = '#FF4D6A';

    Blockly.Blocks.coBotC3_pwmInit = {
        init: function () {
            this.jsonInit({
                message0: Blockly.Msg.COBOTC3_PWM_INIT,
                colour: color,
                secondaryColour: secondaryColor,
                extensions: ['shape_statement']
            });
        }
    };
    Blockly.Blocks.coBotC3_motorInit = {
        init: function () {
            this.jsonInit({
                message0: Blockly.Msg.COBOTC3_MOTOR_INIT,
                colour: '#FF0000',
                extensions: ['shape_statement']
            });
        }
    };
    Blockly.Blocks.coBotC3_setMotor = {
        init: function () {
            this.jsonInit({
                message0: Blockly.Msg.COBOTC3_SET_MOTOR,
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
                colour: '#FF0000',
                extensions: ['shape_statement']
            });
        }
    };
    Blockly.Blocks.coBotC3_lineSensorInit = {
        init: function () {
            this.jsonInit({
                message0: Blockly.Msg.COBOTC3_LINE_SENSOR_INIT,
                colour: "#000000",
                extensions: ['shape_statement']
            });
        }
    };
    Blockly.Blocks.coBotC3_lineSensorState = {
        init: function () {
            this.jsonInit({
                message0: Blockly.Msg.COBOTC3_LINE_SENSOR_STATE,
                colour: '#000000',
                extensions: ['shape_statement']
            });
        }
    };
    Blockly.Blocks.coBotC3_lineSensorValue = {
        init: function () {
            this.jsonInit({
                message0: Blockly.Msg.COBOTC3_LINE_SENSOR_VALUE,
                colour: '#000000',
                extensions: ['output_number']
            });
        }
    };

    return Blockly;
}

exports = registerBlocks;
