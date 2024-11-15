/* eslint-disable func-style */
/* eslint-disable max-len */
/* eslint-disable require-jsdoc */
function registerToolboxs () {
    return `
<category name="%{BKY_MEO_CATEGORY}" id="MEO_CATEGORY" colour="#FF3399" secondaryColour="#C71585">
    <block type="meo_wificonfig" id="meo_wificonfig">
        <value name="SSID">
            <shadow type="text">
                <field name="TEXT">SSID</field>
            </shadow>
        </value>
        <value name="PASSWORD">
            <shadow type="text">
                <field name="TEXT">PASSWORD</field>
            </shadow>
        </value>
    </block>
    <block type="meo_mqttconfig" id="meo_mqttconfig">
        <value name="SERVER">
            <shadow type="text">
                <field name="TEXT">SERVER</field>
            </shadow>
        </value>
        <value name="PORT">
            <shadow type="math_number">
                <field name="NUM">PORT</field>
            </shadow>
        </value>
    </block>
    <block type="meo_finalconfig" id="meo_finalconfig"></block>
    <block type="meo_checkwifi" id="meo_checkwifi"></block>
    <block type="meo_wifireconnect" id="meo_wifireconnect"></block>
    <block type="meo_mqttpublish" id="meo_mqttpublish">
        <value name="MESSAGE">
            <shadow type="text">
                <field name="TEXT">MESSAGE</field>
            </shadow>
        </value>
        <value name="TOPIC">
            <shadow type="text">
                <field name="TEXT">TOPIC</field>
            </shadow>
        </value>
    </block>
</category>`;
}

exports = registerToolboxs;
