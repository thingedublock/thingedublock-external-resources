/*eslint-disable */

function registerToolboxs() {

    return `
<category name="%{BKY_THINGBOTC3_CATEGORY}" id="THINGBOTC3_CATEGORY" colour="#42CCFF" secondaryColour="#42CCFF">
    <block type="thingBotC3_motorInit" id="thingBotC3_motorInit"></block>
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
</category>
`;

}

exports = registerToolboxs;
