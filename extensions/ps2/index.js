const ps2 = formatMessage => ({
    name: formatMessage({
        id: 'ps2.name',
        default: 'PS2 Remote Control'
    }),
    extensionId: 'ps2',
    version: '1.0.0',
    supportDevice: ['arduinoUno', 'arduinoNano', 'arduinoLeonardo', 'arduinoMega2560', 'arduinoEsp32', 'arduinoEsp32C3', 'arduinoEsp8266', 'thingBot_esp32C3', 'thingBot_arduinoEsp32C3'],
    author: 'ArthurZheng',
    iconURL: `assets/ps2.png`,
    description: formatMessage({
        id: 'ps2.description',
        default: 'PS2 wireless remote controller with 4 signal lines.'
    }),
    featured: true,
    blocks: 'blocks.js',
    generator: 'generator.js',
    toolbox: 'toolbox.js',
    translations: 'translations.js',
    library: 'lib',
    official: true,
    tags: ['communication'],
    helpLink: 'https://wiki.openblock.cc'
});

module.exports = ps2;
