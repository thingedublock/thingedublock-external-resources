/* eslint-disable func-style */
/* eslint-disable max-len */
/* eslint-disable require-jsdoc */
function registerToolboxs() {

    return `
<category name="%{BKY_COBOTC3_CATEGORY}" id="COBOTC3_CATEGORY" colour="#42CCFF" secondaryColour="#42CCFF">
    <block type="coBotC3_pwmInit" id="coBotC3_pwmInit"></block>
    <block type="coBotC3_motorInit" id="coBotC3_motorInit"></block>
    <block type="coBotC3_setMotor" id="coBotC3_setMotor">
        <field name="DIRECTION">forward</field>
    </block>
    <block type="coBotC3_lineSensorInit" id="coBotC3_lineSensorInit"></block>
    <block type="coBotC3_lineSensorState" id="coBotC3_lineSensorState"></block>
    <block type="coBotC3_lineSensorValue" id="coBotC3_lineSensorValue"></block>
</category>
`;

}

exports = registerToolboxs;
