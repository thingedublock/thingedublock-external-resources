const meo_block = formatMessage => ({
    name: formatMessage({
        id: 'meo_block.name',
        default: 'MEO3 Module'
    }),
    extensionId: 'meo_block',
    version: '1.0.0',
    supportDevice: ['arduinoEsp32', 'arduinoEsp32C3', 'thingBot_esp32C3', 'thingBot_arduinoEsp32C3'],
    author: 'undo1111hp',
    iconURL: `assets/meo-block.png`,
    description: formatMessage({
        id: 'meo_block.description',
        default: 'MEO3 Module.'
    }),
    featured: true,
    blocks: 'blocks.js',
    generator: 'generator.js',
    toolbox: 'toolbox.js',
    translations: 'translations.js',
    library: 'lib',
    official: true,
    tags: ['communication'],
    helpLink: 'https://github.com/MEO-3/meo-block'
});

module.exports = meo_block;