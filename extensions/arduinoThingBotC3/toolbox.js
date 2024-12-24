/*eslint-disable */

function registerToolboxs() {

    return `
<category name="%{BKY_THINGBOTC3_CATEGORY}" id="THINGBOTC3_CATEGORY" colour="#42CCFF" secondaryColour="#42CCFF">
    <block type="thingBotC3_init" id="thingBotC3_init"></block>
    <block type="thingBotC3_setMotor" id="thingBotC3_setMotor">
        <field name="MOTOR">1</field>
        <field name="DIRECTION">forward</field>
        <value name="SPEED">
            <shadow type="math_number" id="math_number">
                <field name="NUM">0</field>
            </shadow>
        </value>
    </block>
    <block type="thingBotC3_setServo" id="thingBotC3_setServo">
        <field name="SERVO">1</field>
        <value name="PULSE">
            <shadow type="math_number" id="math_number">
                <field name="NUM">0</field>
            </shadow>
        </value>
    </block>
    <block type="thingBotC3_buzzer" id="thingBotC3_buzzer">
        <value name="SOUND">
            <shadow type="math_number">
                <field name="NUM">0</field>
            </shadow>
        </value>
    </block>
    <block type="thingBotC3_setLed" id="thingBotC3_setLed">
        <field name="LED">LED_1</field>
        <value name="BRIGHTNESS">
            <shadow type="math_number" id="math_number">
                <field name="NUM">0</field>
            </shadow>
        </value>
    </block>
    <block type="thingBotC3_initPS2" id="thingBotC3_initPS2"></block>
    <block type="thingBotC3_switch" id="thingBotC3_switch"></block>
</category>`;

}

exports = registerToolboxs;
