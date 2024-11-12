/* eslint-disable func-style */
/* eslint-disable max-len */
/* eslint-disable require-jsdoc */
function registerToolboxs () {
    return `
<category name="%{BKY_THING_CATEGORY}" id="THING_CATEGORY" colour="#FF3399" secondaryColour="#C71585">
    <block type="thing_init" id="thing_init"></block>
    <block type="thing_setMotor" id="thing_setMotor">
        <field name="DIRECTION">forward</field>
    </block>
    <block type="thing_buzzer" id="thing_buzzer">
        <value name="SOUND">
            <shadow type="math_number">
                <field name="NUM">0</field>
            </shadow>
        </value>
    </block>
    <block type="thing_stopBuzzer" id="thing_stopBuzzer"></block>
    <block type="thing_setLed" id="thing_setLed">
        <field name="LED">left_led</field>
        <field name="STATE">on</field>
    </block>
</category>`;
}

exports = registerToolboxs;
