/* eslint-disable */

const arduinoThingBotC3 = () => ({
    name: 'ThingBot',
    extensionId: 'arduinoThingBotC3',
    version: '1.0.0',
    supportDevice: ['thingBot_esp32C3', 'thingBot_arduinoEsp32C3'],
    author: 'MakerViet - ThingEdu',
    blocks: 'blocks.js',
    generator: 'generator.js',
    toolbox: 'toolbox.js',
    translations: 'translations.js',
    hide: true,
    library: 'lib',
    helpLink: ''
})

module.exports = arduinoThingBotC3;