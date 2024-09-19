/* eslint-disable func-style */
/* eslint-disable max-len */
/* eslint-disable require-jsdoc */
function registerToolboxs() {

    return `
<category name="%{BKY_VIABANHMI_CATEGORY}" id="VIABANHMI_CATEGORY" colour="#42CCFF" secondaryColour="#42CCFF">
    <block type="viaBanhMi_pwmInit" id="viaBanhMi_pwmInit"></block>
    <block type="viaBanhMi_setMotor" id="viaBanhMi_setMotor">
        <field name="MOTOR">1</field>
        <field name="DIRECTION">forward</field>
        <value name="SPEED">
            <shadow type="math_number" id="math_number">
                <field name="NUM">0</field>
            </shadow>
        </value>
    </block>
    <block type="viaBanhMi_setServo" id="viaBanhMi_setServo">
    <field name="SERVO">1</field>
        <value name="ANGLE">
            <shadow type="math_number" id="math_number">
                <field name="NUM">90</field>
            </shadow>
        </value>
    </block>
    <block type="viaBanhMi_initMPU" id="viaBanhMi_initMPU">
        <field name="AR">MPU6050_RANGE_8_G</field>
        <field name="GR">MPU6050_RANGE_500_DEG</field>
        <field name="FB">MPU6050_BAND_21_HZ</field>
    </block>
    <block type="viaBanhMi_mpuReadData" id="viaBanhMi_mpuReadData"></block>
    <block type="viaBanhMi_mpuAcceleration" id="viaBanhMi_mpuAcceleration"></block>
    <block type="viaBanhMi_mpuGyro" id="viaBanhMi_mpuGyro"></block>
    <block type="viaBanhMi_mpuTemperature" id="mpu6050_temperature"></block>
</category>
`;

}

exports = registerToolboxs;
